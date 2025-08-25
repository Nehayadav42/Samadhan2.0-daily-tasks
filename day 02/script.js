// Function to find highest marks
function findHighestMarks() {
    let input = document.getElementById("marksInput").value;
  
    // Convert input string into array of numbers
    let marksArray = input.split(",").map(num => parseInt(num.trim()));
  
    // Initialize highest value as the first element
    let highest = marksArray[0];
  
    // Loop through array using function + loop
    for (let i = 1; i < marksArray.length; i++) {
      if (marksArray[i] > highest) {
        highest = marksArray[i];
      }
    }
  
    // Show result
    document.getElementById("result").innerText = "Highest Marks: " + highest;
  }
  