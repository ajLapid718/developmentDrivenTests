const reverseArrRec = function(arr) {
  if (arr.length <= 1) return arr;
  return reverseArrRec(arr.slice(1)).concat(arr[0]);
}

module.exports = {
  reverseArrRec
}
