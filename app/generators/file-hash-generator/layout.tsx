import PageHeader from 'components/PageHeader'
import HashPreview from 'components/fileHashGenerator/HashPreview'
import { Box, Typography } from '@mui/material'
import {PropsWithChildren} from 'react'

const FileHashGeneratorLayout = ({children}: PropsWithChildren) => {
  return (
    <Box>
      <PageHeader>
        <Typography variant="h4" >File Hash Generator</Typography>
      </PageHeader>

      {children}

    </Box>
  )
}

export default FileHashGeneratorLayout