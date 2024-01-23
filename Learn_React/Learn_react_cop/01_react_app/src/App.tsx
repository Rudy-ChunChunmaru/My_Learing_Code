import ListGroup from "./components/ListGroup";
import Alert from "./components/alert";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>
          Hello <span>world</span>
        </Alert>
      )}
      <Button color="primary" onClick={() => setAlertVisibility(true)}>
        click me
      </Button>
    </div>
  );
}

// function App2() {
//   return (
//     <div>
//       <Alert>
//         Hello <span>world</span>
//       </Alert>
//     </div>
//   );
// }

function App1() {
  let items = ["sanggau", "sekadau", "bodok", "pontianak"];
  const heandleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={heandleSelectItem}
      />
    </div>
  );
}

export default App;
