import React, { Component, Fragment } from "react";
import {
  Paper,
  Grid,
  Typography
} from "@mui/material";

import  AddTodoForm from "./AddTodoForm";
import  List  from "./List";

const styles = {
  Paper: {
    padding: 20,
    margin: "0 0 0 250px",
    textAlign: "center",
    width: "30%"
  }
};

class TodoList extends Component {
  state = {
    list: {}
  };
  addToList = todo => {
    let list = { ...this.state.list };
    list[`todo${Date.now()}`] = {
      todo: todo,
      status: "active"
    };

    this.setState({ list });
  };
  deleteTodo = key => {
    let list = { ...this.state.list };
    list[key] = null;

    this.setState({ list });
  };
  updateTodo = key => {
    let list = { ...this.state.list };
    list[key]["status"] = "editing";

    this.setState({ list });
  };
  saveTodo = (key, todo) => {
    let list = { ...this.state.list };
    list[key] = {
      todo: todo,
      status: "active"
    };

    this.setState({ list });
  };
  render() {
    return (
      <Fragment>
        <Grid container spacing={0}>
          <Grid item xs={12}>
            <Paper style={styles.Paper}>
              <AddTodoForm addToList={this.addToList} />
            </Paper>
          </Grid>
          <Grid item xs={12} style={styles.Paper}>
            <List
              deleteTodo={this.deleteTodo}
              list={this.state.list}
              updateTodo={this.updateTodo}
              saveTodo={this.saveTodo}
            />
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}

export default TodoList;
