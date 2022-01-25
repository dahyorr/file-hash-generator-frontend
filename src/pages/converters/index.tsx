import { Route } from "react-router-dom";
import JsonToYaml from "./JsonToYaml";

const Converters = () => {
  return (
    <>
    Converters
    </>
  )
};

export const converters = () => (
    <>
    <Route index element={<Converters/>}/>,
    <Route path='json-yaml' element={<JsonToYaml/>}/>,
    </>
)
