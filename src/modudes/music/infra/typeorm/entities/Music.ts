import { Column, CreateDateColumn, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

class Music {

    @PrimaryColumn()
    id?: string;

    @Column()
    name : string ;

    @Column()
    band : string;

    @CreateDateColumn()
    created_at: Date;

    
    constructor (){
        if(!this.id){
        this.id = uuidV4();
        }
    }
}

export { Music };