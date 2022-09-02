function compute(){
    // Purpose: Simple function to compute interest on a principal

    var principal = document.getElementById("principal").value;
    var rate      = document.getElementById("rate").value;
    var years     = document.getElementById("years").value;
    var interest  = principal * rate * years / 100;
    var year      = new Date().getFullYear()+parseInt(years);

    if (principal <= 0){
        alert("Enter a positive number, please.");
        document.getElementById("principal").focus();
        return;
    }

    // use string template with placeholders for cleaner code
    msg=`If you deposit ${principal},<br>at an interest rate of ${rate}%<br>You will receive an amount of ${interest},<br>in the year ${year}<br>`;
    document.getElementById("result").innerHTML=msg;

    document.getElementById("principal").focus();
}

function updateRate(){
    // Purpose: Updates the rate set per the slider element
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval + "\t%";



}