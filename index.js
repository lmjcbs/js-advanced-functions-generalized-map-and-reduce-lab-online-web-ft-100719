const map = (array, func) => {
  const newArray = []
  array.forEach(element => {
    newArray.push(func(element))  
  });
  return newArray
}

const reduce = (array, func, initial) => {
  let result = !!initial ? initial : array[0];
  let i = !!initial ? 0 : 1;
  for (; i < array.length; i++) {
    result = func(array[i], result)
  }
  return result
}