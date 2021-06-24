(window.webpackJsonp=window.webpackJsonp||[]).push([[139],{1655:function(e,t,o){"use strict";o.r(t);var n=o(26),a=Object(n.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"deepl"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#deepl"}},[e._v("#")]),e._v(" DeepL")]),e._v(" "),n("p",[n("a",{attrs:{href:"https://deepL.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("DeepL"),n("OutboundLink")],1),e._v(" is a machine translation service that allows you to translate text to different languages.")]),e._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[e._v("🔑 Credentials")]),e._v(" "),n("p",[e._v("You can find authentication information for this node "),n("RouterLink",{attrs:{to:"/nodes/credentials/DeepL/"}},[e._v("here")]),e._v(".")],1)]),e._v(" "),n("h2",{attrs:{id:"basic-operations"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#basic-operations"}},[e._v("#")]),e._v(" Basic Operations")]),e._v(" "),n("Resource",{attrs:{node:"n8n-nodes-base.deepL"}}),e._v(" "),n("h2",{attrs:{id:"example-usage"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#example-usage"}},[e._v("#")]),e._v(" Example Usage")]),e._v(" "),n("p",[e._v("This workflow allows you to translate cocktail instructions to French. You can also find the "),n("a",{attrs:{href:"https://n8n.io/workflows/998",target:"_blank",rel:"noopener noreferrer"}},[e._v("workflow"),n("OutboundLink")],1),e._v(" on n8n.io. This example usage workflow uses the following nodes.")]),e._v(" "),n("ul",[n("li",[n("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Start/"}},[e._v("Start")])],1),e._v(" "),n("li",[n("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/HTTPRequest/"}},[e._v("HTTP Request")])],1),e._v(" "),n("li",[n("a",{attrs:{href:""}},[e._v("DeepL")])])]),e._v(" "),n("p",[e._v("The final workflow should look like the following image.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(774),alt:"A workflow with the DeepL node"}})]),e._v(" "),n("h3",{attrs:{id:"_1-start-node"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-start-node"}},[e._v("#")]),e._v(" 1. Start node")]),e._v(" "),n("p",[e._v("The Start node exists by default when you create a new workflow.")]),e._v(" "),n("h3",{attrs:{id:"_2-http-request-node-get"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-http-request-node-get"}},[e._v("#")]),e._v(" 2. HTTP Request node (GET)")]),e._v(" "),n("p",[e._v("This node will make a GET request to the API "),n("code",[e._v("https://www.thecocktaildb.com/api/json/v1/1/random.php")]),e._v(" to fetch a random cocktail. This information gets passed on to the next node in the workflow.")]),e._v(" "),n("ol",[n("li",[e._v("Enter "),n("code",[e._v("https://www.thecocktaildb.com/api/json/v1/1/random.php")]),e._v(" in the "),n("em",[n("strong",[e._v("URL")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),n("p",[e._v("In the screenshot below, you will notice that the node makes a GET request to the API and returns information about a random cocktail.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(775),alt:"Using the HTTP Request node to get the information about a random cocktail"}})]),e._v(" "),n("h3",{attrs:{id:"_3-deepl-node-translate-language"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-deepl-node-translate-language"}},[e._v("#")]),e._v(" 3. DeepL node (translate: language)")]),e._v(" "),n("p",[e._v("This node will translate the cocktail instructions that we got from the previous node to French. To translate the instructions in your language, select your language instead.")]),e._v(" "),n("ol",[n("li",[e._v("First of all, you'll have to enter credentials for the DeepL node. You can find out how to do that "),n("RouterLink",{attrs:{to:"/nodes/credentials/DeepL/"}},[e._v("here")]),e._v(".")],1)]),e._v(" "),n("div",{pre:!0},[n("ol",{pre:!0,attrs:{start:"2"}},[n("li",[e._v("Click on the gears icon next to the "),n("em",[n("strong",[e._v("Text")])]),e._v(" field and click on "),n("em",[n("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),n("li",[e._v("Select the following in the "),n("em",[n("strong",[e._v("Variable Selector")])]),e._v(" section: Current Nodes > Input Data > JSON > drinks > [item: 0] > strInstructions. You can also add the following expression: "),n("code",[e._v('{{$json["drinks"][0]["strInstructions"]}}')]),e._v(".")]),e._v(" "),n("li",[e._v("Select 'French' from the "),n("em",[n("strong",[e._v("Target Language")])]),e._v(" dropdown list.")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])])]),n("p",[e._v("In the screenshot below, you will notice that the node translates the instructions of the cocktail to French.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(776),alt:"Using the DeepL node to translate the instructions to French"}})])],1)}),[],!1,null,null,null);t.default=a.exports},774:function(e,t,o){e.exports=o.p+"assets/img/workflow.8c6c30be.png"},775:function(e,t,o){e.exports=o.p+"assets/img/HTTPRequest_node.d11031aa.png"},776:function(e,t,o){e.exports=o.p+"assets/img/DeepL_node.37ee27cb.png"}}]);