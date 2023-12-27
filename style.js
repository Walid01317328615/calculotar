function deleteMe(){
    document.getElementById("myResuld").value = ""
}

function calculotar(Newvalue){
    document.getElementById("myResuld").value += Newvalue;
}

function Answer(){



var a = document.getElementById("myResuld").value ;
var b = eval(a);

document.getElementById("myResuld").value = b 

}

