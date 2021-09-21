function fibonacci(number) {
    var result = [0,1];
    for (let i = 2; i < number; i++) {
        result[i] = result[i-1] + result[i-2];  
    }
    return result;
}
var x = fibonacci(10);
console.log(x);