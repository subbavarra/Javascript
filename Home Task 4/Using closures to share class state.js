    
var Cat= (function(n,w) {
var weights=[];
    var _weight;
    return function() {
    
    Object.defineProperty(this,"weight",{
    get: function() { return _weight; },
    set: function(value) {  
    _weight=value;
    weights.push(_weight);
    }
  });


  averageWeight = (function() {
             var sum = weights.reduce(function(a, b) { return a + b; });
return sum / weights.length;
        });
  
    };
}());


 
   