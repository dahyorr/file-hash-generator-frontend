import FileForm from 'components/fileHashGenerator/FileForm'
import { Box, Typography } from '@mui/material'
import React from 'react'
import PageHeader from 'components/PageHeader'

const FileHashGeneratorPage = () => {
  return (
    <Box>

      <PageHeader>
        <Typography variant="h4" >File Hash Generator</Typography>
      </PageHeader>

      <FileForm/>

  </Box>
  )
}

export default FileHashGeneratorPage