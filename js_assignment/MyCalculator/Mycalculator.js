function calculator(){
    while (operation != 7) {

        var operation = prompt("What would you like to do?\n\n1. Addition\n2. subtraction\n3. multiplication\n4. division\n5. Exponent\n6. Mean\n7. Exit");
        
        if (operation == 1) {
        var num1 = prompt("Enter the first number");
        var num2 = prompt("Enter the second number");
        alert ("The sum is " + (Number(num1)+Number(num2)));
        
        } else if (operation == 2) {
        var num1 = prompt("Enter the first number");
        var num2 = prompt("Enter the second number");
        alert ("The difference is " + (Number(num1)-Number(num2)));
        
        } else if (operation == 3) {
        var num1 = prompt("Enter the first number");
        var num2 = prompt("Enter the second number");
        alert ("The product is " + (Number(num1)*Number(num2)));
        
        } else if (operation == 4) {
        var num1 = prompt("Enter the first number");
        var num2 = prompt("Enter the second number");
        alert ("The quotiant is " + (Number(num1)/Number(num2)));
        
        } else if (operation == 5) {
        var num1 = prompt("Enter the number");
        var num2 = prompt("Enter the power value");
        alert ("The square root is " + Math.pow(Number(num1),Number(num2)));
        } else if (operation == 6) {
        
        } else if (operation > 7 || operation < 1 ){
        alert("select again");
        }
        }
        
}