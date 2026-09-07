import{v7 as uuidv7, validate as uuidValidate} from 'uuid';
/**
 * Generates a new UUID (version 7).
 * @returns {string} A new UUID string.
 */
export function generateUUID() {
    return uuidv7();
}
/**
 * Validates whether a given string is a valid UUID.
 * @param {string} value - The string to validate.
 * @returns {boolean} True if the string is a valid UUID, false otherwise.
 */
export function validateUUID(value) {
    return uuidValidate(value);
}
