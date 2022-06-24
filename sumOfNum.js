
let result=0;
let num=57492;

 for(var i=0;i<=num;i++){

     result+=Math.floor(num % 10);

    num=num/10;
 }
console.log(result);