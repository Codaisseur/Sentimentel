import request from 'superagent'

export const SENTIMENTS_FETCHED = 'SENTIMENTS_FETCHED'

const fetchSentiments = (searchTerm) => {
  return (dispatch) => {
    dispatch({ type: 'LOADING' })

    request
      .get(`https://brand-sentiment-api.herokuapp.com/search/${searchTerm}`)
      .set('Accept', 'application/json')
      .end(function(err, res){
        if (err) {
          dispatch({
            type: 'ERROR',
            payload: err
          })
          dispatch(fetchSentiments(searchTerm))
        } else {
          dispatch({
            type: SENTIMENTS_FETCHED,
            payload: res.body.documents
          })
        }
        dispatch({ type: 'DONE' })
      })
  }
}

export default fetchSentiments
