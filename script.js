var form = document.querySelector(".form");
var sbtn = document.querySelector(".sbtn");
var rbtn = document.querySelector(".rbtn");

sbtn.addEventListener('click',()=>{
    var TotalLec = document.getElementById("TotalLec").value;
    var AttemptLec = document.getElementById("AttemptpLec").value;
    var BunkLec = document.getElementById("BunkLec").value;
    var Current = document.getElementById("CurrentPer");
    var Previous = document.getElementById("PreviousPer");

    var PreviousPer = Math.round((AttemptLec/TotalLec)*100);
    var CurrentPer = Math.round(((AttemptLec)/(+TotalLec + +BunkLec))*100);
    
    if(TotalLec==="")
    {
        alert("Enter Total Lecture");
    }
    else if(AttemptLec==="")
    {
        alert("Enter Attempt Lecture");
    }
    else{
        Current.value = CurrentPer;
        Previous.value = PreviousPer;
        document.getElementById("TotalLec").value = '';
        document.getElementById("AttemptpLec").value = '';
        document.getElementById("BunkLec").value = '';
    }
})
rbtn.addEventListener('click',()=>{
    document.getElementById("TotalLec").value = '';
    document.getElementById("AttemptpLec").value = '';
    document.getElementById("BunkLec").value = '';
    Current = document.getElementById("CurrentPer").value = '';
    Previous = document.getElementById("PreviousPer").value = '';
})
