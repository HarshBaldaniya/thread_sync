// Utility to pause the execution for a specified amount of time (ms)
export function sleep(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
}
