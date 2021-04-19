import React, { useContext, useState } from "react";
import { DbsContext } from "../contexts/DbsContext";
import { SchemaContext } from "../contexts/SchemaContext";
import Modal from "../ui-components/Modal";

export default function AddModal({setShowAddModal}) {
  const { jsonDBS, setJsonDBS } = useContext(DbsContext);
  const { jsonSchema, setJsonSchema } = useContext(SchemaContext)
  const [modalAddIsOpen, modalAddSetIsOpen] = useState(true);
  const [fields, setFields] = useState([]);
  const [newField, setNewField] = useState({ name: "", type: "" });
  return (
    <>
      {modalAddIsOpen && (
        <Modal
          isOpen={modalAddIsOpen}
          title={"Add Field"}
          toClose={() => modalAddSetIsOpen(!modalAddIsOpen)}
        >
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
              <option value="Dict">Dict</option>
              <option value="Fields">Fields</option>
            </select>
          </div>
          <br></br>

          <button onClick={() => setShowAddModal(false)}>
            Cancel
          </button>
          <button className="primary" onClick={()=>{
            setFields([
              ...fields,
              { name: newField.name, type: newField.type },
            ]);
            setJsonDBS({
              ...jsonDBS,
              [newField.name]: 2,
            });
            setNewField({ name: "", type: "" });
          setShowAddModal(false)

          }
          }>
            Insert
          </button>
        </Modal>
      )}
    </>
  );
}
