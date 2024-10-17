function calculateAge() {
    const dob = document.getElementById("dob").value;
    const result = document.getElementById("result");
    const dobDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - dobDate.getFullYear();
    const monthDiff = today.getMonth() - dobDate.getMonth();
    const dayDiff = today.getDate() - dobDate.getDate();

    // Adjust age if birthday hasn't occurred yet this year
    if (dob === "") {
        result.innerHTML = "Please select a date of birth!";
        return;
    }
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
    }

    result.innerHTML = `You are ${age} years old.`;
}
