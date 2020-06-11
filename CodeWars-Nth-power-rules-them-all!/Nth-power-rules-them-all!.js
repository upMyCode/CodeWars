function modifiedSum(a, n) {
    var firstSum = 0;
    var secondSum = 0;
    for (i = 0; i < a.length; i++){
     var value = (a[i])**n ;
     firstSum += value;
     var secondValue = a[i];
     secondSum += secondValue;
    }
      return firstSum-secondSum;
   }

   modifiedSum([1,2,3,4], 5);