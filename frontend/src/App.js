import { React } from 'react';
import { Route, Navigate, BrowserRouter, Routes } from 'react-router-dom';

import AppProvider from './Components/AppProvider';
import Landingpage from './pages/Landingpage';

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={
            <Navigate to="/landingpage"/>
          }/>
          <Route exact path="/landingpage" element={<Landingpage />}/>
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
