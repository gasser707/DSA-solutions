class Max_Bheap{

    constructor(){
        this.heap=[]
    }

 insert(value){
    this.heap.push(value)

    let current_index=this.heap.length-1;

    while(true){
        
        let parent_index= Math.floor((current_index-1)/2)

        if(parent_index<0)break

        else if(this.heap[current_index]>this.heap[parent_index]){
            let temp= this.heap[current_index]
            this.heap[current_index]=this.heap[parent_index]
            this.heap[parent_index]= temp   
            
            current_index= parent_index
        }
        else{
            break;
        }


    }

}
extract(){
    let temp = this.heap[0];
    this.heap[0]=this.heap[this.heap.length-1];
    this.heap[this.heap.length-1]=temp;

    this.heap.pop()

    let current_index=0;

    while(true){
        let child1_index= (2*current_index)+1
        if(child1_index>this.heap.length-1)break
        let child2_index =(2*current_index)+2
        if(child2_index>this.heap.length-1)child2_index=current_index

        
        if(this.heap[child1_index]>this.heap[current_index] && this.heap[child2_index]>this.heap[current_index]){

            let chosen_index = this.heap[child1_index]>this.heap[child2_index]?child1_index:child2_index;

            let temp2= this.heap[chosen_index]
            this.heap[chosen_index]= this.heap[current_index]
            this.heap[current_index]=temp2

            current_index = chosen_index;
           
        }

        else if(this.heap[child1_index]>this.heap[current_index]){
            let temp2= this.heap[child1_index]
            this.heap[child1_index]= this.heap[current_index]
            this.heap[current_index]=temp2

            current_index=child1_index
        }


        else if(this.heap[child2_index]>this.heap[current_index]){
            let temp2= this.heap[child2_index]
            this.heap[child2_index]= this.heap[current_index]
            this.heap[current_index]=temp2
            
            current_index=child2_index
        }else{
            break;
        }

        
    }
    return temp
}


}

class node{
    constructor(val, priorty){
        this.val= val
        this.p=priorty
    }
}

class priorty{
    constructor(){
        this.heap=[]
    }

    insert(v, p){
        let temp = new node(v,p)
        
        this.heap.push(temp)

        let current_index=this.heap.length-1

        while(true){
        
            let parent_index= Math.floor((current_index-1)/2)
    
            if(parent_index<0)break
    
            else if(this.heap[current_index].p<this.heap[parent_index].p){
                let temp= this.heap[current_index]
                this.heap[current_index]=this.heap[parent_index]
                this.heap[parent_index]= temp   
                
                current_index= parent_index
            }
            else{
                break;
            }
    
    
        }


    }


    extract(){
        let temp = this.heap[0];
        this.heap[0]=this.heap[this.heap.length-1];
        this.heap[this.heap.length-1]=temp;
    
        this.heap.pop()
    
        let current_index=0;
    
        while(true){
            let child1_index= (2*current_index)+1
            if(child1_index>this.heap.length-1)break
            let child2_index =(2*current_index)+2
            if(child2_index>this.heap.length-1)child2_index=current_index
    
            
            if(this.heap[child1_index].p<this.heap[current_index].p && this.heap[child2_index].p<this.heap[current_index].p){
    
                let chosen_index = this.heap[child1_index].p<this.heap[child2_index].p?child1_index:child2_index;
    
                let temp2= this.heap[chosen_index]
                this.heap[chosen_index]= this.heap[current_index]
                this.heap[current_index]=temp2
    
                current_index = chosen_index;
               
            }
    
            else if(this.heap[child1_index].p<this.heap[current_index].p){
                let temp2= this.heap[child1_index]
                this.heap[child1_index]= this.heap[current_index]
                this.heap[current_index]=temp2
    
                current_index=child1_index
            }
    
    
            else if(this.heap[child2_index].p<this.heap[current_index].p){
                let temp2= this.heap[child2_index]
                this.heap[child2_index]= this.heap[current_index]
                this.heap[current_index]=temp2
                
                current_index=child2_index
            }else{
                break;
            }
    
            
        }
        return temp
    }
    


}

heap = new Max_Bheap()
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);



p = new priorty()
p.insert("gunshot",1)
p.insert("cold",5)

p.insert("high fever",4)
p.insert("broken arm",2)
p.insert("glass in foot",3)
