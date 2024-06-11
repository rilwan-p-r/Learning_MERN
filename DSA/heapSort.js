class heapsort {
  constructor() {
    this.data = [];
  }
  getParent(i) {
    return Math.floor((i - 1) / 2);
  }
  getLeftParent(i) {
    return i * 2 + 1;
  }

  getRightParent(i) {
    return i * 2 + 2;
  }
  push(value) {
    this.data[this.data.length] = value;
    this.heapfyUp();
  }
  swap(i1, i2) {
    [this.data[i1], this.data[i2]] = [this.data[i2], this.data[i1]];
  }
  heapfyUp() {
    let current = this.data.length - 1;
    while (this.data[current] > this.data[this.getParent(current)]) {
      this.swap(current, this.getParent(current));
      current = this.getParent(current);
    }
  }

  poll() {
    let val = this.data[0];
    this.data[0] = this.data[this.data.length - 1];
    this.data.length--;
    this.heapfyDown();
    return val;
  }
  heapfyDown() {
    let current = 0;
    while (this.data[current] < this.data[this.getLeftParent(current)]) {
      let biggestindex = this.getLeftParent(current);
      if (
        this.getRightParent(current) < this.data.length &&
        this.data[this.getRightParent(current)] >
          this.data[this.getLeftParent(current)]
      ) {
        biggestindex = this.getRightParent(current);
      }
      if (this.data[current] < this.data[biggestindex]) {
        this.swap(current, biggestindex);
        current = biggestindex;
      } else {
        return;
      }
    }
  }
}

function heapSort(arr) {
  let heap1 = new heapsort();
  let sortedArr = [];
  for (let val of arr) {
    heap1.push(val);
  }
  for (let i = 0; i < arr.length; i++) {
    sortedArr.unshift(heap1.poll());
  }
  return sortedArr;
}
let arr = [22, 4, 1, 4, 17, 4];
let sorted = heapSort(arr);
console.log(sorted);


