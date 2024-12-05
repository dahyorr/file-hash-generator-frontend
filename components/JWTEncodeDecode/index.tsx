"use client"
import { Box, Stack, Switch, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import PageHeader from '../PageHeader'
import JWTEncode from './JWTEncode'
import JWTDecode from './JWTDecode'

const JWTEncodeDecode = () => {
  const [mode, setMode] = useState<'encode' | "decode">("decode")

  const onModeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setMode("encode")
    } else {
      setMode("decode")
    }
  }
  return (
    <Box>
      <PageHeader>
        <Box display="flex" justifyContent={'space-between'}>
          <Typography variant="h4" >JWT Encode/Decode</Typography>

          <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
            <Typography>Decode</Typography>
            <Switch checked={mode === "encode"} onChange={onModeChange} />
            <Typography>Encode</Typography>
          </Stack>
        </Box>
      </PageHeader>

      {mode === "encode" ? (<JWTEncode />) : (<JWTDecode />)}

    </Box>

  )
}

export default JWTEncodeDecode