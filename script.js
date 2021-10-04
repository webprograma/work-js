// Daraja dz

let num1 = +prompt("son kiriting")
, daraja = +prompt("darajani kiriting")
, answer = 1

for (let i = 0; i < daraja; i++) {
    answer = num1 * answer 
}

 alert(answer)

// Ma`lumot dz

let name2 = prompt("ismingizni kiriting")
,   year = +prompt("Xozirgi yilni kiriting")
,   myYear = +prompt("Tug'ulgan yilingizni kiriting")
       name2 + (year - myYear) ? alert(`${name2} aka👨🏼‍💻 ${( year - myYear ) + " yoshdasiz "}`) :  alert("nimadur notug'ri")

    let number = +prompt("son kiriting")
, modalNum = 1


     for (let k = 1; k <= number; k++) {

        modalNum *= k

    alert(modalNum);
}

alert(`${"result =" } ${modalNum}`);


let where = +prompt("ishlamoqchi bo`lgan misolingizni miqdorini kiriting")

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

console.log(random(1, 10));

for (let j = 0; j < where; j++) {
    let misol = '';
    let num1 = random(1, 10);
    let num2 = random(1, 10);
    let correct;
    let sign = random(1, 4);
    if (sign == 1) {
        sign = '+';
        correct = num1 + num2;
    } else if (sign == 2) {
        sign = '-';
        correct = num1 - num2;
        
    } else if (sign == 3) {
        sign = '*';
        correct = num1 * num2;
        
    } else if (sign == 4) {
        sign = '/';
        correct = num1 / num2;
        
    }
    misol += `${num1} ${sign} ${num2} = `
    let misol1 = +prompt(misol)
    misol1 === correct ? alert("Sizning javobingiz tug`ri "+misol1) : alert(" Sizning javobingiz notug'ri " + misol1 + "! , javob "+correct);
}