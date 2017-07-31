function rentalCarCost(d) {
 var dailyPrice=40;
if(d>=7)
{
 return d*dailyPrice-50;
}
else if (d>=3)
{
 return d*dailyPrice-20; 
}
else
 return d*dailyPrice;
}