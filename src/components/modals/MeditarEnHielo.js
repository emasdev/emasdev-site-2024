import React, { useEffect, useState } from 'react'
import useDataContext from '../../contexts/DataContext'
import useAuth from '../../contexts/AuthContext'

export default function MeditarEnHielo({
  title
}) {

  const { user } = useAuth()
  const { userData, mergeUserData } = useDataContext()

  const initialSection = userData && userData.hielo_motivo ? 2 : 1
  const meditarEnHieloModal = document.getElementById('meditarEnHieloModal')
  // const nombre = userData && userData.nombre ? userData.nombre : document.getElementById('contacto-nombre') ? document.getElementById('contacto-nombre').value : null

  const [section, setSection] = useState(initialSection)

  const [nombre, setNombre] = useState()
  const [hieloMotivo, setHieloMotivo] = useState()
  const [isValid, setIsValid] = useState(false)




  if (meditarEnHieloModal) {
    meditarEnHieloModal.addEventListener('show.bs.modal', event => {
      setSection(initialSection)
    })
  }

  useEffect(() => {
    if (!userData) return

    if (userData.nombre) {
      setNombre(userData.nombre)
    }
  }, [userData])

  useEffect(() => {
    if (!nombre || !hieloMotivo) return
    const isValid = (nombre.length > 3 && hieloMotivo.length > 3)
    setIsValid(isValid)

  }, [nombre, hieloMotivo])



  const onSaveUserData = () => {

    mergeUserData({
      nombre: nombre,
      hielo_motivo: hieloMotivo
    }).then(result => {
      setSection(2)
    })
  }


  return (
    <div>
      {/* <button type="button" className="btn btn-primary" >
        Launch demo modal
      </button> */}

      <button
        type="button"
        className="btn btn-outline-primary w-100 p-3"
        data-bs-toggle="modal" data-bs-target="#meditarEnHieloModal"
      >
        {title}
      </button>


      <div className="modal fade" id="meditarEnHieloModal" tabndex="-1" aria-labelledby="meditarEnHieloModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-fullscreen">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="meditarEnHieloModalLabel">
                {!userData && "Presentate"}
                {userData && "Meditar en hielo"}
              </h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">

              {section === 1 &&
                <>
                  {userData && userData.nombre ?
                    <p>{userData.nombre}</p>
                    :
                    <>
                      <p>¿Quién eres?</p>
                      <div className="form-group my-4">
                        <label htmlFor="contacto-nombre">Nombre</label>
                        <input
                          onChange={({ currentTarget: { value } }) => {
                            setNombre(value)
                          }}
                          type="text" className="form-control" id="contacto-nombre" aria-describedby="nombreHelp" placeholder="Escribe tu(s) nombre(s) y si quieres apellidos" />
                      </div>
                    </>
                  }

                  <div className="form-group my-4">
                    <label htmlFor="contacto-motivo">¿Qué te motiva a ver este contenido?</label>
                    <input
                      onChange={({ currentTarget: { value } }) => setHieloMotivo(value)}
                      type="text" className="form-control" id="contacto-motivo" aria-describedby="nombreHelp" placeholder="Escribe que te motiva a ver este contenido" />
                  </div>
                </>
              }

              {section === 2 && <>
                <div className="alert alert-warning" role="alert">
                  ¡No lo hagas si no has practicado antes con algún experto y/o no conoces bien las contraindicaciones!
                </div>
                <p>
                  La mente es una herramienta poderosa, demasiado. Veo la frecuencia con la que se generan enfermedades psicosomáticas al rededor del estrés, ansiedad, depresión y paranoia: generadas por un sistema imperfecto y en algunos casos: tóxico y podrido, que tiene que cambiar porque si no ni vamos a sobrevivir, en fin. Ya no se anda descalzo en la tierra, hay dejar que nos pegue el viento sin ponernos la chaquetota y mojarnos en los lagos. ¿Porqué privar a nuestro cuerpo de su capacidad de hacerse más fuerte y resistente? adaptarse al ambiente natural dentro de sus posibilidades y hackearlo con estas técnicas para aumentar nuestras posibilidades también.                </p>
                <p>
                  Los primeros segundos es un shock instantáneo para el cuerpo: la vasoconstricción sucede, mata bacterias, se pone el sistema alerta, protegiendo órganos internos. En la mente la práctica es el acostumbrarse al momento presente, a la presencia y el sentir, aceptar la incomodidad, la meditación, estar ahí sin agitarse tanto, aceptando y agradeciendo que esta práctica nos beneficia a nosotros y a otros seres.
                </p>
              </>}

              {section === 3 &&
                <>

                  <div className='mt-4 mb-4'>
                    <ul className="list-group">
                      <li className="list-group-item">Hacer breathworks previamente, es muy importante tener el sistema inmune fortalecido</li>
                      <li className="list-group-item">Utilizar la respiración para atravesar la experiencia</li>
                      <li className="list-group-item">Intentar relajar</li>
                      <li className="list-group-item">Si tiembla el cuerpo, dejarlo temblar</li>
                      <li className="list-group-item">Al finalizar hacer ejercicios con la postura de caballo para calentar el cuerpo</li>
                      <li className="list-group-item">Seguir haciendo ejercicios para calentar el cuerpo hasta que ya no se sienta frio en ninguna extremidad</li>
                    </ul>
                  </div>
                  <div className='d-flex flex-colum'>
                    <iframe
                      width="100%"
                      height="315"
                      src="https://www.youtube.com/embed/LaTPJEsq-VE"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen>

                    </iframe>
                  </div>
                </>

              }


            </div>
            <div className="modal-footer">
              {section === 1 && <button type="button" className="btn btn-primary" disabled={!isValid} onClick={() => onSaveUserData()}>Comfirmar identidad</button>}
              {section === 2 && <button type="button" className="btn btn-primary" onClick={() => setSection(3)}>{title}</button>}
              {section === 3 && <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Gracias</button>}
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}
