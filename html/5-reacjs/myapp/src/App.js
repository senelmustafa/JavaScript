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
import ImagePractise from "./components/ImagePractise";
import Props from "./components/props/11-props";





const  App=()=> {
  return (
    <div >
     {/* <h2>bu benim ilk çalışmam </h2>
        <HelloWorld/>
       <Comp/> 
       <Jsx/>
       <Jsx2/> 
       <JsxPractise/>
       <StyleInline/>
       <StyleInternal/>
       <StyleExternal/>
       <Clock1/>*/}
       {/* <Props ad="Metin" yas="33"/>
       <Clock2 color="yellow" bgColor="red"/>
       <Clock2 color="blue" bgColor="yellow"/>
         <Clock2 color="white" bgColor="black"/> 
                    <Image/>
                   
      <ImagePractise/>
 */}
      {/* <ProfileCard
       name="Ali Gel" 
       location="istanbul,Türkiye"
       avatar="profile.jpg" 
       shot="4" 
       followers="4532"
       followings="50" /> 

       <BootstrapStatic/>
       
      <BootstrapDinamik/>*/}
      <Shop/>

           </div>
  );
}

export default App;

