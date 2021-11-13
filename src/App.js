import './App.css';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login-Registation/Login/Login';
import AuthProvider from './context/AuthProvider';
import Registation from './Pages/Login-Registation/Registaion/Registation';
import Watchs from './Pages/Watchs/Watchs';
import About from './Pages/About/About';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import BookWatch from './Pages/Watchs/BookWatch/BookWatch';
import NotFound from './Pages/NotFound/NotFound';
import Dashboard from './Dashboard/Dashboard/Dashboard';
import MyOrders from './Dashboard/MyOrders/MyOrders';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>

          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/about">
              <About></About>
            </Route>
            <Route exact path="/watchs">
              <Watchs></Watchs>
            </Route>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <Route exact path="/order">
              <MyOrders></MyOrders>
            </Route>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/registation">
              <Registation></Registation>
            </Route>
            <PrivateRoute path="/bookwatch/:id">
              <BookWatch></BookWatch>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>

        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
