import ShowHeaderProgressBar from '@/loaders/HeaderProgressBar/ShowHeaderProgressBar';
// import { Container } from '@mui/material';
import PageNotFound from '../ErrorPages/404';
import * as React from 'react'
import { Route, Routes } from "react-router-dom";
const JsonToYaml = React.lazy(() => import("./JsonToYaml"));

const Index = () => {
  return (
    <>
      Converters
    </>
  )
};

const Converters = () => (
  <Routes>
    <Route index element={<Index/>}/>
    <Route path='json-yaml' element={
      <React.Suspense fallback={<ShowHeaderProgressBar/>}>
        <JsonToYaml />
      </React.Suspense>
    }/>
    <Route path="*" element={<PageNotFound/>}/>
  </Routes>
    
)

export default Converters
