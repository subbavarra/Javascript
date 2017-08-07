function prefill(n, v) {

if(n==0)
return []; 

if ( !isNaN(parseFloat(n)) && isFinite(n) &&  parseInt(n) === n && n>0)
{

var array = new Array(n);
array.fill(v);

return array;
}
else
throw new TypeError(n+' is invalid');
  

}

