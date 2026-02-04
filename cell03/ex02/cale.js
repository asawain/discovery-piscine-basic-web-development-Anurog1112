function calculate() {
    const leftVal = document.getElementById('leftOp').value;
    const rightVal = document.getElementById('rightOp').value;
    const op = document.getElementById('operator').value;

    // check ว่าเป็นตัวเลขล้วนหรือมั้ย ?
    if (!/^\d+$/.test(leftVal) || !/^\d+$/.test(rightVal)) {
        alert('Error : (');
        return;
    }

    const left = parseInt(leftVal);
    const right = parseInt(rightVal);

    // ตรวจสอบว่าเป็นเครื่องหมาย / หรือ % และตัวหารเป็น 0 หรือไม่
    if ((op === '/' || op === '%') && right === 0) {
        alert("It's over 9000!");
        console.log("It's over 9000!");
        return;
    }

    // คำนวณ
    let result;
    switch (op) {
        case '+': result = left + right; break;
        case '-': result = left - right; break;
        case '*': result = left * right; break;
        case '/': result = left / right; break;
        case '%': result = left % right; break;
    }

    // show resilt
    alert(result);
    console.log(result);

}

setInterval(function() {
    alert('Please, use me...');
}, 30000);