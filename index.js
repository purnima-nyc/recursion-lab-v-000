// Code your solution here!
// str = "ban", program prints "b", "a", "n"
const printString = (str) => {
  while(i<str.length){
    i++
    printString(str[i])
  }
}
