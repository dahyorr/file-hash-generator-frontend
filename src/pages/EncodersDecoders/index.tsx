import ShowHeaderProgressBar from '@/loaders/HeaderProgressBar/ShowHeaderProgressBar';
import PageNotFound from '../ErrorPages/404';
import * as React from 'react'
import { Route, Routes } from "react-router-dom";
const Base64EncodeDecode = React.lazy(() => import("./Base64EncodeDecode"));

const Index = () => {
  return (
    <>
      Converters
    </>
  )
};

const EncodersDecoders = () => (
  <Routes>
    <Route index element={<Index/>}/>
    <Route path='base64' element={
      <React.Suspense fallback={<ShowHeaderProgressBar/>}>
        <Base64EncodeDecode />
      </React.Suspense>
    }/>
    <Route path="*" element={<PageNotFound/>}/>
  </Routes>
    
)

export default EncodersDecoders
