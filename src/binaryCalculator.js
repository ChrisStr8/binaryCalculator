let eq = ''
let res = document.getElementById('res');
// digits
let btn0 = document.getElementById('btn0');
let btn1 = document.getElementById('btn1');

// finilisation
let btnClr = document.getElementById('btnClr');
let btniv = document.getElementById('btnEql');

//opperations
let btnSum = document.getElementById('btnSum');
let btnSub = document.getElementById('btnSub');
let btnMul = document.getElementById('btnMul');
let btnDiv = document.getElementById('btnDiv');

btn0.onclick = function() {
  eq += '0';
  res.innerHTML = eq;
}

btn1.onclick = function() {
  eq += '1';
  res.innerHTML = eq;
}

btnClr.onclick = function() {
  eq = '';
  res.innerHTML = eq;
}

btnEql.onclick = function() {
  eq = equate(eq);
  res.innerHTML = eq;
}

btnSum.onclick = function() {
  eq += '+';
  res.innerHTML = eq;
}

btnSub.onclick = function() {
  eq += '-';
  res.innerHTML = eq;
}

btnMul.onclick = function() {
  eq += '*';
  res.innerHTML = eq;
}

btnDiv.onclick = function() {
  eq += '/';
  res.innerHTML = eq;
}

function equate(eq){
    let num = '';
    let sequence = [];
    let sn = 0;
    for (let i=0; i<eq.length; i++){
        if(eq[i] === '0' || eq[i] === '1'){
            num = num + eq[i];
        }else {
            sequence[sn] = num;
            num = '';
            sn++;
            sequence[sn] = eq[i];
            sn++;
        }
    }
    sequence[sn] = num;
    console.log(sequence)
    let result = binaryConvert(sequence[0]);
    for (let i=1; i<sequence.length; i++){
        //console.log('i: '+i);
        if(sequence[i] === '+'){
            i++;
            result += binaryConvert(sequence[i]);
        }else if(sequence[i] === '-'){
            i++;
            result -= binaryConvert(sequence[i]);
        }else if(sequence[i] === '*'){
            i++;
            result *= binaryConvert(sequence[i]);
        }else if(sequence[i] === '/'){
            i++;
            result /= binaryConvert(sequence[i]);
        }
    }
    console.log(result);
    return (result >>> 0).toString(2);
}

//binary string to decimal number
function binaryConvert(num){
    let total = 0;
    let p = 0;
    for (let i=num.length-1; i>=0; i--){
        console.log(num[i]+' '+p+' '+num+' '+((Number(num[i])*2)**p));
        if(num[i]==='1'){
            total += (2**p);
        }
        p++;
        //console.log(total);
    }
    console.log(total);
    return total;
}