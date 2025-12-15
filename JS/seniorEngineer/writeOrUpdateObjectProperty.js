/*
create or update a property on an object    

*/

let myCar = {
   manufacturer : "mercedes",
   model : "class G",
   type :" G-Wagon",
   color : "black",
   fuelConsumptionInKml : 15,
   is_safe : true,
   is_a_business_car : false,
   has_sun_roof : true,
   dealer : {
       name : "Best Car Dealer",
       address : "123 Main St, Anytown, USA",
       contact_number : "555-1234",
       location : "cbd"
     },
     taxes : function() {
        let tax = this.fuelConsumptionInKml * 0.05;
        return tax;
     },
     "capacity_in_liters" : 80,
     "true" : false,
     0 : "This is a special key",
   };
// Write your code here
myCar.color = "red"; // updating existing property
myCar.year = 2022; // creating new property
myCar.model = "class S"; // updating existing property
myCar["type"] = "s 550"; // updating existing property//

// Do not change the code below this line
console.table(myCar);

myCar.myCar=myCar