function createheap(arr) {
  let heap = [...arr];
  for (let i = Math.ceil(heap.length / 2 - 1); i >= 0; i--) {
    heapfy(heap, i, heap.length);
  }
  return heap;
}
function heapfy(heap, i, heapsize) {
  let leftChild = i * 2 + 1;
  let rightChild = i * 2 + 2;
  let largest = i;

  if (leftChild < heapsize && heap[leftChild] > heap[[largest]]) {
    largest = leftChild;
  }
  if (rightChild < heapsize && heap[rightChild] > heap[[largest]]) {
    largest = rightChild;
  }
  if (largest !== i) {
    [heap[largest], heap[i]] = [heap[i], heap[largest]];
    heapfy(heap, i, heapsize);
  }
}
function heapSort(arr){
    let heap = createheap(arr)
    let sortedArr=[]
    while(heap.length>0){
        sortedArr.unshift(heap.shift())
        heap = createheap(heap)
    }
    return sortedArr
}
let arr = [2,4,6,7,3,9,7,8,2]

console.log(heapSort(arr))