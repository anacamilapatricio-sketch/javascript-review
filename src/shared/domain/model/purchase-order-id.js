export class PurchaseOrderItemId {
    #value;
    constructor(value) {
        if (!validateUUID(value)) {
            throw new ValidationError(`Invalid PurchaseOrderItemId: ${value}. Must be a valid UUID.`);
        }
        this.#value = value;
        Object.freeze(this);
    }
    get value() {
        return this.#value;
    }
    static generate() {
        return new PurchaseOrderItemId(generateUUID());
    }
    equals(other) {
        return other instanceof PurchaseOrderItemId && this.#value === other.value;
    }
    toString() {
        return this.#value;
    }
}