import { Box } from '@mui/system'
import MonacoEditor, {OnMount} from '@monaco-editor/react'

interface PreviewProps {
  value?: string;
  onMount: OnMount;
  theme?: string;
}

const Preview: React.FC<PreviewProps> = ({onMount, theme}) => {
  return (
    <Box
    sx={{
      flexGrow: 1,
      height: '100%',
      overflowY: 'hidden',
    }}
  >
      <MonacoEditor
        width="100%"
        height="100%"
        onMount={onMount}
        options={{
          domReadOnly: true, 
          readOnly: true,
          automaticLayout: true
        }}
        theme={theme}
      />
  </Box>
  )
}

export default Preview