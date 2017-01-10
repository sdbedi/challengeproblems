function coinSums (total) {
  // Write your code here, and
  // return your final answer.
 let combinations = 0;
 let counter = (i,val) => {
   if(i===0){
     combinations++;
     return
   }
   while(val >= 0 ){
     counter(i-1, val)
     val-=coins[i];
   }
 }
 counter(coins.length-1,total)
 return combinations;
}