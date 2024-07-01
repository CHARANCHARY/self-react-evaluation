import Header from './components/navbar';
import ACCSsection from './components/acca-top-section';
import Eligblity from "./components/know-your-eligible"
import WhyChooseUs from './components/choose-us';
import LearnWithUs from "./components/learn-withus";
import Placements from "./components/placement-section";
import Preapre from "./components/prepare" ;  
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = ()=>{
  return (
    <div className="App">
      <Header/>
      <ACCSsection/>
      <WhyChooseUs/>
      <Eligblity/>
      <LearnWithUs/>
      <Placements/>
      <Preapre/>
      
    </div>
  );
}

export default App;
