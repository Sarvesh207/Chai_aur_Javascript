const students = [
  {
    name: "Student 1",

    stream: "Science",

    class: 11,

    subjects: [
      { name: "english", mandatory: true, marks: 85 },

      { name: "physics", mandatory: true, marks: 90 },

      { name: "chemistry", mandatory: true, marks: 88 },

      { name: "maths", mandatory: true, marks: 92 },

      { name: "computer", mandatory: false, marks: 78 },
    ],
  },

  {
    name: "Student 2",

    stream: "Commerce",

    class: 12,

    subjects: [
      { name: "english", mandatory: true, marks: 80 },

      { name: "physics", mandatory: false, marks: 75 },

      { name: "chemistry", mandatory: false, marks: 77 },

      { name: "maths", mandatory: false, marks: 78 },

      { name: "economics", mandatory: true, marks: 85 },
    ],
  },

  {
    name: "Student 3",

    stream: "Science",

    class: 12,

    subjects: [
      { name: "english", mandatory: true, marks: 90 },

      { name: "physics", mandatory: true, marks: 85 },

      { name: "chemistry", mandatory: true, marks: 92 },

      { name: "maths", mandatory: true, marks: 88 },

      { name: "computer", mandatory: false, marks: 80 },
    ],
  },

  {
    name: "Student 4",

    stream: "Commerce",

    class: 11,

    subjects: [
      { name: "english", mandatory: true, marks: 78 },

      { name: "physics", mandatory: false, marks: 82 },

      { name: "chemistry", mandatory: false, marks: 80 },

      { name: "maths", mandatory: false, marks: 76 },

      { name: "economics", mandatory: true, marks: 85 },
    ],
  },
];

// const newList = students.filter((student) => student.stream === "Science")

// console.log(newList)

// const secondList = newList.map((student) => {
//     return student.subjects.filter((subject) => subject.name === "computer")
// })

// console.log(secondList)

/**
    1. student should be from science stream

    2. student should have 'computer' subject

    3. avg marks should be more than 50%

 */


const filteredStudent = students.filter((student) =>

    student.stream === "Science" && 
    student.subjects.find((sub) => sub.name === "computer") &&
    student.subjects.every((subject) => subject.marks/100 > 0.5)

) 

console.log(filteredStudent);

// const filteredStudents = students.filter((student) => {
//   // Criteria 1: Student should be from science stream
//   if (student.stream !== "Science") {
//     return false;
//   }

//   // Criteria 2: Student should have 'computer' subject
//   const computerSubject = student.subjects.find(
//     (subject) => subject.name === "computer"
//   );
//   if (!computerSubject) {
//     return false;
//   }

//   // Criteria 3: Average marks should be more than 50%
//   const totalMarks = student.subjects.reduce(
//     (sum, subject) => sum + subject.marks,
//     0
//   );
//   const averageMarks = totalMarks / student.subjects.length;
//   if (averageMarks <= 50) {
//     return false;
//   }

//   return true;
// });

// console.log(filteredStudents);
