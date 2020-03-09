import Articles from './Articles';
import Article from './Article';
import { BrowserRouter as Router, Route, Switch 
} from "react-router-dom";import React from 'react';

const Stuff = () => (
    <Router>
      <React.Fragment>
        {/* <ul className="nav justify-content-center">
            <li className="nav-link">
              <Link to="/articles">Articles</Link>
            </li>
        </ul> */}

        <Switch>

            <Route exact path="/articles" component={ Articles } />
            
            <Route path="/articles/:id" render={ ({ match }) => ( <Article id={ match.params.id } />) } />
        
        </Switch>

      </React.Fragment>
    </Router>
      );
  
  
  export default Stuff;