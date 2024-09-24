// Function to check the date and update the h2 element
var dotcount = 0;
var nostring = "NO";

function checkDate() {
    // Get today's date
    const today = new Date();

    // Define the target date
    const targetYear = 2024;
    const targetMonth = 10; // November is 10 in JavaScript (0-indexed)
    const targetDay = 6;

    // Check if today is November 6th, 2024
    const isTargetDate = today.getFullYear() === targetYear && 
                         today.getMonth() === targetMonth && 
                         today.getDate() === targetDay;

    // Set the text of the h2 element based on the check
    document.getElementById("date-check").innerText = isTargetDate ? "YES, GO PLAY THE GAME IDIOT" : nostring;

    dotcount+=1;
    nostring = "NO"
    for (let i = 0; i < dotcount; i++) {
        nostring += '.';
    } 
    if(dotcount >= 4){
        nostring = "NO"
        dotcount = 0;
    }
}

// Run checkDate every second (1000 milliseconds)
setInterval(checkDate, 2000);