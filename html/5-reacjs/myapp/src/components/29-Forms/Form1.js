import React, { useState } from 'react'
import { Container, Form, FormControl } from 'react-bootstrap'

const Form1 = () => {

const [name, setName] = useState("");
    const [isNameValid, setIsNameValid] = useState("ALİ");

const handleName = (e) => { 
setName(e.target.value);
    if (e.target.value.length < 2 || e.target.value.length>20) {
    setIsNameValid(false);
}else{
    setIsNameValid(true);
}

};

  return (
      <Container className="mt-5">
 
          <div> Merhaba {name} {isNameValid.toString()}</div>
          <Form>
              <Form.Control type="text"
              value={name}
                  onChange={handleName}
              placeholder="Adınızı Giriniz :"
              isInvalid={!isNameValid}
                  isValid={isNameValid}
              />
          </Form>

      </Container>
  )
}

export default Form1