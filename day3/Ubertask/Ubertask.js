let person = {
  name: "Tejas Saraf",
  rideFare: 1200,
  primeUser: false,
  originalPromoCode: "RIDE500",
  enteredPromoCode: "RIDE50",
  driverRating: 4.7,
};

let oldLocations = ["Pune", "Mumbai"];
let newLocations = ["Nashik", "Nagpur"];

function discountCalculator (amount){

    let discount = amount > 2000 ? 40 : 
                   amount > 1000 ? 30 :
                   amount > 500 ?  20 : 0 ; 

                   return discount ; 
}

let discountPercentage = discountCalculator(person.rideFare)

console.log(discountPercentage)

let rideType = person.primeUser ? 

          (person.originalPromoCode === person.enteredPromoCode) ? "Free Ride" : "Promo code Not Mached" 
          
          : "No Free Ride" ; 

console.log(rideType)