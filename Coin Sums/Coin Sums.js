// Coin Sums
// In England the currency is made up of pound, £, and pence, p, and there are eight coins in general circulation:

// 1p
// 2p
// 5p
// 10p
// 20p
// 50p
// £1 (100p)
// £2 (200p)
// Given a given number of pence, return the possible number of ways someone could make change.

// It is possible to make 5 pence in the following ways:

// 5 * 1p

// 3 * 1p + 1 * 2p

// 1 * 1p + 2 * 2p

// 1 * 5p

// Examples
// Input Output
// total:
// 1 1
// total:
// 17  28

var coins = [1,2,5,10,20,50,100,200];



function coinSums (total) {
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