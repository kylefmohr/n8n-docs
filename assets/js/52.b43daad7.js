(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{1079:function(e,t,o){e.exports=o.p+"assets/img/workflow.43b2d0bf.png"},1080:function(e,t,o){e.exports=o.p+"assets/img/Raindrop_node.7a3f71c1.png"},1081:function(e,t,o){e.exports=o.p+"assets/img/Raindrop1_node.36360c07.png"},1082:function(e,t,o){e.exports=o.p+"assets/img/Raindrop2_node.00813a19.png"},1083:function(e,t,o){e.exports=o.p+"assets/img/Raindrop3_node.0fae7de2.png"},1756:function(e,t,o){"use strict";o.r(t);var n=o(26),r=Object(n.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"raindrop"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#raindrop"}},[e._v("#")]),e._v(" Raindrop")]),e._v(" "),n("p",[n("a",{attrs:{href:"https://raindrop.io",target:"_blank",rel:"noopener noreferrer"}},[e._v("Raindrop"),n("OutboundLink")],1),e._v(" is a bookmarking tool that allows you to organize your bookmarks.")]),e._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[e._v("🔑 Credentials")]),e._v(" "),n("p",[e._v("You can find authentication information for this node "),n("RouterLink",{attrs:{to:"/nodes/credentials/Raindrop/"}},[e._v("here")]),e._v(".")],1)]),e._v(" "),n("h2",{attrs:{id:"basic-operations"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#basic-operations"}},[e._v("#")]),e._v(" Basic Operations")]),e._v(" "),n("Resource",{attrs:{node:"n8n-nodes-base.raindrop"}}),e._v(" "),n("h2",{attrs:{id:"example-usage"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#example-usage"}},[e._v("#")]),e._v(" Example Usage")]),e._v(" "),n("p",[e._v("This workflow allows you to create a collection and create, update, and get a bookmark in Raindrop. You can also find the "),n("a",{attrs:{href:"https://n8n.io/workflows/959",target:"_blank",rel:"noopener noreferrer"}},[e._v("workflow"),n("OutboundLink")],1),e._v(" on n8n.io. This example usage workflow uses the following nodes.")]),e._v(" "),n("ul",[n("li",[n("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Start/"}},[e._v("Start")])],1),e._v(" "),n("li",[n("a",{attrs:{href:""}},[e._v("Raindrop")])])]),e._v(" "),n("p",[e._v("The final workflow should look like the following image.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(1079),alt:"A workflow with the Raindrop node"}})]),e._v(" "),n("h3",{attrs:{id:"_1-start-node"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-start-node"}},[e._v("#")]),e._v(" 1. Start node")]),e._v(" "),n("p",[e._v("The Start node exists by default when you create a new workflow.")]),e._v(" "),n("h3",{attrs:{id:"_2-raindrop-node-create-collection"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-raindrop-node-create-collection"}},[e._v("#")]),e._v(" 2. Raindrop node (create: collection)")]),e._v(" "),n("p",[e._v("This node will create a new collection in Raindrop.")]),e._v(" "),n("ol",[n("li",[e._v("First of all, you'll have to enter credentials for the Raindrop node. You can find out how to do that "),n("RouterLink",{attrs:{to:"/nodes/credentials/Raindrop/"}},[e._v("here")]),e._v(".")],1),e._v(" "),n("li",[e._v("Select 'Create' from the "),n("em",[n("strong",[e._v("Operation")])]),e._v(" dropdown list.")]),e._v(" "),n("li",[e._v("Enter a title in the "),n("em",[n("strong",[e._v("Title")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),n("p",[e._v("In the screenshot below, you will notice that the node creates a new collection with the title "),n("code",[e._v("n8n-docs")]),e._v(".")]),e._v(" "),n("p",[n("img",{attrs:{src:o(1080),alt:"Using the Raindrop node to create a new collection"}})]),e._v(" "),n("h3",{attrs:{id:"_3-raindrop1-node-create-bookmark"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-raindrop1-node-create-bookmark"}},[e._v("#")]),e._v(" 3. Raindrop1 node (create: bookmark)")]),e._v(" "),n("p",[e._v("This node will create a new bookmark and add it to the collection that we created in the previous node.")]),e._v(" "),n("div",{pre:!0},[n("ol",[n("li",[e._v("Select the credentials that you entered in the previous node.")]),e._v(" "),n("li",[e._v("Select 'Bookmark' from the "),n("em",[n("strong",[e._v("Resource")])]),e._v(" dropdown list.")]),e._v(" "),n("li",[e._v("Select 'Create' from the "),n("em",[n("strong",[e._v("Operation")])]),e._v(" dropdown list.")]),e._v(" "),n("li",[e._v("Click on the gears icon next to the "),n("em",[n("strong",[e._v("Collection")])]),e._v(" field and click on "),n("em",[n("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),n("li",[e._v("Select the following in the "),n("em",[n("strong",[e._v("Variable Selector")])]),e._v(" section: Current Node > Input Data > JSON > _id. You can also add the following expression: "),n("code",[e._v('{{$json["_id"]}}')]),e._v(".")]),e._v(" "),n("li",[e._v("Enter "),n("code",[e._v("https://docs.n8n.io")]),e._v(" in the "),n("em",[n("strong",[e._v("Link")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Add Field")])]),e._v(" and select 'Title' from the dropdown list.")]),e._v(" "),n("li",[e._v("Enter "),n("code",[e._v("Documentation")]),e._v(" in the "),n("em",[n("strong",[e._v("Title")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])])]),n("p",[e._v("In the screenshot below, you will notice that the node creates a new bookmark with the title "),n("code",[e._v("Documentation")]),e._v(".")]),e._v(" "),n("p",[n("img",{attrs:{src:o(1081),alt:"Using the Raindrop node to create a new bookmark"}})]),e._v(" "),n("h3",{attrs:{id:"_4-raindrop2-node-update-bookmark"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-raindrop2-node-update-bookmark"}},[e._v("#")]),e._v(" 4. Raindrop2 node (update: bookmark)")]),e._v(" "),n("p",[e._v("This node will update the bookmark that we created in the previous node.")]),e._v(" "),n("div",{pre:!0},[n("ol",[n("li",[e._v("Select the credentials that you entered in the previous node.")]),e._v(" "),n("li",[e._v("Select 'Bookmark' from the "),n("em",[n("strong",[e._v("Resource")])]),e._v(" dropdown list.")]),e._v(" "),n("li",[e._v("Select 'Update' from the "),n("em",[n("strong",[e._v("Operation")])]),e._v(" dropdown list.")]),e._v(" "),n("li",[e._v("Click on the gears icon next to the "),n("em",[n("strong",[e._v("Bookmark ID")])]),e._v(" field and click on "),n("em",[n("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),n("li",[e._v("Select the following in the "),n("em",[n("strong",[e._v("Variable Selector")])]),e._v(" section: Current Node > Input Data > JSON > _id. You can also add the following expression: "),n("code",[e._v('{{$json["_id"]}}')]),e._v(".")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Add Field")])]),e._v(" and select 'Title' from the dropdown list.")]),e._v(" "),n("li",[e._v("Enter "),n("code",[e._v("n8n Documentation")]),e._v(" in the "),n("em",[n("strong",[e._v("Title")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])])]),n("p",[e._v("In the screenshot below, you will notice that the node updates the title of the bookmark that we created in the previous node.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(1082),alt:"Using the Raindrop node to update a bookmark"}})]),e._v(" "),n("h3",{attrs:{id:"_5-raindrop3-node-get-bookmark"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-raindrop3-node-get-bookmark"}},[e._v("#")]),e._v(" 5. Raindrop3 node (get: bookmark)")]),e._v(" "),n("p",[e._v("This node will return the information about the bookmark that we created earlier.")]),e._v(" "),n("div",{pre:!0},[n("ol",[n("li",[e._v("Select the credentials that you entered in the previous node.")]),e._v(" "),n("li",[e._v("Select 'Bookmark' from the "),n("em",[n("strong",[e._v("Resource")])]),e._v(" dropdown list.")]),e._v(" "),n("li",[e._v("Click on the gears icon next to the "),n("em",[n("strong",[e._v("Bookmark ID")])]),e._v(" field and click on "),n("em",[n("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),n("li",[e._v("Select the following in the "),n("em",[n("strong",[e._v("Variable Selector")])]),e._v(" section: Current Node > Input Data > JSON > _id. You can also add the following expression: "),n("code",[e._v('{{$json["_id"]}}')]),e._v(".")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])])]),n("p",[e._v("In the screenshot below, you will notice that the node returns the information on the bookmark that we created earlier.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(1083),alt:"Using the Raindrop node to get a bookmark"}})])],1)}),[],!1,null,null,null);t.default=r.exports}}]);