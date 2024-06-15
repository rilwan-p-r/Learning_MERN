  class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  class linkedList {
    constructor() {
      this.head = null;
      this.size = 0;
    }

    prepend(value) {
      let node = new Node(value);
      if (this.isEmpty()) {
        this.head = node;
      } else {
        node.next = this.head;
        this.head = node;
      }
      this.size++;
    }
    append(value) {
      let node = new Node(value);
      if (this.isEmpty()) {
        this.head = node;
      } else {
        let prev = this.head;
        while (prev.next) {
          prev = prev.next;
        }
        prev.next = node;
      }
      this.size++;
    }
    isEmpty() {
      return this.size === 0;
    }
    print() {
      if (this.isEmpty()) {
        console.log("list is empty");
      } else {
        let prev = this.head;
        let list = "";
        while (prev) {
          list += `${prev.value}`;
          prev = prev.next;
        }
        console.log(list);
      }
    }
    isPalindrome() {
      if (this.isEmpty()) {
        return false;
      }
      let stack = [];
      let current = this.head;
      while (current) {
        stack.push(current.value);
        current = current.next;
      }
      current = this.head;
      while (current) {
        let topValue = stack.pop();
        if (current.value !== topValue) {
          return false;
        }
        current = current.next;
      }
      return true;
    }

    secondLargestsecondsmallest() {
      let largest = -Infinity;
      let secondlarget = -Infinity;
      let smallest = Infinity;
      let secondSmallest = Infinity;
      let current = this.head;
      while (current) {
        if (current.value < smallest) {
          secondSmallest = smallest;
          smallest = current.value;
        } else if (current.value < secondSmallest) {
          secondSmallest = current.value;
        }
        if (current.value > largest) {
          secondlarget = largest;
          largest = current.value;
        } else if (current.value > secondlarget) {
          secondlarget = current.value;
        }

        current = current.next;
      }
      return secondlarget + secondSmallest;
    }
    findMiddleNode(){
      if(this.isEmpty()){
        return null
      }
      let slow = this.head
      let fast = this.head
      while(fast && fast.next){
        slow = slow.next
        fast = fast.next.next
      }
      return slow.value
    }
    reverse(){
      let prev = null
      let current = this.head
      let next = null
      while(current){
        next = current.next
        current.next = prev
        prev = current
        current = next
      }
      this.head = prev

    }
  }
  let list = new linkedList();
  let word = "hello";
  for (let char of word) {
    list.append(char);
  }
  list.print();
  // console.log(list.isPalindrome());
  // console.log(list.findMiddleNode());
  list.reverse()
  list.print()