import Faq from './components/Faq';
import Header from './components/Header';
import Home from './components/Home';
import MeetTeam from './components/MeetTeam';
import Mint from './components/Mint';
import Roadmap from './components/Roadmap';
import WhyShouldIBuy from './components/WhyShouldIBuy';
import Footer from './components/Footer';
import ShowCase from './components/ShowCase';
import TimeLine from './components/TimeLine';

function App() {
  return (
    <div className="App">
      <Header />
      <Home/>
      <Mint />
      <ShowCase />
      <WhyShouldIBuy />
      <TimeLine />
      {/* <Roadmap /> */}
      <Faq />
      <MeetTeam />
      <Footer/>


    </div>
  );
}

export default App;
