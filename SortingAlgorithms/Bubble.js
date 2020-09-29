export function bubbleSort(array){
    const animations = [];
    const auxiliaryArray = array.slice();
    const length = array.length;

    for (let i = 0; i < length; i++){
        for (let j = 0; j < length; j++) {
            animations.push([j, j])
            animations.push([j, j])
            
            if (auxiliaryArray[j] > auxiliaryArray[j + 1]) {

                let temp = auxiliaryArray[j];
                auxiliaryArray[j] = auxiliaryArray[j + 1];
                auxiliaryArray[j + 1] = temp;
                

                animations.push([j, auxiliaryArray[j]]);
                
            } else {

                animations.push([j, auxiliaryArray[j]])
            }
        }
    }

    return animations;
}
