import Box from "@mui/system/Box";
import PageHeader from "@/components/PageHeader";
import { Typography } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import FileForm from "@/components/fileHashGenerator/FileForm";
import HashPreview from "@/components/fileHashGenerator/HashPreview";

const FileHashGenerator = () => {

  return (
  <Box>

    <PageHeader>
      <Typography variant="h4" >File Hash Generator</Typography>
    </PageHeader>

    <Routes>
      <Route index element={<FileForm/>}/>
      <Route path=':fileId' element={<HashPreview/>}/>
    </Routes>

  </Box>
  );
};

export default FileHashGenerator;
