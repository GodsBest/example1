'use strict';

const now = new Date();
console.log(`${now.toISOString()} - Testing ... .. .`);
console.log(now.toLocaleString());
console.log(now.toLocaleDateString());
console.log(now.toLocaleTimeString());
console.log(now.toTimeString());
console.log(now.toUTCString());
console.log(now.toJSON());
