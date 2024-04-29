import { Mutex } from 'async-mutex';

// Initialize a mutex for exclusive access to resources
const mutex = new Mutex();

export { mutex };
