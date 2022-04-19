import HelloWorld from "./components/01-hello-word";
import Comp from './components/02-comp';
import Jsx from "./components/03-jsx";
import Jsx2 from "./components/04-jsx2";

const  App=()=> {
  return (
    <div >
      <h2>bu benim ilk çalışmam </h2>
       <HelloWorld/>
       <Comp/> 
       <Jsx/>
       <Jsx2/>
    </div>
  );
}

export default App;

