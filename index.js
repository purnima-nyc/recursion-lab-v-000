// Code your solution here!
// str = "ban", program prints "b", "a", "n"
function printString(str) {
  console.log(str[0])
  if(str.length > 1) {
    let newString = str.substring(1, str.length)
    printString(newString)
  }
  else {
    return true
  }
}
