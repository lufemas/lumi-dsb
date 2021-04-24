import "../styles/tree.scss";
import React, { useContext, useState } from "react";
import { SchemaContext } from "../contexts/SchemaContext";
import AddModal from "./AddModal";

export default function SchemaViewer() {
  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedNodeId, setSelectedNodeId] = useState("");

  const { jsonSchema, setJsonSchema, deleteField } = useContext(SchemaContext);

  const generateTreeForItem = (schema, parent) => {
    const node = {};

    return schema
      .filter((v) => v.parent === parent)
      .map((n) => {
        return (
          <ul class="tree">
            <li className="section">
              <input type="checkbox" id={n.id} />
              <label for={n.id}>{n.name}</label>
              {n.type === "Table" ? (
                <>
                  <sup> Table</sup>
                  <button
                    onClick={() => {
                      setSelectedNodeId(n.id);
                      console.log(selectedNodeId);
                      setShowAddModal(true);
                    }}
                  >
                    Add field
                  </button>
                </>
              ) : (
                <span>: {n.type}</span>
              )}

              <button
                onClick={() => {
                  deleteField(n.id);
                }}
              >
                Delete Scheme
              </button>

              <button
                onClick={() => {
                  deleteField(n.id);
                }}
              >
                Delete Scheme
              </button>

              <button
                onClick={() => {
                  deleteField(n.id);
                }}
              >
                Populate
              </button>

              {generateTreeForItem(schema, n.id)}
            </li>
          </ul>
        );
      });
    // return Object.keys(item).map((rootKey, index) => {
    //   if (typeof item[rootKey] === 'object' && item[rootKey] !== null) {

    //     return (
    //       <li className="section">
    //         <input type="checkbox" id={`schema-${rootKey}`} />
    //         <label for={`schema-${rootKey}`}>
    //           {rootKey} <sup>({Object.keys(item[rootKey]).length})</sup>

    //           {
    //           keyPath.length == 0
    //           ? <button onClick=
    //           {
    //             ()=>setNodeInChange({name : rootKey, path: []})
    //           }>
    //               Populate
    //             </button>
    //           : null
    //           }

    //           <button onClick={() => {
    //             setNodeInChange({name : rootKey, path: keyPath})
    //             setShowAddModal(true)
    //           }
    //           }
    //           >Add Field</button>
    //            <button  onClick={() => {
    //             setNodeInChange({name : rootKey, path: keyPath})
    //             // setShowAddModal(true)
    //             deleteField({name : rootKey, path: keyPath})
    //           }
    //           }
    //           >Delete Scheme</button>
    //         </label>

    //         <ul>{generateTreeForItem(jsonSchema, null)}</ul>

    //       </li>
    //     )

    //   } else {
    //     // keyPath = []

    //     return (
    //       <li>{rootKey}: <span>{item[rootKey]}</span></li>
    //     )
    //   }

    // })
  };

  return (
    <div>
      <AddModal
        setIsOpen={setShowAddModal}
        isOpen={showAddModal}
        selectedNodeId={selectedNodeId}
      />

      {generateTreeForItem(jsonSchema, "")}
    </div>
  );
}
