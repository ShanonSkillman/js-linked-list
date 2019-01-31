/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator(){
    let head = null;
    let tail = null;

    let getHead = () => {
        return head;
    };

    let getTail = () => {
        return tail;
    };

    let add = (val) => {
       let newNode = {
           value: val,
           next: null
       }
    //    console.log(newNode)
       if(!head){
           head = newNode;
           tail = newNode;
            // console.log(head === tail)
       }
       else{
           tail.next = newNode;
           tail = newNode;
       }
        return tail;
    }

    function get(index) {
        let currentNode = head;
    
        if (index < 0) {
          return false;
        }
        for (let i = 0; i < index; i++) {
          if (currentNode.next) {
            currentNode = currentNode.next;
          } else {
            return false;
          }
        }
        return currentNode;
      }
   
    

    let remove = (num) => {
        if (num === 0) {
            head = head.next;
        } else if (get(num) === tail) {
            get(num - 1).next = null;
            tail = get(num - 1);
        } else if (get(num) === false) {
            return false
        } else {
            get(num - 1).next = get(num + 1);
        }
    };


    
    let insert = (value, n) => {
        debugger;
        let added = {};
        let before = get(n - 1);
        added.value = value;
        // console.log(value, value.length)

        if (n === 0) {
            added.next = head;
            head = added;

        } else if (get(n) === false ){
            return false;

        } else if (get(n) > added){ 
            console.log('test')
            return false;

        } else {
            added.next = get(n);
            before.next = added;
        }
    };

    return{
        getHead,
        getTail,
        add,
        get,
        remove,
        insert
 }
};