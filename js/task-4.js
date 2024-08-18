function getShippingCost(country) {
    let countryName;
    switch (country) {
        case `China`:
            countryName = "Shipping to China will cost 100 credits";
            break;
        case `Chile`: 
            countryName = "Shipping to Chile will cost 250 credits";
            break;
        case `Australia`:
            countryName = "Shipping to Australia will cost 170 credits";
            break;
        case `Jamaica`: 
            countryName = "Shipping to Jamaica will cost 120 credits";
            break;
    
        default:
            countryName = "Sorry, there is no delivery to your country";
    }
    return countryName; 
}







console.log(getShippingCost("Australia"));
console.log(getShippingCost("Germany"));
console.log(getShippingCost("China"));
console.log(getShippingCost("Chile"));
console.log(getShippingCost("Jamaica"));
console.log(getShippingCost("Sweden"));