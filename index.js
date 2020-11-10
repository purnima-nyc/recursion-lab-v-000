// Code your solution here!
// str = "ban", program prints "b", "a", "n"
const printString = (str) => {
  console.log(str[0])
  while(i<str.length){
    i++
    printString(str[i])
  }
}
