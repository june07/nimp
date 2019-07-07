export default class Graph {
  constructor(svg, component) {
    this.svg = svg;
    this.component = component;
    this.nodes = [];
    this.selectedNode = null;
  }


  createNode(classObject, x, y) {
    this.nodes.push(new classObject(this, x, y));
  }


  selectNode(node) {
    if (this.selectedNode) {
      this.selectedNode.deselect();
    }
    this.selectedNode = node;
    node.select();
  }
}
