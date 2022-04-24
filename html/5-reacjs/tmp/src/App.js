import Aders from "./components/Aders";
import Akis from "./components/akis/akis";
import Bders from "./components/Bders";
import Cders from "./components/Cders";
import Cards from "./components/comp4/Cards";
import Clock from "./components/S-clock/1-clock";
import Kisi from "./components/student/Kisi";
import Kurs from "./components/student/Kurs";
import student from "./components/student/Students.json";
import "./components/student/style.css";



function App() {
  return <div className="App">
    {/* 
    <Aders/>
    <Bders/>
    <Cders/>
     */}
     
    {/* <Clock adi="Mustafa" soyadi="Şenel" yas="40" />
    <Clock adi="Mustafa" soyadi="Şenel" yas="40" />
    <Clock adi="Mustafa" soyadi="Şenel" yas="40" /> 
<Kurs/>*/}
    
    {/* <div className="card">
      {" "}
      {student.map((student, index) => {
        const { isim, img, yas, kurs } = student;
        return <Kisi key={index} ad={isim} img={img} yas={yas} kurs={kurs}/>;
      })}
    </div> */}
    {/* <div className="yanyana">
      {" "}
      {student.map((student, index) => {
        const { isim, img, yas, kurs } = student;
        return <Cards key={index} ad={isim} img={img} yas={yas} kurs={kurs} />;
      })}
    </div> */}

    <Akis/>
  </div>
  
}
export default App;