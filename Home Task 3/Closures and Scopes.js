function createFunctions(n) {
  var callbacks = [];
 var x=0;

  for (var i=0; i<n; i++) {
    callbacks.push(function() {
      return x++;
    });
  }
  
  return callbacks;
}