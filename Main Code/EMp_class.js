const con = require("./Constants.js");
let AbsentDays = 0;
        let hrs = 0;
        var cal = 0;
        var totalhrs =0;
class Employee{
    
    constructor(){
        //for welcome message
    
        this.welcomeMsg();
        
    }
   
    
        welcomeMsg(){
            console.log("|*** Welcome to Empolyee Wage Computation ***|");
            
            this.EmpWage();
        }
        // For attandace check
        attCheck(){
            let checkfor = Math.floor((Math.random() *10 ) % 3);
            return checkfor;
        }
        // for full time work
        fullTime(){
            hrs = con.FULL_TIME_HR;
            return hrs;
        }
        // for part time work
        partTime(){
            hrs = con.PART_TIME_HR;
            return hrs;
        }


        //code
        EmpWage(){
            var i =0;
            while(i<20 ){
            var checkfor = this.attCheck();
            switch (checkfor) {
                case 1: //for full time
                    console.log("Day "+i+ " Present For Full Time")
                    hrs = this.fullTime();
                    break;
                case 0: //for part time
                console.log("Day "+i+ " Present For Part Time")
                hrs = this.partTime();
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
    
}

let emp = new Employee();
//emp.welcomeMsg();

