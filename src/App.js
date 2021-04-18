import './ui-components/styles/_reset.scss'
import './ui-components/styles/classless.scss'
import './ui-components/styles/classes.scss'

import { useState, useContext } from "react";
import DbsContextProvider, { DbsContext } from "./contexts/DbsContext";
import Main from "./components/Main";
import SchemaContextProvider from './contexts/SchemaContext';

function App() {
  const [addOverlayIsOpen, setAddOverlayIsOpen] = useState(false);
  return (
    <div className="App">
      <DbsContextProvider>
        {/* <Navbar>
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
        </Navbar> */}
        <SchemaContextProvider>
          <Main objs={{ addOverlayIsOpen, setAddOverlayIsOpen, texto: "aaaa" }} />
        </SchemaContextProvider>
      </DbsContextProvider>
    </div>
  );
}

export default App;
