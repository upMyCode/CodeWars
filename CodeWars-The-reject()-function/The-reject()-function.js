function reject(array, predicate) {
    var c = array.filter((n) => !predicate(n)) ;
    return c
  }