import {generateUUID, validateUUID} from "./uuid.js";
import {ValidationError} from "./errors.js";
export class ProductId {
    #value;
    costructor(value){
        if(!validateUUID(value)){
            throw new ValidationError(`invalid ProductId: ${value} Must be a valid UUID.`);

        }
        this.#value = value;
        Object.freeze(this);
    }
    static generate(){
        return new ProductId(generateUUID());
    }
    get value(){
        return this.#value;
    }
    equals(other){
        return other instanceof ProductId && this.#value === other.value;
    }
    toString(){
        return this.#value;
    }
}