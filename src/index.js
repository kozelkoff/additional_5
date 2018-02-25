module.exports = function check(str, bracketsConfig) {
    // your solution

    var lengthOfPar = bracketsConfig.length;
    var stack = [];
    var counter2 = 0;

    for(let i=0; i<str.length; i++){
        for(let j=0; j<lengthOfPar; j++){
            var openBracket = bracketsConfig[j][0];
            var closeBracket = bracketsConfig[j][1];
            counter2 = 0;
            if(str[i]==closeBracket && stack.length ==0 && openBracket != closeBracket)
                return false;
            if(str[i]==closeBracket && stack.length !=0){
                var t = stack[stack.length - 1];
                if(t==openBracket) stack.pop();
                counter2 = 1;
            }
            if(str[i]==openBracket && counter2 !=1){
                stack.push(str[i]);
            }
        }
    }
    if (stack.length==0){
        return true;
    }
    else return false;
}