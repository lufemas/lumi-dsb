import React, {useState} from "react";
import { Tab, Tabs, TabId } from "@blueprintjs/core";

import Jsonviewer from "./Jsonviewer";


export default function Inspect({jsonDBS}) {
    const [selectedTab, setSelectedTab] = useState('')
  return (
    // <Tabs id="TabsExample" onChange={this.handleTabChange} selectedTabId="rx">
    <Tabs id="TabsExample" onChange={(tabId)=> setSelectedTab(tabId) } selectedTabId={selectedTab}>
      <Tab id="structureviewer" title="LDBS Structre" panel={<br />} />
      <Tab id="jsonviewer" title="JSON Data" panel={<Jsonviewer jsonDBS={jsonDBS} />} />
      
    </Tabs>
  );
}
