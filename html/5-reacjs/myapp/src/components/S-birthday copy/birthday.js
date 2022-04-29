import React, { useState } from 'react'

import Person from "./person";
import data from "./persons.json";

const Birthday1 = () => {
  const [people, setPeople] = useState(data)
  return (
    <div>
      {people.map(item => <Person name={item.name} age={item.age} image={item.image} key={item.id} />)}
    </div>
  )
}

export default Birthday1