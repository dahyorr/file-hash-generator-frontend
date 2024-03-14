import FileForm from 'components/fileHashGenerator/FileForm'
import { Alert, Box, Typography } from '@mui/material'
import React from 'react'
import PageHeader from 'components/PageHeader'

const FileHashGeneratorPage = () => {
  return (
    <Box>
      <PageHeader gap="0.5rem" display="flex" flexDirection={'column'}>
        <Alert severity="info">The instance may take a while to spin up on first request</Alert>
        <Typography variant="h4" >File Hash Generator</Typography>
      </PageHeader>

      <FileForm />

    </Box>
  )
}

export default FileHashGeneratorPage