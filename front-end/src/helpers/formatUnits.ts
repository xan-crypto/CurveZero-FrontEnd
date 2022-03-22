import { number } from 'starknet'

export function formatUnits(value, decimals) {
  if (value === undefined) {
    return
  }

  if (!number.isHex(value)) {
    throw 'Cannot format non-hex!'
  }

  const str = number.hexToDecimalString(value)
  return parseFloat(str) / Math.pow(10, decimals)
}
