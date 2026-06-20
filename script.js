let count = localStorage.getItem("submitCount") || 0;

// page open ayyinappudu count display (optional)
console.log("Total Submissions: " + count);

document.getElementById("registerForm").addEventListener("submit", function(e){
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    if(name && email){
        count++;
        localStorage.setItem("submitCount", count);

        alert("Submitted Successfully 👍\nTotal Submissions: " + count);

        this.reset(); // form clear
    } else {
        alert("Please fill all fields");
    }
});