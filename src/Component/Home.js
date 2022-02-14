import { Button, Paper, Table } from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import React from 'react';

function Home({ navigation }) {
  let navigate = useNavigate();
  const [values, setValues] = useState([]);

  const routeChange = () => {
    let path = `/page2`;
    navigate(path);
  };

  useEffect(() => {
    if (localStorage.getItem('data') == null) {
      localStorage.setItem('data', JSON.stringify([]));
    }
    const value = JSON.parse(localStorage.getItem('data'));
    console.log(value); //object
    localStorage.setItem('DataCount', value.length + 1);
    setValues(value);
  }, []);

  const handleRemove = (id) => {
    const removeItem = values.filter((row) => {
      return row.id !== id;
    });
    localStorage.setItem('data', JSON.stringify(removeItem));
    setValues(removeItem);
  };

  const handleUpdate = (id) => {
    console.log(id);
  };

  return (
    <div>
      <h1>My data</h1>
      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <TableContainer>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Title</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Priority</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {values.map((row, key) => (
                <TableRow key={key}>
                  <TableCell>{row.title}</TableCell>
                  <TableCell>{row.description}</TableCell>
                  <TableCell>{row.priority}</TableCell>
                  <TableCell>
                    <EditIcon onClick={() => handleUpdate(row.id)} />
                    <DeleteIcon onClick={() => handleRemove(row.id)} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>

      <Button
        variant="contained"
        type="button"
        color="success"
        onClick={routeChange}
      >
        ADD
      </Button>
    </div>
  );
}

export default Home;
