function compose(f,g) {
var compfunc = (param) => 
{
return f(g(param));
}
return compfunc;
}