let number = Number(prompt("Enter the number"))
let result = []

  for(let i = 0;i < 1000;i++) {
  
    if(number % 2 == 0) {
         result.push("0")
          number = number / 2;
          console.log(0: result --- ${number})
          if(number == 0) {
            console.log(result)
            result.splice(-1,1)
            break;
          }
    }
    else if(number % 2 == 1) {
      result.push("1")
      
      number = number / 2;
      number = Math.floor(number)
      console.log(1: result --- ${number})
    }
  }
console.log(result.reverse())
console.log(result.toString())

