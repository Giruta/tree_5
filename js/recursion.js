// --------counter-----------
function makeCounter() {
    let count = 0;

    return function() {
        return count++;
    };
}

let counter1 = makeCounter();

//-------factorial-----------

function factorial(n) {
    if (n < 0 ||
        parseInt(n) !== n ||
        n === null ||
        n === undefined ||
        n === NaN) {
        console.log('not valid data')
        return;
    }

    return n===0 ? 1 : n * this.factorial(n - 1);
}

//---------fibonacci --- recursion--------

function fib(n) {
    if (n < 0 ||
        parseInt(n) !== n ||
        n === null ||
        n === undefined ||
        n === NaN) {
        console.log('not valid data')
        return;
    }

    return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}

//-------fibonacci---closure-------------

function fibonacci (n) {

    if (n < 0 ||
        parseInt(n) !== n ||
        n === null ||
        n === undefined ||
        n === NaN) {
        console.log('not valid data')
        return;
    } else if (n === 0) return 0;

    let f = (function () {
        const arr = [0, 1];
        return function () {
            let len = arr.length - 1;
            let num = arr[len];
            arr.push(arr[len] + arr[len - 1]);
            return num;
        };
    }());

    for (let i = 1; i < n; i++) {
        console.log(`${i} = `,f());
        // f();
    }

    return f();
}

// -------------binary--search-------------

function binarySearch(arr, start, end, x) {

    if (typeof x !== 'number'||
        parseInt(x) !== x ||
        arr.length === 0) {

        return;
    }

    let middle = Math.floor((start + end) / 2);

    if (start > end && end - 1 < start) {

        return;
    }

    if (arr[middle] === x) {

        return middle;

    } else if (arr[middle] > x) {

        return binarySearch(arr, start, middle - 1, x);

    } else {

        return binarySearch(arr, middle + 1, end, x);

    }
}

// console.log('fib(0) = ', fib(0) ); // 0
// console.log('fib(1) = ', fib(1) ); // 1
// console.log('fib(2) = ', fib(2) ); // 1
// console.log('fib(3) = ', fib(3) ); // 2
// console.log('fib(4) = ', fib(4) ); // 3
// console.log('fib(5) = ', fib(5) ); // 5
// console.log('fib(10) = ', fib(10) ); // 55
// console.log('fib(2.5) = ', fib(2.5) ); // undefined
// console.log('fib(-7) = ', fib(-7) ); // undefined
// console.log('fib(null) = ', fib(null) ); // undefined
// console.log('fib(``) = ', fib('') ); // undefined
// console.log('fib([]) = ', fib([]) ); // undefined

// console.log('fib(NaN) = ', fib(NaN) ); // 13
// console.log('fib({}) = ', fib({}) ); // 13
// console.log('fib(undefined) = ', fib(undefined) ); // 13
