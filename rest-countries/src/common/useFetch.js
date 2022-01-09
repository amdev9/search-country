import { useEffect, useContext }  from "react"

import { store } from '../state/store.js';

const useFetch = url => {
  const { state, dispatch } = useContext(store);
  
  useEffect(() => {
    dispatch({ type: 'LOADING' });

    const fetchUrl = async () => {
      try {
        const response = await fetch(url);
        
        const data = await response.json();
    
        dispatch({ type: 'RESPONSE_COMPLETE', payload: { result: data } });
      } catch (error) {
        dispatch({ type: 'ERROR', payload: { error } });
      }
    };

    fetchUrl();
  }, [url, dispatch]);

};

export default useFetch