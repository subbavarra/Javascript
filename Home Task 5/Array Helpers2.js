Array.prototype.square = function() {
	var array=[];
  for(var x of this)  {
  array.push(x*x);
  }
  return array;
}
Array.prototype.cube = function() {
	var array=[];
  for(var x of this)  {
  array.push(x*x*x);
  }
  return array;
}
Array.prototype.sum = function() {
	var total=0;
  for(var x of this)  {
  total=total+x;
  }
  return total;
}
Array.prototype.average = function() {
	var avg=0;
  for(var x of this)  {
  avg=avg+x;
  }
  return avg/this.length;
}
Array.prototype.even = function() {
	var array=[];
  for(var x of this)  {
  if(x%2==0)
  array.push(x);
  }
  return array;
}
Array.prototype.odd = function() {
	var array=[];
  for(var x of this)  {
   if(x%2==1)
  array.push(x);
  }
  return array;
}
