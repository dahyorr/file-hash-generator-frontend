import { Box, TextField } from '@mui/material'
import React from 'react'

type Props = {}

const JWTEncode = (props: Props) => {
  return (
    <>
      <Box display='flex'>
        <TextField
          id="header"
          label="Header"
          multiline
          maxRows={5}
          minRows={5}
          fullWidth
        />
        <TextField
          id="payload"
          label="Payload"
          multiline
          maxRows={5}
          minRows={5}
          fullWidth
        />
      </Box>

      <TextField
        id="signature"
        label="Signature"
        multiline
        maxRows={4}
        minRows={4}
        fullWidth
      />

    </>
  )
}

export default JWTEncode