function search_node(registry, node) {
    for (let i = 0; i < registry.length; i++) {
        if (registry[i] === node) {
            return i;
        }
    }
    return undefined;
}

function visit(registry, L, visited, index) {
    if (visited[index]) return;
    visited[index] = true;

    let node = registry[index];
    for (let i = 0; i < node.getChildren().length; i++) {
        let next = node.getChildren()[i];
        let index = search_node(registry, next);
        if (index === undefined) {
            break;
        }
        visit(registry, L, visited, index);
    }
    L.unshift(node);
}

export default class {
    static topological_sort(registry) {
        let L = [];
        let visited = Array(registry.length).fill(false);
        for (let i = 0; i < registry.length; i++) {
            visit(registry, L, visited, i);
        }

        return L;
    }
}
