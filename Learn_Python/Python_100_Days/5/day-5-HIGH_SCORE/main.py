# Input a list of student scores
# input 78 65 89 86 55 91 64 89
student_scores = input().split()
for n in range(0, len(student_scores)):
    student_scores[n] = int(student_scores[n])

# Write your code below this row 👇
higher_score = 0
for score in student_scores:
    if score > higher_score:
        higher_score = score

print(f"The highest score in the class is: {higher_score}")
