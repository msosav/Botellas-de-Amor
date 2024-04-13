import React from "react";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from "react-router-dom";

import "./App.css";
import "./styles/SideBar.css";
import ShowProyectos from "./views/Administradores/Proyectos/Show";
import Login from "./views/LoginView";

import CreateChallenge from "./views/Administradores/Retos/CreateChallenge";
import EditChallenge from "./views/Administradores/Retos/EditChallenge";
import IndexChallenge from "./views/Administradores/Retos/IndexChallenge";
import ShowChallenge from "./views/Administradores/Retos/ShowChallenge";

import CreateSite from "./views/Administradores/PuntosAcopio/CreateAcopio";
import EditSite from "./views/Administradores/PuntosAcopio/EditAcopio";
import IndexSite from "./views/Administradores/PuntosAcopio/IndexAcopio";
import ShowSite from "./views/Administradores/PuntosAcopio/ShowAcopio";

import CreateUser from "./views/Administradores/Usuarios/CreateUser";
import EditUser from "./views/Administradores/Usuarios/EditUser";
import IndexUser from "./views/Administradores/Usuarios/IndexUser";
import ShowUser from "./views/Administradores/Usuarios/ShowUser";

import CreateRegister from "./views/Operadores/Create2";

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  return (
    <div className="principal-container">
      <Routes>
        {localStorage.getItem("token") === null ? (
          <>
            <Route path="/" element={<Login />} />
          </>
        ) : (
          <>
            {localStorage.getItem("role") === "admin" ? (
              <>
                {/* RUTAS DE ADMINISTRADORES */}
                <Route
                  path="/administrar/proyectos"
                  element={<ShowProyectos />}
                />
                <Route path="/" element={<Login />} />
                <Route path="/administrar/retos" element={<IndexChallenge />} />
                <Route
                  path="/administrar/retos/crear"
                  element={<CreateChallenge />}
                />
                <Route
                  path="/administrar/retos/editar/:id"
                  element={<EditChallenge />}
                />
                <Route
                  path="/administrar/retos/:id"
                  element={<ShowChallenge />}
                />
                <Route
                  path="/administrar/puntos-acopio"
                  element={<IndexSite />}
                />
                <Route
                  path="/administrar/puntos-acopio/crear"
                  element={<CreateSite />}
                />
                <Route
                  path="/administrar/puntos-acopio/editar/:id"
                  element={<EditSite />}
                />
                <Route
                  path="/administrar/puntos-acopio/:id"
                  element={<ShowSite />}
                />
                <Route
                  path="/administrar/proyectos"
                  element={<ShowProyectos />}
                />
                <Route path="/administrar/retos" element={<IndexChallenge />} />
                <Route
                  path="/administrar/retos/crear"
                  element={<CreateChallenge />}
                />
                <Route
                  path="/administrar/retos/editar/:id"
                  element={<EditChallenge />}
                />
                <Route
                  path="/administrar/retos/:id"
                  element={<ShowChallenge />}
                />
                <Route path="/administrar/usuarios" element={<IndexUser />} />
                <Route
                  path="/administrar/usuarios/crear"
                  element={<CreateUser />}
                />
                <Route
                  path="/administrar/usuarios/editar/:id"
                  element={<EditUser />}
                />
                <Route
                  path="/administrar/usuarios/:id"
                  element={<ShowUser />}
                />
              </>
            ) : (
              <>
                <Route
                  path="/operador/registrar-botellas"
                  element={<CreateRegister />}
                />
              </>
            )}
          </>
        )}
      </Routes>
    </div>
  );
}
