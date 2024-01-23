# Input a Python list of student heights
student_heights = input().split()
for n in range(0, len(student_heights)):
    student_heights[n] = int(student_heights[n])
# 🚨 Don't change the code above 👆

# Write your code below this row 👇
total_height = 0
count_student = 0
avg_height = 0
for height in student_heights:
    total_height += height
    count_student += 1
avg_height = total_height / count_student
print(f"total height = {total_height}")
print(f"number of students = {count_student}")
print(f"average height = {round(avg_height)}")
