import "./App.css";
import {useEffect} from 'react';
impor {useDispatch} from 'react-redux'
// import { useRoutes } from "hookrouter";
// import Routes from "./routes";
import UserMenu from "./components/UserMenu";

const App = () => {
  // const routeResult = useRoutes(Routes);
  // return routeResult;
  const dispatch = useDispatch();
  useEffect(() => {
  dispatch();
  }, [])

  return (
    <>
      <UserMenu />;
    </>
  );
};

export default App;
