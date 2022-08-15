import './App.css';
import { AppBar, Button, Grid, LinearProgress, List, Paper, Toolbar, Typography } from '@mui/material';
import Todo from './Todo';
import React from 'react';
import { Container } from '@mui/system';
import AddTodo from './AddTodo';
import { call, signout } from './service/ApiService';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      loading: true,
    };
  }

  componentDidMount() {
    call("/todo", "GET", null).then((response) =>
      this.setState({ items: response.data, loading: false })
    );
  }

  add = (item) => {
    call("/todo", "POST", item).then((response) => 
      this.setState({ items: response.data })
    );
  }

  delete = (item) => {
    call("/todo", "DELETE", item).then((response) => 
      this.setState({ items: response.data })
    );
  }

  update = (item) => {
    call("/todo", "PUT", item).then((response) => 
      this.setState({ items: response.data })
    );
  }

  render() {
    var todoItems = this.state.items.length > 0 && (
      <Paper style={{ margin: 16, paddingRight: 16 }}>
        <List>
          {this.state.items.map((item, idx) => (
            <Todo 
              item={item} 
              key={item.id} 
              delete={this.delete} 
              update={this.update}
            />
          ))}
        </List>
      </Paper>
    );

    var navigationBar = (
      <AppBar position='static'>
        <Toolbar>
          <Grid justifyContent="space-between" container>
            <Grid item>
              <Typography variant='h6'>TODO LIST</Typography>
            </Grid>
            <Grid>
              <Button color='inherit' onClick={signout}>Logout</Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    );

    // 로딩 중이 아닐 때 렌더링할 부분
    var todoListPage = (
      <div className="App">
        {navigationBar}
        <Container maxWidth="md">
          <AddTodo add={this.add} />
          <div className="TodoList">{todoItems}</div>
        </Container>
      </div>
    );

    // 로딩 중일 때 렌더링할 부분
    var loadingPage = <h1><LinearProgress /></h1>

    var content = loadingPage;

    if (!this.state.loading) {
      content = todoListPage;
    }

    return <div className='App'>{content}</div>;
  }
}

export default App;
