module Searchable
  def dfs(target = nil, &prc)
    prc ||= Proc.new { |a, b| a == b }
    return self if prc.call(self.value, target)
    self.children.each do |child|
      result = child.dfs(target, &prc)
      return result unless result.nil?
    end
    nil
  end

  def bfs(target = nil, &prc)
    prc ||= Proc.new { |a, b| a == b }
    queue = [self]
    until queue.empty?
      node = queue.shift
      return node if prc.call(node.value, target)
      queue.concat(node.children)
    end
    nil
  end
end

class PolyTreeNode
  attr_reader :value, :parent
  include Searchable
  
  def initialize(value)
    @value = value
    @parent = nil
    @children = []
  end

  def children
    @children.dup
  end

  def parent=(parent_node)
    self.parent._children.delete(self) unless self.parent.nil?
    @parent = parent_node
    self.parent._children << self unless parent_node.nil?
  end

  def add_child(node)
    node.parent = self
  end
  
  def remove_child(node)
    unless self.children.include?(node)
      raise ArgumentError("#{node} is not a child of #{self}")
    end
    node.parent = nil
  end

  protected
  def _children
    @children
  end

end