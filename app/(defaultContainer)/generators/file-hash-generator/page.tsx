import FileForm from '@/components/FileHashGenerator/FileForm'
import { Alert, Box, Typography } from '@mui/material'
import React, { Suspense } from 'react'
import PageHeader from 'components/PageHeader'

const FileHashGeneratorPage = () => {
  return (
    <Suspense>
      <FileForm />
    </Suspense>
  )
}

export default FileHashGeneratorPage