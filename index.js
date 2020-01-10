//write a function that takes in an array of names and return an array of unique names. If the name already exists in the array, add a number behind it to make it unique. Increase the number by 1 if the name repeats again. Ex: input: ["ada", "john", "ada", "ada"]  output: ["ada", "john", "ada1", "ada2"]

let names = ["alex", "bailey", "alex", "calvin", "roger", "alex", "roger", "vicky", "alex"]

const uniqueNames = (array) => {
  let newArray = []
  let counter = {}

  for(let i = 0; i < array.length; i++){
    if(!newArray.includes(array[i])){
      counter[`${array[i]}`] = 0
      newArray.push(array[i])
    } else {
      counter[`${array[i]}`] += 1
      let newName = array[i] + counter[`${array[i]}`]
      newArray.push(newName)
    }
  }
  return newArray
}

uniqueNames(names)