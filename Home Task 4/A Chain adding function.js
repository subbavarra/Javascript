var add = function (first) {
var fun= function(second){return add(first+second);}

 fun.valueOf =function(){return first;};
  return fun;

};

