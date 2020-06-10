function multiples(m, n){
    var b = [];
    for(i=0;i<m;i++){
      var mult = i+1;
      b.push(mult*n);  
    }
    
    return b;
  
  }
 
  multiples(3,5);
