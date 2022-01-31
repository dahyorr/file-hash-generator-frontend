import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {styled} from '@mui/system'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Spinner from '../loaders/Spinner';

const Preview = styled(Paper)({
    width: '100%',
    minHeight:"400px", 
})

const hashTypes = [
  {type: 'SHA256'},
  {type: 'MD5'},
]

const HashPreview = () => {
  const {fileId} = useParams()
  const [data, setData] = useState({})
  
  useEffect(() => {
    // fetch info about file id,

  }, [])

  return(
      <Preview elevation={12}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Hash Type</TableCell>
              <TableCell align="left">Hash</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {hashTypes.map((row) => (
            <TableRow
              key={row.type}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" sx={{width: '150px'}}>
                {row.type}
              </TableCell>
              <TableCell align="left">dc</TableCell>
            </TableRow>
          ))}
        </TableBody>
        </Table>

        {/* <Spinner size={80}/> */}
      </Preview>
    )  
};

export default HashPreview;
