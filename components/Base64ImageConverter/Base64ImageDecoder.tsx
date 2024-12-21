'use client'
import { Box, Button, IconButton, InputAdornment, Stack, TextField } from "@mui/material"
import FilePicker from "../FilePicker"
import { useState } from "react"
import { useSnackbar } from "notistack"
import { copyToClipboard } from "@/utils"
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

interface Props { }
const Base64ImageDecoder = ({ }: Props) => {

  const { enqueueSnackbar } = useSnackbar()
  const [files, setFiles] = useState<File[]>([])
  const [decodedImage, setDecodedImage] = useState<string>('')

  const onSelectFile = (files: File[]) => {
    setFiles(files)
  }

  const onDecode = async () => {
    if (files.length === 0) {
      enqueueSnackbar('Please select a file', { variant: 'error' })
      return
    }
    const reader = new FileReader()
    reader.onload = (e) => {
      const base64 = e.target?.result as string
      setDecodedImage(base64)
    }
    reader.readAsDataURL(files[0])
  }

  const onCopyDecodedImage = () => {
    copyToClipboard(decodedImage)
    enqueueSnackbar('Copied to clipboard', { variant: 'success' })
  }

  // useEffect(() => {
  //   onDecode()
  // }, [files])

  return (
    <Stack alignItems={'center'} spacing={2}>
      <FilePicker
        onChange={onSelectFile}
        selectedFiles={files}
        placeholder="Select an image file"
        clearFiles={() => setFiles([])}
        sizeLimit={1024 * 1024 * 10}
        accept={{
          'image/jpeg': [ '.jpg', '.jpeg' ],
          'image/png': [ '.png' ],
          'image/gif': [ '.gif' ],
          'image/bmp': [ '.bmp' ],
          'image/webp': [ '.webp' ],
          'image/svg+xml': [ '.svg' ],
        }}
      />
      <Box>
        <Button
          variant="contained"
          color="primary"
          onClick={onDecode}
        >Decode</Button>
      </Box>

      <TextField
        label="Decoded Image"
        multiline
        rows={10}
        fullWidth
        variant="outlined"
        value={decodedImage}
        disabled
        slotProps={{
          input: {
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="copy to clipboard"
                  onClick={onCopyDecodedImage}
                  edge="end"
                >
                  <ContentCopyIcon />
                </IconButton>
              </InputAdornment>
            )
          }
        }}

      />

    </Stack>
  )
}
export default Base64ImageDecoder