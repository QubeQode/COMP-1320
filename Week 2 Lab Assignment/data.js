const yearOffset = {
  16: 6,
  17: 4,
  18: 2,
  19: 0,
  20: 6,
  21: 4,
};

const monthRef = {
  jan: {
    monthOffset: 1,
    gregorianIndex: 1,
    lastDay: 31,
  },
  feb: {
    monthOffset: 4,
    gregorianIndex: 2,
    lastDay: 28,
  },
  mar: {
    monthOffset: 4,
    gregorianIndex: 3,
    lastDay: 31,
  },
  apr: {
    monthOffset: 0,
    gregorianIndex: 4,
    lastDay: 30,
  },
  may: {
    monthOffset: 2,
    gregorianIndex: 5,
    lastDay: 31,
  },
  jun: {
    monthOffset: 5,
    gregorianIndex: 6,
    lastDay: 30,
  },
  jul: {
    monthOffset: 0,
    gregorianIndex: 7,
    lastDay: 31,
  },
  aug: {
    monthOffset: 3,
    gregorianIndex: 8,
    lastDay: 31,
  },
  sep: {
    monthOffset: 6,
    gregorianIndex: 9,
    lastDay: 30,
  },
  oct: {
    monthOffset: 1,
    gregorianIndex: 10,
    lastDay: 31,
  },
  nov: {
    monthOffset: 4,
    gregorianIndex: 11,
    lastDay: 30,
  },
  dec: {
    monthOffset: 6,
    gregorianIndex: 12,
    lastDay: 31,
  },
};

// Used an array because the key:value mirrored an array index and this is easier on memory
const weekdayRef = [
  'saturday',
  'sunday',
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
];

module.exports = { yearOffset, monthRef, weekdayRef };
