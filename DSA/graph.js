class graph {
  constructor() {
    this.adjecencyList = {};
  }

  addvertex(vertex) {
    if (!this.adjecencyList[vertex]) {
      this.adjecencyList[vertex] = new Set();
    }
  }

  addedges(vertex1, vertex2) {
    if (!this.adjecencyList[vertex1]) {
      this.addvertex(vertex1);
    }
    if (!this.adjecencyList[vertex2]) {
      this.addvertex(vertex2);
    }
    this.adjecencyList[vertex1].add(vertex2)
    this.adjecencyList[vertex2].add(vertex1);
  }
  removeEdge(vertex1,vertex2){
    this.adjecencyList[vertex1].delete(vertex2)
    this.adjecencyList[vertex2].delete(vertex1)
  }
  removeVertex(vertex){
    if(!this.adjecencyList[vertex]){
        return
    }
    for(let adjecencyList of this.adjecencyList[vertex]){
        this.removeEdge(vertex,adjecencyList)
    }
    delete this.adjecencyList[vertex]
  }
  display() {
    for (let vertex in this.adjecencyList) {
      console.log(vertex + "=>" + [...this.adjecencyList[vertex]]);
    }
  }
}
let graphy = new graph();
graphy.addvertex("A");
graphy.addvertex("B");
graphy.addedges("A","B");
graphy.removeEdge("A","B")
graphy.removeVertex('A')
graphy.display();
