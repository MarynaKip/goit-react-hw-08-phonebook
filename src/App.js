import "./App.css";
import {useEffect} from 'react';
// import { useRoutes } from "hookrouter";
// import Routes from "./routes";
import UserMenu from "./components/UserMenu";

const App = () => {
  // const routeResult = useRoutes(Routes);
  // return routeResult;

  return (
    <>
      <UserMenu />;
    </>
  );
};

export default App;
