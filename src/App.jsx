import React, { createContext, useEffect, useState } from 'react'
import './styles/App.css'
import './styles/responsive.css'
import { Sidebar } from './Website/components/sidebar';
import 'react-toastify/dist/ReactToastify.css';
import { ExternalRoutes } from './routing/routes';
import { Route, Routes, useNavigate } from 'react-router-dom'; // Import useNavigate
import { ROUTES } from '../utils/routes';
import { Login } from './Website/pages/registration/login';
import TokenService from './services/tokenService';

export const SidebarContext = createContext({ sideBar: false, setSideBar: () => { } })

function App() {
  const [sideBar, setsideBar] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate
  const { getCookie } = TokenService();
  const userLogged = getCookie();

  useEffect(() => {
    // Redirect to login if not authenticated
    if (!userLogged) {
      navigate(ROUTES.LOGIN); // Redirect to your login route
    }
  }, [userLogged, navigate]);

  const getSideBarPos = (value) => {
    setsideBar(!value);
  }

  return (
    <React.Fragment>
      {userLogged ? (
        <SidebarContext.Provider value={{ sideBar: sideBar, setSideBar: setsideBar }}>
          <Sidebar />
          <div className={sideBar ? 'AppFull' : 'App'}>
            <ExternalRoutes />
          </div>
        </SidebarContext.Provider>
      ) : (
        <Routes>
          <Route path={ROUTES.LOGIN} element={<Login />} />
        </Routes>
      )}
    </React.Fragment>
  )
}

export default App;