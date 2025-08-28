// Fetch students and display
async function loadStudents() {
  const res = await fetch("/api/students");
  const data = await res.json();

  const tbody = document.querySelector("#studentsTable tbody");
  tbody.innerHTML = "";

  data.forEach(student => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${student.id}</td>
      <td>${student.name}</td>
      <td>${student.marks}</td>
    `;
    tbody.appendChild(row);
  });
}

// Add new student
document.getElementById("studentForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const marks = document.getElementById("marks").value;

  await fetch("/api/students", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, marks })
  });

  document.getElementById("studentForm").reset();
  loadStudents(); // refresh table
});

// Load data on page load
loadStudents();
