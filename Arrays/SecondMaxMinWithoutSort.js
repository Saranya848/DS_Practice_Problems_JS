/* 1. Write a program in the following steps
*/





var arr = [];
var firstlargNum = 0;
var secondLargNum = 0;
var firstsmallNum = 0;
var secondsmallNum = 0;
for (let i=1; i<=10; i++){
    /*a. Generates 10 Random 3 Digit number.*/
    let number = Math.floor(Math.random()*((999-100)+1)+100);
    arr.push(number);
    if(number > firstlargNum){
        firstlargNum = number;
    }

}
for (let i=1; i<=10; i++){
    /*a. Generates 10 Random 3 Digit number.*/
    let number = Math.floor(Math.random()*((999-100)+1)+100);
    arr.push(number);
    if(number < firstsmallNum){
        firstsmallNum = number;
    }
}
/*
b. Store this random numbers into a array.
*/
for(let i = 0; i < arr.length; i++){
    if(secondLargNum < arr[i] && arr[i] != firstlargNum){
        secondLargNum = arr[i];
    }
}
for(let i = 0; i < arr.length; i++){
    if(firstsmallNum < arr[i] && arr[i] != secondsmallNum){
        result.push(uniqa[1],uniqa[uniqa.length-2]);
    }
}
/*c. Then find the 2nd largest and the 2nd smallest element without sorting the array.
*/
console.log('The arrays items : ' + arr + '. \nThe second largest number is : ' + secondLargNum);
console.log('The arrays items : ' + arr + '. \nThe second smallest number is : ' + secondsmallNum);