import { Route } from "react-router-dom";
import FileHashGenerator from "./FileHashGenerator";

const Generators = () => {
  return (
    <>
    Generators
    </>
  )
};

export const generators = () => (
    <>
    <Route index element={<Generators/>}/>,
    <Route path='file-hash-generator' element={<FileHashGenerator/>}/>,
    </>
)
