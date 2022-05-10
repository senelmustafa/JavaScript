import HelloWorld from "./components/01-hello-world";
import Comp from './components/02-comp';
import Jsx, {test1, test2} from "./components/03-jsx";
import Jsx2 from "./components/04-jsx-2";
import JsxLoop from "./components/05-jsx-loop";
import JsxPractise from "./components/06-jsx-practise";
import StyleInline from "./components/07-style-inline";
import StyleInternal from "./components/08-style-internal";
import StyleExternal from "./components/09-style-external";
import Clock1 from "./components/10-clock1";
import Props from "./components/11-props";
import Clock2 from "./components/12-clock2";
import Image from "./components/13-image";
import ImagePractise from "./components/14-image-practise";
import ProfileCard from "./components/15-profile-card";
import BootstrapStatic from "./components/16-bootstrap-static";
import BootstrapDinamik from "./components/17-bootstrap-dinamik";
import Shop from "./components/18-bootstrap-practise/shop";
import State from "./components/19-state";
import Stateless from "./components/20-stateless";
import Counter from "./components/21-counter";
import Birthday from "./components/22-birthday/birthday";
import UseEffect from "./components/22-useEffect";
import Clock3 from "./components/23-clock-3";
import UseEffect2 from "./components/24-useeffect-2";
import RandomImage from "./components/25-random-image";
import RandomImage2 from "./components/26-random-image-2";
import UserCards from "./components/27-usercards/user-cards";
import Countries from "./components/28-countries/countries";
import Form1 from "./components/29-forms/form1";
import Form2 from "./components/29-forms/form2";
import Form3 from "./components/29-forms/form3";
import Form4 from "./components/29-forms/form4";
import Form5 from "./components/29-forms/form5";
import {BrowserRouter, Routes} from "react-router-dom";
import Header from "./components/00-header";
import { Col, Container, Row } from "react-bootstrap";
import Menu from "./components/00-menu";


const App = () => {

  return (
    <BrowserRouter>
      <Header/>
      <Container fluid>
        <Row>
          <Col md={3}><Menu/></Col>
          <Col md={9}>

              <Routes>
                <Route path="/helloword" element= 
                
                
                  
              </Routes>



          </Col>
        </Row>
      </Container>


{/*       
      <HelloWorld/>
      <Comp/>
      <Jsx/>
      <Jsx2/>
      <JsxLoop/>
      <JsxPractise/>
      <StyleInline/>
      <StyleInternal/>
      <StyleExternal/>
      <Clock1/>
      <Props ad="Metin" yas="33"/>
      <Clock2 color="red" bgColor="gray"/>
      <Clock2 color="yellow" bgColor="navy"/>
      <Clock2/>
      <Image/>
      <ImagePractise/>
       <ProfileCard 
      name="Ali Gel" 
      location="İstanbul, Türkiye" 
      avatar="profile.jpg" 
      shot="4" 
      followers="4523" 
      followings="50"/>
      <BootstrapStatic/>
      <BootstrapDinamik/>
      <Shop/>
      <Stateless/>
      <State/>
      <Counter/>
      <Birthday/>
      <UseEffect/>
      <Clock3/>
      <UseEffect2/>
      <RandomImage/>
      <RandomImage2/>
      <UserCards/>
      <Countries/>
      <Form1/>
      <Form2/>
      <Form3/>
      <Form4/>
      <Form5/>
 */}    
    
      
    
 </BrowserRouter>
  );
}

export default App;
