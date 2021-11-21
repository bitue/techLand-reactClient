
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import AuthProvider from './Context/AuthProvider/AuthProvider';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';


import Explore from './Pages/Explore/Explore/Explore';
import Home from './Pages/Home/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import OrderPage from './Pages/OrderPage/OrderPage/OrderPage';
import Register from './Pages/Register/Register';
import Signin from './Pages/Signin/Signin';
import PrivateRoute from './PrivateRoute/PrivateRoute';
// import 'swiper/css';

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path='/'>
              <Home></Home>

            </Route>

            <Route exact path='/home'>
              <Home></Home>

            </Route>

            <Route exact path='/register'>
              <Register></Register>

            </Route>

            <Route exact path='/signin'>
              <Signin></Signin>

            </Route>

            <Route exact path='/explore'>
              <Explore></Explore>

            </Route>

            <PrivateRoute exact path='/order/:id'>
              <OrderPage></OrderPage>

            </PrivateRoute>

            <PrivateRoute path='/dashboard'>
              <Dashboard></Dashboard>

            </PrivateRoute>

            <Route  path='*'>
              <NotFound></NotFound>

            </Route>

          

          </Switch>
        </BrowserRouter>

      </AuthProvider>

    </div>
  );
}

export default App;
