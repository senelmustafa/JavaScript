import Aders from "./components/Aders";
import Bders from "./components/Bders";
import Cders from "./components/Cders";
import Clock from "./components/S-clock/1-clock";

function App() {
  return <div className="App">
    {/* 
    <Aders/>
    <Bders/>
    <Cders/>
     */}
    <Clock adi="Mustafa" soyadi="Şenel" yas="40" />
    <Clock adi="Mustafa" soyadi="Şenel" yas="40" />
    <Clock adi="Mustafa" soyadi="Şenel" yas="40" />

    Lorem yazdırmak için................................
    <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi eligendi dolore laudantium quasi maiores officiis animi, similique, debitis velit, provident quisquam! Voluptate ab libero dolor rerum deleniti, animi voluptatum eaque?</h1>

  </div>;
}

export default App;
