import { TextField, Grid, Box, Button } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";

function Page2({navigation}) {
  let navigate = useNavigate();
  // const location = useLocation();
  // const aaa = [];
  const [state, setState] = useState({
    id: 0,
    title: "",
    description: "",
    priority: "",
  });

  const idCount =  localStorage.getItem('DataCount')
  const { title, description, priority} = state;
  const data = { title: title, description: description, priority: priority,id:idCount};

  console.log("my data", data);

  // const localData = JSON.stringify(data);

  const home = () => {
    let items = JSON.parse(localStorage.getItem('data'));
    items.push(data);
    localStorage.setItem("data", JSON.stringify(items));
    navigate("/");
  };


  // const handlesubmit = (event) => {
  //   // const { title, description, priority } = state;
  //   //  const data = {"title":title,"description":description,"priority":priority};
  //   //  console.log(data);
  //   //  const myJSON = JSON.stringify(data);
  //  localStorage.setItem("data", myJSON);
  //   };

  const handleChange = (event) => {
    const value = event.target.value;
    setState({
      ...state,
      [event.target.name]: value,
    });
  };

  return (
    <div>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 2, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <h2>My List</h2>

        <form>
          <Grid
            container
            alignItems="center"
            justify="center"
            direction="column"
          >
              {/* <TextField
              hidden
             required
              type="number"
              name="id"
              autoComplete="off"
              value={state.id}
              onChange={handleChange}
            /> */}

            <TextField
              required
              label="Title"
              name="title"
              autoComplete="off"
              value={state.title}
              onChange={handleChange}
            />

            <TextField
              required
              label="Description"
              name="description"
              value={state.description}
              autoComplete="off"
              onChange={handleChange}
            />

            <TextField
              required
              label="Priority"
              name="priority"
              value={state.priority}
              onChange={handleChange}
              autoComplete="off"
            />

            <Button
              variant="contained"
              color="success"
              type="submit"
              onClick={home}
            >
              Save
            </Button>
          </Grid>
        </form>
      </Box>
    </div>
  );
}

export default Page2;
