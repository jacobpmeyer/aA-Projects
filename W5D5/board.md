<!-- merge-sort -->

class Array
  def merge_sort(&prc)
    prc ||= { |i,j| i <=> j }

    case self.length
    when 0..1
      self
    else
      sorted_first = self[0...self.length/2].merge_sort(prc)
      sorted_second = self[self.length/2..-1].merge_sort(prc)

      sorted = []

      until sorted_first.empty? || sorted_second.empty?
        if prc.call(sorted_first[0], sorted_second[0]) == -1
          sorted << sorted_first.shift
        else
          sorted << sorted_second.shift
        end
      end

      sorted + sorted_first + sorted_second
    end

  end
end

<!-- BSearch -->

def bsearch(array, target) #target == 2

  return nil if array.empty?

  mid = array.length / 2 # 1
  pivot = array[mid] # 1

  case target <=> pivot
  when -1
    bsearch(array[0...mid], target)
  when 0 
    return mid
  when 1
    result = bsearch(array[mid + 1..-1], target)
    result.nil? ? return nil : return mid + 1 + result
  end
end


[0, 1, 2]


<!-- MonkeyPatching -->
<!-- Array Flatten to n=1 -->
class Array
  def flatten(n=nil)
    if n.nil?
      flattened = []
      self.each { |ele| ele.is_a?(Array) ? flattened.concat(ele.flatten) : flattened << ele }
      return flattened
    elsif n == 0
      return self
    else
      flattened = []
      self.each { |ele| ele.is_a?(Array) ? flattened.concat(ele.flatten(n-1)) : flattened << ele }
      return flattened
    end
  end

  def my_each(&prc)
    i = 0
    while i < self.length
      prc.call(self[i])
      i += 1
    end
    self
  end

  def dupes
    dupes_hash = Hash.new { |h, k| h[k] = [] }
    dupes_hash = { 1 => [0, 1] }
    self.each_with_index do |ele, i|
      dupes_hash[ele] << i
    end

    dupes_hash.select { |_, indices| indices.length > 1 }
  end


end

[1, 1]

{1 => [0, 1]}

[1,2,3].reduce(4, :+)
=> 10

[1,2,3].reduce(:+, 4) #error


module Enumerable
  def my_reduce(*args, &blck)
    case args.length
    when 0
      raise "no block given" if blck.nil?
      memo = self[0]
      self[1..-1].each { |ele| memo = blck.call(memo,ele) }
    when 1
      if args[0].is_a?(Symbol)
        iter = args[0].to_proc
        memo = self[0]
        self[1..-1].each { |ele| memo = iter.call(memo,ele) }
      else
        memo = args[0]
        self.each { |ele| memo = blck.call(memo,ele) }
      end
    when 2
      raise "#{args[1]} must be a symbol or string" unless args[1].is_a?(Symbol) || args[1].is_a?(String)
      iter = args[1].is_a?(Symbol) ? args[1].to_proc : args[1].to_sym.to_proc
      memo = args[0]
      self.each { |ele| memo = iter.call(memo,ele) }
    else
      raise ArgumentError.new("#{args.length} arguments given, expected 0..2")
    end

    memo
  end
end


<!-- whadowegot -->
<!-- Shuffle The Sentences -->
<!-- true if words in str can be shuffled to become the passed str2, false otherwise -->

class String

  def shuffleable?(str)
    return false unless str.length == self.length
    self.chars { |chr|
      mark = str.index(chr)
      str[mark] = "" unless mark.nil?
    }
    return true if str.length == 0
    return false
  end
end

"cats are cool".("dog") => false

def factorials(n)
  return [] if n == 0
  return [1] if n == 1

  facs = factorials(n - 1)
  facs << facs.last * (n - 1)
end

3


factorials(4) => [1,1,2,6]
0! = 1
1! = 1
2! = 2
3! = 6


def fibonacci(n)
  fibs = [0,1]
  return [0] if n == 1
  return fibs[0...n] if n <= 2
  
  last_fib = fibonacci(n-1)

  last_fib << (last_fib[-1] + last_fib[-2]) 
end

n=1 
=> [0]

n=2
fibs=[0,1]
=> [0,1]

n=3
fibs=[0,1]
last_fib = [0,1]
last_fib = [0,1,1]
=> [0,1,1]

<!--  -->

def digital_root(num)
  root = num
  until root < 10
    root = helper(root)
  end
  root
end

def helper(num)
  div = num / 10
  mod = num % 10
  div + mod
end

digital_root(4322)

<!-- returns lagest prime factor of a number -->
def largest_prime_factor(num)
  i = num
  while i > 1
    return i if prime?(i) && num % i == 0
    i -= 1
  end
  num
end

def prime?(num)
  return false if num < 2

  (2...num).none? { |i| num % i == 0 }
end

def jumble_sort(str, alphabet = nil)
  alphabet ||= ("a".."z").to_a
  new_str = ""
  alphabet.each do |letter|
    str.each_char do |char|
      new_str += char if char == letter
    end
  end
  new_str
end

str = potato
alpha = nil