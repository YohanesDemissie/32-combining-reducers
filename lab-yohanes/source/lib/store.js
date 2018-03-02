import {createStore, applyMiddleware} from 'redux';
import reducer from '../reducer/index';
import {composeWithDevTools} from 'redux-devtools-extension';
import reduxReporter from '../middleware/redux-reporter';
import crashReporter from '../middleware/crash-reporter';
import reduxSession from '../middleware/redux-sesion';

export default () => createStore(reducer);
// export default() => createStore(reducer, composeWithDevTools(applyMiddleware(reduxReporter, crashReporter, reduxSession)
// ));
