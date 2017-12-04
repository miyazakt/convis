import test from 'ava';
import Component from '../src/component';

test.beforeEach(t => {
    t.context.component = new Component();
});

test.afterEach(t => {
    t.context.component = undefined;
});

test('Component#getRegistry', t => {
    let component = t.context.component;

    t.is(component.getRegistry().length, 0);
    t.deepEqual(component.getRegistry(), []);
    component.getRegistry().push(1);
    t.is(component.getRegistry().length, 1);
    t.deepEqual(component.getRegistry(), [1]);
});

test('Component#root', t => {
    let component = t.context.component;

    t.is(component.root(), null);
    component.registry.push(1);
    t.is(component.root(), 1);
});

