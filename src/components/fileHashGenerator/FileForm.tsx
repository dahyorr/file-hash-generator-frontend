import { useState } from "react";
import Stack from '@mui/material/Stack';
import Fab from '@mui/material/Fab';
import ArrowForwardIcon  from '@mui/icons-material/Code';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import FileUpload from "./FileUpload";
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

const hashTypes = ['SHA256', 'MD5']

const FileForm = () => {
    const [files, setFiles] = useState<File[]>([])
    const [errors, setErrors] = useState<{[key: string]: string}>({})

    const [selectedHashType, setSelectedHashType] = useState<string[]>([])
    console.log(selectedHashType)
    const handleHashChange = (event: SelectChangeEvent<typeof selectedHashType>) => {
        const {value} = event.target
        setSelectedHashType(
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    const handleFileSelect = (files: File[]) => {
        setFiles(files)
    }

    const clearFiles = () => {
        setFiles([])
    }

    const validate = () => {
        const validationErrors: {[key: string]: string} = {}
        if(selectedHashType.length < 1){
            validationErrors.hashType = "Select a hash type"
        }
        if(files.length < 1){
            validationErrors.files = "You must upload a file"
        }
        setErrors(validationErrors)
        return Object.keys(validationErrors).length < 1
    }

    const onSubmit = async () => {
        if(validate()){
            // upload file, get uuid and send request
            const hashRequest = {
                fileID: "",
                hashTypes: selectedHashType
            }
            console.log(hashRequest)
            // redirect on success
        }
        return;
    }
    
    const clearFileErrorSnackbar = () => {
        setErrors(prev => ({...prev, files:""}))
    } 

    return (
        <Stack 
        // direction={'row'} 
        spacing={2} 
        sx={{
        alignItems: 'center',
        justifyContent: 'space-evenly'
        }}>

        <FileUpload 
            onChange={handleFileSelect} 
            selectedFiles={files} 
            clearFiles={clearFiles}
            sizeLimit={20971520}
            disableDropzone={false}
        />

        <Stack sx={{
            alignItems: 'center',
        }}>
            <FormControl variant="standard" sx={{ m: 3, mb: 5, minWidth: 200 }} error={Boolean(errors.hashType)}>
            <InputLabel>Hash Type</InputLabel>
            <Select
                value={selectedHashType}
                onChange={handleHashChange}
                label="Hash Type"
                renderValue={(selected) => selected.join(', ')}
                multiple
                name="hashType"
            >
                {hashTypes.map(type => (
                    <MenuItem key={type} value={type}>
                        <Checkbox checked={selectedHashType.indexOf(type) > -1} />
                        <ListItemText primary={type} />
                    </MenuItem>
                ))}
            </Select>
            {errors.hashType && <FormHelperText>{errors.hashType}</FormHelperText>}
            </FormControl>

            <Fab size="large" color="primary" aria-label="add" onClick={onSubmit}>
            <ArrowForwardIcon  />
            </Fab>
        </Stack>
            
            <Snackbar 
                open={Boolean(errors.files)} 
                autoHideDuration={6000} 
                onClose={clearFileErrorSnackbar}
            >
                <Alert 
                    onClose={clearFileErrorSnackbar} 
                    severity="error" 
                    sx={{ width: '100%' }}
                    elevation={6}
                    variant="filled"
                >
                    {errors.files}
                </Alert>
            </Snackbar>
        </Stack> 
    )
};

export default FileForm;
