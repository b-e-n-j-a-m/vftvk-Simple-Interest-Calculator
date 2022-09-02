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
    msg=`If you deposit <text style="color:yellow">${principal}</text>,<br>at an interest rate of <text style="color:yellow">${rate}%</text><br>You will receive an amount of <text style="color:yellow">${interest}</text>,<br>in the year <text style="color:yellow">${year}</text><br>`;
    document.getElementById("result").innerHTML=msg;

    document.getElementById("principal").focus();
}

function updateRate(){
    // Purpose: Updates the rate set per the slider element
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval + "\t%";



}