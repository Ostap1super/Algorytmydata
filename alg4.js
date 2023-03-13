let first_value = new Array();
let i = 0
let x = prompt("How many elements you want to add to array");
while(i < x){
first_value[i] = prompt("Enter that you want to add to array");
 i++;
}
let v = Math.min.apply(null, first_value)
console.log(v)

