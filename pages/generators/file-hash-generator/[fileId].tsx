import PageHeader from 'components/PageHeader'
import HashPreview from 'components/fileHashGenerator/HashPreview'
import { Box, Typography } from '@mui/material'
import React from 'react'

const FileHashGeneratorResultPage = () => {
  return (
    <Box>
      <PageHeader>
        <Typography variant="h4" >File Hash Generator</Typography>
      </PageHeader>

      <HashPreview />

    </Box>
  )
}

export default FileHashGeneratorResultPage