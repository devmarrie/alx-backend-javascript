export default function appendToEachArrayValue(array, appendString) {
    const newArr = [];
    for (let idx of array) {
      newArr.push(appendString + idx);
    }
  
    return newArr;
  }