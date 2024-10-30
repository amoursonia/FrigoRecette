import { useState } from "react";
import { MonFrigo } from "./component/MonFrigo";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <MonFrigo />
    </>
  );
}
export default App;
