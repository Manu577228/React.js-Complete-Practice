import React, {useReducer, useEffect} from 'react'
import axios from 'axios'

const initialState = {
  loading: true,
  error: '',
  post: {}
}

const reducer = (state, action) => {
  switch(action.type) {
    case 'FETCH SUCCESS':
      return {
      loading: false,
      post: action.payload,
    error: ''
      }
       
      case 'FETCH SUCCESS':
        return {
        loading: false,
        post: action.payload,
      error: 'something went wrong'
        }

       default:
           return state 
   }
}

function DataFetchingTwo() {
  const  [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => {
    dispatch({type: 'FETCH SUCCESS', payload: response.data})
    })

    .catch(error => {
        dispatch({type: 'FETCH ERROR'}) 
    })
}, [])

    return (
         <div>
         {state.loading ? 'Loading' : state.post.title}
         {state.error ? Error : null}      
          </div>
    )
}

export default DataFetchingTwo
