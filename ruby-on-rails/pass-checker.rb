def check_strength(password)
  score = 0
  score += 1 if password.length >= 8
  score += 1 if password =~ /[A-Z]/
  score += 1 if password =~ /[a-z]/
  score += 1 if password =~ /[0-9]/
  score += 1 if password =~ /[^A-Za-z0-9]/

  strength =
    case score
    when 5
      "Strong 🟩"
    when 3..4
      "Moderate 🟨"
    else
      "Weak 🟥"
    end

  puts "Password Strength: #{strength}"
end

print "Enter Your Password: "
password = gets.chomp
check_strength(password)
