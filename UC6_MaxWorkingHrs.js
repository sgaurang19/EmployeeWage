//
function fullTime(){
    hrs = 8;
    return hrs;
}
// for part time work
function  partTime(){
    hrs = 4;
    return hrs;
}
while(i<20 ){
    let checkfor = Math.floor((Math.random() *10 ) % 2);
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
        
        break;
    }
    if(totalhrs==160){
        break;
    }
    else{
        totalhrs += hrs;
    }
    cal = cal + hrs * con.WAGEPERHR;
}