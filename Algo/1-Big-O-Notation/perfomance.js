const { performance } = require('perf_hooks');

const t1 = performance.now();
// Run an Algo here
for(let i = 0; i < 100000000 ; i++) {
  // do this
}
const t2 = performance.now();

console.log(`Time Elapsed: ${(t2 - t1 / 1000)} seconds`);

 