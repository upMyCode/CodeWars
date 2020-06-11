function largestPairSum(numbers){
  var newArr = numbers.sort(function(a,b){ return a-b});
 console.log(newArr)
  var sum = newArr[newArr.length-1] + newArr[newArr.length-2];
    return sum;
}
largestPairSum([-10, -8, -16, -18, -19]);