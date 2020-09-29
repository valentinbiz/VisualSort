export function insertionSort(array) {
    const length = array.length;
    const animations = [];
    const auxiliaryArray = array.slice();

    for (let i = 0; i < length ; i++) {
        if (auxiliaryArray[i] < auxiliaryArray[0]) {
            auxiliaryArray.unshift(auxiliaryArray.splice(i,1)[0]);
        } else {
        for (let j = 0; j < i + 1; j++) {
            animations.push([j, j])
            animations.push([j, j])

            if (auxiliaryArray[i] > auxiliaryArray[j-1] && auxiliaryArray[i] < auxiliaryArray[j]) {
                auxiliaryArray.splice(j, 0, auxiliaryArray.splice(i, 1)[0]);
                animations.push([j, auxiliaryArray[j]])
            } else {
                animations.push([j, auxiliaryArray[j]])
          }
        }
      }
    }
    return animations;
  }