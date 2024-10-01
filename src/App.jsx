import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header className="rounded-5 rounded-top-0  d-flex">
        <nav className="navbar navbar-expand-lg w-100">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <span class="material-symbols-outlined">
              potted_plant
              </span>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <li class="nav-item dropdown btn btn-light rounded-pill m-2">
                  <a class="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <span class="material-symbols-outlined text-success">menu</span>
                  </a>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Plantas</a></li>
                    <li><a class="dropdown-item" href="#">Herramientas</a></li>
                    <li><a class="dropdown-item" href="#">Insumos</a></li>
                  </ul>
                </li>
              </ul>
              <form class="d-flex" role="search">
                <input class="form-control me-2 rounded-pill" type="search" placeholder="Buscar" aria-label="Search"/>
                <button class="btn btn-light rounded-circle" type="submit"><span class="material-symbols-outlined">search</span></button>
              </form>
              <ul class="navbar-nav me-auto mb-2 mb-lg-0 position-absolute end-0 d-flex">
                <li class="nav-item btn btn-light rounded-pill m-2">
                  <a class="nav-link text-success" aria-current="page" href="#"><span class="material-symbols-outlined">dark_mode</span></a>
                </li>
                <li class="nav-item btn btn-light rounded-pill m-2">
                  <a class="nav-link text-success" href="#"><span class="material-symbols-outlined">groups</span>Colaboradores</a>
                </li>
                <li class="nav-item btn btn-light rounded-pill m-2">
                  <a class="nav-link text-success" href="#"><span class="material-symbols-outlined">settings</span></a>
                </li>
                <li class="nav-item btn btn-light rounded-pill m-2">
                  <a class="nav-link text-success" href="#"><span class="material-symbols-outlined">account_circle</span></a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <section class="Inicio">
        <img src="src/assets/Logo🔥/LogoR.png"></img>
        <h1>Bienvenido a X!</h1>
        <span class="material-symbols-outlined">
          add
        </span>
      </section>
    </>
  )
}

export default App
