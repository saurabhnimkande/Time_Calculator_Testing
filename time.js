function timeCalc(num) {
    let a=Math.floor(num/1000);
    let output=[];
    if(a>=3600) {
        var rem=a/3600;
        a=a%3600;
        output.push(Math.floor(rem)+" Hours");
    }
    if(a==60) {
        var rem1=a/60;
        a=a%60;
        output.push(Math.floor(rem1)+" Minute");
    }
    if(a>60) {
        var rem2=a/60;
        a=a%60;
        output.push(Math.floor(rem2)+" Minutes");
    }
    if(a<60) {
        output.push(Math.floor(a) + " Seconds");
    }
    return output.join(" ");
}


module.exports=timeCalc;