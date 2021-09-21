function largestNum(numbers) {
    var largest = numbers[0];
    for(var i = 0; i < numbers.length; i++) {
        var element = numbers[i];
        if (largest < element) {
            largest = element;
        }
    }
    return largest;
}
var x = largestNum([1,2,3,65675,5,6,73, 434]);
console.log(x);