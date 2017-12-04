export default class {
    constructor() {
        this.registry = [];
    }

    getRegistry() {
        return this.registry;
    }

    root() {
        if (this.registry.length > 0) {
            return this.registry[0];
        }
        return null;
    }

    run() {
        let queue = [];
        let input = '';
        let root = this.root();
        queue.push({node: root, input: input});
        while(queue.length != 0) {
            let tmp = queue.shift();
            let node = tmp.node;

            input = node.run(tmp.input);

            for (let i = 0; i < node.getChildren().length; i++) {
                let c_node = node.getChildren()[i];
                queue.push({node: c_node, input: input});
            }
        }
        return input;
    }
}
