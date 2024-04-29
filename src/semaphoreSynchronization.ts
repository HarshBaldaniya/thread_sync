import { Sema } from "async-sema";

// Initialize a semaphore to control concurrent access, allowing up to 3 concurrent operations
const semaphore = new Sema(3);

export { semaphore };
