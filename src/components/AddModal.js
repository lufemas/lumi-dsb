import React, { useContext, useState, useEffect } from "react";
import { DbsContext } from "../contexts/DbsContext";
import { SchemaContext } from "../contexts/SchemaContext";
import Modal from "../ui-components/Modal";

export default function AddModal({ isOpen, setIsOpen, selectedNodeId }) {
  const { jsonDBS, setJsonDBS } = useContext(DbsContext);
  const { jsonSchema, setJsonSchema, addField } = useContext(SchemaContext)
  const [fields, setFields] = useState([]);
  const [newField, setNewField] = useState({ name: "", type: "" });
  const [ selectedNode, SetSelectedNode ] = useState({}) 

  useEffect(() => {
    if(selectedNodeId == "") return
    SetSelectedNode(jsonSchema.find(f => f.id === selectedNodeId))
    console.log(selectedNodeId)
    return {}
  }, [isOpen])

  if (isOpen) {

    return (
      <>

        <Modal
          // isOpen={isOpen}
          title={"Add Field"}
          toClose={() => setIsOpen(false)}
        >
          <h4>{selectedNode.name}</h4>
          <input
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
              <option value="Table">Table</option>
            </select>
          </div>
          <br></br>

          <button onClick={() => setIsOpen(false)}>
            Cancel
          </button>
          <button className="primary" onClick={() => {

           
            setFields([
              ...fields,
              { name: newField.name, type: newField.type },
            ]);
            addField({
              parent: selectedNode.id,
              name: newField.name,
              type: newField.type
            })
            setNewField({ name: "", type: "" });
            setIsOpen(false)

          }
          }>
            Insert
          </button>
        </Modal>

      </>
    );
  } else {
    return null
  }
}
