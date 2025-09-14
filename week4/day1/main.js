console.log("hello form js")


//datatypes
const var1 = "string"
const var2 = 4
const var3 = 4.1
const var4 = false


const arr = ["apple", "banana", "cherry"]

const obj = {
    name:"name",
    age:32,
    profession:"web dev"
}

const undef = undefined


//operations

let operations = 1+2
operations = "1" +"2"
operations = "1" + true
operations = "1" + undefined
operations = "1" + 4


//tyoe casting

parseFloat('3.1')
(500).toString()
Boolean(10)

// null  undefined 0 '' NaN are cinverted to 0 when catsed to boolean

const var5 = 10
const var6 = '10'

console.log(var5==var6);
console.log(var5===var6);



//condiitonal formatting

const num =5
if(num>0){
    log("num is positive")
}else if(num<0){
    console.log("num is not positive");
    
}else{
    console.log("num is 0");
    
}


switch(color){
    case "red":
        console.log("red col");
        break
    case "blue":
        console.log("blue");
        break
    default:
        console.log("not a valid col");
        
        
}


//looping
let i=0;
for(i=0;i<10;i++){
    console.log((i));
    
}
i=0;
while(i<10){
    console.log(i);
    i++
    
}
i=-1;
do{
console.log(i);

}while(i>0)


    const numarr=[1,2,3,4]

    for (const num of numarr){
        console.log('iteration num'+ num);
        
    }

function greet(name){
    console.log("hi", name);
    
}


greet("john")

const arrfunc=(a, b)=>{
    return a+b
}

