// import { Typography } from '@mui/material';
import Box from '@mui/system/Box';
import { PropsWithChildren } from 'react';

const PageHeader: React.FC<PropsWithChildren> = ({ children }) => {
  return <Box sx={{ py: 4, mb: 3 }}>
    {children}
  </Box>;
};

export default PageHeader;
