function prime(num) {
    for(var i = 2; i <= num; i++) {
        var element = i;   
        if (num % element != 0) {
            return "This is not a prime number.";
        }
        else{
            return "This is a prime number";
        }
    }
}
var x = prime(10);
console.log(x);