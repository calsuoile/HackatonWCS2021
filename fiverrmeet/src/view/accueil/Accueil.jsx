import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  picture: {
    width: "90%",
    margin: "15px",
    borderRadius: "10%",
    "&:hover": {
      opacity: "0,5",
    },
  },
  img: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  button: {
    border: "none",
    background: "none",

    "&:hover": {
      opacity: "0.8",
    },
  },
  // back: {
  //    backgroundColor: "black",
  // }
}));

export default function ButtonSizes() {
  const classes = useStyles();

  return (
    <div className={classes.back}>
      <div className={classes.img}>
      <Link to={"/needHelp"}>
        <button className={classes.button}> 
        <img
          className={classes.picture}
          alt="je t'aide"
          src="./assets/help.png"
        />
        </button>
        </Link>
        <Link to={"/ICanHelp"}>
        <button className={classes.button}>
        <img
          className={classes.picture}
          alt="tu m'aides"
          src="./assets/help1.png"
        />
        </button>
        </Link>
      </div>
    </div>
  );
}
