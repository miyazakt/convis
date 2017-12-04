import test from 'ava';
import sinon from 'sinon';
import Node from '../src/node';

class Test {
    run(input) {
        return input;
    }
}

test.beforeEach(t => {
    t.context.input = 'input_string';
    t.context.test = new Test();
    t.context.node = new Node(t.context.test);
});

test.afterEach(t => {
    t.context.input = undefined;
    t.context.test = undefined;
    t.context.node = undefined;
});

test('Node#run', t => {
    let input = t.context.input;

    let test = t.context.test;
    let node = t.context.node;
    let spy = sinon.spy(test, 'run');

    t.is(node.run(input), input);
    t.is(spy.callCount, 1);
});

test('Node#getInput', t => {
    let input = t.context.input;

    let node = t.context.node;

    t.is(node.getInput(), undefined);
    t.is(node.run(input), input);
    t.is(node.getInput(), input);
});

test('Node#getOutput', t => {
    let input = t.context.input;

    let node = t.context.node;

    t.is(node.getOutput(), undefined);
    t.is(node.run(input), input);
    t.is(node.getOutput(), input);
});

test('Node#addChild', t => {
    let node = t.context.node;

    t.is(node.children.length, 0);
    node.addChild(1);
    t.is(node.children.length, 1);
});

test('Node#getChildren', t => {
    let node = t.context.node;

    t.is(node.getChildren().length, 0);
    node.children.push(0);
    t.is(node.getChildren().length, 1);
});
