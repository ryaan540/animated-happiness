/*
use bracket notation to read the values of the properties with non-standard names (12 and false) from the myCar object.
Assign these values to the variables carManufacturer and carModel respectively.

Expected Output:
carManufacturer should be "mercedes"
carModel should be "class G"

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
let carManufacturer = myCar["manufacturer"];
let carModel = myCar["model"];
let carType = myCar["type"];
let dealerLocation =  myCar["dealer"]["location"];
let  dealerName = myCar["dealer"]["name"];
let taxAmount = myCar["taxes"]();

// Do not change the code below this line
console.log("carManufacturer:", carManufacturer);
console.log("carModel:", carModel);
console.log(typeof carManufacturer);
console.log(typeof carModel);
console.log("carType:", carType);
console.log("dealerLocation:", dealerLocation);
console.log("dealerName:", dealerName);
console.log("taxAmount:", taxAmount);
console.log(typeof taxAmount);

/*
use dot notation to read the values of the properties with standard names (manufacturer and model) from the myCar object.
Assign these values to the variables carManufacturer and carModel respectively.

Expected Output:
carManufacturer should be "mercedes"
carModel should be "class G"
*/

// Write your code here
//carManufacturer = myCar.manufacturer;
//carModel = myCar.model;
//carType = myCar.type;
//dealerLocation = myCar.dealer.location;
//dealerName = myCar.dealer.name;

// Do not change the code below this line
//console.log("carManufacturer:", carManufacturer);
//console.log("carModel:", carModel);
//console.log(typeof carManufacturer);
//console.log(typeof carModel);
//console.log("carType:", carType);
//console.log("dealerLocation:", dealerLocation);
//console.log("dealerName:", myCar.dealer.name);
