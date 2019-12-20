```rb
class Array
  def merge_sort(&prc)
    return self if count <= 1

    # I create a Proc if no block was given; this eliminates having to
    # later have two branches of logic, one for a block and one for no
    # block.
    prc ||= proc { |x, y| x <=> y }

    midpoint = count / 2
    sorted_left = self.take(midpoint).merge_sort(&prc)
    sorted_right = self.drop(midpoint).merge_sort(&prc)

    self.class.merge(sorted_left, sorted_right, &prc)
  end

  private
  def self.merge(left, right, &prc)
    merged = []

    until left.empty? || right.empty?
      case prc.call(left.first, right.first)
      when -1
        merged << left.shift
      when 0
        merged << left.shift
      when 1
        merged << right.shift
      end
    end

    merged.concat(left).concat(right)
  end
end

class Array
  def my_flatten(level = nil)
    duped = self.dup
    return duped if level == 0
    next_level = level ? level - 1 : nil

    each_with_index do |el, i|
      duped[i..i] = el.my_flatten(next_level) if el.is_a?(Array)
    end

    duped
  end
end

class Array
  def my_reduce(accumulator = nil, &block)
    i = 0
    if accumulator.nil?
      accumulator = self.first
      i += 1
    end

    while i < length
      accumulator = block.call(accumulator, self[i])
      i += 1
    end
    accumulator
  end
end

class String
  def shuffled_sentence_detector(other)
    self.split.sort == other.split.sort
  end
end

def fibs_rec(count)
  return [0, 1].take(count) if count <= 2

  first_fibs = fibs_rec(count - 1)
  next_fib = first_fibs[-1] + first_fibs[-2]
  first_fibs << next_fib

  first_fibs
end
