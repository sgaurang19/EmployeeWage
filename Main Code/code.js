let con = require("./Constants.js");
let AbsentDays = 0;
let hrs = 0;
var cal = 0;
var totalhrs =0;
//for welcome message
function welcomeMsg(){
    console.log("|*** Welcome to Empolyee Wage Computation ***|");
}
// For attandace check
function attCheck(){
    let checkfor = Math.floor((Math.random() *10 ) % 3);
    return checkfor;
}
// for full time work
function fullTime(){
    hrs = con.FULL_TIME_HR;
    return hrs;
}
// for part time work
function partTime(){
    hrs = con.PART_TIME_HR;
    return hrs;
}


//code
function EmpWage(){
    var i =0;
    while(i<20 ){
    checkfor = attCheck();
    switch (checkfor) {
        case 1: //for full time
            console.log("Day "+i+ " Present For Full Time")
            hrs = fullTime();
            break;
        case 0: //for part time
        console.log("Day "+i+ " Present For Part Time")
            hrs = partTime();
            break;
        default:
            hrs = 0;
            console.log("Day "+i+ " Absent")
            AbsentDays += 1;
            break;
        }
        if(totalhrs==160){
            break;
        }
        else{
            totalhrs += hrs;
        }
        cal = cal + hrs * con.WAGEPERHR;
        i++;
    }
    console.log("Days: "+ i + " Hours: "+totalhrs );
    console.log("Absent Days: "+AbsentDays);
    console.log("Wage is: "+ cal);
}
welcomeMsg();
EmpWage();
