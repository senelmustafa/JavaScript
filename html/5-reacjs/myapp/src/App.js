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
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/00-header";
import { Col, Container, Row } from "react-bootstrap";
import Menu from "./components/00-menu";
import User from "./components/S-Denemeler/01-Props/User";
import PropsHome from "./components/S-Denemeler/01-Props/PropsHome";
import { StoreContext } from "./store";
import { useEffect, useState } from "react";
import SetContext from "./components/30-set-context";
import GetContext from "./components/31-get-context";
import Exchange from "./components/32-exchange/exchange";
import axios from "axios";
import Dashboard from "./components/33-children-props/dashboard";
import Users from "./components/33-children-props/users";
import Slider from "./components/slider/slider";


const App = () => {
const [color,setColor] =useState("blue");
  const [rates, setRates] = useState({});
  
  const getRates = () => { 
    axios("https://api.frankfurter.app/latest?from=try")
    .then(resp=>{
      setRates(resp.data.rates);
    })

   }
   useEffect(() => {
     getRates();
   },[])
  
  return (
    <StoreContext.Provider value={{ color, setColor,rates}}>
    <BrowserRouter>
      <Header />
      <Container fluid>
        <Row>
          <Col md={3}><Menu /></Col>
          <Col md={9}>

            <Routes>
              <Route path="/helloworld" element={<HelloWorld />} />
              <Route path="/comp" element={<Comp />} />
              <Route path="/jsx1" element={<jsx1 />} />
              <Route path="/jsx2" element={<Jsx2 />} />
              <Route path="/jsx3" element={<JsxLoop />} />
              <Route path="/JsxPractise" element={< JsxPractise />} />
              <Route path="/StyleInline" element={< StyleInline/>} / >
              <Route path="/StyleInternal" element={< StyleInternal/>} / >
              <Route path="StyleExternal/" element={< StyleExternal/>} / >
               <Route path="/Clock1" element={< Clock1 />} / >
              <Route path="/Props" element={< Props/>} / >
              <Route path="/Clock2" element={< Clock2/>} / >
              <Route path="/Image" element={<Image />} / >
              <Route path="/ImagePractise" element={< ImagePractise/>} / >
              <Route path="/BootstrapStatic" element={< BootstrapStatic/>} / >
              <Route path="/BootstrapDinamik" element={<BootstrapDinamik />} / >
              <Route path="/Shop" element={< Shop/>} / >
              <Route path="/Statteless" element={< Statteless/>} / >
              <Route path="/Counter" element={<Counter />} / >
              <Route path="/Birthday" element={< Birthday/>} / >
              <Route path="/UseEffect" element={<UseEffect />} / >
              <Route path="/Clock3" element={< Clock3/>} / >
              <Route path="/Birthday1" element={<Birthday1  />} />
              <Route path="/ProfileCard " element={<ProfileCard  />} / >
              <Route path="/Info" element={< Info/>} / >
              <Route path="/UserCards" element={<UserCards />} / >
              <Route path="/Countries" element={< Countries/>} / >
              <Route path="/Form1" element={< Form1/>} / >
              <Route path="/Form2" element={< Form2/>} / >
              <Route path="/Form3" element={<Form3 />} / >
              <Route path="/Form4" element={< Form4/>} / >
              <Route path="/Form5" element={<Form5 />} / >
              <Route path="/PropsHome" element={<PropsHome />} />
                <Route path="/get-context" element={<GetContext />} />
                <Route path="/set-context" element={<SetContext />} />
                <Route path="/exchange" element={<Exchange />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/users" element={<Users />} />
                <Route path="/slider" element={<Slider />} />

            </Routes>
            



          </Col>
        </Row>
      </Container>
{/* 
      <HelloWorld />
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
      <ProfileCard  name="Ali Gel" location="istanbul,Türkiye" avatar="profile.jpg" shot="4"followers="4532" followings="50" />
      <Info />

      <UserCards />
      <Countries />
      <Form1 />
      <Form2 />
      <Form3 />
      <Form4 />
      <Form5 />
<PropsHome/>
 */}
 
    </BrowserRouter>


</StoreContext.Provider>

  );
}

export default App;
