import { parentPort, workerData } from 'node:worker_threads';

const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
    // This function sends result of nthFibonacci computations to main thread
    // n should be received from main thread
    parentPort.postMessage( nthFibonacci(workerData) ); 
};

sendResult();