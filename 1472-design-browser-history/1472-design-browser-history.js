class Node  {
    constructor(val, next = null, prev=null){
        this.val = val
        this.next = next
        this.prev = prev
    }
}

class BrowserHistory  {
    constructor(homepage){
        this.current = new Node(homepage)
    }

    visit(homepage){
        this.current.next = new Node(homepage, null, this.current)
        this.current = this.current.next
        return this.current.val
    }

    back(step){
        while(step-- >0 && this.current.prev){
            this.current = this.current.prev
        }
        return this.current.val
    }

    forward(step){
        while(step-- >0 && this.current.next){
            this.current = this.current.next
        }
        return this.current.val
    }
}