import React from "react";
import {BrowserRouter, Link as RouterLink, Route, Switch} from "react-router-dom";
import {
    AppBar,
    Drawer,
    Icon,
    Link,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    makeStyles, ThemeProvider,
    Toolbar,
    Typography,
    unstable_createMuiStrictModeTheme as createMuiTheme
} from "@material-ui/core"
import Dashboard from "./features/Dashboard"
import Citizens from "./features/Citizens";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex"
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerContainer: {
        overflow: "auto",
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3)
    }
}));

const LinkBehavior = (path) => React.forwardRef((props, ref) => (
    <RouterLink ref={ref} to={path} {...props} />
));

const App = () => {
    const classes = useStyles()
    const theme = createMuiTheme();

    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <div className={classes.root}>
                    <AppBar position="fixed" className={classes.appBar}>
                        <Toolbar>
                            <Typography variant="h6" noWrap>
                                Society
                            </Typography>
                        </Toolbar>
                    </AppBar>
                    <nav className={classes.drawer}>
                        <Drawer variant={"permanent"} anchor={"left"} classes={{paper: classes.drawerPaper}}>
                            <Toolbar/>
                            <div className={classes.drawerContainer}>
                                <List>
                                    <Link component={LinkBehavior("/")}>
                                        <ListItem button>
                                            <ListItemIcon><Icon>home</Icon></ListItemIcon>
                                            <ListItemText primary={"Dashboard"}/>
                                        </ListItem>
                                    </Link>
                                    <Link component={LinkBehavior("/citizens")}>
                                        <ListItem button>
                                            <ListItemIcon><Icon>person</Icon></ListItemIcon>
                                            <ListItemText primary={"Citizens"}/>
                                        </ListItem>
                                    </Link>
                                </List>
                            </div>
                        </Drawer>
                    </nav>
                    <main className={classes.content}>
                        <Toolbar/>
                        <Switch>
                            <Route exact path={"/"}>
                                <Dashboard/>
                            </Route>
                            <Route path={"/citizens"}>
                                <Citizens/>
                            </Route>
                        </Switch>
                    </main>
                </div>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
