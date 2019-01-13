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

    let get = (number) => {
        return get;
    }

    let remove = (number) => {
        return remove;
    }

    let insert = (number) => {
        return insert;
    }

    


    return{
        getHead,
        getTail,
        add,
        get,
        remove,
        insert
 }
}


// const insert = () =>{};