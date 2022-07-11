import React from 'react';
//import { useState } from "react";
import axios from "axios";

class Login extends React.Component{
    render(){
        return(
            <section className="h-100">
        <div className="container h-100">
            <div className="row justify-content-sm-center h-100">
                <div className="col-xxl-4 col-xl-5 col-lg-5 col-md-7 col-sm-9">
                    <div className="card shadow-lg">
                        <div className="card-body p-5">
                            <h1 className="fs-4 card-title fw-bold mb-4">Login</h1>
                            <form onSubmit = {handleSubmit}  className="needs-validation" noValidate={true} autoComplete="off">
                                <div className="mb-3">
                                    <label className="mb-2 text-muted" htmlFor="email">Usuario</label>
                                    <input id="email" onChange={handleInputChange} value={datos.usuario}  type="text" className="form-control" name="usuario" required autoFocus />
                                    <div className="invalid-feedback">
                                        Usuario inválido
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <div className="mb-2 w-100">
                                        <label className="text-muted" htmlFor="password">Contraseña</label>
                                        <a href="/" className="float-end">
                                            ¿Olvidaste tu contraseña?
                                        </a>
                                    </div>
                                    <input id="password" onChange={handleInputChange} value={datos.clave} type="password" className="form-control" name="clave" required />
                                    <div className="invalid-feedback">
                                        Contraseña es requirida
                                    </div>
                                </div>
                                <div className="d-flex align-items-center">
                                    <div className="form-check">
                                        <input type="checkbox" name="remember" id="remember" className="form-check-input" />
                                        <label htmlFor="remember" className="form-check-label">Recordarme</label>
                                    </div>
                                    <button type="submit" className="btn btn-primary ms-auto">
                                        <i className="bi bi-box-arrow-in-right"></i> Ingresar
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div className="card-footer py-3 border-0">
                            <div className="text-center">
                               Proyecto 1 - Web 2 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

        );
    }
}

export default Login;