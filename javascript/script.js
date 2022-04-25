// สร้าง avatar
let input = document.getElementById('inputMultiply');
let button = document.getElementById('buttonMultiply');
let clearButton = document.getElementById('clearButton');
let output = document.getElementById('outputMultiply');


// function onClickbutton() {
//     output.innerHTML = "ทดสอบ";
// }
// button.addEventListener("click", onClickbutton);


function clearOutput() {
    output.innerHTML = "";
}
clearButton.addEventListener("click", clearOutput);


function debugInput() {
    let number = input.value;       // อ่านค่าจาก input tag realtime
    console.log(number);
}

// checkNumber จบได้ด้วยการเซ็ท type="number" ในแท็ก input
function checkNumber(value) {
    if(typeof value === 'number' && isFinite(value)) {      // check number จาก type
        console.log("Yes, its number");
    } else {
        window.alert("ป้อนเฉพาะตัวเลข")
        return true             // check string เพื่อเอา true ไปจบ loop
    }
}

function showMultiply() {
    
    let number = Number(input.value);       // แปลงเป็น number ก่อน เพราะค่าที่รับจาก input tag จะเป็น String             
    if(checkNumber(number) == true) {       // check number with Alert
        console.log("yes this String");
        return                              // return จะทำให้จบ fn ทันที
    }
    let i = 1;
    let message = "";
    for(i = 1; i <= 12; i++) {
        message += number + ' x ' + i + ' = ' + (number*i) + '\n';
        console.log(message);
    }
    output.innerHTML = message;
}
button.addEventListener("click",showMultiply);



