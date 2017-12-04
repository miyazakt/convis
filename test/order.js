import test from 'ava';
import Order from '../src/order';

class Test {
    constructor() {
        this.child = [];
    }
    getChildren() {
        return this.child;
    }
}

test('Order.topological_sort', t => {
    let test1 = new Test();
    let test2 = new Test();
    let test3 = new Test();
    let test4 = new Test();

    test1.child.push(test3);
    test2.child.push(test3);
    test3.child.push(test4);

    let registry = [test1, test2, test3, test4];
    // 解は一意ではないが、このアルゴリズムでは以下になる
    let correct = [test2, test1, test3, test4];
    
    let order = Order.topological_sort(registry);
    t.is(order.length, 4);
    t.deepEqual(order, correct);
});
