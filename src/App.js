import './App.css';
import Header from './components/Header';
import Body from "./components/Body";
import store from './utils/store';
import Demo from "./components/Demo";
import { Provider } from 'react-redux';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';

const appRouter = createBrowserRouter([{
  path : "/",
  element : <Body />,
  children : [
    { path : "/",
  element : <MainContainer />
},
{
  path : "/watch",
  element : <WatchPage />
},
{
  path : "/demo",
  element : <Demo />
}
   
  ]
}])

function App() {
  return (
    <Provider store = {store}>
    <div>
      <Header />
<RouterProvider router={appRouter}/>
          </div>
        </Provider>
  );
}

export default App;
