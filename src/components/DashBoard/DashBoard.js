import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,

    useRouteMatch,
    NavLink,

} from "react-router-dom";
import { Button } from '@mui/material';
import MyOrders from '../MyOrders/MyOrders';
import AddReview from '../AddReview/AddReview';
import Payment from '../Payment/Payment';
import ManageAllOrders from '../ManageAllOrders/ManageAllOrders';
import AddProduct from '../AddProduct/AddProduct';
import ManageAllProduct from '../ManageAllProduct/ManageAllProduct';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AdminPrivateRoute from '../AdminPrivateRoute/AdminPrivateRoute';
import useAuth from '../Hooks/useAuth';

const drawerWidth = 240;

function DashBoard(props) {
    let { path, url } = useRouteMatch();
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    const { user, admin, logOut } = useAuth();

    const drawer = (
        <div>
            <Toolbar />

            {!admin && <List >
                <Link style={{ textDecoration: 'none', color: '' }} to="/"> <Button color="inherit">Home</Button> </Link> <br />

                <Link style={{ textDecoration: 'none', color: '' }} to={`${url}/myOrders`}> <Button color="inherit">MyOrders</Button> </Link> <br />

                <Link style={{ textDecoration: 'none', color: '' }} to={`${url}/addReview`}> <Button color="inherit">AddReview</Button> </Link> <br />

                <Link style={{ textDecoration: 'none', color: '' }} to={`${url}/payment`}> <Button color="inherit">Payment</Button> </Link> <br />

                {
                    user.email && <NavLink style={{ textDecoration: 'none', color: 'red' }} to=""> <Button style={{ fontSize: '1.1vw' }} onClick={logOut} color="inherit">Logout</Button> </NavLink>
                }
            </List>}

            <Divider />

            {user.email && admin && <List>

                <Link style={{ textDecoration: 'none', color: '' }} to="/"> <Button color="inherit">Home</Button> </Link> <br />

                <Link style={{ textDecoration: 'none', color: '' }} to={`${url}/manageAllOrders`}> <Button color="inherit">ManageOrders</Button> </Link> <br />

                <Link style={{ textDecoration: 'none', color: '' }} to={`${url}/addProduct`}> <Button color="inherit">AddProduct</Button> </Link> <br />

                <Link style={{ textDecoration: 'none', color: '' }} to={`${url}/manageAllProduct`}> <Button color="inherit">ManageProduct</Button> </Link> <br />

                <Link style={{ textDecoration: 'none', color: '' }} to={`${url}/makeAdmin`}> <Button color="inherit">MakeAdmin</Button> </Link> <br />

                {
                    user.email && <NavLink style={{ textDecoration: 'none', color: 'red' }} to=""> <Button  onClick={logOut} color="inherit">Logout</Button> </NavLink>
                }

            </List>}

            {/* <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List> */}
            <Divider />
            {/* <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List> */}
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        DASHBOARD
                        {/* <span style={{ color: ' #F0F45F',fontSize:'1.1vw' }}>
                        {
                            user.email && <p>welcome {user.email}</p>
                        }
                    </span> */}
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Switch>
                    <Route exact path={`${path}/myOrders`}>
                        <MyOrders></MyOrders>
                    </Route>
                    <Route path={`${path}/addReview`}>
                        <AddReview></AddReview>
                    </Route>
                    <Route path={`${path}/payment`}>
                        <Payment></Payment>
                    </Route>

                    <AdminPrivateRoute path={`${path}/manageAllOrders`}>
                        <ManageAllOrders></ManageAllOrders>
                    </AdminPrivateRoute>

                    <AdminPrivateRoute path={`${path}/addProduct`}>
                        <AddProduct></AddProduct>
                    </AdminPrivateRoute>

                    <AdminPrivateRoute path={`${path}/manageAllProduct`}>
                        <ManageAllProduct></ManageAllProduct>
                    </AdminPrivateRoute>

                    <AdminPrivateRoute path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </AdminPrivateRoute>


                </Switch>

            </Box>
        </Box>
    );
}

DashBoard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default DashBoard;