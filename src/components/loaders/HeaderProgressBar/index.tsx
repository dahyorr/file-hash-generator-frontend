import { useAppSelector } from '@/hooks';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

const ProgressBar = () => {

  const displayProgressBar = useAppSelector(state => state.loaders.headerProgressBar)
  
  return displayProgressBar  
  ?(
    <Box sx={{ width: '100%'}}>
      <LinearProgress color="primary" />
    </Box>
  )
  :null
}

export default ProgressBar