// students with grades above 80 [{name: "John", grade: 75}, {name: "Jane", grade: 85}] => [{name: "Jane", grade: 85}]
const filterHighGrades = function (students) {
  return students.filter(function (student) { return student.grade > 80; });
};

// console.log(filterHighGrades([{ name: "John", grade: 75 }, { name: "Jane", grade: 85 }]));

// students who passed all subjects [{name: "John", subjects: [{name: "Math", passed: true}, {name: "Science", passed: true}]}, {name: "Jane", subjects: [{name: "Math", passed: false}, {name: "Science", passed: true}]}] => [{name: "John", subjects: [{name: "Math", passed: true}, {name: "Science", passed: true}]}]
const filterStudentsWithAllSubjectsPassed = function (students) {

  return students.filter(function (student) {
    return student.subjects.every(function (element) { return element.passed; });
  });

};

// console.log(filterStudentsWithAllSubjectsPassed([{ name: "John", subjects: [{ name: "Math", passed: true }, { name: "Science", passed: true }] }, { name: "Jane", subjects: [{ name: "Math", passed: false }, { name: "Science", passed: true }] }]));

// filter students who scored above a certain grade in Math [{name: "John", grades: {math: 80, science: 90}}, {name: "Jane", grades: {math: 70, science: 85}}] => [{name: "John", grades: {math: 80, science: 90}}]
const filterByMathGrade = function (students, grade) {
  return students.filter(function (student) {
    return student.grades.math > grade;
  });
};

// console.log(filterByMathGrade([{ name: "John", grades: { math: 80, science: 90 } }, { name: "Jane", grades: { math: 70, science: 85 } }], 70));

// filter students with a grade higher than a given threshold in a specific subject [{name: "Alice", grades: {math: 90, science: 80}}, {name: "Bob", grades: {math: 70, science: 85}}] => [{name: "Alice", grades: {math: 90, science: 80}}]
const filterBySubjectGrade = function (students, subject, threshold) {
  return students.filter(function (student) {
    return student.grades[subject] > threshold;
  });
};

// console.log(filterBySubjectGrade([{ name: "Alice", grades: { math: 90, science: 80 } }, { name: "Bob", grades: { math: 70, science: 85 } }], "science", 80));


// Convert students' grades to letter grades, then filter for students who received a specific grade [{name: "Alice", grade: 90}, {name: "Bob", grade: 85}] => [{name: "Alice", grade: 90}]

const filterSpecificGrade = function (students, grade) {
  return students.filter(function (student) {
    const convert = {};
    convert.grades = student.grade > "85" ? "A" : "B";
    return convert.grades === grade;
  });

};

const student = [{ name: "Alice", grade: 90 }, { name: "Bob", grade: 85 }];

// console.log(filterSpecificGrade(student, "B"));


// Filter students where at least one class has a passing grade [{student: {name: "Tom", classes: [{name: "Math", grade: "B"}, {name: "History", grade: "C"}]}}] => [{student: {name: "Tom", classes: [{name: "Math", grade: "B"}, {name: "History", grade: "C"}]}}]

const filterStudentsByClassGrade = function (students, passingGrade) {
  return students.filter(function (candidate) {
    return candidate.student.classes.some(function (course) {
      return passingGrade.includes(course.grade);
    });
  });
};

const student1 = { student: { name: "Tom", classes: [{ name: "Math", grade: "B" }, { name: "History", grade: "C" }] } };
const student2 = { student: { name: "bob", classes: [{ name: "Math", grade: "C" }, { name: "History", grade: "D" }] } };
console.log(filterStudentsByClassGrade([student1, student2], ["A", "B", "C"]));

// Filter students where at least one grade is above a certain threshold [{student: {name: "Tom", grades: [{subject: "Math", grade: 85}, {subject: "English", grade: 72}]}}] => [{student: {name: "Tom", grades: [{subject: "Math", grade: 85}, {subject: "English", grade: 72}]}}]
const filterStudentsByGrade = function (students, minGrade) {
 
};

// Convert grades to letter grades, then filter for students who passed [{name: "Alice", grade: 90}, {name: "Bob", grade: 55}] => [{name: "Alice", grade: 90}]
const filterPassingGrades = function (students, passingGrade) { };

// Normalize scores to a standard range, then filter for students who passed [{name: "John", score: 50}, {name: "Jane", score: 80}] => [{name: "Jane", score: 80}]
const filterNormalizedScores = function (students, minScore) { };
