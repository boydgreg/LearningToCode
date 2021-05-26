var debugging = false; /* Make true to debug */
var numField1 = document.getElementById('numField1');
var numField2 = document.getElementById('numField2');
var resultsField = document.getElementById('resultField');
var form = document.getElementById('xIsWhatPercentOfY');


form.addEventListener('submit',function(event){
    if (debugging) {alert('We clicked submit');} /*Tests button event listener */
    if (!numField1.value || !numField2.value){
        alert ('Please enter a value in both fields');
    } else {
        var x = parseFloat(numField1.value);
        var y = parseFloat(numField2.value);

        if (debugging){alert(x + y);}  /* Adds values*/
        var result = x/y;
        var percent = result * 100;

        if (debugging){alert(percent + "%")};
        resultsField.innerText = "Answer: " + percent + "%";
        event.preventDefault();
    }
});
var costField = document.getElementById('costField');
var tipField =document.getElementById('tipField');
var form2 = document.getElementById('howmuchToTip');
var resultField2 = document.getElementById("resultField2");
var form2 = document.getElementById('howmuchToTip');

form2.addEventListener('submit', function(event){
    if (!costField.value || !tipField.value) {alert("Add a cost");}
    else {
        var x = parseFloat(costField.value);
        var y = parseFloat(tipField.value);
        var tip = x * y;
        // tip /= 100;

        resultField2.innerText="Gratoody: $" + tip.toLocaleString('en-US', {style: 'decimal', minimumFractionDigits: 2, maximumFractionDigits: 2}) + ".";
        event.preventDefault();
    };
});

if (debugging) { /*Puts values in fields and changes resultsField Text */
    numField1.value = "Value1"
    numField2.value = "Value2"
    resultsField.innerText = "Test2"
}

