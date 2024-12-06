import { Box, Stack, Switch, Typography } from '@mui/material'
import React from 'react'


export type JWTDecodeSettings = {
  verifySignature: boolean
}

export type JWTEncodeSettings = {
  algorithm: string
  signingKey: string
  payload: string
}
type BaseProps = {
  // onUpdate: (settings: JWTDecodeSettings | JWTEncodeSettings) => void
}

interface DecodeProps extends BaseProps {
  mode: 'decode'
  settings: JWTDecodeSettings
  onUpdate: (settings: JWTDecodeSettings) => void

}

interface EncodeProps extends BaseProps {
  mode: 'encode'
  settings: JWTEncodeSettings
  onUpdate: (settings: JWTEncodeSettings) => void

}


type Props = DecodeProps | EncodeProps

const JWTSettings = ({ settings, mode, onUpdate }: Props) => {

  const onSettingUpdate = (key: keyof JWTDecodeSettings | keyof JWTEncodeSettings, value: any) => {
    onUpdate({ ...settings, [key]: value })
  }

  if (mode === 'decode') {
    return (
      <Box>
        <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
          <Typography>Verify Signature </Typography>
          <Switch checked={settings.verifySignature} onChange={(e) => onSettingUpdate('verifySignature', e.target.checked)} />
        </Stack>
      </Box>
    )
  }
  else return null
}




export default JWTSettings