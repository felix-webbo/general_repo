import Expert from "./components/experties/Expert";
import Home from "./components/home/Home";
import Testimonial from "./components/people/Testimonial";
import Portifolio from "./components/portifolio/portifolio";
import Work from "./components/works/Work";
import css from "./styles/app.module.scss";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  BrowserRouter,
} from "react-router-dom";

const App = () => {
  //don't forget to add font link in index.html
  return (
    <BrowserRouter className={`bg-primary ${css.container}`}>
      <Router>
        <Switch>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<Expert />} />
          <Route path="/test" component={<Testimonial />} />
          <Route path="/port" component={<Portifolio />} />
          <Route path="/work" component={<Work />} />
        </Switch>
      </Router>
    </BrowserRouter>
  );
};

export default App;
