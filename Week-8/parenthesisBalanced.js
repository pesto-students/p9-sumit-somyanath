const openingBrackets = ['[', '{', '('];

const balancedExpression = (expression) => {
    let stack = [];

    for (let i = 0; i < expression.length; i++) {
        let x = expression[i];

        if (openingBrackets.includes(x)) {
            stack.push(x);
            continue;
        }

        if (stack.length === 0) {
            return false;
        }

        let check = stack.pop();

        switch (x) {
            case ')':
                if (check === '{' || check === '[') {
                    return false
                }
                break;
            case '}':
                if (check === '(' || check === '[') {
                    return false
                }
                break;
            case ']':
                if (check === '(' || check === '{') {
                    return false
                }
                break;
        }
    }

    return stack.length === 0;
}

console.log(balancedExpression("[(){()()}"));

/*
TC: O(N);
SC: O(N);
*/