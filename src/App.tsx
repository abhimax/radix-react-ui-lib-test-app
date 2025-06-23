import { useState } from "react";
import "./App.css";
import { Button, Theme } from "radix-react-ui-lib";
function App() {
  const [count, setCount] = useState(0);

  return (
    <Theme>
      <Button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </Button>
    </Theme>
  );
}

export default App;
