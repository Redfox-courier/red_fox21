/** Simulates async network latency for mock services */
export const simulateLatency = (ms = 400): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, ms));
