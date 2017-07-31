// partition the items array so that all values for which pred returns true are
// at the end, returning the index of the first true value
function partitionOn(pred, items) {
var firstNo;
for(var i=0;i<items.length;i++)
{
if(pred(items[i]))
{
firstNo=items[i];
 break;
 }
}

items.sort(function(a, b) {
  return b % 2 - a % 2
});

return items.indexOf(firstNo);
}

