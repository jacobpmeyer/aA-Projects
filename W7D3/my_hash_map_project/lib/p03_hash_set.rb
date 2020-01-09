require "byebug"

class HashSet
  attr_reader :count

  def initialize(num_buckets = 8)
    @store = Array.new(num_buckets) { Array.new }
    @count = 0
  end

  def insert(key)
    resize! if (self.count + 1) > num_buckets
    # debugger
    num = key.hash

    unless self.include?(num)
      self[num] << num
      @count += 1
    end

  end

  def include?(key)
    num = key.hash
    self[num].include?(num)
  end

  def remove(key)
    if self.include?(key)
      num = key.hash
      self[num].delete(num)
      @count -= 1
    end
  end

  private

  def [](num)
    # optional but useful; return the bucket corresponding to `num`
    @store[num % num_buckets] 
  end

  def num_buckets
    @store.length
  end

  def resize!
    temp_bucket = @store.dup.flatten
    @count = 0
    temp_bucket.each { |ele|self.insert(ele) }
  end
end
