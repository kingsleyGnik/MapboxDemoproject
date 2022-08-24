import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducer/index";
import thunk from "redux-thunk";

//const middleware = [thunk];

const store = createStore(rootReducer, applyMiddleware(thunk));
console.log(store);

export default store;

/* const enhancers = compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()


  
const mapStateToProps = (state) => ({
  data: state.data,
});

const mapDispatchToProps = (dispatch) => ({
  fetchPlacesData: () => dispatch(fetchPlacesData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

); */
