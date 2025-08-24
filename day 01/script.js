// Day 1 Task - Print student details from an object

// Function to run when button is clicked
function runStudentDetails() {
  const student = {
    name: "Neha Yadav",
    rollNo: 42,
    age: 20,
    course: "B.Tech CSE",
    college: "SISTec Gandhinagar",
    year: "3rd Year",
    email: "neha.yadav@example.com",
    phone: "+91-9876543210",
    address: "Bhopal, Madhya Pradesh, India",
    hobbies: ["Dancing", "Coding", "Exploring Temples"],
    marks: {
      math: 85,
      science: 90,
      english: 88
    }
  };

  // Prepare output text
  let output = "Student Details : \n";
  output += `Name: ${student.name}\n`;
  output += `Roll No: ${student.rollNo}\n`;
  output += `Age: ${student.age}\n`;
  output += `Course: ${student.course}\n`;
  output += `Year: ${student.year}\n`;
  output += `College: ${student.college}\n`;
  output += `Email: ${student.email}\n`;
  output += `Phone: ${student.phone}\n`;
  output += `Address: ${student.address}\n`;
  output += `Hobbies: ${student.hobbies.join(", ")}\n\n`;

  output += "Marks : \n";
  output += `Math: ${student.marks.math}\n`;
  output += `Science: ${student.marks.science}\n`;
  output += `English: ${student.marks.english}`;

  // Display in the console output box
  document.getElementById("consoleOutput").textContent = output;
}

// Attach event listener to button
document.getElementById("runBtn").addEventListener("click", runStudentDetails);
