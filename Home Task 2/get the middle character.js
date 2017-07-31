function getMiddle(s)
{
var oddOrEven=1;
if (s.length%2==0)
 oddOrEven=2;
 else
  oddOrEven=1;
 
 return s.substr(Math.ceil(s.length/2)-1,oddOrEven);
}
