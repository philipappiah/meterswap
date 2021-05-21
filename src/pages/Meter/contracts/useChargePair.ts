import { useCharge } from './useContract'
import { useOnceCallResult, useWatchCallResult } from '../../../state/multicall/hooks'
import { BigNumber } from 'ethers'
import { Token } from 'my-meter-swap-sdk'
import { useToken } from '../../../hooks/Tokens'
import { useActiveWeb3React } from '../../../hooks'

/**
 * Swap
 */

export function useLpFeeRate(address: string): BigNumber | null {
  const contract = useCharge(address)
  return useOnceCallResult(contract, '_LP_FEE_RATE_', [])
}

export function useBaseToken(address: string | undefined): Token | null {
  const contract = useCharge(address)
  const tokenAddress = useOnceCallResult(contract, '_BASE_TOKEN_', [])
  return useToken(tokenAddress) ?? null
}

export function useQuoteToken(address: string | undefined): Token | null {
  const contract = useCharge(address)
  const tokenAddress = useOnceCallResult(contract, '_QUOTE_TOKEN_', [])
  return useToken(tokenAddress) ?? null
}

export function useOraclePrice(address: string | undefined): BigNumber | null {
  const contract = useCharge(address)
  return useOnceCallResult(contract, 'getOraclePrice', [])
}

export function useQueryBuyBaseToken(address?: string, amount?: BigNumber | null): BigNumber | null {
  const contract = useCharge(address)
  const validAmount = amount && amount.gt(0)
  return useOnceCallResult(
    validAmount ? contract : undefined,
    'queryBuyBaseToken',
    [amount?.toHexString()]
  )
}

export function useQuerySellBaseToken(address?: string, amount?: BigNumber | null): BigNumber | null {
  const contract = useCharge(address)
  const validAmount = amount && amount.gt(0)
  return useOnceCallResult(
    validAmount ? contract : undefined,
    'querySellBaseToken',
    [amount?.toHexString()]
  )
}

/**
 * Pool
 */

export function useBaseBalance(address: string | undefined): BigNumber | null {
  const contract = useCharge(address)
  return useWatchCallResult(contract, '_BASE_BALANCE_', [])
}

export function useQuoteBalance(address: string | undefined): BigNumber | null {
  const contract = useCharge(address)
  return useWatchCallResult(contract, '_QUOTE_BALANCE_', [])
}

export function useMyBaseCapitalBalance(address: string | undefined): BigNumber | null {
  const { account } = useActiveWeb3React()
  const contract = useCharge(address)
  return useWatchCallResult(contract, 'getBaseCapitalBalanceOf', [account || undefined]) as BigNumber
}

export function useMyQuoteCapitalBalance(address: string | undefined): BigNumber | null {
  const { account } = useActiveWeb3React()
  const contract = useCharge(address)
  return useWatchCallResult(contract, 'getQuoteCapitalBalanceOf', [account || undefined]) as BigNumber
}

export function useBaseCapitalToken(address: string | undefined): Token | null {
  const contract = useCharge(address)
  const tokenAddress = useOnceCallResult(contract, '_BASE_CAPITAL_TOKEN_', [])
  return useToken(tokenAddress) ?? null
}

export function useQuoteCapitalToken(address: string | undefined): Token | null {
  const contract = useCharge(address)
  const tokenAddress = useOnceCallResult(contract, '_QUOTE_CAPITAL_TOKEN_', [])
  return useToken(tokenAddress) ?? null
}

export function useTotalBaseCapital(address: string | undefined): BigNumber | null {
  const contract = useCharge(address)
  return useOnceCallResult(contract, 'getTotalBaseCapital', [])
}

export function useTotalQuoteCapital(address: string | undefined): BigNumber | null {
  const contract = useCharge(address)
  return useOnceCallResult(contract, 'getTotalQuoteCapital', [])
}


export function useExpectedTarget(address: string | undefined): { baseTarget: BigNumber | null, quoteTarget: BigNumber | null } {
  const contract = useCharge(address)
  const result = useOnceCallResult(contract, 'getExpectedTarget', [])
  return {
    baseTarget: result ? result.baseTarget : null,
    quoteTarget: result ? result.quoteTarget : null
  }
}

export function useWithdrawBasePenalty(address: string | undefined, amount: BigNumber | null): BigNumber | null {
  const contract = useCharge(address)
  return useOnceCallResult(contract, 'getWithdrawBasePenalty', [amount?.toHexString()])
}

export function useWithdrawQuotePenalty(address: string | undefined, amount: BigNumber | null): BigNumber | null {
  const contract = useCharge(address)
  return useOnceCallResult(contract, 'getWithdrawQuotePenalty', [amount?.toHexString()])
}
