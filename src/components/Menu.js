import React from 'react'
import Breathwork from './modals/Breathwork'
import MeditarEnHielo from './modals/MeditarEnHielo'
import { getAuth, signOut } from 'firebase/auth'
import Planificador from './modals/Planificador'

export default function Menu() {

  const auth = getAuth()

  const logOut = (event) => {
    event.preventDefault()
    signOut(auth)
  }


  return (
    <div>
      <div style={{
        display: "flex",
        justifyContent: "space-around",
        alignContent: "center",
      }}>
        <div style={{
          margin: ".5em",
          marginRight: ".5em",
        }}>
          <Breathwork
            title={"Practicar respiración Tummo / Wim Hof"}
          />
        </div>
        <div style={{
          margin: ".5em",
          marginRight: ".5em",
        }}>
          <MeditarEnHielo
            title={"Ver mi primera inmersión en hielo en casa"}
          />
        </div>
      </div>
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "1.2em",

      }}>
        <p style={{
          width: "70%",
          textAlign: "center",
          color: "#ef6c00",
          backgroundColor: "white",
          padding: "1.1em",
          borderRadius: "1.3em",
          fontSize: "1.2em"
        }}>Si queremos organizarnos con eficacia hay que aprender a elegir entre todos. Este pretende ser un sistema para ponernos de acuerdo en que días y en que horario podemos hacer nuestras actividades.</p>
      </div>
      <div style={{
        display: "flex",
        justifyContent: "space-around",
        alignContent: "center",
        marginBottom: "1.2rem"
      }}>
        <Planificador
          title={"Planificador de actividades"}
        />
      </div>
      <div style={{
        display: "flex",
        justifyContent: "flex-end",
        marginBottom: "1.5em"
      }}>
        <button
          type="button"
          className="btn btn-outline-danger"
          style={{
            marginTop: "1em",
            marginRight: ".5em"
          }}
          onClick={e => logOut(e)}
        >Cerrar sesión</button>
      </div>


    </div>
  )
}


