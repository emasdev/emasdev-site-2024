import React, { useEffect, useState } from 'react'

export default function MeditarEnHielo({
  title
}) {

  const [showVideo, setShowVideo] = useState(false)
  const meditarEnHieloModal = document.getElementById('meditarEnHieloModal')

  if (meditarEnHieloModal) {
    meditarEnHieloModal.addEventListener('show.bs.modal', event => {
      setShowVideo(false)
      // Button that triggered the modal
      // const button = event.relatedTarget
      // // Extract info from data-bs-* attributes
      // const recipient = button.getAttribute('data-bs-whatever')
      // // If necessary, you could initiate an Ajax request here
      // // and then do the updating in a callback.

      // // Update the modal's content.
      // const modalTitle = meditarEnHieloModal.querySelector('.modal-title')
      // const modalBodyInput = meditarEnHieloModal.querySelector('.modal-body input')

      // modalTitle.textContent = `New message to ${recipient}`
      // modalBodyInput.value = recipient
    })
  }

  return (
    <div>
      {/* <button type="button" className="btn btn-primary" >
        Launch demo modal
      </button> */}

      <button
        type="button"
        className="btn btn-primary w-100 p-3"
        data-bs-toggle="modal" data-bs-target="#meditarEnHieloModal"
      >
        {title}
      </button>


      <div className="modal fade" id="meditarEnHieloModal" tabndex="-1" aria-labelledby="meditarEnHieloModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-fullscreen">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="meditarEnHieloModalLabel">¡Prepara tu espacio!</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              {showVideo &&
                <>
                  <div className='d-flex flex-colum'>
                    <iframe
                      width="100%"
                      height="315"
                      src="https://www.youtube.com/embed/VOkqyyaW_tg"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen>

                    </iframe>
                  </div>
                  <div className='mt-4'>
                    <ul className="list-group">
                      <li className="list-group-item">Ritmo circular usando naríz para inhalár y boca para exhalár</li>
                      <li className="list-group-item">Inflo abdomen y pecho al inhalar</li>
                      <li className="list-group-item">Libero tensión al exhalar</li>
                      <li className="list-group-item">Por momentos cambio boca nariz y a la inversa, escucha tu cuerpo</li>
                      <li className="list-group-item">Toma nota de como te sientes antes y después de la práctica</li>
                    </ul>
                  </div>
                </>

              }
              {!showVideo &&
                <>
                  <p>¿Cómo hacer el método?</p>
                  <ul className="list-group">
                    <li className="list-group-item">Encuentra una posición cómoda estando sentado/a u acostada/o</li>
                    <li className="list-group-item">Inhala rápido y profundo por la nariz, y exhala por la boca 30 veces</li>
                    <li className="list-group-item">Respira profundamente, exhala y mantén en la parte inferior de la exhalación todo el tiempo que puedas. </li>
                    <li className="list-group-item">Inhala tan profundamente como puedas y mantén la inhalación durante 15 segundos, después exhala. </li>
                    <li className="list-group-item">Aquí terminaste una ronda, repite tantas veces como quieras. (se prudente)</li>
                  </ul>
                </>
              }

            </div>
            <div className="modal-footer">
              {!showVideo && <button type="button" className="btn btn-primary" onClick={() => setShowVideo(true)}>Iniciar</button>}
              {showVideo && <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Gracias</button>}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
