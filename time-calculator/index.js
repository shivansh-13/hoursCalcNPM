const calculateEndTime = (startTime, duration) => {
    const start = new Date(startTime);
    const end = new Date(start.getTime() + duration * 60000); // duration in minutes
    return end.toISOString();
};

const calculateStartTime = (endTime, duration) => {
    const end = new Date(endTime);
    const start = new Date(end.getTime() - duration * 60000); // duration in minutes
    return start.toISOString();
};

module.exports = {
    calculateEndTime,
    calculateStartTime
};
