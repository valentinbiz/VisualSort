export function selectionSort(array) {
  const animations = [];
  const auxiliaryArray = array.slice();
  if (array.length <= 1) return array;
  const length = array.length;

  for (let i = 0; i < length; i++){
    let min = i;
    let temp = auxiliaryArray[i];
    
    for (let j = i; j < length; j++) {
      animations.push([j, j])
      animations.push([ j, j])
      
      if (auxiliaryArray[j] < auxiliaryArray[min]) {
        min = j 
        animations.push([j, auxiliaryArray[j]])

      } else {
        animations.push([i, auxiliaryArray[min]])
      }
      
    
    }
      
    auxiliaryArray[i] = auxiliaryArray[min];
    auxiliaryArray[min] = temp;
   

    
  }
  return animations;
}
  