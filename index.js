// Code your solution here!
// str = "ban", program prints "b", "a", "n"
const printString = (str) => {
  let i = 0
  while(i<str.length){
    console.log(str[0])
    i++
    printString(str[i])
  }
}
