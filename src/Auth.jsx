import React, { useState } from 'react';
import 'firebase/auth'; //  Importamos el modulo creado de app 
import { useFirebaseApp, useUser } from 'reactfire';
export default (props) =>{
    const [ email, setEmail] = useState('');
    const [ password, setPassword] = useState('');
    const firebase = useFirebaseApp();
    const user = useUser();
     
    const submit =  async () => {
    await firebase.auth().createUserWithEmailAndPassword(email,password);
    }

    const login = async()=>{
        await firebase.auth().signInWithEmailAndPassword(email,password);
    }

   const logout = async ()=> {
       await firebase.auth().signOut();
   }
    return(
        
        <div>
           <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
 
 <a className="navbar-brand" href="#">Mi Proyecto</a>
 <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
 <span className="navbar-toggler-icon"></span>
 </button>
 <div className="collapse navbar-collapse" id="navbarCollapse">
 <ul className="navbar-nav mr-auto">
 <li className="nav-item active">
  <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
 </li>
 <li className="nav-item">
 <a className="nav-link" href="#">Nosotros</a>
 </li>
 <li className="nav-item">
  <a className="nav-link" href="#">Servicios</a>
 </li>
  <li className="nav-item">
 <a className="nav-link" href="#">Contacto</a>
 </li>
 </ul>
  <form className="form-inline mt-2 mt-md-0">

 <button onClick={submit}  type="button" class="btn btn-primary">Crear Cuenta</button>
     <button onClick={login} type="button" class="btn btn-success">Iniciar Secion</button>
  </form>
  </div>

</nav> 
                 
          { 
                !user &&
               <div>
                   <p> <br/>
                    <br/>
                     <br/>
                   <label htmlFor="email">Email</label>
                   <input type="email" id="email" onChange={ (ev)=> setEmail(ev.target.value)} />
                   </p>
                   <p>
               
                   <label htmlfor="password"> Contraseña</label>
                   <input type="password" id="password" onChange={ (ev)=> setPassword(ev.target.value)}  />
                   </p>
                   <button onClick={submit}  type="button" class="btn btn-primary">Crear Cuenta</button>
                 <button onClick={login} type="button" class="btn btn-success">Iniciar Secion</button>
                 

                 
                  
                 </div>

                 

                 

                 
          }
             {
               user && <button onClick={logout} > Cerrar Sesion </button> 
             }
        </div>
        
    )
    
}