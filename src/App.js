import logo from './assets/img/logo_transparent.png'
import './App.css';
import Header from './components/Header';
import FullCalendar from '@fullcalendar/react'
import esLocale from '@fullcalendar/core/locales/es'
import dayGridPlugin from '@fullcalendar/daygrid'
var moment = require('moment');


function App() {

  var date = "2024-05-25";
  var time = "18:00";

  var day = moment("2023-5-25");

  const events = [
    { title: 'Respiración y Meditación', start: "2023-05-25" }
  ]

  // a custom render function
  function renderEventContent(eventInfo) {
    return (
      <>
        <b>{eventInfo.timeText}</b>
        <i>{eventInfo.event.title}</i>
      </>
    )
  }
  return (
    <div className="container py-4">
      <div className="row">
        <div className='col-6'>
          <h1>EmasDev</h1>
          <h4>Reinventando las redes</h4>
        </div>
        <div className='col-6 text-end'>
          <h2>Prácticas de respiración y meditación</h2>
          <h3>Venta de desarrollos tecnológicos informáticos.</h3>
          <h4>Dedicación de canciones.</h4>
        </div>
      </div>
      <div className='row mt-4'>
        <div className='col-12 col-md-4'>
          <div style={{
            backgroundColor: "#ef6c00",
            color: "#f4d876",
            fontWeight: "bold",
            fontSize: 18,
            padding: 15,
            marginBottom: 15,
            borderRadius: 15
          }}>
            <p className='text-center'>Práctica de breathworks y meditación</p>
            <ul>
              <li>Jueves 7:30pm</li>
              <li>Centro CDMX, México</li>

            </ul>
          </div>
          <p>Este jueves, como cada jueves se procura, habrá práctica de respiración y meditación presencial. Es una práctica en la que combinamos técnicas de respiración y meditación, no tengo muchas palabras para describirla. Ven y práctica.</p>
          <p>Este sitio web que está creciendo poco a poco</p>
          <p>Con herramientas gratuitas, o tal vez no</p>

          <p>Se ira generando con mi creatividad y colmillo</p>
          <p>A ver que pasa.</p>
        </div>
        <div className='col-12 col-md-8'>
          <FullCalendar
            plugins={[dayGridPlugin]}
            initialView='dayGridMonth'
            weekends={false}
            events={events}
            eventContent={renderEventContent}
            locale={esLocale}
          />
        </div>

        <div className='col-12 mt-4 '>
          <div className="card w-50 justify" >
            <div className="card-body">
              <h5 className="card-title">Contacto</h5>
              <p className="card-text">Si te interesa asistir contactame por instagram (por ahora), para anotarte en mi excel y pasarte la dirección del centro donde se hacen las prácticas.</p>
              <a href="https://www.instagram.com/el.emas/" target="_blank" className="btn btn-primary">Ir a página de contacto</a>
            </div>
          </div>
        </div>


      </div>
    </div>

  );
}

export default App;
