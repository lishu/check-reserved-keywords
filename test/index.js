const { checkReservedKeywords } = require('../dist');

const langauges = checkReservedKeywords('select', undefined, true);

console.debug(`select is reserved keyword in ${langauges.join(', ')}`);
