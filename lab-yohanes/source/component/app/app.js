import React from 'react';
import {Provider} from 'react-redux'; //we are gonna wrap somethings around it and it will have acces to actino and disbatch
import createAppStore from '../../lib/store'; //tie somethings together into a store and give me a new application state
import Dashboard from '../dashboard/dashboard';
import {BrowserRouter, Route} from 'react-router-dom';


const store = createAppStore(); //works with our provider to wrap with

class App extends React.Component {
  componentDidMount() {//triggered on page load
    store.subscribe(() => console.log('__STATE__:', store.getState())); //go to the store, listen to state and log out all states
    store.dispatch({type: null});
  }
  render() {
    return (
      <main className="application">
        <Provider store={store}>
          <BrowserRouter>
            <Route exact path="/" component={Dashboard}></Route>
          </BrowserRouter>
        </Provider>
      </main>
    );
  }
}



export default App;