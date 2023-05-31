import React, { useEffect, useState } from 'react'
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword } from "firebase/auth";


export default function Navigator() {

  const auth = getAuth()
  const [user, setUser] = useState()

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUser(user)
    } else {
      setUser(null)
    }
  });
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

  const logOut = (event) => {
    event.preventDefault()
    signOut(auth)
  }

  const logIn = (event) => {
    event.preventDefault()
    const email = document.getElementById('login-email').value
    const password = document.getElementById('login-password').value
    if (email && password) {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ...
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



  return (
    <>
      {user &&
        <div>
          <p>Estás conectado como {user.email}</p>
          <button
            type="button"
            class="btn btn-light"
            onClick={e => logOut(e)}
          >Cerrar sesión</button>
        </div>
      }
      {!user &&
        <div>
          <p className='text-center'>Aún no inicias sesión.</p>
          <p className='text-end'>¿Qué deseas?</p>
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
                    {registerError &&
                      <div className="alert alert-warning" role="alert">
                        <strong>¡Veamos!</strong> {registerError}
                      </div>
                    }

                    {registerFirebaseError &&
                      <div className="alert alert-error" role="alert">
                        <strong>¡Error!</strong> {registerFirebaseError}
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
                      <div className="alert alert-error" role="alert">
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

    </>

  )
}
