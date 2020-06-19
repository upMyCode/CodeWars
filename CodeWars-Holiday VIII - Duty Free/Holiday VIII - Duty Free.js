function dutyFree(normPrice, discount, hol){
    var newPrice = normPrice*(discount/100);
    return Math.floor(hol/newPrice);
}