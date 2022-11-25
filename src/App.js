
import About from './components/features';
import Faq1 from './components/Faq1';
import Footer from './components/Footer';
import Hero from './components/home';
import Navbar from './components/Navbar'
import Support from './components/customers'
import Signin from './components/Signin'
import NotFound from "./components/Notfound";
// import Upload from './components/upload';
// import FilesList from './components/FilesList';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Download from './components/download';
function App() {
  return (
    <Router>
      <Switch>
      <Route exact path="/">
        <Signin />
      </Route>  
      <Route path="/home"> 
      <Navbar />
      <Hero />
      <About />
      <Support />
      <Faq1 />
      <Footer />
      </Route>
      {/* {/* <Route exact path="/upload">
        <Upload />
      </Route>  */}
      <Route path="/download">
        <Download />
      </Route> 

      <Route path="*">
        <NotFound />
      </Route>
      </Switch>
    </Router>
  );
}

export default App;
