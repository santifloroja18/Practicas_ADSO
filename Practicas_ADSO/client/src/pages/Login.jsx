import '../styles/Login.css'

export default function Login(){
    return(
        <div id='Login'>
            <div className='row cuadradolog'>
                <div className='col-4'>
                    <img id='imagen' className='img-fluid' src="../../../images/Imagen.jpeg" alt="SENALOVER" />
                </div>
                <div id='form' className='col-8' >
                    <div className='row' >
                        <div className='col-2'></div>
                        <div className='col-8'><h4 className='text-center'>Inicia sesión</h4></div>
                        <div className='col-2'></div>
                    </div>
                    <div className='row'>
                        <div className='col-12'>
                            <form action="" method="post">
                                <div className="row">
                                    <div className="col-3"></div>
                                    <div className="col-6">
                                        <div id='camposFormulario' className='mb-3'>
                                            <label className='form-label fw-bold' htmlFor="email" >Correo electrónico:</label>
                                            <input className='form-control' type="email" placeholder='Ingrese correo'/>
                                        </div>
                                        <div id='camposFormulario' className='mb-3'>
                                            <label className='form-label fw-bold' htmlFor="password" >Contraseña:</label>
                                            <input className='form-control' type="password" name="" id="" placeholder='Ingrese contraseña'/>
                                        </div>
                                    </div>
                                    <div className="col-3"></div>
                                </div>
                                <div className="row justify-content-center">
                                    
                                    <div className="col-2"><button className='btn btn-secondary text-dark fw-bold' type="button">Registrarse</button></div>
                                    <div className="col-2"></div>
                                    <div className="col-2"><button className='btn btn-dark fw-bold' type="button">Iniciar Sesión</button></div>
                                    
                                </div>
                                
                                
                                
                            </form>
                        </div>
                    </div>
                    
                    <h5 className='mt-5 text-center fw-bold'>¿Olvidaste tu contraseña?</h5>
                    <img className='img-fluid rounded float-end' src="../../../images/logopequeño.png" alt="logoSena" />
                </div>
            </div>
        </div>
    )
}