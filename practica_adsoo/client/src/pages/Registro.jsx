import '../styles/Registro.css'

export default function Registro(){
    return(
        <div id='Registro'>
            <div className='row cuadrado'>
                <div className='col-5'>
                    <img id='imagen' className='img-fluid' src="../../../images/Imagen.jpeg" alt="SENALOVER" />
                </div>
                <div id='form' className='col-7' >
                    <div className='row' >
                        <div className='col-2'></div>
                        <div className='col-8'><h4 id='tituloResgistro' className='text-center'>Crear una cuenta</h4></div>
                        <div className='col-2'></div>
                    </div>
                    <div className='row'>
                        <div className='col-12'>
                            <form action="" method="post">
                                <div className="row">
                                    <div className='col-6'>
                                        <div id='camposForm' className='mb-3'>
                                            <label className='form-label fw-bold' >Nombre:</label>
                                            <input className='form-control' type="text" />
                                        </div>
                                    </div>
                                    <div className='col-6'>
                                        <div id='camposForm' className='mb-3'>
                                            <label className='form-label fw-bold' >Apellido:</label>
                                            <input className='form-control' type="text" />    
                                        </div>
                                    </div>    
                                </div>
                                <div className="row">
                                    <div className="col-6">
                                        <div id='camposForm' className="mb-3">
                                            <label className='form-label fw-bold' >Cédula:</label>
                                            <input className='form-control' type="number" />
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div id='camposForm' className='mb-3'>
                                            <label className='form-label fw-bold' >Teléfono:</label>
                                            <input className='form-control' type="number" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-6">
                                        <div id='camposForm' className="mb-3">
                                            <label className='form-label fw-bold' >Correo Electrónico:</label>
                                            <input className='form-control' type="email" />
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div id='camposForm' className='mb-3'>
                                            <label className='form-label fw-bold' >Programa de Formación:</label>
                                            <input className='form-control' type="text" />
                                        </div>
                                    </div>    
                                </div>                               
                                <div className="row">
                                    <div className='col-6'>
                                        <div id='camposForm' className='mb-3'>
                                            <label className='form-label fw-bold' htmlFor="password" >Contraseña:</label>
                                            <input className='form-control' type="password" name="" id=""/>
                                        </div>
                                    </div>
                                </div> 
                                <div className='row justify-content-center'>
                                    <div className="col-3"></div>
                                    <div className='col-5'>
                                        <button className='btn btn-dark fw-bold' type="button">Iniciar Sesión</button>
                                        <h6 className='mt-1'>¿Ya tienes cuenta?</h6>
                                    </div>
                                    
                                    
                                    <div className='col-1'></div>
                                    <img className='col-3 img-fluid rounded float-end' src="../../../images/logopequeño.png" alt="logoSena" />
                                </div>
                                <div className="row justify-content-center">
                                    
                                </div>
                                
                            </form>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}