module.exports = function check(str) {
  let stack = [];
    let bracketsConfig = {
        '(': ')',
        '[': ']',
        '{': '}',
         '|':'|',
    }

    for (let i = 0; i < str.length; i++) {

        // checking if a bracket is opening or not 
           if (str[i] === '(' || str[i] === '{' || str[i] === '[' || str[i] ==='|') {
            stack.push(str[i]);
             }
        //  If that character is a closing brace, pop from the stack, which will also reduce the length of the stack each time a closing bracket is encountered.
              else {
           
            let last = stack.pop();

            //if last bracket that is popped doesnt match with opening bracket - it is false
            if (str[i] != bracketsConfig[last]) 
            {return false};
        }
    }
    // By the completion of the for loop after checking all the brackets of the str, at the end, if the stack is not empty then fail
        if (stack.length != 0) 
        {return false};

    return true;
}
