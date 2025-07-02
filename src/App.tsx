import { useState } from "react";
import "./App.css";
import { Button, Theme, Icon, Scheduler } from "radix-react-ui-lib";
import { events } from "./storyData";
function App() {
  const [count, setCount] = useState(0);

  return (
    <Theme>
      <Button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </Button>
      <Icon name="ChevronUpIcon" skin="primary" size={30} />
      <Scheduler events={events} />
    </Theme>
  );
}

export default App;
