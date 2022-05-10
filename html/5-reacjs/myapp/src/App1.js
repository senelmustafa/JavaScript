import HelloWorld from "./components/01-hello-word";
import Comp from './components/02-comp';
import Jsx from "./components/03-jsx";
import Jsx2 from "./components/04-jsx2";
import JsxLoop from "./components/05-jsx-loop";
import JsxPractise from "./components/06-jsx-practise";
import StyleInline from "./components/07-style-inline";
import StyleInternal from "./components/08-style-internal";
import StyleExternal from "./components/09-style-external";
import Clock1 from "./components/10-clock/10-clock1";
import Clock2 from "./components/10-clock/12-clock2 copy";
import Image from "./components/13-image";
import ProfileCard from "./components/15-card/15-profile-card";
import BootstrapStatic from "./components/16-bootstrap-static";
import BootstrapDinamik from "./components/17-bootstrap-dinamik";
import Shop from "./components/18-bootstrap-practise/shop";
import Statteless from "./components/19-stateless";
import Counter from "./components/20-counter";
import Birthday1 from "./components/S-birthday copy/birthday";
import Birthday from "./components/22-birthday/birthday";
import UseEffect from "./components/22-useEffect";
import Clock3 from "./components/23-clock/10-clock1";
import ImagePractise from "./components/ImagePractise";
import Props from "./components/props/11-props";
import ProfilCard from "./components/S-Card/ProfilCard";
import Info from "./components/S-Card/Info";
import UserCards from "./components/27-user-cards.js/UserCards";
import Countries from "./components/28-countries/countries";
import Form1 from "./components/29-Forms/Form1";
import Form2 from "./components/29-Forms/Form2";
import Form3 from "./components/29-Forms/Form3";
import Form4 from "./components/29-Forms/Form4";
import Form5 from "./components/29-Forms/form5";
import { BrowserRouter, Routes } from "react-router-dom";
import { Container, Row } from "react-bootstrap";
 





const App = () => {
  return (
    <BrowserRouter >
    <Header/>
    <Container fluid>
      <Row>
        <Col md={3}><Menu/></Col>
          <Col md={9}>

            <Routes>

            </Routes>
          </Col>
      </Row>
    </Container>
      
     {/*  <HelloWorld />
      <Comp />
      <Jsx />
      <Jsx2 />
      <JsxPractise />
      <StyleInline />
      <StyleInternal />
      <StyleExternal />
      <Clock1 />
      <Props ad="Metin" yas="33" />
      <Clock2 color="yellow" bgColor="red" />
      <Clock2 color="blue" bgColor="yellow" />
      <Clock2 color="white" bgColor="black" />
      <Image />

      <ImagePractise />
      <BootstrapStatic />

      <BootstrapDinamik />
      <Shop />
      <Statteless />
      <Counter />
      <Birthday />

      <UseEffect />
      <Clock3 />
      <Birthday1 />
      <ProfileCard
        name="Ali Gel"
        location="istanbul,Türkiye"
        avatar="profile.jpg"
        shot="4"
        followers="4532"
        followings="50" /> 
      <Info/>
     
       <UserCards/>  
      <Countries/>
      <Form1/>
      <Form2/>
      <Form3 />
      <Form4/>*/}
      <Form5 />

    </BrowserRouter>
  );
}

export default App;

