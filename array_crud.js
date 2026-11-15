const students = [
    { id: 1, name: "John", age: 20 },
    { id: 2, name: "Jane Smith", age: 21 },
    { id: 3, name: "Alice Johnson", age: 22 }
];

const newStudent = {
    id: 4,
    name: "Bob Brown",
    age: 23
};

students.push(newStudent);
console.log("List of students:", students);

// Find student
const studentIdToFind = 2;
const student = students.find(s => s.id === studentIdToFind);

if (student) {
    console.log("Student found:", student);
} else {
    console.log("Student not found");
}

// Update student
const studentIdToUpdate = 3;
const studentToUpdate = students.find(s => s.id === studentIdToUpdate);

if (studentToUpdate) {
    studentToUpdate.name = "Alice Johnson";
    studentToUpdate.age = 24;

    console.log(
        `Student with ID ${studentIdToUpdate} updated successfully`, 
        studentToUpdate
    );
} else {
    console.log(`Student with ID ${studentIdToUpdate} not found`);
}

// Delete student
const studentIdToDelete = 1;
const indexToDelete = students.findIndex(
    s => s.id === studentIdToDelete
);

if (indexToDelete !== -1) {
    students.splice(indexToDelete, 1);

    console.log(
        `Student with ID ${studentIdToDelete} deleted successfully`
    );
} else {
    console.log(
        `Student with ID ${studentIdToDelete} not found`
    );
}

console.log("Final list of students:", students);