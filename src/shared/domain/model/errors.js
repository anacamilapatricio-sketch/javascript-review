/**
 * Custom error class for validation errors.
 */
export class ValidationError extends Error {
    /**
     * Creates a new ValidationError instance.
     * @param {string} message - The error message.
     */
    constructor(message) {
        super(message);
        this.name = 'ValidationError';
    }
}