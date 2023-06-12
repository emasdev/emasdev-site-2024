import React from 'react'
import Breathwork from './modals/Breathwork'
import MeditarEnHielo from './modals/MeditarEnHielo'

export default function Menu() {


  return (
    <div className='d-grid gap-3'>
      <div>
        <Breathwork
          title={"Practicar respiración Tummo / Wim Hof"}
        />
      </div>
      <div>
        <MeditarEnHielo
          title={"Ver mi primera inmersión en hielo en casa"}
        />
      </div>
    </div>

  )
}


