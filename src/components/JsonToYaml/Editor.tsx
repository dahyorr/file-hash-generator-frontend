import MonacoEditor, {OnMount, OnValidate} from '@monaco-editor/react'
import { Box } from '@mui/system'

interface EditorProps {
  value: string;
  onMount: OnMount;
  theme?: string;
  onValidate: OnValidate;
}

const Editor: React.FC<EditorProps> = ({value, onMount, theme, onValidate}) => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        height: '100%',
        maxWidth: '50%',
        overflow: 'hidden',
      }}
    >
      <MonacoEditor
        defaultLanguage='json'
        defaultValue={value}
        onMount={onMount}
        theme={theme}
        options={{
          automaticLayout: true
        }}
        onValidate={onValidate}
      />
    </Box>
  )
}

export default Editor