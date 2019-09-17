const exp ='', number, decimal, equal, operater, allowSR = true;
const textview = document.form['myForm']['textview'];

function insertNum(num){
    if (equal) {
        exp = num;
        textview.value = exp;
        number = true;
        equal = false;
    }
    else {
        exp = textview.value + num;
        textview.value = exp;
        number = true;

    }
    if (operator) decimal = false;
    SR('a');
}
function insertOp(op){
     textview.value = exp + op;
     operator = true;
     equal = false;
     allowSR = false;
    //  SR('a');
}
function inserDec() {
    if (number && !decimal){
        textview.value = exp +  '.';
        decimal = true;
        operater = false;
    }
}
function equalTo(){
    if (exp) {
        exp = eval(exp);
        textview.value = exp;
        equal = true;
        decimal = false;
        number = false;
        allowSR = true;
    }
}
function clean(){
    exp = '';
    textview.value = exp;
    decimal = false;

}
function back() {
    exp = textview.value;
    exp = exp.substring(0, exp.length    );
    textview.value = exp; 
}

// var inputText = document.getElementById("txt"),
//     items = document.querySelectorAll("list li"),
//     tab = [], index;
// //  get the selected li index using array
// // 
// for (var i =0; i < items.length; i++){

// tab.push(items[i].innerHTML);
// }

// // get li index onclick
// for (var i =0; i < items.length; i++){
// items[i].onclick = function(){
//     indext = tab.indexOf(this.innerHTML);
//     console.log(this.innerHTML + "INDEX = " + index);
//     // set the selected li value into inpu text
//     inputText.value = this.innerHTML;
//     };
// }

// function addli(){
//     var txtVal = document.getElementById("txtVal").value,
//        listNode  = document.getElementById("list"), 
//        liNode = document.createElement("li") ,
//        txtNode = document.createTextNode(txtVal);
    
//     liNode.appendChild(txtNode);
//     listNode.appendChild(liNode);
// }