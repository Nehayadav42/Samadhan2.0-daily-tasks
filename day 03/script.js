const students = [
      { name: "Alice", marks: [85, 92, 78] },
        { name: "Bob", marks: [45, 55, 60] },
          { name: "Charlie", marks: [95, 88, 91] },
          ];

          // Calculate total marks using map
          const totals = students.map(s => ({
            name: s.name,
              total: s.marks.reduce((a, b) => a + b, 0)
              }));

              // Filter students who passed all subjects (>=50)
              const passed = students.filter(s => s.marks.every(mark => mark >= 50));

              // Calculate class average
              const classAverage = totals.reduce((sum, s) => sum + s.total, 0) / students.length;

              const resultDiv = document.getElementById('result');

              resultDiv.innerHTML =
                `<h2>Student Totals:</h2>` +
                  totals.map(s => `<div class="student">${s.name}: ${s.total}</div>`).join('') +
                    `<h2>Passed Students:</h2>` +
                      passed.map(s => `<div class="student">${s.name}</div>`).join('') +
                        `<h2>Class Average: ${classAverage.toFixed(2)}</h2>`;
]