import React, { useEffect, useState } from 'react'
import { AiFillFacebook, AiFillGoogleSquare } from "react-icons/ai";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider
} from "firebase/auth";
import useAuth from '../contexts/AuthContext';
import Breathwork from './modals/Breathwork';
import MeditarEnHielo from './modals/MeditarEnHielo';
import Menu from './Menu';
import useDataContext from '../contexts/DataContext';


export default function Navigator() {

  const auth = getAuth()
  const { user } = useAuth()
  const { userData } = useDataContext()


  // const [user, setUser] = useState()

  // onAuthStateChanged(auth, (user) => {
  //   if (user) {
  //     setUser(user)
  //   } else {
  //     setUser(null)
  //   }
  // });
  const [registerError, setRegisterError] = useState()
  const [registerFirebaseError, setRegisterFirebaseError] = useState()
  const [loginError, setLoginError] = useState()
  const [loginFirebaseError, setLoginFirebaseError] = useState()

  const register = (event) => {
    event.preventDefault()
    const email = document.getElementById('register-email').value
    const password = document.getElementById('register-password').value
    const passwordc = document.getElementById('register-password-confirm').value
    if (email && password && passwordc) {
      if (password === passwordc) {
        setRegisterError(null)
        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setRegisterFirebaseError(errorMessage)

          });
      } else {
        setRegisterError("Las contraseñas no coinciden");
      }
    } else {
      setRegisterError("Te falta escribir el correo electrónico y/o la contraseña");
    }
    // console.log(email)
    // console.log(password)
    // debugger
  }



  const logIn = (event) => {
    event.preventDefault()
    const email = document.getElementById('login-email').value
    const password = document.getElementById('login-password').value
    if (email && password) {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setLoginFirebaseError(errorMessage)
        });
    } else {
      setRegisterError("Te falta escribir el correo electrónico y/o la contraseña");
    }



  }

  const signWithFacebook = () => {

    const provider = new FacebookAuthProvider();

    signInWithPopup(auth, provider)
      .then((result) => {
        // The signed-in user info.
        const user = result.user;

        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        const credential = FacebookAuthProvider.credentialFromResult(result);
        const accessToken = credential.accessToken;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = FacebookAuthProvider.credentialFromError(error);
        // ...
      });
  }

  const signWithGoogle = () => {

    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  }

  return (
    <div style={{
      backgroundColor: "#f1f1f1",
      color: "#444444",
      borderRadius: "15px",
      paddingTop: "1em"
    }}>
      {user &&
        <>
          <div>
            <p className='fw-semibold'>{user.email}</p>
            {userData && <p>Te haces llamar: {userData.nombre}</p>}
            <p>¿Qué puedes hacer ahora?</p>



          </div>
          <Menu />
        </>
      }
      {!user &&
        <div>
          <p className='text-center'>Aún no inicias sesión.</p>
          <p className='text-end'>¿Qué deseas?</p>
          <div
            className='my-4'
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              alignContent: "center",
              textAlign: "center",
            }}>
            <div>
              <button type="button" className="btn btn-light my-2" onClick={signWithGoogle}>
                <span style={{ color: "#444444" }}>Acceder con Google</span>
                <AiFillGoogleSquare
                  style={{
                    marginTop: "2px",
                    marginBottom: "2px",
                    paddingBottom: "2px",
                    marginLeft: "10px",
                    color: "#444444",
                  }}
                  size={"1.7em"}
                />
              </button>
            </div>
            <div>
              <button type="button" className="btn btn-light my-2" onClick={signWithFacebook}>
                <span style={{ color: "#444444" }}>Acceder con Facebook</span>
                <AiFillFacebook
                  style={{
                    marginTop: "2px",
                    marginBottom: "4px",
                    marginLeft: "10px",
                    color: "#444444"
                  }}
                  size={"1.5em"}
                />
              </button>
            </div>

          </div>

          <div className="accordion accordion-flush" id="accordionFlushExample">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                  Iniciar sesión
                </button>
              </h2>
              <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div className='p-3'>
                  <div className='text-center'>
                    <p className='fs-2'>Acceder</p>
                    <p className='fs-5'>Usando tu cuenta de este portal.</p>
                  </div>
                  <form>
                    {loginError &&
                      <div className="alert alert-warning" role="alert">
                        <strong>¡Veamos!</strong> {loginError}
                      </div>
                    }

                    {loginFirebaseError &&
                      <div className="alert alert-warning" role="alert">
                        <strong>¡Error!</strong> {loginFirebaseError}
                      </div>
                    }
                    <div className="mb-3">
                      <label htmlFor="login-email" className="form-label fs-6">Correo electrónico</label>
                      <input type="email" placeholder='Correo electrónico' className="form-control" id="login-email" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="login-password" className="form-label fs-6">Contraseña</label>
                      <input type="password" placeholder='Contraseña' className="form-control" id="login-password" />
                    </div>
                    <div className='text-end mt-4'>
                      <button type="submit" className="btn btn-light" onClick={(e) => logIn(e)}>Iniciar sesión</button>
                    </div>

                  </form>
                </div>



              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                  Crear nueva cuenta
                </button>
              </h2>
              <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div className='p-3'>
                  <div className='text-center'>
                    <p className='fs-2'>Crear cuenta</p>
                    <p className='fs-5'>Para acceder con privilegios de usuario.</p>
                  </div>
                  <form>
                    {registerError &&
                      <div className="alert alert-warning" role="alert">
                        <strong>¡Veamos!</strong> {registerError}
                      </div>
                    }

                    {registerFirebaseError &&
                      <div className="alert alert-warning" role="alert">
                        <strong>¡Error!</strong> {registerFirebaseError}
                      </div>
                    }

                    <div className="mb-3">
                      <label htmlFor="register-email" className="form-label fs-6">Correo electrónico</label>
                      <input type="email" placeholder='Correo electrónico' className="form-control" id="register-email" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="register-password" className="form-label fs-6">Contraseña</label>
                      <input type="password" placeholder='Contraseña' className="form-control" id="register-password" />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="register-password-confirm" className="form-label fs-6">Confirmación de contraseña</label>
                      <input type="password" placeholder='Confirmación' className="form-control" id="register-password-confirm" />
                    </div>
                    <div className='text-end mt-4'>
                      <button type="submit" className="btn btn-light" onClick={(e) => register(e)}>Crear cuenta</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      }

    </div>

  )
}
