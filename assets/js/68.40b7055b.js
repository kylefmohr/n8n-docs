(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{1640:function(e,t,o){"use strict";o.r(t);var n=o(26),r=Object(n.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"bubble"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#bubble"}},[e._v("#")]),e._v(" Bubble")]),e._v(" "),n("p",[n("a",{attrs:{href:"https://www.bubble.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Bubble"),n("OutboundLink")],1),e._v(" lets you create interactive, multi-user apps for desktop and mobile web browsers.")]),e._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[e._v("🔑 Credentials")]),e._v(" "),n("p",[e._v("You can find authentication information for this node "),n("RouterLink",{attrs:{to:"/nodes/credentials/Bubble/"}},[e._v("here")]),e._v(".")],1)]),e._v(" "),n("h2",{attrs:{id:"basic-operations"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#basic-operations"}},[e._v("#")]),e._v(" Basic Operations")]),e._v(" "),n("Resource",{attrs:{node:"n8n-nodes-base.bubble"}}),e._v(" "),n("h2",{attrs:{id:"example-usage"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#example-usage"}},[e._v("#")]),e._v(" Example Usage")]),e._v(" "),n("p",[e._v("This workflow allows you to create, update, and get an object from Bubble. You can also find the "),n("a",{attrs:{href:"https://n8n.io/workflows/1041",target:"_blank",rel:"noopener noreferrer"}},[e._v("workflow"),n("OutboundLink")],1),e._v(" on n8n.io. This example usage workflow would use the following nodes.")]),e._v(" "),n("ul",[n("li",[n("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Start/"}},[e._v("Start")])],1),e._v(" "),n("li",[n("a",{attrs:{href:""}},[e._v("Bubble")])])]),e._v(" "),n("p",[e._v("The final workflow should look like the following image.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(733),alt:"A workflow with the Bubble node"}})]),e._v(" "),n("h3",{attrs:{id:"_1-start-node"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-start-node"}},[e._v("#")]),e._v(" 1. Start node")]),e._v(" "),n("p",[e._v("The start node exists by default when you create a new workflow.")]),e._v(" "),n("h3",{attrs:{id:"_2-bubble-node-create-object"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-bubble-node-create-object"}},[e._v("#")]),e._v(" 2. Bubble node (create: object)")]),e._v(" "),n("p",[e._v("This node will create a new object of the type "),n("code",[e._v("Doc")]),e._v(" in Bubble. If you want to create an object with a different type, use that type instead.")]),e._v(" "),n("ol",[n("li",[e._v("First of all, you'll have to enter credentials for the Bubble node. You can find out how to do that "),n("RouterLink",{attrs:{to:"/nodes/credentials/Bubble/"}},[e._v("here")]),e._v(".")],1),e._v(" "),n("li",[e._v("Select 'Create' from the "),n("em",[n("strong",[e._v("Operation")])]),e._v(" dropdown list.")]),e._v(" "),n("li",[e._v("Enter "),n("code",[e._v("Doc")]),e._v(" in the "),n("em",[n("strong",[e._v("Type Name")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Click on the "),n("em",[n("strong",[e._v("Add Property")])]),e._v(" button.")]),e._v(" "),n("li",[e._v("Enter "),n("code",[e._v("Name")]),e._v(" in the "),n("em",[n("strong",[e._v("Key")])]),e._v(" field. If you're using a different type, enter the field name present in the type.")]),e._v(" "),n("li",[e._v("Enter "),n("code",[e._v("Bubble")]),e._v(" in the "),n("em",[n("strong",[e._v("Value")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),n("p",[e._v("In the screenshot below, you will notice that the node creates a new object of the type "),n("code",[e._v("Doc")]),e._v(" in Bubble.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(734),alt:"Using the Bubble node to create a new object"}})]),e._v(" "),n("h3",{attrs:{id:"_3-bubble1-node-update-object"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-bubble1-node-update-object"}},[e._v("#")]),e._v(" 3. Bubble1 node (update: object)")]),e._v(" "),n("p",[e._v("This node will update the object that we created using the previous node.")]),e._v(" "),n("div",{pre:!0},[n("ol",[n("li",[e._v("Select the credentials that you entered in the previous Bubble node.")]),e._v(" "),n("li",[e._v("Select 'Update' from the "),n("em",[n("strong",[e._v("Operation")])]),e._v(" dropdown list.")]),e._v(" "),n("li",[e._v("Click on the gears icon next to the "),n("em",[n("strong",[e._v("Type Name")])]),e._v(" field and click on "),n("em",[n("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),n("li",[e._v("Select the following in the "),n("em",[n("strong",[e._v("Variable Selector")])]),e._v(" section: Nodes > Bubble > Parameters > typeName. You can also add the following expression: "),n("code",[e._v('{{$node["Bubble"].parameter["typeName"]}}')]),e._v(".")]),e._v(" "),n("li",[e._v("Click on the gears icon next to the "),n("em",[n("strong",[e._v("Object ID")])]),e._v(" field and click on "),n("em",[n("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),n("li",[e._v("Select the following in the "),n("em",[n("strong",[e._v("Variable Selector")])]),e._v(" section: Current Node > Input Data > JSON > id. You can also add the following expression: "),n("code",[e._v('{{$json["id"]}}')]),e._v(".")]),e._v(" "),n("li",[e._v("Click on the "),n("em",[n("strong",[e._v("Add Property")])]),e._v(" button.")]),e._v(" "),n("li",[e._v("Enter "),n("code",[e._v("Name")]),e._v(" in the "),n("em",[n("strong",[e._v("Key")])]),e._v(" field. If you're using a different type, enter the field name present in the type.")]),e._v(" "),n("li",[e._v("Enter "),n("code",[e._v("Bubble node")]),e._v(" in the "),n("em",[n("strong",[e._v("Value")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])])]),n("p",[e._v("In the screenshot below, you will notice that the node updates the information of the object that got created previously.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(735),alt:"Using the Bubble node to update the information of an object"}})]),e._v(" "),n("h3",{attrs:{id:"_4-bubble2-node-get-object"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-bubble2-node-get-object"}},[e._v("#")]),e._v(" 4. Bubble2 node (get: object)")]),e._v(" "),n("p",[e._v("This node will retrieve the information of the object that we created earlier.")]),e._v(" "),n("div",{pre:!0},[n("ol",[n("li",[e._v("Select the credentials that you entered in the previous Bubble node.")]),e._v(" "),n("li",[e._v("Click on the gears icon next to the "),n("em",[n("strong",[e._v("Type Name")])]),e._v(" field and click on "),n("em",[n("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),n("li",[e._v("Select the following in the "),n("em",[n("strong",[e._v("Variable Selector")])]),e._v(" section: Nodes > Bubble > Parameters > typeName. You can also add the following expression: "),n("code",[e._v('{{$node["Bubble"].parameter["typeName"]}}')]),e._v(".")]),e._v(" "),n("li",[e._v("Click on the gears icon next to the "),n("em",[n("strong",[e._v("Object ID")])]),e._v(" field and click on "),n("em",[n("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),n("li",[e._v("Select the following in the "),n("em",[n("strong",[e._v("Variable Selector")])]),e._v(" section: Nodes > Bubble > Output Data > JSON > id. You can also add the following expression: "),n("code",[e._v('{{$node["Bubble"].json["id"]}}')]),e._v(".")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),n("p",[e._v("In the screenshot below, you will notice that the node retrieves the information of the object that we created earlier.")]),e._v(" "),n("p",[n("img",{pre:!0,attrs:{src:o(736),alt:"Using the Bubble node to retrieve the information of an object"}})])])],1)}),[],!1,null,null,null);t.default=r.exports},733:function(e,t,o){e.exports=o.p+"assets/img/workflow.d07cc31a.png"},734:function(e,t,o){e.exports=o.p+"assets/img/Bubble_node.0a4a72d5.png"},735:function(e,t,o){e.exports=o.p+"assets/img/Bubble1_node.276b3361.png"},736:function(e,t,o){e.exports=o.p+"assets/img/Bubble2_node.65b49e89.png"}}]);