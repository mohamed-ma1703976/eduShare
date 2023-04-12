import React, { Component, Fragment } from "react";
import {
  Build,
  Delete,
  IconButton,
  Grid,
  Paper,
  Button,

} from "@mui/material";
import { CSSTransition } from "react-transition-group";


const styles = {
  Icon: {
    marginLeft: "auto"
  },
  Paper: {
    margin: "10px 0 0 -19px",
    padding: 10,
    display: "flex",
    alignItems: "center",
    //marginTop: 10,
    width: "43%"
  }
};

class Todo extends Component {
  state = {
    fade: false
  };

  gridRef = React.createRef();

  deleteTodo = () => {
    const fade = true;
    this.setState({ fade });

    let promise = new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve(true);
      }, 500);
    });

    promise.then(() => this.props.deleteTodo(this.props.index));
    console.log(this.state);
  };

  render() {
    const gridClass = this.state.fade ? "fade-out" : "";

    return (
      <Grid
        xs={12}
        className={`${gridClass}`}
        item
        key={this.props.index}
        ref={this.gridRef}
      >
        <Paper elevation={2} style={styles.Paper}>
          <span style={styles.Todo}>{this.props.todo}</span>
          <IconButton
            color="primary"
            aria-label="Edit"
            style={styles.Icon}

          >
            {/* <Build fontSize="small" /> */}
          </IconButton>
          {/* <IconButton
            color="secondary"
            aria-label="Delete"
            onClick={this.deleteTodo}
          > */}
          <Button onClick={this.deleteTodo} sx={{color:"#1ABC9C"}}>Delete</Button>
          {/* </IconButton> */}
        </Paper>
      </Grid>
    );
  }
}

export default Todo;
