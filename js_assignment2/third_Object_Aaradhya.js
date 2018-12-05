/** Created 3 objects amithab, abhiskek, Aaradhya then 3rd object accquired properties from 2nd object and then 2nd accquired properties from 1st object **/

var amithab = new Object();                                                 // Object Creation(first object)

amithab.fname = "Amithab";                                                 
amithab.lname = "Bachan";
amithab.age = 74;
amithab.skills = ["c", "Java", "PHP"];
amithab.address = {city:"hyderabad", 
                    pincode: 509751};
amithab.Dob = (Date = '23/07/1996');
amithab.married = true;
amithab.profession = "actor";

var abhishek = Object.create(amithab);                                      // Second object.

abhishek.fname = "Abhishek";
abhishek.age = 48;
abhishek.skills = ["c", "python", "PHP"];
abhishek.Dob = (Date = '12/08/1995');

var Aaradhya = Object.create(abhishek);                                     // Third object.

Aaradhya.fname = "Aaradhya";
Aaradhya.age = 4;
Aaradhya.skills = ["c", "python", "PHP"];
Aaradhya.Dob = (Date = '22/07/2015');

console.log(Aaradhya.lname);                                                // lname printed by inherited parent objects.