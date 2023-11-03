var student1 ={id: 202,
     name : 'Hablu',
      mobile: 1011245
    };
var mobile = {
    colour: 'green',
    price: 10000,
    ram: '4gb'
};
console.log(mobile);
var mobile_colour = mobile.colour;    // mobile property dekar niom 
console.log(mobile_colour); 
var namee = student1["name"]; /// stdent object e duke name print korbe (duivhbe deka jai rki)
console.log(namee);
console.log("--------------------------------------------------------------------------------------------------------------------------------");


// another object array work;
/* find the chippest price from mobile object array eklement*/
const mobiles =[
    {phone : 'samsung', price: 10000, ram : 4, camra : 18},
    {phone : 'realme', price: 100450, ram : 4, camra : 18},
    {phone : 'Nokia', price: 9000, ram : 4, camra : 18},
    {phone : 'huwaie', price: 12200, ram : 4, camra : 18},

]
let chepest= mobiles[0];
for( const mobile of mobiles){
    if(mobile.price< chepest.price) chepest = mobile;
}
console.log(chepest);


const prices = mobiles.map(mobile => mobile.price);

console.log('Mobile Prices:', prices);