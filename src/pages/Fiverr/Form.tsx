import React, { useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import "../../App.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

const Form = (): JSX.Element => {
  const [complexity, setComplexsity] = useState(0);
  const [roughBudget, setRoughBudget] = useState(0);

  // calculate the rough budget
  const calculateBudget = (
    lines: number = 0,
    files: number = 0,
    budget: number = 0
  ) => {
    let file = Math.ceil(lines / 500);
    if (file <= 0) {
      file = files;
    }

    if (file > 10) {
      setComplexsity(10);
    }

    let roughBudget = 0;
    if (file <= 5) {
      roughBudget = file * 25;
    } else {
      roughBudget = file * 40;
    }

    return roughBudget;
  };

  // get the rough budget
  const getRoughBudget = () => {
    const lines = document.getElementById("lines") as HTMLInputElement;
    const lineCount = +lines.value;
    const files = document.getElementById("files") as HTMLInputElement;
    const fileCount = +files.value;
    const budget = document.getElementById("budget") as HTMLInputElement;
    const budgetCount = +budget.value;
    const roughBudget = calculateBudget(lineCount, fileCount, budgetCount);
    setRoughBudget(roughBudget);
  };

  // prevents the textField value getting below 0
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (+value < 0) {
      event.target.value = "0";
    }
    getRoughBudget();
  };

  const getValueText = (value: number) => {
    setComplexsity(value);
    return `${value}`;
  };

  const classes = useStyles();
  return (
    <div className="inside-invert">
      <CssBaseline />
      <Container maxWidth="sm">
        <h3>Budget Calculator</h3>
        <div style={{ fontSize: "12px", fontWeight: "bold" }}>
          * Enter the total number of lines of source code{" "}
          <span style={{ color: "blue" }}>OR</span> the total files of source
          code
        </div>
        <form className={classes.root} noValidate autoComplete="off">
          <Grid item xs={12}>
            <TextField
              id="lines"
              label="Number of lines of code"
              type="number"
              name="lines"
              variant="outlined"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="files"
              label="Number of files of code"
              type="number"
              name="files"
              variant="outlined"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography id="discrete-slider" gutterBottom>
              Select the complexity of the project
            </Typography>
            <Slider
              defaultValue={10}
              aria-labelledby="discrete-slider"
              valueLabelDisplay="auto"
              step={1}
              marks
              min={1}
              max={10}
              getAriaValueText={getValueText}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="budget"
              label="Your budget"
              type="number"
              name="budget"
              variant="outlined"
              onChange={handleChange}
              style={{ display: "none" }}
            />
          </Grid>

          <Grid item xs={12}>
            <label htmlFor="">Rough budget needs : </label>
            <Button variant="contained" color="primary" id="roughBudget">
              {complexity
                ? Math.ceil(roughBudget / ((1 / complexity) * 5))
                : Math.ceil(roughBudget)}{" "}
              $ (USD)
            </Button>
          </Grid>
        </form>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={2}
        >
          <Grid item xs={12}>
            <div
              style={{
                fontSize: "12px",
                fontWeight: "bold",
                marginTop: "1rem",
              }}
            >
              Have more questions? Feel free to contact me at{" "}
            </div>
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              style={{
                backgroundColor: "#1dbf73",
                color: "#fff",
              }}
              onClick={() =>
                (document.location.href =
                  "https://www.fiverr.com/inbox/lakmalepp")
              }
            >
              Go to fiverr inbox
            </Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Form;
