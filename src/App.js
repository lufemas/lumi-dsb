import {
  Navbar,
  Alignment,
  Classes,
  Button,
  Intent,
  Spinner,
  Overlay,
  Card,
  InputGroup,
} from "@blueprintjs/core";

// using node-style package resolution in a CSS file:
// @import "~normalize.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";

import { useState, useContext } from "react";
import DbsContextProvider, { DbsContext } from "./contexts/DbsContext";
import Main from "./components/Main";

function App() {
  const [addOverlayIsOpen, setAddOverlayIsOpen] = useState(false);
  return (
    <div className="App">
      <DbsContextProvider>
        <Navbar>
          <Navbar.Group align={Alignment.LEFT}>
            <Navbar.Heading>LumiDSB</Navbar.Heading>
            <Navbar.Divider />
            <Button className="bp3-minimal" icon="home" text="Home" />
            <Button className="bp3-minimal" icon="document" text="New" />
            <Button
              className="bp3-minimal"
              icon="add"
              text="Add"
              onClick={() => setAddOverlayIsOpen(!addOverlayIsOpen)}
            />
          </Navbar.Group>
        </Navbar>

        <Main objs={{addOverlayIsOpen, setAddOverlayIsOpen, texto:"aaaa"}} />
      </DbsContextProvider>
    </div>
  );
}

export default App;
