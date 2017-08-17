const compose = (f, g) => (a) => {

var args = new Array();
    for (var i = 1; i < arguments.length; i++)
        args.push(arguments[i])
        
         f.apply(null, Array.prototype.slice.call(arguments, 1));

return f(g(a));


}