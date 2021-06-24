(window.webpackJsonp=window.webpackJsonp||[]).push([[188],{1604:function(e,t,o){"use strict";o.r(t);var r=o(26),s=Object(r.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"ssh"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ssh"}},[e._v("#")]),e._v(" SSH")]),e._v(" "),r("p",[e._v("The SSH node is useful for executing commands via the Secure Shell Protocol.")]),e._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[e._v("🔑 Credential")]),e._v(" "),r("p",[e._v("You can find authentication information for this node "),r("RouterLink",{attrs:{to:"/nodes/credentials/SSH/"}},[e._v("here")]),e._v(".")],1)]),e._v(" "),r("h2",{attrs:{id:"basic-operations"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#basic-operations"}},[e._v("#")]),e._v(" Basic Operations")]),e._v(" "),r("ul",[r("li",[e._v("Execute a command")]),e._v(" "),r("li",[e._v("Download a file")]),e._v(" "),r("li",[e._v("Upload a file")])]),e._v(" "),r("p",[r("strong",[e._v("Note:")]),e._v(" To attach a file for upload, you will need to use an additional node such as the "),r("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/ReadBinaryFile/"}},[e._v("Read Binary File")]),e._v(" node or the "),r("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/HTTPRequest/"}},[e._v("HTTP Request")]),e._v(" node to pass the file as a data property.")],1),e._v(" "),r("h2",{attrs:{id:"node-reference"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#node-reference"}},[e._v("#")]),e._v(" Node Reference")]),e._v(" "),r("ul",[r("li",[r("em",[r("strong",[e._v("Authentication:")])]),e._v(" A dropdown list to choose between Password or Private Key authentication.")]),e._v(" "),r("li",[r("em",[r("strong",[e._v("Resource:")])]),e._v(" A dropdown list used to specify if you are executing a command or processing a file.")]),e._v(" "),r("li",[r("em",[r("strong",[e._v("Operation:")])]),e._v(" A dropdown list to select the action to be performed. When selecting "),r("strong",[e._v("Command")]),e._v(" as the "),r("em",[r("strong",[e._v("Resource")])]),e._v(", only "),r("strong",[e._v("Execute")]),e._v(" is available. For a "),r("strong",[e._v("File")]),e._v(" "),r("em",[r("strong",[e._v("Resource")])]),e._v(" you can select either "),r("strong",[e._v("Upload")]),e._v(" or "),r("strong",[e._v("Download")]),e._v(".")]),e._v(" "),r("li",[r("em",[r("strong",[e._v("Command:")])]),e._v(" Only visible for "),r("strong",[e._v("Command")]),e._v(" resources. The command to execute on the remote machine.")]),e._v(" "),r("li",[r("em",[r("strong",[e._v("Working Directory:")])]),e._v(" Only visible for "),r("strong",[e._v("Command")]),e._v(" resources. The directory where the command should be executed.")]),e._v(" "),r("li",[r("em",[r("strong",[e._v("Path:")])]),e._v(" Only visible for "),r("strong",[e._v("Download")]),e._v(" operation on file resources. The path where the desired file is found.")]),e._v(" "),r("li",[r("em",[r("strong",[e._v("Binary Property:")])]),e._v(" Only visible for file resources. The name of the binary property which contains the data for the file to be uploaded.")]),e._v(" "),r("li",[r("em",[r("strong",[e._v("Target Directory:")])]),e._v(" Only visible for "),r("strong",[e._v("Upload")]),e._v(" operations on file resources. The directory to upload the file to. The name of the file does not need to be specified, it's taken from the binary data file name. To override this behavior, set the parameter "),r("strong",[e._v("File Name")]),e._v(" under options.")])]),e._v(" "),r("h2",{attrs:{id:"example-usage"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#example-usage"}},[e._v("#")]),e._v(" Example Usage")]),e._v(" "),r("p",[e._v("This workflow allows you to remotely connect to your computer via SSH. This example usage workflow would use the following nodes.")]),e._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Start/"}},[e._v("Start")])],1),e._v(" "),r("li",[r("a",{attrs:{href:""}},[e._v("SSH")])])]),e._v(" "),r("p",[e._v("The final workflow should look like the following image.")]),e._v(" "),r("p",[r("img",{attrs:{src:o(635),alt:"A workflow with the SSH node"}})]),e._v(" "),r("h3",{attrs:{id:"_1-start-node"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-start-node"}},[e._v("#")]),e._v(" 1. Start node")]),e._v(" "),r("p",[e._v("The start node exists by default when you create a new workflow.")]),e._v(" "),r("h3",{attrs:{id:"_2-ssh-node"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-ssh-node"}},[e._v("#")]),e._v(" 2. SSH node")]),e._v(" "),r("ol",[r("li",[e._v("From the SSH Credentials dropdown, select "),r("em",[r("strong",[e._v("Create New")])]),e._v(" or an existing "),r("RouterLink",{attrs:{to:"/nodes/credentials/SSH/"}},[e._v("credential")]),e._v(".")],1),e._v(" "),r("li",[e._v("Select "),r("em",[r("strong",[e._v("Password")])]),e._v(" from the "),r("em",[r("strong",[e._v("Authentication")])]),e._v(" dropdown list.")]),e._v(" "),r("li",[e._v("Select "),r("em",[r("strong",[e._v("Command")])]),e._v(" from the "),r("em",[r("strong",[e._v("Resource")])]),e._v(" dropdown list.")]),e._v(" "),r("li",[e._v("The "),r("em",[r("strong",[e._v("Execute")])]),e._v(" option is automatically selected as the "),r("em",[r("strong",[e._v("Operation")])]),e._v(".")]),e._v(" "),r("li",[e._v("In the "),r("em",[r("strong",[e._v("Command")])]),e._v(" field enter the command to execute. Here we used "),r("code",[e._v("ls")]),e._v(" just to see the local directory contents.")]),e._v(" "),r("li",[e._v("In the "),r("em",[r("strong",[e._v("Working Directory")])]),e._v(" field you can enter where the command should be executed. Here we ran it in the root directory.")]),e._v(" "),r("li",[e._v("Click on "),r("em",[r("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),r("p",[r("img",{attrs:{src:o(636),alt:"SSH Node"}})])])}),[],!1,null,null,null);t.default=s.exports},635:function(e,t,o){e.exports=o.p+"assets/img/workflow.0be59e4b.png"},636:function(e,t,o){e.exports=o.p+"assets/img/ssh_node.c2feed47.png"}}]);