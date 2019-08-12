describe('Tests for recursion, closure', () => {

    describe('make counter with closure', function() {

        it('should return 0 if makeCounter called 1', function () {
            //Given
            const value = 1;
            const expected = 0;
            let counter1 = makeCounter();

            //When
            let actual = counter1();

            //Then
            assert.deepEqual(actual, expected);
        });

        it('should return 1 if makeCounter called 2', function () {
            //Given
            const value = 2;
            const expected = 1;
            let counter1 = makeCounter();

            //When
            counter1();
            let actual = counter1();

            //Then
            assert.deepEqual(actual, expected);
        });

        it('should return 2 if makeCounter called 3', function () {
            //Given
            const value = 3;
            const expected = 2;
            let counter1 = makeCounter();

            //When
            counter1();
            counter1();
            let actual = counter1();

            //Then
            assert.deepEqual(actual, expected);
        });
    });

    describe('calculate factorial with recursion', function () {

        it('should return 24 if argument is 4', function () {
            //Given
            const value = 4;
            const expected = 24;

            //When
            let actual = factorial(value);

            //Then
            assert.deepEqual(actual, expected);
        });

        it('should return 120 if argument is 5', function () {
            //Given
            const value = 5;
            const expected = 120;

            //When
            let actual = factorial(value);

            //Then
            assert.deepEqual(actual, expected);
        });

        it('should return undefined if argument is -7', function () {
            //Given
            const value = -7;
            const expected = undefined;

            //When
            let actual = factorial(value);

            //Then
            assert.deepEqual(actual, expected);
        });

        it('should return 1 if argument is 0', function () {
            //Given
            const value = 0;
            const expected = 1;

            //When
            let actual = factorial(value);

            //Then
            assert.deepEqual(actual, expected);
        });

        it('should return undefined if argument is 0.5', function () {
            //Given
            const value = 0.5;
            const expected = undefined;

            //When
            let actual = factorial(value);

            //Then
            assert.deepEqual(actual, expected);
        });

        it('should return undefined if argument is null', function () {
            //Given
            const value = null;
            const expected = undefined;

            //When
            let actual = factorial(value);

            //Then
            assert.deepEqual(actual, expected);
        });

        it('should return undefined if argument is undefined', function () {
            //Given
            const value = undefined;
            const expected = undefined;

            //When
            let actual = factorial(value);

            //Then
            assert.deepEqual(actual, expected);
        });

        it('should return undefined if argument is `` ', function () {
            //Given
            const value = ``;
            const expected = undefined;

            //When
            let actual = factorial(value);

            //Then
            assert.deepEqual(actual, expected);
        });

        it('should return undefined if argument is {}', function () {
            //Given
            const value = {};
            const expected = undefined;

            //When
            let actual = factorial(value);

            //Then
            assert.deepEqual(actual, expected);
        });

        it('should return undefined if argument is []', function () {
            //Given
            const value = [];
            const expected = undefined;

            //When
            let actual = factorial(value);

            //Then
            assert.deepEqual(actual, expected);
        });

        it('should return undefined if argument is NaN', function () {
            //Given
            const value = NaN;
            const expected = undefined;

            //When
            let actual = factorial(value);

            //Then
            assert.deepEqual(actual, expected);
        });
    });

    describe('calculate Fibonacci numbers with recursion', function () {

        it('should return 0 if argument is 0', function () {
            //Given
            const value = 0;
            const expected = 0;

            //When
            let actual = fib(value);

            //Then
            assert.deepEqual(actual, expected);
        });

        it('should return 1 if argument is 1', function () {
            //Given
            const value = 1;
            const expected = 1;

            //When
            let actual = fib(value);

            //Then
            assert.deepEqual(actual, expected);
        });

        it('should return 1 if argument is 2', function () {
            //Given
            const value = 2;
            const expected = 1;

            //When
            let actual = fib(value);

            //Then
            assert.deepEqual(actual, expected);
        });

        it('should return 2 if argument is 3', function () {
            //Given
            const value = 3;
            const expected = 2;

            //When
            let actual = fib(value);

            //Then
            assert.deepEqual(actual, expected);
        });

        it('should return 3 if argument is 4', function () {
            //Given
            const value = 4;
            const expected = 3;

            //When
            let actual = fib(value);

            //Then
            assert.deepEqual(actual, expected);
        });

        it('should return 5 if argument is 5', function () {
            //Given
            const value = 5;
            const expected = 5;

            //When
            let actual = fib(value);

            //Then
            assert.deepEqual(actual, expected);
        });

        it('should return 55 if argument is 10', function () {
            //Given
            const value = 10;
            const expected = 55;

            //When
            let actual = fib(value);

            //Then
            assert.deepEqual(actual, expected);
        });

        it('should return undefined if argument is -7 ', function () {
            //Given
            const value = -7;
            const expected = undefined;

            //When
            let actual = fib(value);

            //Then
            assert.deepEqual(actual, expected);
        });

        it('should return undefined if argument is null', function () {
            //Given
            const value = null;
            const expected = undefined;

            //When
            let actual = fib(value);

            //Then
            assert.deepEqual(actual, expected);
        });

        it('should return undefined if argument is `` ', function () {
            //Given
            const value = ``;
            const expected = undefined;

            //When
            let actual = fib(value);

            //Then
            assert.deepEqual(actual, expected);
        });

        it('should return undefined if argument is []', function () {
            //Given
            const value = [];
            const expected = undefined;

            //When
            let actual = fib(value);

            //Then
            assert.deepEqual(actual, expected);
        });
    });

    describe('calculate Fibonacci numbers with closure', function () {

        it('should return 0 if argument is 0', function () {
            //Given
            const value = 0;
            const expected = 0;

            //When
            let actual = fibonacci(value);

            //Then
            assert.deepEqual(actual, expected);
        });

        it('should return 1 if argument is 1', function () {
            //Given
            const value = 1;
            const expected = 1;

            //When
            let actual = fibonacci(value);

            //Then
            assert.deepEqual(actual, expected);
        });

        it('should return 1 if argument is 2', function () {
            //Given
            const value = 2;
            const expected = 1;

            //When
            let actual = fibonacci(value);

            //Then
            assert.deepEqual(actual, expected);
        });

        it('should return 2 if argument is 3', function () {
            //Given
            const value = 3;
            const expected = 2;

            //When
            let actual = fibonacci(value);

            //Then
            assert.deepEqual(actual, expected);
        });

        it('should return 3 if argument is 4', function () {
            //Given
            const value = 4;
            const expected = 3;

            //When
            let actual = fibonacci(value);

            //Then
            assert.deepEqual(actual, expected);
        });

        it('should return 5 if argument is 5', function () {
            //Given
            const value = 5;
            const expected = 5;

            //When
            let actual = fibonacci(value);

            //Then
            assert.deepEqual(actual, expected);
        });

        it('should return 55 if argument is 10', function () {
            //Given
            const value = 10;
            const expected = 55;

            //When
            let actual = fibonacci(value);

            //Then
            assert.deepEqual(actual, expected);
        });

        it('should return undefined if argument is -7 ', function () {
            //Given
            const value = -7;
            const expected = undefined;

            //When
            let actual = fibonacci(value);

            //Then
            assert.deepEqual(actual, expected);
        });

        it('should return undefined if argument is null', function () {
            //Given
            const value = null;
            const expected = undefined;

            //When
            let actual = fibonacci(value);

            //Then
            assert.deepEqual(actual, expected);
        });

        it('should return undefined if argument is `` ', function () {
            //Given
            const value = ``;
            const expected = undefined;

            //When
            let actual = fibonacci(value);

            //Then
            assert.deepEqual(actual, expected);
        });

        it('should return undefined if argument is []', function () {
            //Given
            const value = [];
            const expected = undefined;

            //When
            let actual = fibonacci(value);

            //Then
            assert.deepEqual(actual, expected);
        });
    });

    describe('find index of number in array by binary search with recursion', function () {

        it(`should return index = 0 if number = 1 and array is [1, 3, 11, 77, 90, 100]`, function () {
            //Given
            const number = 1;
            const array = [1, 3, 11, 77, 90, 100];
            const size = array.length;

            const expected = 0;

            //When
            let actual = binarySearch(array, 0, size, number);

            //Then
            assert.deepEqual(actual, expected);
        });

        it(`should return index = 5 if number = 100 and array is [-1, -3, 11, 77, 90, 100]`, function () {
            //Given
            const number = 100;
            const array = [-1, -3, -11, 77, 90, 100];
            const size = array.length;

            const expected = 5;

            //When
            let actual = binarySearch(array, 0, size, number);

            //Then
            assert.deepEqual(actual, expected);
        });

        it(`should return index = 3 if number = 77 and array is [1, 3, 11, 77, 90, 100]`, function () {
            //Given
            const number = 77;
            const array = [1, 3, 11, 77, 90, 100];
            const size = array.length;

            const expected = 3;

            //When
            let actual = binarySearch(array, 0, size, number);

            //Then
            assert.deepEqual(actual, expected);
        });

        it(`should return index = 3 if number = 77 and array is [1, 3, 11, 77, 100]`, function () {
            //Given
            const number = 77;
            const array = [1, 3, 11, 77, 100];
            const size = array.length;

            const expected = 3;

            //When
            let actual = binarySearch(array, 0, size, number);

            //Then
            assert.deepEqual(actual, expected);
        });

        it(`should return index = 1 if number = -3 and array is [-1, -3, 11, 77, 90, 100]`, function () {
            //Given
            const number = -3;
            const array = [-1, -3, 11, 77, 90, 100];
            const size = array.length;

            const expected = 1;

            //When
            let actual = binarySearch(array, 0, size, number);

            //Then
            assert.deepEqual(actual, expected);
        });

        it(`should return index = 0 if number = -1 and array is [-1, 77, 90]`, function () {
            //Given
            const number = -1;
            const array = [-1, 77, 90];
            const size = array.length;

            const expected = 0;

            //When
            let actual = binarySearch(array, 0, size, number);

            //Then
            assert.deepEqual(actual, expected);
        });

        it(`should return index = 1 if number = 77 and array is [1, 77, 90]`, function () {
            //Given
            const number = 77;
            const array = [1, 77, 90];
            const size = array.length;

            const expected = 1;

            //When
            let actual = binarySearch(array, 0, size, number);

            //Then
            assert.deepEqual(actual, expected);
        });

        it(`should return index = 2 if number = 90 and array is [1, 77, 90]`, function () {
            //Given
            const number = 90;
            const array = [1, 77, 90];
            const size = array.length;

            const expected = 2;

            //When
            let actual = binarySearch(array, 0, size, number);

            //Then
            assert.deepEqual(actual, expected);
        });

        it(`should return index = 0 if number = 1 and array is [1, 77]`, function () {
            //Given
            const number = 1;
            const array = [1, 77];
            const size = array.length;

            const expected = 0;

            //When
            let actual = binarySearch(array, 0, size, number);

            //Then
            assert.deepEqual(actual, expected);
        });

        it(`should return index = 1 if number = 77 and array is [1, 77]`, function () {
            //Given
            const number = 77;
            const array = [1, 77];
            const size = array.length;

            const expected = 1;

            //When
            let actual = binarySearch(array, 0, size, number);

            //Then
            assert.deepEqual(actual, expected);
        });

        it(`should return index = 0 if number = 90 and array is [90]`, function () {
            //Given
            const number = 90;
            const array = [90];
            const size = array.length;

            const expected = 0;

            //When
            let actual = binarySearch(array, 0, size, number);

            //Then
            assert.deepEqual(actual, expected);
        });

        it(`should return undefined if number = 90 and array is []`, function () {
            //Given
            const number = 90;
            const array = [];
            const size = array.length;

            const expected = undefined;

            //When
            let actual = binarySearch(array, 0, size, number);

            //Then
            assert.deepEqual(actual, expected);
        });

        it(`should return index = undefined if number = -17 and array is [1, 3, 11, 77, 90, 100]`, function () {
            //Given
            const number = -17;
            const array = [1, 3, 11, 77, 90, 100];
            const size = array.length;

            const expected = undefined;

            //When
            let actual = binarySearch(array, 0, size, number);

            //Then
            assert.deepEqual(actual, expected);
        });

        it(`should return index = undefined if number = 1000 and array is [1, 77, 90]`, function () {
            //Given
            const number = 1000;
            const array = [1, 77, 90];
            const size = array.length;

            const expected = undefined;

            //When
            let actual = binarySearch(array, 0, size, number);

            //Then
            assert.deepEqual(actual, expected);
        });

        it(`should return index = undefined if number = null and array is [1, 77, 90]`, function () {
            //Given
            const number = null;
            const array = [1, 77, 90];
            const size = array.length;

            const expected = undefined;

            //When
            let actual = binarySearch(array, 0, size, number);

            //Then
            assert.deepEqual(actual, expected);
        });

        it(`should return index = undefined if number = undefined and array is [1, 77, 90]`, function () {
            //Given
            const number = undefined;
            const array = [1, 77, 90];
            const size = array.length;

            const expected = undefined;

            //When
            let actual = binarySearch(array, 0, size, number);

            //Then
            assert.deepEqual(actual, expected);
        });

        it(`should return index = undefined if number = 77.1 and array is [1, 77.1, 78, 79, 90]`, function () {
            //Given
            const number = 77.1;
            const array = [1, 77.1, 78, 79, 90];
            const size = array.length;

            const expected = undefined;

            //When
            let actual = binarySearch(array, 0, size, number);

            //Then
            assert.deepEqual(actual, expected);
        });

        it(`should return index = undefined if number = '77' and array is [1, '77', 78, 79, 90]`, function () {
            //Given
            const number = '77';
            const array = [1, '77', 78, 79, 90];
            const size = array.length;

            const expected = undefined;

            //When
            let actual = binarySearch(array, 0, size, number);

            //Then
            assert.deepEqual(actual, expected);
        });
    });
});

describe('working with BSTree structure', function () {

    describe('init BSTree', function () {

        it('should return 8 if arr = [-1, 0, 5, 19, 25, 29, 31, 67]', function () {
            //Given
            const arr = [-1, 0, 5, 19, 25, 29, 31, 67];
            const expected = 8;
            const tree = new BinaryTree();

            //When
            let actual = tree.init(arr);

            //Then
            assert.deepEqual(actual, expected);
        });

        it('should return 1 if arr = [-1]', function () {
            //Given
            const arr = [-1];
            const expected = 1;
            const tree = new BinaryTree();

            //When
            let actual = tree.init(arr);

            //Then
            assert.deepEqual(actual, expected);
        });

        it('should return null if arr = []', function () {
            //Given
            const arr = [];
            const expected = null;
            const tree = new BinaryTree();

            //When
            let actual = tree.init(arr);

            //Then
            assert.deepEqual(actual, expected);
        });

        it('should return null if arr = undefined', function () {
            //Given
            const arr = undefined;
            const expected = null;
            const tree = new BinaryTree();

            //When
            let actual = tree.init(arr);

            //Then
            assert.deepEqual(actual, expected);
        });

        it('should return null if arr = null', function () {
            //Given
            const arr = null;
            const expected = null;
            const tree = new BinaryTree();

            //When
            let actual = tree.init(arr);

            //Then
            assert.deepEqual(actual, expected);
        });
    });

    describe('push new node into BSTree', function () {

        it('should return 8 if el = 19 is pushed into the Tree = [-1, 0, 5, 19, 25, 29, 31]', function () {
            //Given
            const el = 19;
            const arr = [-1, 0, 5, 19, 25, 29, 31];
            const expected = 8;
            const tree = new BinaryTree();
            tree.init(arr);

            //When
            let actual = tree.push(el);

            //Then
            assert.deepEqual(actual, expected);
        });

        it('should return 6 if el = 9 is pushed into the Tree = [0, 5, 19, 25, 29]', function () {
            //Given
            const el = 9;
            const arr = [0, 5, 19, 25, 29];
            const expected = 6;
            const tree = new BinaryTree();
            tree.init(arr);

            //When
            let actual = tree.push(el);

            //Then
            assert.deepEqual(actual, expected);
        });

        it('should return 2 if el = 999 is pushed into the Tree = [10]', function () {
            //Given
            const el = 999;
            const arr = [10];
            const expected = 2;
            const tree = new BinaryTree();
            tree.init(arr);

            //When
            let actual = tree.push(el);

            //Then
            assert.deepEqual(actual, expected);
        });

        it('should return 1 if el = 7 is pushed into the Tree = []', function () {
            //Given
            const el = 7;
            const arr = [];
            const expected = 1;
            const tree = new BinaryTree();
            tree.init(arr);

            //When
            let actual = tree.push(el);

            //Then
            assert.deepEqual(actual, expected);
        });

        it('should return undefined if el = undefined is pushed into the Tree = [0, 5, 19, 25, 29]', function () {
            //Given
            const el = undefined;
            const arr = [0, 5, 19, 25, 29];
            const expected = undefined;
            const tree = new BinaryTree();
            tree.init(arr);

            //When
            let actual = tree.push(el);

            //Then
            assert.deepEqual(actual, expected);
        });

        it('should return undefined if el = null is pushed into the Tree = [0, 5, 19, 25, 29]', function () {
            //Given
            const el = null;
            const arr = [0, 5, 19, 25, 29];
            const expected = undefined;
            const tree = new BinaryTree();
            tree.init(arr);

            //When
            let actual = tree.push(el);

            //Then
            assert.deepEqual(actual, expected);
        });

        it('should return 1 if el = 9 is pushed into the Tree = undefined', function () {
            //Given
            const el = 9;
            const arr = undefined;
            const expected = 1;
            const tree = new BinaryTree();
            tree.init(arr);

            //When
            let actual = tree.push(el);

            //Then
            assert.deepEqual(actual, expected);
        });

        it('should return 1 if el = 9 is pushed into the Tree = null', function () {
            //Given
            const el = 9;
            const arr = null;
            const expected = 1;
            const tree = new BinaryTree();
            tree.init(arr);

            //When
            let actual = tree.push(el);

            //Then
            assert.deepEqual(actual, expected);
        });
    });

    describe('get node in the BSTree', function () {

        it('should return true if get el = 31 in the Tree = [-1, 0, 5, 19, 25, 29, 31]', function () {
            //Given
            const el = 31;
            const arr = [-1, 0, 5, 19, 25, 29, 31];
            const expected = true;
            const tree = new BinaryTree();
            tree.init(arr);

            //When
            let actual = tree.get(el);

            //Then
            assert.deepEqual(actual, expected);
        });

        it('should return true if get el = -1 in the Tree = [-1, 0, 5, 19, 25, 29, 31]', function () {
            //Given
            const el = -1;
            const arr = [-1, 0, 5, 19, 25, 29, 31];
            const expected = true;
            const tree = new BinaryTree();
            tree.init(arr);

            //When
            let actual = tree.get(el);

            //Then
            assert.deepEqual(actual, expected);
        });

        it('should return false if get el = 555 in the Tree = [-1, 0, 5, 19, 25, 29, 31]', function () {
            //Given
            const el = 555;
            const arr = [-1, 0, 5, 19, 25, 29, 31];
            const expected = false;
            const tree = new BinaryTree();
            tree.init(arr);

            //When
            let actual = tree.get(el);

            //Then
            assert.deepEqual(actual, expected);
        });

        it('should return true if get el = 31 in the Tree = [-1, 31]', function () {
            //Given
            const el = 31;
            const arr = [-1, 31];
            const expected = true;
            const tree = new BinaryTree();
            tree.init(arr);

            //When
            let actual = tree.get(el);

            //Then
            assert.deepEqual(actual, expected);
        });

        it('should return true if get el = -1 in the Tree = [-1, 31]', function () {
            //Given
            const el = -1;
            const arr = [-1, 31];
            const expected = true;
            const tree = new BinaryTree();
            tree.init(arr);

            //When
            let actual = tree.get(el);

            //Then
            assert.deepEqual(actual, expected);
        });

        it('should return false if get el = 3 in the Tree = [-1, 31]', function () {
            //Given
            const el = 3;
            const arr = [-1, 31];
            const expected = false;
            const tree = new BinaryTree();
            tree.init(arr);

            //When
            let actual = tree.get(el);

            //Then
            assert.deepEqual(actual, expected);
        });

        it('should return true if get el = 31 in the Tree = [31]', function () {
            //Given
            const el = 31;
            const arr = [31];
            const expected = true;
            const tree = new BinaryTree();
            tree.init(arr);

            //When
            let actual = tree.get(el);

            //Then
            assert.deepEqual(actual, expected);
        });

        it('should return false if get el = 1 in the Tree = [31]', function () {
            //Given
            const el = 1;
            const arr = [31];
            const expected = false;
            const tree = new BinaryTree();
            tree.init(arr);

            //When
            let actual = tree.get(el);

            //Then
            assert.deepEqual(actual, expected);
        });

        it('should return undefined if get el = 31 in the Tree = []', function () {
            //Given
            const el = 31;
            const arr = [];
            const expected = undefined;
            const tree = new BinaryTree();
            tree.init(arr);

            //When
            let actual = tree.get(el);

            //Then
            assert.deepEqual(actual, expected);
        });

        it('should return undefined if get el = null in the Tree = [1, 12, 33]', function () {
            //Given
            const el = null;
            const arr = [1, 12, 33];
            const expected = undefined;
            const tree = new BinaryTree();
            tree.init(arr);

            //When
            let actual = tree.get(el);

            //Then
            assert.deepEqual(actual, expected);
        });

        it('should return undefined if get el = undefined in the Tree = [1, 12, 33]', function () {
            //Given
            const el = undefined;
            const arr = [1, 12, 33];
            const expected = undefined;
            const tree = new BinaryTree();
            tree.init(arr);

            //When
            let actual = tree.get(el);

            //Then
            assert.deepEqual(actual, expected);
        });

        it('should return undefined if get el = 19 in the Tree = undefined', function () {
            //Given
            const el = 19;
            const arr = undefined;
            const expected = undefined;
            const tree = new BinaryTree();
            tree.init(arr);

            //When
            let actual = tree.get(el);

            //Then
            assert.deepEqual(actual, expected);
        });

        it('should return undefined if get el = 19 in the Tree = null', function () {
            //Given
            const el = 19;
            const arr = null;
            const expected = undefined;
            const tree = new BinaryTree();
            tree.init(arr);

            //When
            let actual = tree.get(el);

            //Then
            assert.deepEqual(actual, expected);
        });
    });

    describe('set node in the BSTree', function () {

        it('should return size = 8 if set el = 7 in the Tree = [-1, 0, 5, 19, 25, 29, 31]', function () {
            //Given
            const el = 7;
            const arr = [-1, 0, 5, 19, 25, 29, 31];
            const expected = 8;
            const tree = new BinaryTree();
            tree.init(arr);

            //When
            let actual = tree.set(el, tree);

            //Then
            assert.deepEqual(actual, expected);
        });

        it('should return array = [-1, 0, 5, 7, 19, 25, 29, 31] if set el = 7 in the Tree = [-1, 0, 5, 19, 25, 29, 31]', function () {
            //Given
            const el = 7;
            const arr = [-1, 0, 5, 19, 25, 29, 31];
            const expected = [-1, 0, 5, 7, 19, 25, 29, 31];
            const tree = new BinaryTree();
            tree.init(arr);
            tree.set(el, tree);

            //When
            let actual = tree.toArray();

            //Then
            assert.deepEqual(actual, expected);
        });

        it('should return size = 8 if set el = 30 in the Tree = [-1, 0, 5, 19, 25, 29, 31]', function () {
            //Given
            const el = 30;
            const arr = [-1, 0, 5, 19, 25, 29, 31];
            const expected = 8;
            const tree = new BinaryTree();
            tree.init(arr);

            //When
            let actual = tree.set(el, tree);

            //Then
            assert.deepEqual(actual, expected);
        });

        it('should return array = [-1, 0, 5, 7, 19, 25, 29, 30, 31] if set el = 30 in the Tree = [-1, 0, 5, 19, 25, 29, 31]', function () {
            //Given
            const el = 30;
            const arr = [-1, 0, 5, 19, 25, 29, 31];
            const expected = [-1, 0, 5, 19, 25, 29, 30, 31];
            const tree = new BinaryTree();
            tree.init(arr);
            tree.set(el, tree);

            //When
            let actual = tree.toArray();

            //Then
            assert.deepEqual(actual, expected);
        });

        it('should return size = 8 if set el = -5 in the Tree = [-1, 0, 5, 19, 25, 29, 31]', function () {
            //Given
            const el = -5;
            const arr = [-1, 0, 5, 19, 25, 29, 31];
            const expected = 8;
            const tree = new BinaryTree();
            tree.init(arr);

            //When
            let actual = tree.set(el, tree);

            //Then
            assert.deepEqual(actual, expected);
        });

        it('should return array = [-5, -1, 0, 5, 19, 25, 29, 31] if set el = -5 in the Tree = [-1, 0, 5, 19, 25, 29, 31]', function () {
            //Given
            const el = -5;
            const arr = [-1, 0, 5, 19, 25, 29, 31];
            const expected = [-5, -1, 0, 5, 19, 25, 29, 31];
            const tree = new BinaryTree();
            tree.init(arr);
            tree.set(el, tree);

            //When
            let actual = tree.toArray();

            //Then
            assert.deepEqual(actual, expected);
        });

        it('should return size = 8 if set el = 37 in the Tree = [-1, 0, 5, 19, 25, 29, 31]', function () {
            //Given
            const el = 37;
            const arr = [-1, 0, 5, 19, 25, 29, 31];
            const expected = 8;
            const tree = new BinaryTree();
            tree.init(arr);

            //When
            let actual = tree.set(el, tree);

            //Then
            assert.deepEqual(actual, expected);
        });

        it('should return array = [-1, 0, 5, 19, 25, 29, 31, 37] if set el = 37 in the Tree = [-1, 0, 5, 19, 25, 29, 31]', function () {
            //Given
            const el = 37;
            const arr = [-1, 0, 5, 19, 25, 29, 31];
            const expected = [-1, 0, 5, 19, 25, 29, 31, 37];
            const tree = new BinaryTree();
            tree.init(arr);
            tree.set(el, tree);

            //When
            let actual = tree.toArray();

            //Then
            assert.deepEqual(actual, expected);
        });

        it('should return size = 3 if set el = -2 in the Tree = [-7, 0]', function () {
            //Given
            const el = -2;
            const arr = [-7, 0];
            const expected = 3;
            const tree = new BinaryTree();
            tree.init(arr);

            //When
            let actual = tree.set(el, tree);

            //Then
            assert.deepEqual(actual, expected);
        });

        it('should return array = [-7, -2, 0] if set el = -2 in the Tree = [-7, 0]', function () {
            //Given
            const el = -2;
            const arr = [-7, 0];
            const expected = [-7, -2, 0];
            const tree = new BinaryTree();
            tree.init(arr);
            tree.set(el, tree);

            //When
            let actual = tree.toArray();

            //Then
            assert.deepEqual(actual, expected);
        });

        it('should return size = 3 if set el = -12 in the Tree = [-7, 0]', function () {
            //Given
            const el = -12;
            const arr = [-7, 0];
            const expected = 3;
            const tree = new BinaryTree();
            tree.init(arr);

            //When
            let actual = tree.set(el, tree);

            //Then
            assert.deepEqual(actual, expected);
        });

        it('should return array = [-12, -7, 0] if set el = -12 in the Tree = [-7, 0]', function () {
            //Given
            const el = -12;
            const arr = [-7, 0];
            const expected = [-12, -7, 0];
            const tree = new BinaryTree();
            tree.init(arr);
            tree.set(el, tree);

            //When
            let actual = tree.toArray();

            //Then
            assert.deepEqual(actual, expected);
        });

        it('should return size = 3 if set el = 2 in the Tree = [-7, 0]', function () {
            //Given
            const el = 2;
            const arr = [-7, 0];
            const expected = 3;
            const tree = new BinaryTree();
            tree.init(arr);

            //When
            let actual = tree.set(el, tree);

            //Then
            assert.deepEqual(actual, expected);
        });

        it('should return array = [-7, 0, 2] if set el = 2 in the Tree = [-7, 0]', function () {
            //Given
            const el = 2;
            const arr = [-7, 0];
            const expected = [-7, 0, 2];
            const tree = new BinaryTree();
            tree.init(arr);
            tree.set(el, tree);

            //When
            let actual = tree.toArray();

            //Then
            assert.deepEqual(actual, expected);
        });

        it('should return size = 2 if set el = -2 in the Tree = [0]', function () {
            //Given
            const el = -2;
            const arr = [0];
            const expected = 2;
            const tree = new BinaryTree();
            tree.init(arr);

            //When
            let actual = tree.set(el, tree);

            //Then
            assert.deepEqual(actual, expected);
        });

        it('should return array = [-2, 0] if set el = -2 in the Tree = [0]', function () {
            //Given
            const el = -2;
            const arr = [0];
            const expected = [-2, 0];
            const tree = new BinaryTree();
            tree.init(arr);
            tree.set(el, tree);

            //When
            let actual = tree.toArray();

            //Then
            assert.deepEqual(actual, expected);
        });

        it('should return size = 2 if set el = 2 in the Tree = [0]', function () {
            //Given
            const el = 2;
            const arr = [0];
            const expected = 2;
            const tree = new BinaryTree();
            tree.init(arr);

            //When
            let actual = tree.set(el, tree);

            //Then
            assert.deepEqual(actual, expected);
        });

        it('should return array = [0, 2] if set el = 2 in the Tree = [0]', function () {
            //Given
            const el = 2;
            const arr = [0];
            const expected = [0, 2];
            const tree = new BinaryTree();
            tree.init(arr);
            tree.set(el, tree);

            //When
            let actual = tree.toArray();

            //Then
            assert.deepEqual(actual, expected);
        });

        it('should return size = 1 if set el = -2 in the Tree = []', function () {
            //Given
            const el = -2;
            const arr = [];
            const expected = 1;
            const tree = new BinaryTree();
            tree.init(arr);

            //When
            let actual = tree.set(el, tree);

            //Then
            assert.deepEqual(actual, expected);
        });

        it('should return array = [-2] if set el = -2 in the Tree = []', function () {
            //Given
            const el = -2;
            const arr = [];
            const expected = [-2];
            const tree = new BinaryTree();
            tree.init(arr);
            tree.set(el, tree);

            //When
            let actual = tree.toArray();

            //Then
            assert.deepEqual(actual, expected);
        });

        it('should return size = undefined if set el = undefined in the Tree = [1, 12, 23, 24, 100]', function () {
            //Given
            const el = undefined;
            const arr = [1, 12, 23, 24, 100];
            const expected = undefined;
            const tree = new BinaryTree();
            tree.init(arr);

            //When
            let actual = tree.set(el, tree);

            //Then
            assert.deepEqual(actual, expected);
        });

        it('should return size = 1 if set el = 10 in the Tree = undefined', function () {
            //Given
            const el = 10;
            const arr = undefined;
            const expected = 1;
            const tree = new BinaryTree();
            tree.init(arr);

            //When
            let actual = tree.set(el, tree);

            //Then
            assert.deepEqual(actual, expected);
        });

        it('should return array = [-2] if set el = -2 in the Tree = undefined', function () {
            //Given
            const el = -2;
            const arr = undefined;
            const expected = [-2];
            const tree = new BinaryTree();
            tree.init(arr);
            tree.set(el, tree);

            //When
            let actual = tree.toArray();

            //Then
            assert.deepEqual(actual, expected);
        });
    });

    describe('getSize of the BSTree', function () {

        it('should return size = 7, if the Tree = [-1, 0, 5, 19, 25, 29, 31]', function () {
            //Given
            const arr = [-1, 0, 5, 19, 25, 29, 31];
            const expected = 7;
            const tree = new BinaryTree();
            tree.init(arr);

            //When
            let actual = tree.getSize();

            //Then
            assert.deepEqual(actual, expected);
        });

        it('should return size = 2, if the Tree = [-1, 0]', function () {
            //Given
            const arr = [-1, 0];
            const expected = 2;
            const tree = new BinaryTree();
            tree.init(arr);

            //When
            let actual = tree.getSize();

            //Then
            assert.deepEqual(actual, expected);
        });

        it('should return size = 1, if the Tree = [-1]', function () {
            //Given
            const arr = [-1];
            const expected = 1;
            const tree = new BinaryTree();
            tree.init(arr);

            //When
            let actual = tree.getSize();

            //Then
            assert.deepEqual(actual, expected);
        });

        it('should return size = null, if the Tree = []', function () {
            //Given
            const arr = [];
            const expected = null;
            const tree = new BinaryTree();
            tree.init(arr);

            //When
            let actual = tree.getSize();

            //Then
            assert.deepEqual(actual, expected);
        });

        it('should return size = null, if the Tree = null', function () {
            //Given
            const arr = null;
            const expected = null;
            const tree = new BinaryTree();
            tree.init(arr);

            //When
            let actual = tree.getSize();

            //Then
            assert.deepEqual(actual, expected);
        });

        it('should return size = null, if the Tree = undefined', function () {
            //Given
            const arr = undefined;
            const expected = null;
            const tree = new BinaryTree();
            tree.init(arr);

            //When
            let actual = tree.getSize();

            //Then
            assert.deepEqual(actual, expected);
        });

    });

    describe('removing node from the BSTree', function () {

        it('should return size = 7, if remove element = -3 in the Tree = [-3, -2, -1, 5, 19, 25, 29, 31, 35]', function () {
            //Given
            const arr = [-3, -2, -1, 5, 19, 25, 29, 31, 35];
            const expected = 8;
            const tree = new BinaryTree();
            tree.init(arr);

            //When
            let actual = tree.remove(-3);

            //Then
            assert.deepEqual(actual, expected);
        });

        it('should return [-2, -1, 5, 19, 25, 29, 31, 35], if remove element = -3 in the Tree = [-3, -2, -1, 5, 19, 25, 29, 31, 35]', function () {
            //Given
            const arr = [-3, -2, -1, 5, 19, 25, 29, 31, 35];
            const expected = [-2, -1, 5, 19, 25, 29, 31, 35];
            const tree = new BinaryTree();
            tree.init(arr);
            tree.remove(-3);

            //When
            let actual = tree.toArray();

            //Then
            assert.deepEqual(actual, expected);
        });

        it('should return size = 7, if remove element = -1 in the Tree = [-3, -2, -1, 5, 19, 25, 29, 31, 35]', function () {
            //Given
            const arr = [-3, -2, -1, 5, 19, 25, 29, 31, 35];
            const expected = 8;
            const tree = new BinaryTree();
            tree.init(arr);

            //When
            let actual = tree.remove(-1);

            //Then
            assert.deepEqual(actual, expected);
        });

        it('should return [-3, -2, -1, 19, 25, 29, 31, 35], if remove element = 5 in the Tree = [-3, -2, -1, 5, 19, 25, 29, 31, 35]', function () {
            //Given
            const arr = [-3, -2, -1, 5, 19, 25, 29, 31, 35];
            const expected = [-3, -2, -1, 19, 25, 29, 31, 35];
            const tree = new BinaryTree();
            tree.init(arr);
            tree.remove(5);

            //When
            let actual = tree.toArray();

            //Then
            assert.deepEqual(actual, expected);
        });

    });
})