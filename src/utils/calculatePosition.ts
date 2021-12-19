import { Trade } from '../types';

const calculatePosition = (trades: Trade[]) => {
  let status = 'open';
  let unitPrice = 0;
  let boughtQuantity = 0;
  let soldQuantity = 0;
  let cost = 0;
  let benefits = 0;
  let fees = 0;

  trades.forEach((trade: any) => {
    fees = trade.fees ? fees + trade.fees : fees;

    if (trade.direction === 'BUY') {
      boughtQuantity += trade.quantity;
      cost += trade.quantity * trade.price;
    }
    if (trade.direction === 'SELL') {
      soldQuantity += trade.quantity;
      benefits += trade.quantity * trade.price;
    }
  });

  if (boughtQuantity === soldQuantity) {
    status = 'closed';
  } else {
    unitPrice = (cost / boughtQuantity) + fees;
    if (benefits !== 0 && soldQuantity !== 0) {
      unitPrice -= benefits / soldQuantity;
    }
  }

  return {
    asset: trades[0].asset,
    quantity: boughtQuantity,
    status,
    unitPrice,
    benefits: status === 'closed' ? benefits - cost : 0,
  };
};

export default calculatePosition;
