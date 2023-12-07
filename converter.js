document.getElementById("warnings").style.visibility = "hidden";
var partList = [];
var totalWeight = 0;

function calcLineWeight() 
{
    var weight = document.getElementById("wpf").value;
    var length = document.getElementById("len").value;
    var qty = document.getElementById("qty").value;
    
    var studWeight = (weight / 12) * length;
    
    console.log(studWeight * qty)
    return studWeight * qty;
}

function addLine() 
{
    document.getElementById("part-list").innerHTML = ""
    totalWeight = 0;

    partList.push(calcLineWeight());

    for(var i = 0; i < partList.length; i++)
    {
        document.getElementById("part-list").innerText += "Line " + (i + 1) +
                                                          ": " + rounded(partList[i]) + " lbs\n"
        totalWeight += partList[i];
    }

    document.getElementById("total").innerText = "Total Weight\n" + rounded(totalWeight) + " lbs";

    if (checkWarnings())
    {
        document.getElementById("warnings").style.visibility = "visible";
    }

}

function reset() {
    partList = [];
    totalWeight = 0;
    document.getElementById("part-list").innerText = "";
    document.getElementById("total").innerText = "";
    document.getElementById("warnings").style.visibility = "hidden";
}

// returns true if a warning criteria is met
function checkWarnings() {

    if (totalWeight > 150)
    {
        return true;
    }
    else 
    {
        return false;
    }
}

// rounds a number down to 2 decimal places to make display prettier
function rounded(unrounded){
    return Math.round(unrounded * 100) / 100
}