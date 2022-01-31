import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const Spinner: React.FC<{
    size?: number
}> = ({size}) => {
  return (
    <Box sx={{ 
        display: 'flex',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    }}>
      <CircularProgress color='primary' size={size}/>
    </Box>
  );
}

export default Spinner