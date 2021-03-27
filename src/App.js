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

import ReactJson from "react-json-view";
import { useState } from "react";

function App() {
  const [fields, setFields] = useState([]);
  const [jsonDBS, setJsonDBS] = useState({});
  const [newField, setNewField] = useState({ name: "", type: "" });
  const [addOverlayIsOpen, setAddOverlayIsOpen] = useState(false);

  return (
    <div className="App">
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

      <main>
        <Overlay
          isOpen={addOverlayIsOpen}
          autoFocus={true}
          canEscapeKeyClose={true}
          canOutsideClickClose={true}
          usePortal={true}
        >
          <Card>
            <h3>Add Field</h3>
            <InputGroup
              asyncControl={true}
              disabled={false}
              large={false}
              leftIcon="tag"
              onChange={(e) => {
                setNewField({ name: e.target.value, type: newField.type });
              }}
              placeholder="Field Name"
              small={false}
              value={newField.name}
            />
            <div
              class="bp3-select"
              onChange={(e) => {
                setNewField({ name: newField.name, type: e.target.value });
              }}
            >
              <select>
                <option selected>Data Type</option>
                <option value="Integer">Integer</option>
                <option value="Float">Float</option>
                <option value="Text">Text</option>
                <option value="Boolean">Boolean</option>
                <option value="Array">Array</option>
                <option value="Dict">Dict</option>
                <option value="Fields">Fields</option>
              </select>
            </div>
            <br></br>
            <Button
              icon="insert"
              text="Add"
              onClick={() => {
                setAddOverlayIsOpen(!addOverlayIsOpen);
                setFields([
                  ...fields,
                  { name: newField.name, type: newField.type },
                ]);
                setJsonDBS({
                  ...jsonDBS,
                  [newField.name]: 2,
                });
                setNewField({ name: "", type: "" });
              }}
            />
          </Card>
        </Overlay>

        {/* <Button text="Show overlay" onClick={this.toggleOverlay} />
          <Overlay isOpen={this.state.isOpen} onClose={this.toggleOverlay}>
            Overlaid contents...
          </Overlay> */}
        <div style={{ display: "flex" }}>
          <div style={{ width: "50%", padding:'0em 2em' }}>
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
                    $inputType = <textarea name="" id="" cols="30" rows="2"></textarea>;
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
            <ReactJson
              src={jsonDBS}
              theme="brewer"
              style={{ width: "100%", height: "100%", padding:'2em 2em' }}
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
