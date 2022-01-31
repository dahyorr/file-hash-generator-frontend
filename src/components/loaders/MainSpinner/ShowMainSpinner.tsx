import {useEffect} from 'react';
import { useAppDispatch } from '@/hooks';
import { displayMainSpinner, hideMainSpinner } from '@/slices/loadersSlice';

// Shows HeaderProgressBar when rendered

const ShowMainSpinner = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(displayMainSpinner())
    return () => {
      dispatch(hideMainSpinner())
    }
  }, [])

  return null;
};

export default ShowMainSpinner;
