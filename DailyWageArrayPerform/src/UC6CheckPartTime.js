const con = require("./Constants.js");
let AbsentDays = 0;
        let hrs = 0;
        var cal = 0;
        var totalhrs =0;
        var showTotal =0;
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
        Only160(){
            var only160 = this.fullTime() * con.FULL_TIME_HR;
            return only160;
        }


        //code
        EmpWage(){
            var i =0;
            let wages = [];
            
            while(i<20 ){
              //  daysArr [i] = i;
            var checkfor = this.attCheck();
            switch (checkfor) {
                case 1: //for full time
                    console.log("Day "+(i+1)+ " Present For Full Time")
                    hrs = this.fullTime();
                    break;
                case 0: //for part time
                console.log("Day "+(i+1)+ " Present For Part Time")
                hrs = this.partTime();
                    break;
                default:
                    hrs = 0;
                    console.log("Day "+(i+1)+ " Absent")
                    AbsentDays += 1;
                    break;
                }
                if(totalhrs==160){
                    break;
                }
                else{
                    totalhrs += hrs;
                }
                cal = (hrs * con.WAGEPERHR);
                wages.push(cal);
                console.log("Your Wage for Day "+(i+1)+" is : "+wages[i]);
                console.log("");
                
                i++;
            }
            console.log("Days: "+ i + " Hours: "+totalhrs);
            console.log("Absent Days: "+AbsentDays);
            console.log("Wage is: "+wages);

            var total160 = wages.find(wages =>{ return  wages == 80;});
            // console.log("Only Full Time Days: " + total160.length);
            if(total160 > 0){
                console.log("Part Time is present");
            }
            else{
                console.log("Part Time is Not present");
            }
        }// employee function ends here
    
}

let emp = new Employee();
//emp.welcomeMsg();

