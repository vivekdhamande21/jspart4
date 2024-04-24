//Qs. Write a program to delete all occurences of  element num in  a given array using loops.
let arr1 = [1,2,3,4,5,2,6]
let num = 2;
let itr = arr1.length;
let arr2 = [];
for (let i = 0; i < arr1.length; i++) {
    if(arr1[i]!=2){
        arr2.push(arr1[i]);
    }
} 
console.log(arr2);


//Qs. Write a program to find the number of digits in a number.
let num1 = 123456;
let str = num1.toString();
console.log(str.length);


//Qs. Write a program to find sum of digits of a number and count the number of digits in a number using loops.
let n = 12456;
let total = 0;
let count = 0;
while(n>0){
    count++
   total = total + (n%10);
   n= Math.floor(n/10);
} 
console.log(total);
console.log(count);


//Print the factorial of an number using loops.
// let fnum = prompt("Enter Your Number");
// let fac = 1;
// for (let index = fnum; index > 0; index--) {
//     fac = fac*index;
// }
// console.log(fac);


//Qs. Find the largest number in array using loops.
let arr3 = [12,14,10,8,10];
console.log(arr3.sort((a,b)=>{
    return a-b;
}));
let len = arr3.length;
console.log(arr3[len-1]);
