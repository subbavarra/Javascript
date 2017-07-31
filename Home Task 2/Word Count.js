function countWords(str) {
var strings=str.split(" ");

 f.apply(this,strings);
 strings = strings.filter(function( element ) {
   return element !== '';
});
return strings.length;
}
var f = function (str) {
str.trim();
str=str.replace(/[\W_]+/g," ");
};