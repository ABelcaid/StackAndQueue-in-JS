class Node {
  constructor(data, next = null, prev = null) {
    this.data = data;
    this.next = next;
    this.prev = prev
  }
}
class Stack {
  constructor() {
    this.head = null;
    this.current = null;
  }

  queue(){
    let res = document.getElementById('res');
    let data = document.getElementById('data').value;
    if(!this.head){
      this.head = this.current = new Node(data);
    }else{
      let tmp = this.head;
      this.head = new Node(data,null,tmp);
      tmp.next = this.head;
    }
    res.innerHTML = this.head.data;
    }
    dequeue(){
      let res = document.getElementById('res');
      if(!this.head.prev){
        this.head = this.current = null;
        res.innerHTML = "Empty";
      }

      let tmp = this.head;
     while(tmp.prev && tmp.prev.prev){
       tmp = this.current = tmp.prev;
     }
     tmp.prev = null;
    }


    up(){
      if(this.current && this.current.next){
      this.current = this.current.next;
    }
  }
    down(){
      if(this.current && this.current.prev){
      this.current = this.current.prev;
    }
  }
  showCurrent() {
    if (this.current)
    res.innerHTML = this.current.data;
        
  }
  
}
let ll = new Stack();

function queue(){
  ll.queue();
  ll.showCurrent()
}

function dequeue(){   
  ll.dequeue();
  ll.showCurrent()

}

function up(){
  ll.up();
  ll.showCurrent()

}

function down(){
  ll.down();
  ll.showCurrent()

}
