import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import gsap from 'gsap'

function App() {

  let timeline = gsap.timeline()
  
  return (
    <div className="bg-slate-100 ">
      <Header timeline={timeline}/>
      <Main timeline={timeline}/>
      <Footer/>
    </div>
  );
}

export default App;
