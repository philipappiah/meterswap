import { ChainId, Token } from 'my-meter-swap-sdk'


export const MeterTokens: { [chainId in ChainId]: { [address: string]: Token } } = {
  [ChainId.METERTEST]:{
    '0x4cb6cEf87d8cADf966B455E8BD58ffF32aBA49D1': new Token(
      ChainId.METERTEST,
      '0x4cb6cEf87d8cADf966B455E8BD58ffF32aBA49D1',
      18,
      'MTR',
      'MTR'),
    '0x8A419Ef4941355476cf04933E90Bf3bbF2F73814': new Token(
      ChainId.METERTEST,
      '0x8A419Ef4941355476cf04933E90Bf3bbF2F73814',
      18,
      'MTRG',
      'MTRG')
  },
  [ChainId.METER]: {
    '0x687A6294D0D6d63e751A059bf1ca68E4AE7B13E2': new Token(
      ChainId.METER,
      '0x687A6294D0D6d63e751A059bf1ca68E4AE7B13E2',
      18,
      'MTR',
      'MTR'),
    '0x228ebBeE999c6a7ad74A6130E81b12f9Fe237Ba3': new Token(
      ChainId.METER,
      '0x228ebBeE999c6a7ad74A6130E81b12f9Fe237Ba3',
      18,
      'MTRG',
      'MTRG')
  },
  [ChainId.HECO]:{

  },

  [ChainId.MAINNET]: {},
  [ChainId.RINKEBY]: {
    '0xBeE85b7b676f9306803B6DFC09F024c30a7A2a1e': new Token(
      ChainId.RINKEBY,
      '0xBeE85b7b676f9306803B6DFC09F024c30a7A2a1e',
      18,
      'EMTR',
      'EMTR'),
    '0x4f6d94accf73713968f6d1b3d191a05762bfd2c1': new Token(
      ChainId.RINKEBY,
      '0x4f6d94accf73713968f6d1b3d191a05762bfd2c1',
      18,
      'EMTRG',
      'EMTRG')

  },
  [ChainId.ROPSTEN]: {},
  [ChainId.KOVAN]: {},
  [ChainId.GÖRLI]: {}
}
