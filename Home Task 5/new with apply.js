function construct(Class) {
var args=[];
for (var i = 1; i < arguments.length; i++) {
    args.push(arguments[i]);
    console.log(arguments[i]);
  }
return new Class(args.join());
}

function construct(Class,arg1,arg2,arg3,arg4,arg5) {
return new Class(arg1,arg2,arg3,arg4,arg5);
}

