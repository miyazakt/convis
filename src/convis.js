import Component from './component';
let defaultComponent = new Component();

export function run() {
    return defaultComponent.run();
}

export function getRegistry() {
    return defaultComponent.getRegistry();
}

