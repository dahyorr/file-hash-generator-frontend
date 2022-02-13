import {useState, useRef, useEffect} from 'react'
import Editor from "@/components/JsonToYaml/Editor";
import Preview from "@/components/JsonToYaml/Preview";
import { Box} from '@mui/material';
import {OnChange, OnMount, OnValidate, loader} from '@monaco-editor/react'
import YAML from 'yaml'
import {editor} from 'monaco-editor'
import {monacoConfig} from '@/helpers/monacoLoaderConfig'
import { useTheme } from '@mui/material/styles';

loader.config(monacoConfig)
const JsonToYaml = () => {
  const [editorContent, setEditorContent] = useState("")
  const [editorErrors, setEditorErrors] = useState<string[]>([])
  const editorRef = useRef<editor.IStandaloneCodeEditor | null>(null);
  const previewRef = useRef<editor.IStandaloneCodeEditor | null>(null);

  const theme = useTheme()
  const themeMode = theme.palette.mode

  const handleEditorDidMount: OnMount = (editor) => {
    editorRef.current = editor; 
  }

  const handleEditorValidation: OnValidate = (markers) => {
    const errors = markers.map(marker => marker.message)
    console.log(errors)
    if(errors.length < 1){
      const value = editorRef.current?.getValue()
      console.log(value)
      setEditorContent(value || "")
    }
    setEditorErrors(errors)
  }
  
  const handlePreviewDidMount: OnMount = (editor) => {
    previewRef.current = editor; 
  }

  useEffect(() => {
    if(editorContent){
      const converted = YAML.stringify(JSON.parse(editorContent))
      previewRef.current?.getModel()?.setValue(converted)
    }
  }, [editorContent])
  
  return (
    <Box sx={{
      height: '100%'
    }}>
      <Box 
      sx={{
        maxWidth: '100%', 
        height: '100%',
        display: 'flex',
      }}>
        <Editor 
          value={editorContent} 
          onMount={handleEditorDidMount}
          theme={themeMode === 'light' ? themeMode :'vs-dark'}
          onValidate={handleEditorValidation}
        />
        <Preview 
          onMount={handlePreviewDidMount}
          theme={themeMode === 'light' ? themeMode :'vs-dark'}
        />
      </Box>
  
    </Box>
  )
};

export default JsonToYaml;
