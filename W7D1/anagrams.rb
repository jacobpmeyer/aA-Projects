

def first_anagram?(str1, str2)
    perms = str1.split("").permutation.to_a
    perms.include?(str2)
end

def second_anagram?(str1, str2)
    str1.each_char do |char|
        if str2.include?(char)
            i = str2.index(char)
            str2[i] = ''
        else
            return false
        end
    end

    str2 == ''
end

def third_anagram?(str1, str2)
  str1.chars.sort == str2.chars.sort
end

# def fourth_anagram?(str1, str2)
#   hash1 = Hash.new(0)
#   hash2 = Hash.new(0)
#   str1.each_char { |char| hash1[char] += 1 }
#   str2.each_char { |char| hash2[char] += 1 }
#   hash1 == hash2
# end

# def bonus_anagram?(str1, str2)
#   hash = Hash.new(0)
#   str1.each_char { |char| hash[char] += 1 }
#   str2.each_char { |char| hash[char] -= 1 }
#   vals = hash.values
#   vals.all? { |ele| ele == 0 }
# end

def fourth_anagram?(str1, str2)
  helper(str1) == helper(str2)
end

def helper(str)
  hash = Hash.new(0)
  str.each_char { |char| hash[char] += 1 }
  hash
end
# Time complexity => O(n)

# p bonus_anagram?("gizmo", "sally")    #=> false
# p bonus_anagram?("elvis", "lives")    #=> true