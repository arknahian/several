

function uniNum(arr){
    var unique = [];
for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (unique.indexOf(element) == -1) {
        unique.push(element);
    }
 }
    return unique;
}
var z = [1,23,3,4,65,7,88,5,4,2,1,1];
var x = uniNum(z);
console.log(x);