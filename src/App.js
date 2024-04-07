import Header from './components/Header';
import BecomeACCA from './components/BecomeACCA';
import Eligblity from "./components/Eligblity"
import WhyChooseUs from './components/WhyChooseUs';
import LearnInACCA from "./components/LearnInACCA"
import PlacementAssistance from "./components/PlacementAssistance"
import AccaPrep from "./components/AccaPrep"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = ()=>{
  return (
    <div className="App">
      <Header/>
      <BecomeACCA/>
      <WhyChooseUs/>
      <Eligblity/>
      <LearnInACCA/>
      <PlacementAssistance/>
      <AccaPrep/>
      
    </div>
  );
}

export default App;
