import { v4 as uuidV4 } from "uuid";

class Music {

    id?: string;
    name : string ;
    band : string;
    
    constructor (){
        if(!this.id){
        this.id = uuidV4();
        }
    }
}

export { Music };