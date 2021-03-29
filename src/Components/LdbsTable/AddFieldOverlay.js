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

import React, {useState} from 'react'

export default function AddFieldOverlay({states, isOpen, setIsOpen}) {

    return (
        <Overlay
        isOpen={isOpen}
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
                states.setNewField({ name: e.target.value, type: states.newField.type });
            }}
            placeholder="Field Name"
            small={false}
            value={states.newField.name}
          />
          <div
            class="bp3-select"
            onChange={(e) => {
                states.setNewField({ name: states.newField.name, type: e.target.value });
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
              setIsOpen(!isOpen)
              states.setFields([
                ...states.fields,
                { name: states.newField.name, type: states.newField.type },
              ]);
              states.setJsonDBS({
                ...states.jsonDBS,
                [states.newField.name]: 2,
              });
              states.setNewField({ name: "", type: "" });
            }}
          />
        </Card>
      </Overlay>
    )
}
