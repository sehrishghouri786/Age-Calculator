function calculateAge() {
    // Get the user's input from the form
    var day = document.getElementById("day").value;
    var month = document.getElementById("month").value;
    var year = document.getElementById("year").value;

    // Get the current date
    var currentDate = new Date();
    var currentDay = currentDate.getDate();
    var currentMonth = currentDate.getMonth() + 1; // Months are zero-based in JS
    var currentYear = currentDate.getFullYear();

    // Calculate the age
    var age = currentYear - year;

    // Adjust for the month and day
    if (currentMonth < month || (currentMonth === month && currentDay < day)) {
        age--;
    }

    // Display the result
    document.getElementById("result").textContent = age;
}
