// 1.Do the below programs in anonymous function & IIFE
// a.Print odd numbers in an array
var arr=[11,12,13,14,15,16,17,18,19,20];
 (function(arr){
    var temp=[];
    for(var i=0;i<arr.length;i++){
     if(arr[i]%2===1){            
          temp.push (arr[i]);
    }
    }
    console.log(temp);
 })(arr);
//  b.Convert all the strings to title caps in a string array
var str="my name is shree";
(function(str){
    str=str.split(" ")
    for(i=0;i<str.length;i++){
        var temp=str[i];
        temp=temp[0].toUpperCase();
        temp=temp+str[i].slice(1,str[i].length)
        str[i]=temp
    }
    console.log(str.join(" "))
}(str));
// C.Sum of all numbers in an array
var sum=0;
function add(...all){
   for(var i=0;i<all.length;i++){
        sum=sum+all[i];
    }
    return sum;
}
console.log(add(2,3,4,5,6,7,8,9,11));
// d.Return all the prime numbers in an array
var str=[2,3,4,5,6,7,13,14,15,16,17];
(function(str){
    var temp=[];
    for(i=0;i<str.length;i++){
    var flag=true;
        for(j=2;j<str[i];j++){
            if(str[i]%j==0){
                flag=false;
            }
        } if(flag==true)
        temp.push(str[i]);
    }
    console.log(temp)
}(str));
// e.Return all the palindromes in an array
var arr=[1,11,343,411,575,600,7887,80108,999,11];
(function(a){
    var result="";
    var ans="";
   
    for(i=0;i<a.length;i++)
    {
        result+=a[i];
        var count=0 ;
        
        for(j=0;j<result.length;j++)
        {
            if(result[j]===result[((result.length-1)-j)])
            {
                count++ ;
               
            }
        }
        if(count===result.length)
        {
           
            ans+=result+" " ;
        }
       
        result="";
      
    }
    console.log(ans);
 
}) (arr); doubt
// f.Return median of two sorted arrays of the same size
let arr1=[1,12,15,26,38,43];
let arr2=[2,13,17,30,45,47];
(function(arr1,arr2){
    var concat=arr1.concat(arr2).sort((a,b)=>a-b);
    var length=concat.length;
    if(length%2==1){
        console.log("The median is:",concat[((length)/2)-0.5]);
    }
    else{
        console.log("The median is:",(concat[length/2]+concat[(length/2)-1])/2)
    }
})(arr1,arr2);
// g.Remove duplicates from an array
var foo=["x","w","d","w","x"];
function  filterDuplicates(new_foo){
    return new_foo.filter((value,index)=>new_foo.indexOf(value)===index);
}
console.log(filterDuplicates(foo));
// h.Rotate an array by K times:
const cool=[1,2,3,6,7,8,9,10];
const k=3;
let rotatedcool=function(cool,rotation){
    const toRotate=cool.concat();
    for(let i=0;i<rotation;i++){
        const elements=toRotate.shift();
        toRotate.push(elements);
    }
    return toRotate;
}
console.log(rotatedcool(cool,k));

 
//3. Do the below programs in arrow functions
// a.Print odd numbers in an array
let arr5=[1,2,3,4,5,6,7,8,9,10,11,12,13,14];
let odds=arr5.filter(n=>n%2===1)
console.log(odds);
// b.Convert all the strings to title caps in a string array
function getTitleCase(str){
return str
// 1.Split the string unto an array of words.using the split()method.
.split(' ')
// 2.Use the map()method to convert each word to titlecase.
.map(word=>{
    return word.charAt(0).toUpperCase()+word.slice(1).toLowerCase();
}) 
// 3.Use the join()methid to join the words into a single array.
.join(' ');
}
console.log(getTitleCase('my name is shree'));  
// c.Sum of all numbers in an array
var addition =(a,b,c,d,e)=>a+b+c+d+e;
console.log(addition(10,2,3,1,4,));
// Return all the prime numbers in an array
var numArray = [2, 3, 4, 5, 6, 7, 8, 9, 10]
numArray = numArray.filter((number) => {
  for (var i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true;
});
console.log(numArray);

// e.Return all the palindromes in an array
const awesome = [1, 5, 7, 4, 15, 4, 7, 5, 1];
const isPalindrome1 = awesome=>{
   const { length: l } = awesome;
   const mid = Math.floor(l / 2);
   for(let i = 0; i <= mid; i++){
      if(awesome[i] !== awesome[l-i-1]){
         return false;
      };
   };
   return true;
};
console.log(isPalindrome1(awesome));