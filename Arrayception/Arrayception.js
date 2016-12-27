// Arrayception
// Given an array of arbitrarily nested arrays, return n, where n is the deepest level that contains a non-array value.

// Examples
// Input	Output
// array:
// [ [ 5 ], [ [ ] ] ]	2
// array:
// [ 10, 20, 30, 40 ]	1
// array:
// [ [ 10, 20 ], [ [ 30, [ 40 ] ] ] ]	4
// array:
// [ ]	0
// array:
// [ [ [ ] ] ]	0

function arrayception (array) {
  var max = 0;
  
  for (var i=0; i < array.length; i++){  
  
    if (array[i].length === 0){   
  
      count = 0;
  
    }
    
    else if (Array.isArray(array[i])){
      
      count = arrayception(array[i]);
    
      if (count>0) {
        count +=1
      }
    }
    
    else{
      count = 1;
    }
    
    if (count > max) {
      max = count;
    }
  
    
  }
  return max 

}
