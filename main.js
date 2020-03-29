var arr = ['HTML', 11, 'JavaScript', 2, 'CSS', 23, 12];
arr.push(-2);
console.log(arr);
arr.unshift(1000);
console.log(arr);
arr.push('Last array element');
console.log(arr);
arr.splice(3,1);
console.log(arr);
var newArr = arr.filter(function(item){
    return typeof item === "number";
});
console.log(newArr);
var mArr = newArr.map(function(item){
    return item = item * item;
});
console.log(mArr);
alert(Math.max.apply(null, mArr));