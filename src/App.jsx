import { useState } from "react";

import ExampleContainer from "./components/ExampleContainer.jsx";
import RenderActiveComponent from "./helpers/RenderActiveComponent.jsx";
import NavBar from "./helpers/NavBar.jsx";

const COMPONENTS = [
  { name: "Badge", component: "Badge" },
  { name: "Button", component: "Button" },
];

function App() {
  const [activeComponent, setActiveComponent] = useState(
    COMPONENTS[0].component,
  );
  return (
    <>
      {
        <NavBar
          components={COMPONENTS}
          activeComponent={activeComponent}
          setActiveComponent={setActiveComponent}
        />
      }
      <ExampleContainer className="example-container">
        <RenderActiveComponent component={activeComponent} />
      </ExampleContainer>
    </>
  );
}
export default App;
