const operation = require('./operation');



/* 
menu driven program
add,sub,mul,div,mod,regex,exit

*/

var arr = process.argv.slice(2);
var key = parseInt(arr[0]);

do {
    console.log("Menu");
    console.log("1. Addition");
    console.log("2. Substraction");
    console.log("3. Multiplication");
    console.log("4. Division");
    console.log("5. Modulos");
    console.log("6. (a+b)*c");
    console.log("7. Exit");    

        
    if(key==1){
        console.log("Addition");
        console.log("Sum is: "+ operation.add(arr));
        break;

    }else if(key == 2 ){
        console.log("Substaction");

        var response = operation.sub(arr);

        if(response === -1){
            console.log("You have entered more than 2 number for substraction!");
        }else{
            console.log("Substraction is: "+ operation.sub(arr));
        }
        break;

    }else if(key == 3 ){
        console.log("Multiplication");
        console.log("Multiplication is: "+ operation.mul(arr));
        break;
        
    }else if(key == 4){
        console.log("Division");

        if(operation.div(arr) === -1){
            console.log("You have entered more than 2 number for Division!");

        }else if(operation.div(arr) === -2){
            console.log("Value cannot be divide by 0");

        }else{
            console.log("Division is: " + operation.div(arr));
        }
        break;

    }else if(key == 5){
        console.log("Modulus");

        if(operation.mod(arr) === -1){
            console.log("You have entered more than 2 number for calculate Modulas!");

        }else if(operation.mod(arr) === -2){
            console.log("Value cannot be Module by 0");

        }else{
            console.log("Modulas is: " + operation.mod(arr));
        }
        break;

    }else if(key == 6){

        if(operation.regex(arr) == "error"){
            console.log("You have entered wrong input");
        }else{
            console.log("Value of expression ("+ arr[1]+ "+" + arr[2]+ ")*"+ arr[3]+" is: " + operation.regex(arr));
        }
        

        break;
    }
    
    else{

        console.log("Exit");
        break;
    }
        
}while(key!=7);
            

