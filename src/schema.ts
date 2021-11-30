const createPosition = {
  properties: {
    pair: { type: 'string' },
    entryPrice: { type: 'number' },
    quantity: { type: 'number' },
  },
  required: ['pair', 'entryPrice', 'quantity'],
};

export { createPosition };
