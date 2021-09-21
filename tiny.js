function tiny(num) {
    var tinyNum = num[0];
    for (let i = 0; i < num.length; i++) {
        const element = num[i];
        if (tinyNum > element) {
            tinyNum = element;
        }
    }
    return tinyNum;
}
var x = tiny([54,2,3,4,5,6,6]);
console.log(x);