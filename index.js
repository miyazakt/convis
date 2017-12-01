import Component from './src/component';
import Node from './src/node';

class RootNode {
    run(input) {
        return 'root node';
    }
}
class TestNode {
    run(input) {
        return `"${input}" "${input}"`;
    }
}

let component = new Component();

let root = new Node(new RootNode());
let test1 = new Node(new TestNode());
let test2 = new Node(new TestNode());
let test3 = new Node(new TestNode());

// 実際はブラウザ等で
root.addChild(test1);
root.addChild(test2);
test2.addChild(test3);

component.getRegistry().push(root);
component.getRegistry().push(test1);
component.getRegistry().push(test2);
component.getRegistry().push(test3);

component.run();

console.log(root.getOutput());
console.log(test1.getOutput());
console.log(test2.getOutput());
console.log(test3.getOutput());

