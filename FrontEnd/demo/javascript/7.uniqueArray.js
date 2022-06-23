const _uniqueArray = (arr) => {
  let newArr = []

  arr.forEach(item => {
    if (newArr.indexOf(item) === -1) {
      newArr.push(item)
    } 
  });

  return newArr
}

//#region test
  let arr = [2, 5, 4, 2, 6, 3, 4]

  let uniqueArr = _uniqueArray(arr)

  console.log(uniqueArr)
//#endregion