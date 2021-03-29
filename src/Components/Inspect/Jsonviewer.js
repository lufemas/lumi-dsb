import React from 'react'
import ReactJson from "react-json-view";


export default function Jsonviewer({jsonDBS}) {
    return (
        <div>
            teste
            <ReactJson
              src={jsonDBS}
              theme="brewer"
              style={{ width: "100%", height: "100%", padding:'2em 2em' }}
            />
        </div>
    )
}
