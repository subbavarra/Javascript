function createSecretHolder(secret) {

getSecret=function(){
return secret;
}
setSecret=function(x){
secret=x;
}
return this;
}