//Part 1 - Range function
function range(start, end){
  let arry = [];
  for(i = start; i<= end; i++){
    arry.push(i);
  } return arry;
}
range(1, 10);

//Part 2 - Sum function
function sumOf(start, end){
  let begin = 0;
  for(i = start; i<= end; i++){
    begin += i;
  } return begin;
}
sumOf(1, 10); 

//Part 3 - Step function
function stepped(start, end, step){
let box1 = [];
let box2 = [];
if(end < start){ //end is less than start (10, 1, -2)
  for(i = start; i >= end; i = i + step){
    box1.push(i);
    console.log(box1);
  } 
  return box1;
} else if(start < end){
    for(i = start; i <= end; i = i + step){ //start less than end (1, 10, 2)
      box2.push(i);
      console.log(box2);
    } 
    return box2;
  }
}
stepped(10, 1, -2);
stepped(1, 10, 2);


// Part 1 - Reverse Array 
function reverse(array){
  let holder = [];
  let box3 = [];
  for(let i of array){
    holder.push(i);
  } console.log(holder);
    for(i = holder.length-1; i>= 0; i--){
      box3.push(holder[i]);
    } console.log(box3);
      return box3;
}
reverse(["A","B","C"]);
reverse([1,2,3,4,5]);

//Part 2 - Reverse In Place
function inPlace(array){
  // reverse(array); //Bri's solution. LoLz
  for(i = array.length-1; i >= 0; i--){
     array.push(array[i]);
     console.log(array);
  }
    array.splice(array.length-array.length,array.length/2);
    return array;
}
inPlace(["Dogs", "cats", "bunnies", "snakes","bird"]);
inPlace([1,3,5,7,9]);


//Didn't do the Object questions b/c I couldn't figure them out. Will revisit later...maybe 