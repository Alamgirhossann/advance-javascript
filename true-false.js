//falsey value
// 0
//null
//undefined
//false
//""
//NaN
//truthy
//"0", " ", [], {}, "false"

let name = 0;
if(name || name == 0){
console.log("this is true");
}
else{
    console.log("this is false");
}