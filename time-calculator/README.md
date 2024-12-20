# Time Calculator

A simple NPM package to calculate end time based on a start time and duration, or start time based on an end time and duration. This is especially useful for scheduling applications and time management tools.

## Installation

To install the package, use the following command:

```sh
npm install time-calculator
```

## Usage

### Importing the Package

```js
const { calculateEndTime, calculateStartTime } = require('time-calculator');
```

### Functions

#### `calculateEndTime(startTime, duration)`

- **startTime**: A string representing the start time in ISO format.
- **duration**: A number representing the duration in minutes.

Returns: A string representing the end time in ISO format.

```js
const endTime = calculateEndTime('2024-12-11T10:00:00Z', 120);
console.log(endTime); // '2024-12-11T12:00:00.000Z'
```

#### `calculateStartTime(endTime, duration)`

- **endTime**: A string representing the end time in ISO format.
- **duration**: A number representing the duration in minutes.

Returns: A string representing the start time in ISO format.

```js
const startTime = calculateStartTime('2024-12-11T12:00:00Z', 120);
console.log(startTime); // '2024-12-11T10:00:00.000Z'
```

## Use Cases

1. **Meeting Scheduling:** Automatically calculate the end time of a meeting given its start time and duration, or vice versa.
2. **Task Management:** Determine when you need to start a task to finish by a specific time.
3. **Event Planning:** Plan events with precise start and end times.
4. **Movie Planning:** Calculate the start time if you know the movie duration and the desired end time, ensuring you finish in time for other activities.
5. **Scheduling Timers for Electronic Devices:** Set timers on devices like kitchen appliances or garden sprinklers by calculating the required start or end time based on the duration of use.
## Handling Different Timezones

### Example with IST (Indian Standard Time)

Indian Standard Time (IST) is UTC+5:30. You can handle time zones by adjusting the input times accordingly.

#### Using `calculateEndTime` in IST

```js
const startTimeIST = new Date('2024-12-11T10:00:00Z').toLocaleString("en-US", {timeZone: "Asia/Kolkata"});
const duration = 120; // 2 hours
const endTimeUTC = calculateEndTime(startTimeIST, duration);

const endTimeIST = new Date(endTimeUTC).toLocaleString("en-US", {timeZone: "Asia/Kolkata"});
console.log('End Time in IST:', endTimeIST);
```

#### Using `calculateStartTime` in IST

```js
const endTimeIST = new Date('2024-12-11T12:00:00Z').toLocaleString("en-US", {timeZone: "Asia/Kolkata"});
const duration = 120; // 2 hours
const startTimeUTC = calculateStartTime(endTimeIST, duration);

const startTimeIST = new Date(startTimeUTC).toLocaleString("en-US", {timeZone: "Asia/Kolkata"});
console.log('Start Time in IST:', startTimeIST);
```

## Running Tests

To run the included tests, use the following command:

```sh
npm test
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.