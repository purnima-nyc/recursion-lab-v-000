// Code your solution here!
// str = "ban", program prints "b", "a", "n"
const printString = (str) => {
  console.log(str[0])
  if(str.length > 1) {
    printString(str[i+1])
  }
  // while(i<str.length){
  //   i++
  //   printString(str[i])
  // }
}
