class EmployeePayroll{
    constructor(...para){
        this.id = para[0];
        this.name = para[1];
        this. salary = para[2];
    }
    setUpdate(...pa){
        this.id = pa[0];
        this.name = pa[1];
        this. salary = pa[2];
    }
    showDetails(){
        console.log("Employee ID:" + this.id);
        console.log("Name of Employee: "+ this.name);
        console.log("Salary: "+this.salary);
    }
}
//
PayrollData = class EmployeePayroll{
    constructor(...param){
        super(param[0], param[1], param[2]);
        this.gender = param[3];
        this.doj = param[4];
    }
    showDetails(){
        console.log("Employee ID:" + this.id);
        console.log("Name of Employee: "+ this.name);
        console.log("Salary: "+this.salary);
        console.log("Gender :"+ this.gender);
        console.log("Date of Joining :"+ this.doj);
    }

}
ep = new EmployeePayroll(1234, "GAURANG", 12547);
ep12 = new PayrollData(1234, "GAURANG", 12547, "Male", 2021);
ep.showDetails();
console.log("------");
ep12.showDetails();
