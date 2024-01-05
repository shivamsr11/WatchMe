import './App.css';
import Header from './components/Header';
import Body from "./components/Body";
import Demo from "./components/Demo";
import { createBrowserRouter } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';
import SignIn from './components/SignIn';
import Sidebar from './components/Sidebar';


export const appRouter = createBrowserRouter([
  {
    path : "/",
    element : <SignIn />
  },
  // {
  //   path : "/app",
  //   element : <Header />
  // },
  {
    path : "/app",
    element : <Body />,
    children : [
      // { 
      //   path : "/app",
      //   element : <Body />
      // },
      { 
        path : "/app",
        element : <MainContainer />
      },
      {
        path : "/app/watch",
        element : <WatchPage />
      },
      {
        path : "/app/demo",
        element : <Demo />
      }
    ]
  }
//   {
//   path : "/",
//   element : <Body />,
//   children : [
//     { 
//       path : "/",
//       element : <MainContainer />
//     },
//     {
//       path : "/watch",
//       element : <WatchPage />
//     },
//     {
//       path : "/demo",
//       element : <Demo />
//     }
//   ]
// }
])

function App() {
  return (
  
      <div>
        <Body />
        
      </div>
  );
}

export default App;
