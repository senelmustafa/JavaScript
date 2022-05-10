import Routers from "./Routers";
import { StoreContext } from "./store";
import React, { useState } from "react";
function App() {
  const [count, setCount] = useState(0);
  return (
    <StoreContext.Provider value={{ count, setCount }}>
      <Routers />
    </StoreContext.Provider>
  );
}
export default App;
