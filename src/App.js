import {
  Navbar,
  Alignment,
  Classes,
  // Button,
  Intent,
  Spinner,
  Overlay,
  Card,
  InputGroup,
} from "@blueprintjs/core";

import {Button, Menu} from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined, DownloadOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css'

// using node-style package resolution in a CSS file:
// import "normalize.css";
// import "@blueprintjs/core/lib/css/blueprint.css";
// import "@blueprintjs/icons/lib/css/blueprint-icons.css";

import { useState } from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Inspect from "./Components/Inspect/Inspect";
import AddFieldOverlay from "./Components/LdbsTable/AddFieldOverlay";

function App() {
  const [fields, setFields] = useState([]);
  const [jsonDBS, setJsonDBS] = useState({});
  const [newField, setNewField] = useState({ name: "", type: "" });
  const [addFieldOverlayIsOpen, setAddFieldOverlayIsOpen] = useState(false);
  
  

  return (
    <Router>
      <div className="App">
        {/* <Navbar> */}
          <Menu>
            <Switch>
              <Route path="/" exact={true}>
              <Menu.Item key="mail" icon={<MailOutlined />}>
                LumiDSB - Home
              </Menu.Item>
              </Route>
              <Route path="/table">
              <Menu.Item key="mail" icon={<AppstoreOutlined />}>
                LumiDSB - Table
              </Menu.Item>
              </Route>
            </Switch>

            <Switch>
              <Route path="/" exact={true}>
              <Button
                  icon={<DownloadOutlined />}
                  size='large'
                >
                  Open Project
                  </Button>
                <Button
                  icon={<DownloadOutlined />}
                  onClick={() => setAddFieldOverlayIsOpen(!addFieldOverlayIsOpen)}
                >
                  Add Field
                  </Button>
              </Route>
              <Route path="/" exact={false}>
                <Button className="bp3-minimal" icon="home" text="Home" />
              </Route>
              <Route path="/table">
                <Button
                  className="bp3-minimal"
                  icon="add"
                  text="Add Field"
                  onClick={() => setAddFieldOverlayIsOpen(!addFieldOverlayIsOpen)}
                />
              </Route>
            </Switch>
          </Menu>
        {/* </Navbar> */}

        <main>

          <AddFieldOverlay isOpen={addFieldOverlayIsOpen} setIsOpen={setAddFieldOverlayIsOpen} states={
            {
              fields, setFields,
              jsonDBS, setJsonDBS,  
              newField, setNewField
              }
          }/>
          {/* <Button text="Show overlay" onClick={this.toggleOverlay} />
          <Overlay isOpen={this.state.isOpen} onClose={this.toggleOverlay}>
            Overlaid contents...
          </Overlay> */}
          <div style={{ display: "flex" }}>
            <div style={{ width: "50%", padding: "0em 2em" }}>
              <h2>Fields</h2>
              <ul>
                {fields.map((field) => {
                  let $inputType = "";
                  switch (field.type) {
                    case "Integer":
                      $inputType = <input type="number" />;
                      break;
                    case "Float":
                      $inputType = <input type="number" />;
                      break;
                    case "Text":
                      $inputType = (
                        <textarea name="" id="" cols="30" rows="2"></textarea>
                      );
                      break;
                    case "Boolean":
                      $inputType = <input type="checkbox" />;
                      break;
                    case "Array":
                      $inputType = <input type="number" />;
                      break;
                    case "Dict":
                      $inputType = <input type="text" />;
                      $inputType = <input type="number" />;
                      break;
                    case "Fields":
                      $inputType = <input type="number" />;
                      break;

                    default:
                      break;
                  }
                  return (
                    <li
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        width: "auto",
                      }}
                    >
                      <div>
                        <strong>{field.name}</strong>{" "}
                        <small>
                          <sup>{field.type}</sup>
                        </small>
                      </div>
                      {$inputType}
                      ________________________________________________________
                    </li>
                  );
                })}
              </ul>
            </div>
            <div style={{ width: "50%", height: "100%" }}>
              <Inspect jsonDBS={jsonDBS} />
              {/* <ReactJson
              src={jsonDBS}
              theme="brewer"
              style={{ width: "100%", height: "100%", padding:'2em 2em' }}
            /> */}
            </div>
          </div>
        </main>
      </div>
    </Router>
  );
}

export default App;
