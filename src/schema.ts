const createPosition = {
  properties: {
    asset: { type: 'string' },
    direction: { enum: ['BUY', 'SELL'] },
    price: { type: 'number' },
    quantity: { type: 'number' },
    fees: { type: 'number' },
  },
  required: ['asset', 'direction', 'price', 'quantity'],
};

export { createPosition };
