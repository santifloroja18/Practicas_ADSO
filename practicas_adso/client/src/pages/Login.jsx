import '../styles/Login.css'

export default function Login(){
    return(
        <div>
            <div></div>
            <div id='cuadrado'>
                <img src="../../../logoSena.jpeg" alt="SENALOVER" />
                <h1>INICIA SESIÓN</h1>
                <form action="" method="post">
                    <label htmlFor="email">CORREO ELECTRÓNICO</label>
                    <input type="email" />
                    <label htmlFor="password">CONTRASEÑA</label>
                    <input type="password" name="" id="" />
                    <button type="button">Registrarse</button>
                    <button type="button">Iniciar Sesión</button>
                </form>
                <h5>¿Olvidaste tu contraseña?</h5>
            </div>
        </div>
    )
}