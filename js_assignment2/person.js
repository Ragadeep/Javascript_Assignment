/** Creating objects and excute it by using global print Method **/

var person1 = new Object();

person1.fname = "Ragadeep";
person1.lname = "Pola";
person1.age = 22;
person1.skills = ["c", "Java", "PHP"];
person1.address = {city:"hyderabad", 
                    pincode: 509751};
person1.Dob = (Date = '23/07/1996');
person1.married = false;
person1.profession = "software employee";

var person2 = new Object();

person2.fname = "Shabzan";
person2.lname = "Shaik";
person2.age = 22;
person2.skills = ["c", "python", "PHP"];
person2.address = {city:"Guntur", 
                    pincode: 599751};
person2.Dob = (Date = '12/08/1995');
person2.married = true;
person2.profession = "software developer";

print = function(x){
    console.log(x);
}

print(person1);
print(person2);