// test.js

const { calculateEndTime, calculateStartTime } = require('./index');
const assert = require('assert');

const startTime = '2024-12-11T10:00:00Z';
const duration = 120; // in minutes

// Test calculateEndTime
const expectedEndTime = '2024-12-11T12:00:00.000Z';
assert.strictEqual(calculateEndTime(startTime, duration), expectedEndTime);

// Test calculateStartTime
const endTime = '2024-12-11T12:00:00Z';
const expectedStartTime = '2024-12-11T10:00:00.000Z';
assert.strictEqual(calculateStartTime(endTime, duration), expectedStartTime);

console.log('All tests passed!');
