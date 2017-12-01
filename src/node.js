// Node interface
export default class {
    constructor(obj) {
        this.orig_obj = obj;
        this.children = [];
    }

    run(input) {
        this.input = input;
        this.output = this.orig_obj.run(input);
        return this.output;
    }

    getInput() {
        return this.input;
    }

    getOutput() {
        return this.output;
    }

    addChild(child) {
        this.children.push(child);
    }

    getChildren() {
        return this.children;
    }
}
