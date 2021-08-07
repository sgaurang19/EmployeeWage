console.log("|*** Welcome to Empolyee Wage Computation ***|");


let full_time_hr = 8;
let part_time_hr = 4;
let wageperhr = 20;
let hrs = 0;
var cal = 0;
var totalhrs =0;
function fullTime(){
    hrs = full_time_hr;
    return hrs;
}
function partTime(){
    hrs = part_time_hr;
    return hrs;
}
var i =0;
while(i<20 || totalhrs==160){
let checkfor = Math.floor((Math.random() *10 ) % 2);
switch (checkfor) {
    case 1: //for full time
     
        hrs = fullTime();
        break;
    case 0: //for part time
        
        hrs = partTime();
        break;
}
totalhrs += hrs;
cal = cal + hrs * wageperhr;
i++;
}

console.log("Days: "+ i + " Hours: "+totalhrs );
console.log("Wage is: "+ cal);