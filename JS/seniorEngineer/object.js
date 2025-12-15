 


 let manufacturer = "mercedes";
 let model = "class G";
 let type = "G-Wagon";
 let color = "black";
 let fuelConsumptionInKml = 15;
 let is_safe = true;
 let is_a_business_car = false;
 let has_sun_roof = true;

 let myCar = {
    12 : "mercedes",
    false : "class G",
    type :" G-Wagon",
    color : "black",
    fuelConsumptionInKml : 15,
    is_safe : true,
    is_a_business_car : false,
    has_sun_roof : true,
    dealer : {
        name : "Best Car Dealer",
        address : "123 Main St, Anytown, USA",
        contact_number : "555-1234"
      },
      taxes : function() {
         let tax = fuelConsumptionInKml * 0.05;
         return tax;
      },
      "capacity_in_liters" : 80,
      "true" : false,
      0 : "This is a special key",
    };
    console.table (myCar);  
    console.table(typeof myCar);
