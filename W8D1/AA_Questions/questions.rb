require 'sqlite3'
require 'singleton'

class QuestionsDB < SQLite3::Database
  include Singleton

  def initialize
    super('questions.db')
    self.type_translation = true
    self.results_as_hash = true
  end
end

class Question

  attr_accessor :id, :title, :body, :user_id

  def self.find_by_id(id)
    data = QuestionsDB.instance.execute(<<-SQL, id)
      SELECT
        *
      FROM
        questions
      WHERE
        questions.id = ?;
    SQL
    
    data.map { |ele| Question.new(ele) }

  end

    def self.find_by_author_id(id)
      data = QuestionsDB.instance.execute(<<-SQL, id)
        SELECT
          *
        FROM
          questions
        WHERE
          questions.user_id = ?;
      SQL

      data.map { |ele| Question.new(ele) }
    end

    def self.most_followed(n)
      QuestionFollow.most_followed_questions(n)
    end

    def self.most_liked(n)
      QuestionLike.most_liked_questions(n)
    end

  def initialize(options)
    @id = options['id']
    @title = options['title']
    @body = options['body']
    @user_id = options['user_id']
  end

  def author
    data = QuestionsDB.instance.execute(<<-SQL, self.user_id)

      SELECT
        *
      FROM
        users
      WHERE
        users.id = ?

    SQL

    data.map { |ele| User.new(ele) }
  end

  def replies
    Reply.find_by_question_id(self.id)
  end

  def followers
    QuestionFollow.followers_for_question_id(self.id)
  end

  def likers
    QuestionLike.likers_for_question_id(self.id)
  end

  def num_likes
    QuestionLike.num_likes_for_question_id(self.id)
  end
end

class User
  attr_accessor :id, :fname, :lname
  def self.find_by_id(id)
    data = QuestionsDB.instance.execute(<<-SQL, id)
      SELECT
        *
      FROM
        users
      WHERE
        users.id = ?;
    SQL
    data.map { |ele| User.new(ele) }
  end

  def self.find_by_name(fname, lname)
    data = QuestionsDB.instance.execute(<<-SQL, fname, lname)
      SELECT
        *
      FROM
        users
      WHERE
        users.fname = ? AND users.lname = ?
    SQL
    data.map { |ele| User.new(ele) }
  end

  def initialize(options)
    @id = options['id']
    @fname = options['fname']
    @lname = options['lname']
  end

  def authored_questions
    Question.find_by_author_id(self.id)
  end

  def authored_replies
    Reply.find_by_user_id(self.id)
  end

  def followed_questions
    QuestionFollow.followed_questions_for_user_id(self.id)
  end

  def liked_questions
    QuestionLike.liked_questions_for_user_id(self.id)
  end

  def average_karma
    data = QuestionsDB.instance.execute(<<-SQL, self.id)
      SELECT
        CAST(COUNT(DISTINCT(questions.id)) AS FLOAT) / COUNT(question_likes.id)
      FROM
        questions
      LEFT OUTER JOIN
        question_likes ON questions.id = question_likes.question_id
      WHERE 
        questions.user_id = ?
  end

end

class Reply

  attr_accessor :id, :question_id, :parent_reply_id, :user_id, :body

  def self.find_by_id(id)
    data = QuestionsDB.instance.execute(<<-SQL, id)
      SELECT
        *
      FROM
        replies
      WHERE
        replies.id = ?;
    SQL
    data.map { |ele| Reply.new(ele) }
  end

  def self.find_by_user_id(id)
    data = QuestionsDB.instance.execute(<<-SQL, id)
      SELECT
        *
      FROM
        replies
      WHERE
        replies.user_id = ?;
    SQL

    data.map { |ele| Reply.new(ele) }
  end

  def self.find_by_question_id(id)
    data = QuestionsDB.instance.execute(<<-SQL, id)
      SELECT
        *
      FROM
        replies
      WHERE
        replies.question_id = ?;
    SQL
    data.map { |ele| Reply.new(ele) }
  end

  def initialize(options)
    @id = options['id']
    @question_id = options['question_id']
    @parent_reply_id = options['parent_reply_id']
    @user_id = options['user_id']
    @body = options['body']
  end

  def author
    data = QuestionsDB.instance.execute(<<-SQL, self.user_id)
      SELECT
        *
      FROM
        users
      WHERE
        users.id = ?
    SQL

    data.map { |ele| User.new(ele) }
  end

  def question
    data = QuestionsDB.instance.execute(<<-SQL, self.question_id)
      SELECT
        *
      FROM
        questions
      WHERE
        questions.id = ?;
    SQL

    data.map { |ele| Question.new(ele) }
  end

  def parent_reply
    data = QuestionsDB.instance.execute(<<-SQL, self.parent_reply_id)
      SELECT
        *
      FROM
        replies
      WHERE
        replies.id = ?;
    SQL

    data.map { |ele| Reply.new(ele) }
  end

  def child_replies
    data = QuestionsDB.instance.execute(<<-SQL, self.id)
      SELECT
        *
      FROM
        replies
      WHERE
        replies.parent_reply_id = ?
      LIMIT 
        1;
    SQL

    data.map { |ele| Reply.new(ele) }
  end
  
end

class QuestionLike

  attr_accessor :id, :user_id, :quesion_id
  
  def self.find_by_id(id)
    data = QuestionsDB.instance.execute(<<-SQL, id)
      SELECT
        *
      FROM
        question_likes
      WHERE
        question_likes.id = ?;
    SQL
    data.map { |ele| QuestionLike.new(ele) }
  end

  def self.likers_for_question_id(question_id)

    data = QuestionsDB.instance.execute(<<-SQL, question_id)
      SELECT
        users.*
      FROM
        users       
      JOIN
        question_likes ON question_likes.user_id = users.id
      WHERE
        question_likes.question_id = ?;
    SQL

    data.map { |ele| User.new(ele) }

  end

  def self.num_likes_for_question_id(question_id)

    data = QuestionsDB.instance.execute(<<-SQL, question_id)
      SELECT
        COUNT(*)
      FROM
        users     
      JOIN
        question_likes ON question_likes.user_id = users.id
      WHERE
        question_likes.question_id = ?;
    SQL

    data
  end

  def self.liked_questions_for_user_id(user_id)
    data = QuestionsDB.instance.execute(<<-SQL, user_id)
      SELECT
        questions.*
      FROM
        questions   
      JOIN
        question_likes ON question_likes.question_id = questions.id
      WHERE
        question_likes.user_id = ?;
    SQL

    data.map { |ele| Question.new(ele) }
  end

  def self.most_liked_questions(n)
    data = QuestionsDB.instance.execute(<<-SQL, n)
      SELECT
        questions.*
      FROM
        questions
      JOIN
        question_likes ON question_likes.question_id = questions.id
      GROUP BY
        questions.id
      ORDER BY
        COUNT(*) DESC
      LIMIT
        ?;
    SQL
  end

  def initialize(options)
    @id = options['id']
    @user_id = options['user_id']
    @quesion_id = options['question_id']
  end
end

class QuestionFollow

  attr_accessor :id, :user_id, :quesion_id
  
  def self.find_by_id(id)
    data = QuestionsDB.instance.execute(<<-SQL, id)
      SELECT
        *
      FROM
        question_follows
      WHERE
        question_follows.id = ?;
    SQL
    data.map { |ele| QuestionFollow.new(ele) }
  end

  def self.followers_for_question_id(question_id)

    data = QuestionsDB.instance.execute(<<-SQL, question_id)
      SELECT
        users.*
      FROM
        users
      JOIN
        question_follows
      ON
        users.id = question_follows.user_id
      WHERE
        question_follows.question_id = ?
    SQL

    data.map { |ele| User.new(ele) }

  end

  def self.followed_questions_for_user_id(user_id)
    data = QuestionsDB.instance.execute(<<-SQL, user_id)
      SELECT
        questions.*
      FROM
        questions
      JOIN
        question_follows ON question_follows.question_id = questions.id
      WHERE
        question_follows.user_id = ?
    SQL
    data.map { |ele| Question.new(ele) }
  end

  def self.most_followed_questions(n)

    data = QuestionsDB.instance.execute(<<-SQL, n)
      SELECT
        questions.*
      FROM
        questions
      JOIN
        question_follows ON question_follows.question_id = questions.id
      GROUP BY
        questions.id
      ORDER BY
        COUNT(*) DESC
      LIMIT
        ?;
    SQL

    data.map { |ele| Question.new(ele) }

  end

  def initialize(options)
    @id = options['id']
    @user_id = options['user_id']
    @quesion_id = options['question_id']
  end
end