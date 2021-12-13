import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Badge } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { auth } from "../firebase";
import { actionTypes } from "../reducer";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: "7rem"
  },
  appBar: {
    backgroundColor: "whitesmoke",
    boxShadow: "none"
  },
  grow: {
    flexGrow: 15
  },
  button: {
    marginLeft: theme.spacing(5)
  },
  image: {
    marginRight: "10px"
  }
}));

export default function Navbar() {
  const classes = useStyles();
  const [{ basket, user }, dispatch] = useStateValue();
  const history = useHistory();
  const handleAuth = () => {
    if (user) {
      auth.signOut();
      dispatch({
        type: actionTypes.EMPTY_BASKET,
        basket: []
      });
      history.push("/");
    }
  };

  return (
    <Box sx={{ flexGrow: 2 }}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Link to="/">
            <IconButton>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/1/1e/RPC-JP_Logo.png"
                alt="Mi tienda"
                height="45px"
                className={classes.image}
              />
            </IconButton>
          </Link>
          <div className={classes.grow} />
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
            color="white"
          >
            Hello {user ? user.email : "Guest"}
          </Typography>
          <div className={classes.button}>
            <Link to={!user && "/signin"}>
              <Button onClick={handleAuth} variant="outlined">
                <Typography
                  variant="h6"
                  component="div"
                  sx={{ flexGrow: 1 }}
                  color="white"
                >
                  <strong>{user ? "Sign Out" : "Sign In"}</strong>
                </Typography>
              </Button>
            </Link>
            <Link to="/checkout-page">
              <IconButton aria-label="show cart items" color="inherit">
                <Badge badgeContent={basket?.length} color="secondary">
                  <AddShoppingCartIcon fontSize="large" color="white" />
                </Badge>
              </IconButton>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
