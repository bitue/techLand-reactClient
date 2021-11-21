
import MenuIcon from '@mui/icons-material/Menu';
import { Button } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import * as React from 'react';
import {  NavLink, Route, Switch, useRouteMatch } from 'react-router-dom';
import AdminRoute from '../../../AdminRoute/AdminRoute';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import AddProduct from '../AddProduct/AddProduct';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import MakeReview from '../MakeReview/MakeReview';
import ManageAllOrders from '../ManageAllOrders/ManageAllOrders';
import ManageProducts from '../ManageProducts/ManageProducts';
import MyOrders from '../MyOrders/MyOrders';
import Payment from '../Payment/Payment';







const drawerWidth = 240;

function Dashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    let { path, url } = useRouteMatch();
    console.log(path, url);

    const { user, logOut, isAdmin } = React.useContext(AuthContext)

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar />
            {isAdmin ? <div>


                <Divider />


                <Button >   <NavLink style={{textDecoration:'none', color:'black'}} to={`${url}/makeAdmin`}>Make Admin</NavLink></Button>

                <br />
                <Button ><NavLink style={{textDecoration:'none', color:'black'}} to={`${url}/manageOrders`}>Manage Orders</NavLink></Button>

                <br />

                <Button ><NavLink style={{textDecoration:'none', color:'black'}} to={`${url}/addProduct`}>Add Product</NavLink></Button>

                <br />

                <Button ><NavLink style={{textDecoration:'none', color:'black'}} to={`${url}/manageProducts`}>Manage Products</NavLink></Button>

                <br />

                <Button ><NavLink style={{textDecoration:'none', color:'black'}} to='/home'>Home</NavLink></Button>

                <br />

                <Button variant='outlined' onClick={logOut}>LogOut</Button>

            </div> : <div>
                <Divider />

                <Button >  <NavLink style={{textDecoration:'none', color:'black'}} to={`${url}/myOrders`}>My Orders</NavLink></Button>

                <br />
                <Button >   <NavLink style={{textDecoration:'none', color:'black'}} to={`${url}/payment`}>Payment</NavLink></Button>

                <br />
                <Button ><NavLink style={{textDecoration:'none', color:'black'}} to={`${url}/review`}>Give Review</NavLink></Button>

                <br />

                <Button ><NavLink style={{textDecoration:'none', color:'black'}} to='/home'>Home</NavLink></Button>

                <br />


                <Button variant='outlined' onClick={logOut}>LogOut</Button>

            </div>}




            <Divider />






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
                        Dashboard
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

                    <Route exact path={`${path}/review`}>
                        <MakeReview></MakeReview>

                    </Route>

                    <Route exact path={`${path}/payment`}>
                        <Payment></Payment>

                    </Route>

                    <AdminRoute exact path={`${path}/manageOrders`}>
                        <ManageAllOrders></ManageAllOrders>

                    </AdminRoute>

                    <AdminRoute exact path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>

                    </AdminRoute>


                    <AdminRoute exact path={`${path}/addProduct`}>
                        <AddProduct></AddProduct>

                    </AdminRoute>

                    <AdminRoute exact path={`${path}/manageProducts`}>
                        <ManageProducts></ManageProducts>

                    </AdminRoute>


                </Switch>



            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;