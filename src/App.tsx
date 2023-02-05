
import { Toaster } from "react-hot-toast";
import RouterMain from "./routes";
import { Global } from "./styles/global";

function App() {
  return (
    <div className="App">
      <Global />
      <RouterMain/>
      <Toaster/>
    </div>
  );
}

export default App;
