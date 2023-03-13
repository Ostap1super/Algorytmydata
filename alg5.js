
  let first_value = new Array()
 first_value = [[],[]]

let i_2 = 1;
   let i = 0;
    let x = prompt("How many elements you want to add to array");
while(i < x){
first_value[0][i] = prompt("Enter that you want to add to array 1");
i++;
}
while(i_2 < x){
first_value[1][i_2] = prompt("Enter that you want to add to array 2s");
i_2++;
}
alert(first_value[0] + " " + "1s")
 alert(first_value[1] + " " + "2s")

    let minInFirstArray = Math.min.apply(null,first_value[0])
       let minInSecondArray = Math.min.apply(null,first_value[1])
  console.log(minInFirstArray)
   console.log(minInSecondArray)
          first_value[0].unshift(minInFirstArray)
  console.log(first_value[0][0])
            first_value[1].unshift(minInSecondArray)
  console.log(first_value[1][0])
