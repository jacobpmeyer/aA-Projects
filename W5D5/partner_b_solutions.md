```ruby
def binary_search(arr, target)
  return nil if arr.empty?

  midpoint = arr.length / 2
  case target <=> arr[midpoint]
  when -1
    binary_search(arr[0...midpoint], target)
  when 0
    midpoint
  when 1
    subproblem_answer = binary_search(arr[(midpoint + 1)..-1], target)
    (subproblem_answer.nil?) ? nil : (midpoint + 1) + subproblem_answer
  end
end


class Array
  def my_each(&blk)
    i = 0
    while i < length
      blk.call(self[i])
      i += 1
    end
    self
  end

  def dups
    positions = Hash.new { |h, k| h[k] = [] }

    each_with_index do |item, index|
      positions[item] << index
    end

    positions.select { |key, val| val.count > 1 }
  end
end


def factorials_rec(num)
  if num == 1
    [1]
  else
    facs = factorials_rec(num - 1)
    facs << facs.last * (num - 1)
    facs
  end
end


def digital_root(num)
  while num > 10
    num = digital_root_step(num)
  end

  num
end

def digital_root_step(num)
  root = 0
  while num > 0
    root += (num % 10)

    num /= 10
  end

  root
end


def prime?(num)
  (2...num).none? { |factor| num % factor == 0 }
end

def largest_prime_factor(num)
  num.downto(2) do |factor|
    if (num % factor).zero?
      return factor if prime?(factor)
    end
  end

  nil
end



def jumble_sort(str, alphabet = nil)
  alphabet ||= ('a'..'z').to_a

  sorted = false
  until sorted
    sorted = true

    str.length.times do |i|
      break if i == (str.length - 1)
      if alphabet.index(str[i]) > alphabet.index(str[i + 1])
        str[i], str[i + 1] = str[i + 1], str[i]
        sorted = false
      end
    end
  end

  str
end

# Alternately:
#
# def jumble_sort(str, alphabet = nil)
#   alphabet ||= ('a'..'z').to_a
#
#   sorted_chars = str.chars.sort do |chr1, chr2|
#     alphabet.index(chr1) <=> alphabet.index(chr2)
#   end
#
#   sorted_chars.join
# end
```