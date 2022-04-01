function FirstFactorial(num){
    //code goes here
    let reult = num;
    if(num < 0) {
        return;
} else if(num === 0) return 1;

while(num > 1) {
    num--;
    result = result * num
}
return result;
}