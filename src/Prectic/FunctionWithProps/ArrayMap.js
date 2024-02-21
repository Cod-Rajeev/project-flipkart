import React from 'react'

function ArrayMap() {
    const persons = [
        {
            sid: 1,
            sname: 'Deep Singh',
            scourse: 'Full Stack Java'
        },
        {
            sid: 2,
            sname: 'Punit Katiyar',
            scourse: 'Full Stack PHP'
        },
        {
            sid: 3,
            sname: 'Gaurav Tomer',
            scourse: 'Full Stack Python'
        },
        {
            sid: 4,
            sname: 'Manoj Sir',
            scourse: 'Management'
        }
    ];
    const PersonList = persons.map(person => (<h1> {person.sid}. Welcome {person.sname} your Course {person.scourse }</h1>) ) 
  return (
    <div>
        <div>{PersonList}</div>
    </div>
  )
}

export default ArrayMap