var fs = require('fs');
 

var a = function(){
    console.log('콜백함수가 나를 불렀어');
}
   
   
function slowfunc(callback){
fs.readFile('sample.txt', 'utf8', function(err, result){
    console.log(result);
});
callback();
}

slowfunc(a);
