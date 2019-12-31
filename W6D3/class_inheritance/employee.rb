class Employee
  def initialize(name,title,salary,boss)
    @name, @title, @salary, @boss = name, title, salary, boss
    boss.set_employee(self) unless boss.nil?
  end

  def set_employee(employee)
    @subordinates << employee
  end

  def bonus(multiplier)
    @salary * multiplier
  end

  def salary
    @salary.dup
  end
end