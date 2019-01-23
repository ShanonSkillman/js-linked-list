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
    }

    let getTail = () => {
        return tail;
    }

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

    let get = (num) => {
        let node = head
    for(let i =0; i <num; i++){
        if(node.next === null){
            return false}
            node = node.next;
        }
        return node;
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
    
    //     //    let previous = 
    // //    let next =   
    // // console.log(num)
    // // console.log("head", head)
    // deleteMe = get(num)
    // // console.log(deleteMe)
    // previous = get(num)
    // console.log(previous)
    //     return remove;
    // }


    
    let insert = (value, n) => {
        let added = {};
        added.value = value;
        let before = get(n - 1);

        if (n === 0) {
            added.next = head;
            head = added;

        } else if (get(n) === false){
            return false;

        } else if (get(n) > value.length){
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