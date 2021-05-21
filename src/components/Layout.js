import {
  AppBar,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Toolbar,
  Typography,
  Avatar,
} from "@material-ui/core";
import { SubjectOutlined, AddCircleOutlineOutlined } from "@material-ui/icons";
import { useHistory, useLocation } from "react-router-dom";
import { format } from "date-fns";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => {
  return {
    root: {
      display: "flex",
    },
    page: {
      backgroundColor: "#f9f9f9",
      width: "100%",
      padding: theme.spacing(3),
    },
    drawer: {
      width: drawerWidth,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    active: {
      backgroundColor: "#f4f4f4",
    },
    title: {
      padding: theme.spacing(2),
    },
    appBar: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
    toolbar: theme.mixins.toolbar,
    date: {
      flexGrow: 1,
    },
    avatar: {
      marginLeft: theme.spacing(2),
    },
  };
});

const Layout = ({ children }) => {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();

  const menuItems = [
    {
      text: "My Notes",
      icon: <SubjectOutlined color="secondary" />,
      path: "/notes",
    },
    {
      text: "Create Notes",
      icon: <AddCircleOutlineOutlined color="secondary" />,
      path: "/create",
    },
  ];

  return (
    <div className={classes.root}>
      <Drawer
        className={classes.drawer}
        classes={{
          paper: classes.drawerPaper,
        }}
        variant="permanent"
        anchor="left"
      >
        <div className={classes.title}>
          <Typography variant="h5">Notes</Typography>
        </div>

        <List>
          {menuItems.map((item) => {
            return (
              <ListItem
                key={item.text}
                button
                onClick={() => history.push(item.path)}
                className={
                  location.pathname === item.path ? classes.active : null
                }
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText>{item.text}</ListItemText>
              </ListItem>
            );
          })}
        </List>
      </Drawer>

      <AppBar className={classes.appBar} elevation={1}>
        <Toolbar>
          <Typography className={classes.date}>
            {format(new Date(), "d MMMM y, H:mm")}
          </Typography>
          <Typography>Mario</Typography>
          <Avatar src="/mario_PNG53.png" className={classes.avatar}></Avatar>
        </Toolbar>
      </AppBar>

      <div className={classes.page}>
        <div className={classes.toolbar}></div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Layout;
