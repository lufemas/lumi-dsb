
import React, { useContext, useState } from "react";
import ReactJson from "react-json-view";

import { DbsContext } from "../contexts/DbsContext";
import { SchemaContext } from "../contexts/SchemaContext";
import Modal from "../ui-components/Modal";
import AddModal from "./AddModal";
import DataViewer from "./DataViewer";
import MainNav from "./MainNav";
import SchemaViewer from "./SchemaViewer";
import Tabs from "./Tabs";

export default function Main({ objs }) {
  const { addOverlayIsOpen, setAddOverlayIsOpen, texto } = objs;
  const { jsonDBS, setJsonDBS } = useContext(DbsContext);
  const { jsonSchema, setJsonSchema } = useContext(SchemaContext)
  const [fields, setFields] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false)







  return (
    <main>
      <MainNav setShowAddModal={setShowAddModal}/>

      {
        showAddModal ? <AddModal setShowAddModal={setShowAddModal} /> : null

      
      }

      <div style={{ display: "flex" }}>
      <div style={{ width: "50%", padding: "0em 2em" }}>
      Schema
        <Tabs>
        Schema Viewer
        
        <SchemaViewer />
        {/* <div style={{ width: "50%", padding: "0em 2em" }}>
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
        </div> */}

          {/* <div style={{ width: "50%", height: "100%" }}> */}
          Json
          <ReactJson
            src={jsonSchema}
            theme="brewer"
            style={{ width: "100%", height: "100%", padding: "2em 2em" }}
            onEdit={(edit)=> setJsonSchema(edit.updated_src)}
            onAdd={(edit)=> setJsonSchema(edit.updated_src)}
            onDelete={(edit)=> setJsonSchema(edit.updated_src)}
          />
          </Tabs>

          </div>

      <div style={{ width: "50%", padding: "0em 2em" }}>
        Data
        <Tabs>

        Viewer
        <DataViewer/>
          {/* </div> */}
        
        Json
        <ReactJson
            src={jsonDBS}
            theme="brewer"
            style={{ width: "100%", height: "100%", padding: "2em 2em" }}
            onEdit={(edit)=> setJsonDBS(edit.updated_src)}
            onAdd={(edit)=> setJsonDBS(edit.updated_src)}
            onDelete={(edit)=> setJsonDBS(edit.updated_src)}
          />
     
        </Tabs>
        </div>

      </div>

    </main>
  );
}
