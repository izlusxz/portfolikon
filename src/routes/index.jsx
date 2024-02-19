import { Fragment } from 'react';
import { BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';
import Home from '../pages/home';

const Private = ({ Item }) => {
    const token = localStorage.getItem('token');
    if (!token) {
      return <Item />;
    }
  
    return Item;
  };
  
  const RouteApp = () => {
    return (
      <BrowserRouter>
        <Fragment>
          <Routes>
            <Route path="*" element={<Private Item={Home} />} />
          </Routes>
        </Fragment>
      </BrowserRouter>
    );
  };
  
  export default RouteApp;