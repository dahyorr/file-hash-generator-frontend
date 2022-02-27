import * as React from "react";
import ShowHeaderProgressBar from '@/loaders/HeaderProgressBar/ShowHeaderProgressBar';
import { Route, Routes } from "react-router-dom";
import PageNotFound from '../ErrorPages/404';

const FileHashGenerator = React.lazy(() => import("./FileHashGenerator"));

const Index = () => {
  return (
    <>
    Generators
    </>
  )
}

const Generators = () => {
  return (
    <Routes>
      <Route index element={<Index/>}/>,
      <Route path='file-hash-generator/*' element={
        <React.Suspense fallback={<ShowHeaderProgressBar/>}>
          <FileHashGenerator />
        </React.Suspense>
      }/>
      <Route path="*" element={<PageNotFound/>}/>

    </Routes>
  )
};

export default Generators