import React from 'react'
import students from './Students.json';

const Kurs = () => {
  return (
    <div>
        <h1> Kursiyerler</h1>

        <h3>Yasşı 25 den büyük olanlar : </h3>
        {students.
        filter((student)=>student.yas).
        map((student,index)=>(
            <ul key={index}>
                <li>{student.isim}</li>
            </ul>

        ))
        }
    </div>
  )
}

export default Kurs