var obj = {
    name : "Al Nahian Ark",
    id : 32
}

delete obj.name;

console.log(Object.keys(obj));

if ("name" in obj === false) {
    obj.name = "Justin Bieber";
}
console.log(obj);
console.log(Object.keys(obj));



var arr = [1,3,4,5,6,7];
console.log(Object.keys(arr));


