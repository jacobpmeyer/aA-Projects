PRAGMA foreign_keys = ON;

DROP TABLE question_likes;
DROP TABLE replies;
DROP TABLE question_follows;
DROP TABLE questions;
DROP TABLE users;

CREATE TABLE users (
  id INTEGER PRIMARY KEY,
  fname TEXT,
  lname TEXT
);

CREATE TABLE questions (
  id INTEGER PRIMARY KEY,
  title TEXT, 
  body TEXT,
  user_id INTEGER,

  FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE question_follows (
  id INTEGER PRIMARY KEY,
  user_id INTEGER,
  question_id INTEGER,

  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (question_id) REFERENCES questions(id)
);

CREATE TABLE replies (
  id INTEGER PRIMARY KEY,
  question_id INTEGER,
  parent_reply_id INTEGER,
  user_id INTEGER,
  body TEXT,

  FOREIGN KEY (question_id) REFERENCES questions(id),
  FOREIGN KEY (parent_reply_id) REFERENCES replies(id),
  FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE question_likes (
  id INTEGER PRIMARY KEY,
  user_id INTEGER,
  question_id INTEGER,

  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (question_id) REFERENCES questions(id)

);


INSERT INTO
  users (fname,lname)
VALUES
  ('Bill', 'Gates'),
  ('Steve', 'Jobs'),
  ('Linus', 'Torvalds');

INSERT INTO
  questions (title, body, user_id)
VALUES
  ('Year', 'What year is it?', 1 ),
  ('Coke or Pepsi', 'Do you prefer Coke or Pepsi?', 2),
  ('Which distro', 'which distro is best?', 1);

INSERT INTO
  question_follows (user_id, question_id)
VALUES
  (2, 1),
  (1, 2),
  (3, 1);

INSERT INTO 
  replies (question_id, parent_reply_id, user_id, body)
VALUES 
  (1, NULL, 1, '2020'),
  (2, NULL, 2, 'Coke');

INSERT INTO 
  question_likes (user_id, question_id)
VALUES  
  (2, 1),
  (1, 2),
  (3, 1);



