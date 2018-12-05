/** Object get the properties from parent objects  **/

var amithab = new Object();                                     // This is first Object

amithab.fname = "Amithab";
amithab.lname = "Bachan";
amithab.age = 74;
amithab.skills = ["c", "Java", "PHP"];
amithab.address = {city:"hyderabad", 
                    pincode: 509751};
amithab.Dob = (Date = '23/07/1996');
amithab.married = true;
amithab.profession = "actor";

var abhishek = Object.create(amithab);                          // Second Object.

abhishek.fname = "Abhishek";
abhishek.age = 48;
abhishek.skills = ["c", "python", "PHP"];
abhishek.Dob = (Date = '12/08/1995');


console.log(abhishek.lname);                                    // Printing the last name by getting it from parent object