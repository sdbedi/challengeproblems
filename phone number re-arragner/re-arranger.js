unction solution(S) {
    // write your code in JavaScript (Node.js 6.4.0)
    S = S.split(' ').join('');
    S = S.replace(/-/g, "");

    var ticker = 0
    
    for (var i = 0; i < S.length; i ++) {
  
      if (ticker + 1 === 3) {
        var output = [S.slice(0, i + 1), "-", S.slice(i + 1)].join('');
        S = output
        ticker = -2
      }
  
     ticker ++ 
  
   }

if (S[i-1] === "-") {
       S = S.slice(0, -1)
       }
       
if (S[i-2] === "-") {
       var temp = S[i-3]
       var last = S[i-1]
      var corrected = [S.slice(0, i - 3), "-", temp, last].join('');
      S = corrected
       }
   
   return S
}