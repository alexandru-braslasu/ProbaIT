import { React } from 'react';
import { Route, Navigate, BrowserRouter, Routes } from 'react-router-dom';

import AppProvider from './Components/AppProvider';
import Landingpage from './pages/Landingpage';
import Loggedin  from './pages/Loggedin';

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={
            <Navigate to="/landingpage"/>
          }/>
          <Route exact path="/landingpage" element={<Landingpage />}/>
          <Route exact path="/landingpage-loggedin" element={<Loggedin />}/>
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
