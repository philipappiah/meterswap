interface ChargeInfo {
  base: string;
  quote: string;
}

export const ChargesInfo: { [address: string]: ChargeInfo } = {
  '0x75029090907214Fe8CB9b97c071447829A7DB28c': {
    base: 'ETH',
    quote: 'USDC'
  },
  '0x26411A2B52C8f3fD330489047992bde860b1f823': {
    base: 'eMTR',
    quote: 'eMTRG'
  },
  '0x63DD4a125259EbC30F8eC683AFD6d25a51560A54': {
    base: 'eMTRG',
    quote: 'NUSDT'
  },
  '0xef0A0D7CA3dc2e8B2689d2ed95A3E1d57C0ffe38': {
    base: 'ETH',
    quote: 'DAI'
  },
  '0x2f4ED8Fa1BDD125651a7a9032E73C17BfB0e1C05': {
    base: 'eMTRG',
    quote: 'ETH'
  }
}
