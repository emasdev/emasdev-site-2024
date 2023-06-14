import React, { useEffect, useState } from 'react'

export default function Planificador({
  title
}) {


  const planificadorModal = document.getElementById('planificadorModal')

  if (planificadorModal) {
    planificadorModal.addEventListener('show.bs.modal', event => {

      // Button that triggered the modal
      // const button = event.relatedTarget
      // // Extract info from data-bs-* attributes
      // const recipient = button.getAttribute('data-bs-whatever')
      // // If necessary, you could initiate an Ajax request here
      // // and then do the updating in a callback.

      // // Update the modal's content.
      // const modalTitle = planificadorModal.querySelector('.modal-title')
      // const modalBodyInput = planificadorModal.querySelector('.modal-body input')

      // modalTitle.textContent = `New message to ${recipient}`
      // modalBodyInput.value = recipient
    })
  }

  return (
    <>
      {/* <button type="button" className="btn btn-primary" >
        Launch demo modal
      </button> */}

      <button
        type="button"
        className="btn btn-outline-success p-3"
        data-bs-toggle="modal" data-bs-target="#planificadorModal"
      >
        {title}
      </button>


      <div className="modal fade" id="planificadorModal" tabndex="-1" aria-labelledby="planificadorModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-fullscreen">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="planificadorModalLabel">Planificador</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <p>En construcción...</p>

            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Bueno, va</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
