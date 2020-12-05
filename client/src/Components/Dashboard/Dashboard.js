import React, { useEffect, useState } from "react";
import { makeStyles, Box, Grid, Button, Typography } from "@material-ui/core";
import CircularStatic from "../CircularProgress/CircularProgress";

const mate = makeStyles((theme) => ({
  dashboard: {
    height: "100vh",
    width: "100%",
  },
  dash_up: {
    height: "70%",
    width: "100%",
    display: "flex",
    backgroundColor: theme.palette.primary.main,
  },
  big_image: {
    width: "35%",
    backgroundColor: theme.palette.primary.dark,
  },
  big: {
    height: "100%",
    width: "100%",
    "& canvas": {
      height: "100%",
      width: "100%",
    },
  },
  information: {
    width: "65%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "",
    alignItems: "flex-start",
    backgroundColor: theme.palette.info.light,
    color: "white",
    "& .MuiTypography-root": {
      padding: 24,
      fontSize: 24,
    },
  },
  grid_item: {
    border: "1px solid black",
  },
  dash_down: {
    height: "30%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.palette.info.main,
  },
  group_feature: {
    height: 200,
    width: 400,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  btn_feature: {
    fontSize: 18,
    padding: 24,
    fontWeight: "bold",
    textTransform: "initial",
  },
  percent_gr: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "flex-start",
  },
  percent_typo: {
    height: "50%",
    padding: 24,
    fontSize: 24,
  },
  dash_loading: {
    position: "fixed",
    top: 0,
    left: 0,
    height: "100vh",
    width: "100%",
    backgroundColor: " black;",
    opacity: 0.7,
    zIndex: 1400,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

function Dashboard() {
  const classes = mate();
  const [loadingCame, setLoadingCame] = useState(0);
  const [isDissLoading, setisDissLoading] = useState(false);
  const loadingCamera = (e) => {
    const start_btn = document.getElementById("start_btn");
    const start_wrap = document.getElementById("start_wrap");
    start_btn.style.display = "block";
    start_wrap.style.display = "block";
  };

  const handleLoadCamera = (e) => {
    setLoadingCame(1);
    setisDissLoading(true);
    setTimeout(() => {
      loadingCamera();
      setLoadingCame(100);
    }, 2400);
  };
  useEffect(() => {}, []);

  return (
    <Box className={classes.dashboard}>
      <>
        {loadingCame === 1 ? (
          <Box className={classes.dash_loading}>
            <CircularStatic />{" "}
          </Box>
        ) : (
          <></>
        )}
      </>

      <Box className={classes.dash_up}>
        <Box className={classes.big_image}>
          <div className={classes.big} id="webcam-container"></div>
        </Box>
        <Box className={classes.information}>
          <Typography>Name: Duc Cao</Typography>
          <Typography>Age: 3</Typography>

          <Box className={classes.percent_typo}>
            <div className={classes.percent_gr} id="label-container"></div>
          </Box>
        </Box>
      </Box>
      <Box className={classes.dash_down}>
        <Box className={classes.group_feature}>
          <Button
            className={classes.btn_feature}
            variant="contained"
            color="inherit"
            disabled={isDissLoading ? true : false}
            onClick={handleLoadCamera}
          >
            Loading Camera
          </Button>
          <Button
            className={classes.btn_feature}
            variant="contained"
            color="inherit"
          >
            Catching Error
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default Dashboard;
