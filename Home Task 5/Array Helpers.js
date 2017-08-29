Array.prototype.square = function() {
return this.map(function(x) {
   return x * x;
});
}
Array.prototype.cube = function() {
return this.map(function(x) {
   return x * x*x;
});
}
Array.prototype.sum = function() {

return this.reduce(function(a,b){return a+b;},0);
}
Array.prototype.average = function() {
return this.sum()/this.length;
}

Array.prototype.even = function() {
 var ret = [];
 this.map(function(val) { 
     if(val%2==0)
   ret.push(val);
});
   return ret;
}

Array.prototype.odd = function() {
 var ret = [];
 this.map(function(val) { 
     if(val%2==1)
   ret.push(val);
});
   return ret;
}
