var arr = [1,2,3,4,5,6,7,8,9];

arr.pop();
console.log(arr);

arr.push(1);
console.log(arr);

arr.unshift(10);
console.log(arr);

arr.shift();
console.log(arr);


arr[2] = 90;
console.log(arr);

arr[3] += 110;
console.log(arr);


console.log(arr.length);
console.log(arr.indexOf(5, 2));

var ay = arr[3];
console.log(ay);


arr.forEach(function(item, index, array) {
    console.log(item, index, "Loop");
})


