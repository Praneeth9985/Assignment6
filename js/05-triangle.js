/*eslint-env browser*/
var result = "";
for (var i = 1 ; i <= 7 ; i++) {
    for(var j = 1 ; j <= i ; j++){
        result += "#";
    }
    result += "\n";
}
window.console.log(result);