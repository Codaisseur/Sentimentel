import { SENTIMENTS_FETCHED } from '../actions/sentiments/fetch'

export default (state = [], { type, payload } = {}) => {
  switch (type) {
    case SENTIMENTS_FETCHED :
      return [].concat(payload)
    default :
      return state
  }
}
