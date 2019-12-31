require_relative "employee"
require "byebug"

class Manager < Employee

  def initialize(name,title,salary,boss)
    super(name,title,salary,boss)
    @subordinates = []
  end

  def subordinates_collective_salary
    subs = 0
    @subordinates.each { |sub|
      if sub.is_a?(Manager)
        subs += sub.subordinates_collective_salary
      end

      subs += sub.salary
    }
    subs
  end

  def bonus(multiplier)
    multiplier * subordinates_collective_salary
  end
end

ned = Manager.new("Ned", "Founder", 1000000, nil)
darren = Manager.new("Darren", "TA Manager", 78000, ned)
shawna = Employee.new("Shawna", "TA", 12000, darren)
david = Employee.new("David", "TA", 10000, darren)

p ned.bonus(5) # => 500_000
p darren.bonus(4) # => 88_000
p david.bonus(3) # => 30_000
