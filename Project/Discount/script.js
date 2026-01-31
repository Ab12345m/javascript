
let age=70;
let gender='female';
let discount;


if (age <= 5) {
    discount =100;
    

} else if (gender==='female'||age<=8) {
    discount = 50;
    
}
else if (age >= 65) {
    discount = 30;
}
else {
    discount = 0;
}
console.log(`your final discount ${discount}`);

    
