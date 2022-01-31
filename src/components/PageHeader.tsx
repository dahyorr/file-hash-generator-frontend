import { Typography } from '@mui/material';
import Box from '@mui/system/Box';

const PageHeader: React.FC = ({children}) => {
  return <Box sx={{py: 4, mb: 3}}>
      {children}
  </Box>;
};

export default PageHeader;
