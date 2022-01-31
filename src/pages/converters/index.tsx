import ShowHeaderProgressBar from '@/loaders/HeaderProgressBar/ShowHeaderProgressBar';
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
  </Routes>
    
)

export default Converters
