function threeFunc(){

    var arr = [];

    for(var i = 0; i < 3; i++){
        let j = i;
        arr.push(function(){           
            console.log(j);
        });
    }
    return arr;
}

var fs = threeFunc();

fs[0]();
fs[1]();
fs[2]();

function threeFunc(){

    var arr = [];

    for(var i = 0; i < 3; i++){
        arr.push(
            (function(j){
                return function(){
                    console.log(j);
                }
            }(i))
        );
    }
    return arr;
}

var fs1 = threeFunc();

fs1[0]();
fs1[1]();
fs1[2]();


