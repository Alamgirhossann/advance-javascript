function add(num1, num2){
    console.log([...arguments]);
    return num1 + num2 + arguments[2];
}
const result = add(5, 8, 7, 10);
console.log(result);
add.indexOf(10);