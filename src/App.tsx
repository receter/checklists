import "./App.css";

import { items as itemsVorbereitung } from "./checklists/vorbereitung";
import { Checklist } from "./components/Checklist";

function App() {
  return (
    <>
      <Checklist initialItems={itemsVorbereitung} />
    </>
  );
}

export default App;
