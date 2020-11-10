// Code your solution here!
// str = "ban", program prints "b", "a", "n"
const printString = (str) => {
  let i = 0;
  console.log(str[i])
  while(i<str.length){
    printString(str[i+1])
  }
  console.log()
}
