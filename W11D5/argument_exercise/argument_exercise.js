function sum() {
    let args = Array.from(arguments);
    let sum = 0;;
    args.forEach((el) => {
        sum += el;
    })
    return sum;
}

// console.log(sum(1, 2, 3, 4));
// console.log(sum(1, 2, 3, 4, 5));

function otherSum(...args) {
    let sum = 0
    args.forEach((el) => {
        sum += el;
    })
    return sum;
}

// console.log(otherSum(1, 2, 3, 4));
// console.log(otherSum(1, 2, 3, 4, 5));

Function.prototype.myBind = function(context) {
    const that = this;
    let args_arr = Array.from(arguments).slice(1);

    return function() {
        let args_array = Array.from(arguments);
        that.apply(context, args_arr.concat(args_array))
    }
}

Function.prototype.myBind = function(context, ...args) {
    const that = this;
    return (...args2) => {
        that.apply(context, args.concat(args2))
    }
}


function curriedSum(numArgs) {
    let numbers = [];

    function _curriedSum(num) {
        numbers.push(num);
        let sum = 0;
        if (numbers.length === numArgs) {
            for (let i = 0; i < numbers.length; i++) {
                sum += numbers[i];
            }
            return sum;
        } else {
            return _curriedSum;
        };
    };
    return _curriedSum;
};

// const curry = curriedSum(3);
// console.log(curry(5));
// console.log(curry(6));
// console.log(curry(7));

Function.prototype.curry = function(numArgs) {
    let args = [];
    const that = this;

    function _curried(num) {
        args.push(num)
        if (args.length === numArgs) {
            return that.apply(that, args);
        } else {
            return _curried;
        }
    }
    return _curried;
}

// function sumThree(num1, num2, num3) {
//     return num1 + num2 + num3;
// }

// func = sumThree.curry(3)
// console.log(func(10))
// console.log(func(10))
// console.log(func(10))