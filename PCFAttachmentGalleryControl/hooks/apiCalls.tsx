import { useState } from 'react';

export default (apiFunc: Function) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const request = async (...args: any) => {
    setLoading(true);
    try {
      const result = await apiFunc(...args);
      console.log(
        '🚀 ~ file: apiCalls.tsx ~ line 12 ~ request ~ result',
        result,
      );
      setData(result);
    } catch (err: any) {
      console.log('🚀 ~ file: apiCalls.tsx ~ line 15 ~ request ~ err', err);
      setError(err.message || 'Unexpected Error!');
    } finally {
      setLoading(false);
    }
  };

  return {
    data,
    error,
    loading,
    request,
  };
};
