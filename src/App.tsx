import Login from "./pages/Login";
import Register from "./pages/Register";
import { Global } from "./styles/global";

function App() {
  return (
    <div className="App">
      <Global />
      <Register/>
      {/* <Login/> */}
    </div>
  );
}

export default App;
