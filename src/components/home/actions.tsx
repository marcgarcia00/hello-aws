import { counterConstants } from "./reducer"

export function increment(): any {
  return {
    type: counterConstants.INCREMENT
  }
}

export function decrement(): any {
  return {
    type: counterConstants.DECREMENT
  }
}
