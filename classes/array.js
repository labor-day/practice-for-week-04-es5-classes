// Your code here

Array.prototype.isEqual = function(arr) {

  return this.reduce(
    (equal, element, index) => {
      if (element !== arr[index]) {
        equal = false;
        return equal;
      }
      return equal;
    }, true
  );
}
