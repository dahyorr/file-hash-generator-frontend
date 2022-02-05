import {useEffect} from 'react';
import { useAppDispatch } from '@/hooks';
import { displayHeaderProgressBar, hideHeaderProgressBar } from '@/slices/loadersSlice';

// Shows HeaderProgressBar when rendered

const ShowHeaderProgressBar = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(displayHeaderProgressBar())
    return () => {
      dispatch(hideHeaderProgressBar())
    }
  }, [dispatch])

  return null;
};

export default ShowHeaderProgressBar;
