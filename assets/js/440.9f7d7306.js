(window.webpackJsonp=window.webpackJsonp||[]).push([[440],{1391:function(e,t,r){"use strict";r.r(t);var n=r(26),s=Object(n.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"node-review-checklist"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#node-review-checklist"}},[e._v("#")]),e._v(" Node review checklist")]),e._v(" "),r("p",[e._v("If you want to create a new node for a service - that's great, thank you! We recommend you take a look at the "),r("a",{attrs:{href:"https://github.com/n8n-io/n8n/tree/master/packages/nodes-base/nodes",target:"_blank",rel:"noopener noreferrer"}},[e._v("existing nodes"),r("OutboundLink")],1),e._v(" to get an idea of how your code should look and work like.")]),e._v(" "),r("p",[e._v("There are several things to keep in mind when creating the node. To help you, we prepared a checklist that covers the requirements for creating nodes, from preparation to submission.")]),e._v(" "),r("p",[e._v("Make sure you tick the boxes below before submitting a node for review, as this will help our team review your PR easier and faster.")]),e._v(" "),r("h2",{attrs:{id:"preparation"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#preparation"}},[e._v("#")]),e._v(" Preparation")]),e._v(" "),r("p",[r("input",{attrs:{type:"checkbox"}}),e._v(" Set up your editor for code formatting (indentation, new lines, linting). If you use Visual Studio Code, you can use the "),r("a",{attrs:{href:"https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-typescript-tslint-plugin"}},[e._v("TSLint extension")]),e._v(" for linting."),e._v(" "),r("br"),e._v(" "),r("input",{attrs:{type:"checkbox"}}),e._v(" Get credentials (e.g., Client ID, Client Secret, API key, user login, user password, website URL) for the service you are building a node for.")]),e._v(" "),r("h2",{attrs:{id:"development"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#development"}},[e._v("#")]),e._v(" Development")]),e._v(" "),r("p",[r("input",{attrs:{type:"checkbox"}}),e._v(" Open a pull request as early as possible with "),r("code",[e._v("WIP")]),e._v(" in the pull request title."),r("br"),e._v(" "),r("input",{attrs:{type:"checkbox"}}),e._v(" If you are creating a node requested by a community member, make sure to comment on the feature request in the "),r("a",{attrs:{href:"https://community.n8n.io/c/feature-requests/5",target:"_blank",rel:"noopener noreferrer"}},[e._v("community forum"),r("OutboundLink")],1),e._v("."),r("br"),e._v(" "),r("input",{attrs:{type:"checkbox"}}),e._v(" Ensure complementary operations to each resource (e.g., create, delete) have been added."),r("br"),e._v(" "),r("input",{attrs:{type:"checkbox"}}),e._v(" Ensure the node works with multiple items via one input."),r("br"),e._v(" "),r("input",{attrs:{type:"checkbox"}}),e._v(" Ensure the parameters have the correct type."),r("br"),e._v(" "),r("input",{attrs:{type:"checkbox"}}),e._v(" Mind the defaults: if the service has a default as true, keep it as true. Changing default values can break the existing workflows of the users."),r("br"),e._v(" "),r("input",{attrs:{type:"checkbox"}}),e._v(" Check if the node disposes of everything properly, in particular, if connections were properly closed."),r("br")]),e._v(" "),r("h2",{attrs:{id:"testing"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#testing"}},[e._v("#")]),e._v(" Testing")]),e._v(" "),r("p",[r("input",{attrs:{type:"checkbox"}}),e._v(' Test "create" and "update" operations with all fields/operations.'),r("br"),e._v(" "),r("input",{attrs:{type:"checkbox"}}),e._v(" Test the "),r("code",[e._v("continueOnFail")]),e._v(" option with a Function node. (For example, a Widget node has a GET operation that takes a widgetId and returns information on the widget. To test that the workflow continues on fail, set the Widget node to continue on fail, create a Function node, return a valid and an invalid widgetId, connect the Function node to Widget node, and run the workflow. The Widget node should show two items: one with information on the widget and another one with the error from having passed an invalid ID.)"),r("br")]),e._v(" "),r("h2",{attrs:{id:"code-formatting"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#code-formatting"}},[e._v("#")]),e._v(" Code formatting")]),e._v(" "),r("p",[r("input",{attrs:{type:"checkbox"}}),e._v(" Ensure the branch lints cleanly by running "),r("code",[e._v("npm run tslint")]),e._v("."),r("br"),e._v(" "),r("input",{attrs:{type:"checkbox"}}),e._v(" Ensure the indentation is correct. Check this in the editorconfig."),r("br"),e._v(" "),r("input",{attrs:{type:"checkbox"}}),e._v(" Ensure there are no extra spaces. Check this in the editorconfig."),r("br"),e._v(" "),r("input",{attrs:{type:"checkbox"}}),e._v(" Code comment dividers inside if-branches."),r("br"),e._v(" "),r("input",{attrs:{type:"checkbox"}}),e._v(' Use "create/delete" verbs for operations, except for tags, where you should use "add/remove".'),r("br")]),e._v(" "),r("h2",{attrs:{id:"errors-and-outputs"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#errors-and-outputs"}},[e._v("#")]),e._v(" Errors and Outputs")]),e._v(" "),r("p",[r("input",{attrs:{type:"checkbox"}}),e._v(" Ensure empty API responses return "),r("code",[e._v("{ success: true }")]),e._v("."),r("br"),e._v(" "),r("input",{attrs:{type:"checkbox"}}),e._v(" Ensure the error responses are handled and displayed correctly (e.g., malformed requests, requests with invalid credentials) and use the current format. You can check this by making failing requests to the API."),r("br"),e._v(" "),r("input",{attrs:{type:"checkbox"}}),e._v(" Check if the response can be simplified and add a simplify function (e.g., "),r("a",{attrs:{href:"https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/SecurityScorecard/GenericFunctions.ts"}},[e._v("SecurityScorecard node")]),e._v(")."),r("br"),e._v(" "),r("input",{attrs:{type:"checkbox"}}),e._v(" Ensure the response from "),r("code",[e._v("Create")]),e._v(" is consistent with "),r("code",[e._v("Get")]),e._v("."),r("br"),e._v(" "),r("input",{attrs:{type:"checkbox"}}),e._v(" Ensure the response from "),r("code",[e._v("Get All")]),e._v(" is consistent with "),r("code",[e._v("Get")]),e._v("."),r("br")]),e._v(" "),r("h2",{attrs:{id:"presentation"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#presentation"}},[e._v("#")]),e._v(" Presentation")]),e._v(" "),r("p",[r("input",{attrs:{type:"checkbox"}}),e._v(" Ensure the primary menu contains only required parameters."),r("br"),e._v(" "),r("input",{attrs:{type:"checkbox"}}),e._v(" Ensure a JSON object is not shown in a single column in Table view."),r("br"),e._v(" "),r("input",{attrs:{type:"checkbox"}}),e._v(" Make sure all GetAll operations have the fields "),r("code",[e._v("return")]),e._v(" and "),r("code",[e._v("limit")]),e._v("."),r("br"),e._v(" "),r("input",{attrs:{type:"checkbox"}}),e._v(" Ensure the property subtitle is set."),r("br"),e._v(" "),r("input",{attrs:{type:"checkbox"}}),e._v(" Make sure the pagination (if any) is working correctly. Set Limit 1."),r("br")]),e._v(" "),r("h2",{attrs:{id:"writing"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#writing"}},[e._v("#")]),e._v(" Writing")]),e._v(" "),r("p",[r("input",{attrs:{type:"checkbox"}}),e._v(" Ensure all descriptions are correct and end with a period."),r("br"),e._v(" "),r("input",{attrs:{type:"checkbox"}}),e._v(" Ensure that most descriptions exist, excluding redundant ones."),r("br"),e._v(" "),r("input",{attrs:{type:"checkbox"}}),e._v(' Ensure IDs in displayNames are capitalized (i.e.: "IDs", not "ids" or "Ids").'),r("br"),e._v(" "),r("input",{attrs:{type:"checkbox"}}),e._v(" Ensure that IDs, if multiple, have descriptive qualifiers."),r("br"),e._v(" "),r("input",{attrs:{type:"checkbox"}}),e._v(" Ensure the "),r("code",[e._v("name")]),e._v(" property in "),r("code",[e._v("description")]),e._v(" in the node class is written in camelCase."),r("br"),e._v(" "),r("input",{attrs:{type:"checkbox"}}),e._v(" Ensure the file name and the Class name are identical."),r("br")]),e._v(" "),r("h2",{attrs:{id:"branding"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#branding"}},[e._v("#")]),e._v(" Branding")]),e._v(" "),r("p",[r("input",{attrs:{type:"checkbox"}}),e._v(' Ensure the name of the service is written correctly (e.g., "GitHub" not "Github"). If the node is a trigger node, ensure it is named as such, by adding "Trigger" after the service name (e.g., "Trello Trigger").'),r("br"),e._v(" "),r("input",{attrs:{type:"checkbox"}}),e._v(" Ensure the logo is either a PNG or SVG, ideally the latter. "),r("a",{attrs:{href:"https://vecta.io/symbols"}},[e._v("Vecta")]),e._v(" is a good website to find SVGs of different applications."),r("br"),e._v(" "),r("input",{attrs:{type:"checkbox"}}),e._v(" If the logo is an SVG, ensure the canvas is a perfect square. If the logo is PNG, ensure it is 60x60 pixels and compressed."),r("br"),e._v(" "),r("input",{attrs:{type:"checkbox"}}),e._v(" Ensure the border color of the node matches the branding of the service."),r("br")]),e._v(" "),r("h2",{attrs:{id:"nice-to-haves-optional"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#nice-to-haves-optional"}},[e._v("#")]),e._v(" Nice-to-haves (optional)")]),e._v(" "),r("p",[r("input",{attrs:{type:"checkbox"}}),e._v(" Add handler for "),r("code",[e._v("continueOnFail")]),e._v(". This feature is included in some of the newest nodes (e.g "),r("a",{attrs:{href:"https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Lemlist/Lemlist.node.ts"}},[e._v("Lemlist node")]),e._v(") to continue the workflow even if the node's execution fails."),r("br"),e._v(" "),r("input",{attrs:{type:"checkbox"}}),e._v(" Remove "),r("code",[e._v("required: false")]),e._v(" and "),r("code",[e._v("description: ''")]),e._v(" in the node descriptions (e.g., "),r("a",{attrs:{href:"https://github.com/n8n-io/n8n/tree/master/packages/nodes-base/nodes/Lemlist/descriptions"}},[e._v("Lemlist node")]),e._v(")."),r("br"),e._v(" "),r("input",{attrs:{type:"checkbox"}}),e._v(" At call site, specify first "),r("code",[e._v("body")]),e._v(" and then "),r("code",[e._v("qs")]),e._v("."),r("br"),e._v(" "),r("input",{attrs:{type:"checkbox"}}),e._v(" At call site, prepend the endpoint with slash "),r("code",[e._v("/")]),e._v(' (e.g., "/campaign").'),r("br")])])}),[],!1,null,null,null);t.default=s.exports}}]);