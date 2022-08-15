import { Button, Grid, Paper, TextField } from "@mui/material";
import React from "react";

class AddTodo extends React.Component {
    constructor(props) {
        super(props);
        this.state = { item: { title: ""} };
        this.add = props.add;
    }

    onInputChange = (e) => {
        const thisItem = this.state.item;
        thisItem.title = e.target.value;
        this.setState({ item: thisItem });
        // console.log(thisItem);
    }

    onButtonClick = () => {
        this.add(this.state.item);
        this.setState({ item: { title: "" } });
    }

    enterKeyEventHandler = (e) => {
        if (e.key === 'Enter') {
            this.onButtonClick();
        }
    }

    render() {
        return (
            <Paper style={{ margin: 16, padding: 16 }}>
                <Grid container>
                    <Grid xs={12} md={11} item style={{ paddingRight: 16 }}>
                        <TextField 
                            variant="standard"
                            placeholder=" Add Todo here" 
                            fullWidth 
                            onChange={this.onInputChange}
                            value={this.state.item.title}
                            onKeyPress={this.enterKeyEventHandler}
                        />
                    </Grid>
                    <Grid xs={12} md={1} item>
                        <Button
                            fullWidth 
                            variant="outlined"
                            onClick={this.onButtonClick}
                        >
                            +
                        </Button>
                        {/* <IconButton
                        aria-label="add Todo"
                        onClick={this.onButtonClick}
                        >
                        <AddBoxOutlined color="primary" />
                    </IconButton> */}
                    </Grid>
                </Grid>
            </Paper>
        );
    }
}

export default AddTodo;