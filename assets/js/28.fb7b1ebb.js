(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{1593:function(e,t,o){"use strict";o.r(t);var n=o(26),a=Object(n.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"if"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#if"}},[e._v("#")]),e._v(" IF")]),e._v(" "),n("p",[e._v("The IF node is used to split a workflow conditionally based on comparison operations.")]),e._v(" "),n("h2",{attrs:{id:"node-reference"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#node-reference"}},[e._v("#")]),e._v(" Node Reference")]),e._v(" "),n("p",[e._v("You can add comparison conditions using the "),n("em",[n("strong",[e._v("Add Condition")])]),e._v(" dropdown. Conditions can be created based on the data type, the available comparison operations vary for each data type.")]),e._v(" "),n("details",{staticClass:"custom-block details"},[n("summary",[e._v("Boolean")]),e._v(" "),n("ul",[n("li",[e._v("Equal")]),e._v(" "),n("li",[e._v("Not Equal")])])]),e._v(" "),n("details",{staticClass:"custom-block details"},[n("summary",[e._v("Number")]),e._v(" "),n("ul",[n("li",[e._v("Smaller")]),e._v(" "),n("li",[e._v("Smaller Equal")]),e._v(" "),n("li",[e._v("Equal")]),e._v(" "),n("li",[e._v("Not Equal")]),e._v(" "),n("li",[e._v("Larger")]),e._v(" "),n("li",[e._v("Larger Equal")]),e._v(" "),n("li",[e._v("Is Empty")])])]),e._v(" "),n("details",{staticClass:"custom-block details"},[n("summary",[e._v("String")]),e._v(" "),n("ul",[n("li",[e._v("Contains")]),e._v(" "),n("li",[e._v("Equal")]),e._v(" "),n("li",[e._v("Not Contains")]),e._v(" "),n("li",[e._v("Not Equal")]),e._v(" "),n("li",[e._v("Regex")]),e._v(" "),n("li",[e._v("Is Empty")])])]),e._v(" "),n("p",[e._v("You can choose to split a workflow when any of the specified conditions are met, or only when all the specified conditions are met using the options in the "),n("em",[n("strong",[e._v("Combine")])]),e._v(" dropdown list.")]),e._v(" "),n("h2",{attrs:{id:"example-usage"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#example-usage"}},[e._v("#")]),e._v(" Example Usage")]),e._v(" "),n("p",[e._v("This workflow executes two different "),n("em",[e._v("Set")]),e._v(" nodes based on the output given by an "),n("em",[e._v("IF")]),e._v(" node. You can also find the "),n("a",{attrs:{href:"https://n8n.io/workflows/581",target:"_blank",rel:"noopener noreferrer"}},[e._v("workflow"),n("OutboundLink")],1),e._v(" on n8n.io. This example usage workflow would use the following nodes.")]),e._v(" "),n("ul",[n("li",[n("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Start/"}},[e._v("Start")])],1),e._v(" "),n("li",[n("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Function/"}},[e._v("Function")])],1),e._v(" "),n("li",[n("a",{attrs:{href:""}},[e._v("IF")])]),e._v(" "),n("li",[n("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Set/"}},[e._v("Set")])],1)]),e._v(" "),n("p",[e._v("The final workflow should look like the following image.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(614),alt:"A workflow with the IF node"}})]),e._v(" "),n("h3",{attrs:{id:"_1-start-node"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-start-node"}},[e._v("#")]),e._v(" 1. Start node")]),e._v(" "),n("p",[e._v("The start node exists by default when you create a new workflow.")]),e._v(" "),n("h3",{attrs:{id:"_2-function-node"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-function-node"}},[e._v("#")]),e._v(" 2. Function node")]),e._v(" "),n("ol",[n("li",[e._v("Enter the following code in the "),n("em",[n("strong",[e._v("Function")])]),e._v(" field.")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("return [\n  {\n    json: {\n      id: 0,\n    }\n  },\n  {\n    json: {\n      id: 1,\n    }\n  }\n];\n")])])]),n("ol",{attrs:{start:"2"}},[n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Execute Node")])]),e._v(" to run the workflow.")])]),e._v(" "),n("p",[n("img",{attrs:{src:o(615),alt:"Using the Function node to send data to the IF node"}})]),e._v(" "),n("h3",{attrs:{id:"_3-if-node"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-if-node"}},[e._v("#")]),e._v(" 3. IF node")]),e._v(" "),n("div",{pre:!0},[n("ol",[n("li",[e._v("Click on the "),n("em",[n("strong",[e._v("Add Condition")])]),e._v(" button and select 'Number' from the dropdown list.")]),e._v(" "),n("li",[e._v("Click on the gears icon next to the "),n("em",[n("strong",[e._v("Value 1")])]),e._v(" field and click on "),n("em",[n("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),n("li",[e._v("Select the following in the "),n("em",[n("strong",[e._v("Variable Selector")])]),e._v(" section: Nodes > Function > Output Data > JSON > id. You can also add the following expression: "),n("code",[e._v('{{$node["Function"].json["id"]}}')]),e._v(".")]),e._v(" "),n("li",[e._v("From the "),n("em",[n("strong",[e._v("Operation")])]),e._v(" dropdown list, select 'Equal'.")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Execute Node")])]),e._v(" to run the workflow.")])])]),n("p",[n("img",{attrs:{src:o(616),alt:"Using the IF node to conditionally execute based on the input"}})]),e._v(" "),n("h3",{attrs:{id:"_4-set-node-for-true-condition"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-set-node-for-true-condition"}},[e._v("#")]),e._v(" 4. Set node (for 'true' condition)")]),e._v(" "),n("ol",[n("li",[e._v("Create a "),n("em",[e._v("Set")]),e._v(" node connected to the 'true' output of the IF node.")]),e._v(" "),n("li",[e._v("Click on the "),n("em",[n("strong",[e._v("Add Value")])]),e._v(" button and select 'String' from the dropdown list.")]),e._v(" "),n("li",[e._v("Enter "),n("code",[e._v("name")]),e._v(" in the "),n("em",[n("strong",[e._v("Name")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Enter "),n("code",[e._v("n8n")]),e._v(" in the "),n("em",[n("strong",[e._v("Value")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Execute Node")])]),e._v(" to run the workflow.")])]),e._v(" "),n("p",[n("strong",[e._v("Note:")]),e._v(" Notice that only the id with the value 0 made its way to this "),n("em",[e._v("Set")]),e._v(" node.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(617),alt:"Using the Set node to set a value when the condition is true"}})]),e._v(" "),n("h3",{attrs:{id:"_5-set1-node-for-false-condition"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-set1-node-for-false-condition"}},[e._v("#")]),e._v(" 5. Set1 node (for 'false' condition)")]),e._v(" "),n("ol",[n("li",[e._v("Create a "),n("em",[e._v("Set")]),e._v(" node connected to the 'false' output of the IF node.")]),e._v(" "),n("li",[e._v("Click on the "),n("em",[n("strong",[e._v("Add Value")])]),e._v(" button and select 'String' from the dropdown list.")]),e._v(" "),n("li",[e._v("Enter "),n("code",[e._v("name")]),e._v(" in the "),n("em",[n("strong",[e._v("Name")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Enter "),n("code",[e._v("nodemation")]),e._v(" in the "),n("em",[n("strong",[e._v("Value")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Execute Node")])]),e._v(" to run the workflow.")])]),e._v(" "),n("p",[n("strong",[e._v("Note:")]),e._v(" Notice that only the id with the value 1 made its way to this "),n("em",[e._v("Set")]),e._v(" node.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(618),alt:"Using the Set node to set a value when the condition is false"}})]),e._v(" "),n("h2",{attrs:{id:"further-reading"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#further-reading"}},[e._v("#")]),e._v(" Further Reading")]),e._v(" "),n("FurtherReadingBlog")],1)}),[],!1,null,null,null);t.default=a.exports},614:function(e,t,o){e.exports=o.p+"assets/img/workflow.8c663983.png"},615:function(e,t,o){e.exports=o.p+"assets/img/Function_node.bc6271f4.png"},616:function(e,t,o){e.exports=o.p+"assets/img/IF_node.7c6c2257.png"},617:function(e,t,o){e.exports=o.p+"assets/img/Set_node.9d850675.png"},618:function(e,t,o){e.exports=o.p+"assets/img/Set1_node.11b596e7.png"}}]);