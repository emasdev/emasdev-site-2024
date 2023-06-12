import React, { useEffect, useState } from 'react'

export default function Breathwork({
  title
}) {

  const [showVideo, setShowVideo] = useState(false)
  const tummoModal = document.getElementById('tummoModal')

  if (tummoModal) {
    tummoModal.addEventListener('show.bs.modal', event => {
      setShowVideo(false)
      // Button that triggered the modal
      // const button = event.relatedTarget
      // // Extract info from data-bs-* attributes
      // const recipient = button.getAttribute('data-bs-whatever')
      // // If necessary, you could initiate an Ajax request here
      // // and then do the updating in a callback.

      // // Update the modal's content.
      // const modalTitle = tummoModal.querySelector('.modal-title')
      // const modalBodyInput = tummoModal.querySelector('.modal-body input')

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
        className="btn btn-outline-primary w-100 p-3"
        data-bs-toggle="modal" data-bs-target="#tummoModal"
      >
        {title}
      </button>


      <div className="modal fade" id="tummoModal" tabndex="-1" aria-labelledby="tummoModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-fullscreen">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="tummoModalLabel">¡Prepara tu espacio!</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              {showVideo &&
                <>

                  <div className='mt-4 mb-4'>
                    <ul className="list-group">
                      <li className="list-group-item">Ritmo circular usando naríz para inhalár y boca para exhalár</li>
                      <li className="list-group-item">Inflo abdomen y pecho al inhalar</li>
                      <li className="list-group-item">Libero tensión al exhalar</li>
                      <li className="list-group-item">Por momentos cambio boca nariz y a la inversa, escucha tu cuerpo</li>
                      <li className="list-group-item">Toma nota de como te sientes antes y después de la práctica</li>
                    </ul>
                  </div>
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
                </>

              }
              {!showVideo &&
                <>
                  <p>¿Cómo hacer el método?</p>
                  <ul className="list-group">
                    <li className="list-group-item">Encuentra una posición cómoda sentado o acostado</li>
                    <li className="list-group-item">Inhala por la nariz y exhala por la boca (30 repeticiones)</li>
                    <li className="list-group-item">En la última inspiración profunda (ya sea la 30 o 40, la que elijas), soltar el aire levemente (no vacíes tus pulmones).</li>
                    <li className="list-group-item">Mantener la respiración el tiempo que puedas (entre 1 minuto y 1 minuto y medio es suficiente).</li>
                    <li className="list-group-item">Cuando sientas la necesidad de respirar, hacer una inhalación profunda, sostenerla 10 a 15 segundos, y luego exhalar para repetir el proceso. </li>
                    <li className="list-group-item">Inhala tan profundamente como puedas y mantén la inhalación durante 15 segundos, después exhala. </li>
                    <li className="list-group-item">Aquí terminaste una ronda, repite tantas veces como quieras. (se prudente)</li>
                  </ul>
                </>
              }

            </div>
            <div className="modal-footer">
              {!showVideo && <button type="button" className="btn btn-primary" onClick={() => setShowVideo(true)}>{title}</button>}
              {showVideo && <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Gracias</button>}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
