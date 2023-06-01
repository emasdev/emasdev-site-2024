import React from 'react'
import FullCalendar from '@fullcalendar/react'
import esLocale from '@fullcalendar/core/locales/es'
import dayGridPlugin from '@fullcalendar/daygrid'

export default function Calendar() {

  const events = [
    { title: 'Respiración y Meditación', start: "2023-06-15" },
    { title: 'Respiración y Meditación', start: "2023-06-22" }
  ]

  // a custom render function
  const renderEventContent = (eventInfo) => {
    return (
      <>
        <b>{eventInfo.timeText}</b>
        <i>{eventInfo.event.title}</i>
      </>
    )
  }

  return (
    <FullCalendar
      plugins={[dayGridPlugin]}
      initialView='dayGridMonth'
      weekends={false}
      events={events}
      eventContent={renderEventContent}
      locale={esLocale}
    />
  )
}
