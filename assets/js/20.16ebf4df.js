(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{1681:function(e,t,o){"use strict";o.r(t);var n=o(26),a=Object(n.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"google-cloud-natural-language"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#google-cloud-natural-language"}},[e._v("#")]),e._v(" Google Cloud Natural Language")]),e._v(" "),n("p",[n("a",{attrs:{href:"https://cloud.google.com/natural-language/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Google Cloud Natural Language"),n("OutboundLink")],1),e._v(" uses machine learning to reveal the structure and meaning of text. You can extract information about people, places, and events, and better understand social media sentiment and customer conversations.")]),e._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[e._v("🔑 Credentials")]),e._v(" "),n("p",[e._v("You can find authentication information for this node "),n("RouterLink",{attrs:{to:"/nodes/credentials/Google/"}},[e._v("here")]),e._v(".")],1)]),e._v(" "),n("h2",{attrs:{id:"basic-operations"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#basic-operations"}},[e._v("#")]),e._v(" Basic Operations")]),e._v(" "),n("Resource",{attrs:{node:"n8n-nodes-base.googleCloudNaturalLanguage"}}),e._v(" "),n("h2",{attrs:{id:"example-usage"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#example-usage"}},[e._v("#")]),e._v(" Example Usage")]),e._v(" "),n("p",[e._v("This workflow allows you to analyze the sentiment of feedback received via a Typeform submission and send a message on Mattermost if that feedback is negative. You can also find the "),n("a",{attrs:{href:"https://n8n.io/workflows/786",target:"_blank",rel:"noopener noreferrer"}},[e._v("workflow"),n("OutboundLink")],1),e._v(" on n8n.io. This example usage workflow uses the following nodes.")]),e._v(" "),n("ul",[n("li",[n("RouterLink",{attrs:{to:"/nodes/nodes-library/trigger-nodes/TypeformTrigger/"}},[e._v("Typeform Trigger")])],1),e._v(" "),n("li",[n("a",{attrs:{href:""}},[e._v("Google Cloud Natural Language")])]),e._v(" "),n("li",[n("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/If/"}},[e._v("IF")])],1),e._v(" "),n("li",[n("RouterLink",{attrs:{to:"/nodes/nodes-library/nodes/Mattermost/"}},[e._v("Mattermost")])],1),e._v(" "),n("li",[n("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/NoOperationDoNothing/"}},[e._v("No Operation, do nothing")])],1)]),e._v(" "),n("p",[e._v("The final workflow should look like the following image.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(855),alt:"A workflow with the Google Cloud Natural Language node"}})]),e._v(" "),n("h3",{attrs:{id:"_1-typeform-trigger-node"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-typeform-trigger-node"}},[e._v("#")]),e._v(" 1. Typeform Trigger node")]),e._v(" "),n("p",[e._v("This node will trigger the workflow when a feedback form is submitted. Make sure to create a feedback form for your event.")]),e._v(" "),n("ol",[n("li",[e._v("Select 'Access Token' from the "),n("em",[n("strong",[e._v("Authentication")])]),e._v(" dropdown list.")]),e._v(" "),n("li",[e._v("Enter the credentials for the Typeform Trigger node. You can find out how to do that "),n("RouterLink",{attrs:{to:"/nodes/credentials/Typeform/"}},[e._v("here")]),e._v(".")],1),e._v(" "),n("li",[e._v("Select the event feedback form from the "),n("em",[n("strong",[e._v("Form")])]),e._v(" dropdown list.")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),n("p",[e._v("In the screenshot below, you will notice that the node triggers the workflow when feedback is submitted. We will pass this feedback to the next nodes in the workflow.\n"),n("img",{attrs:{src:o(856),alt:"Using the Typeform Trigger node to trigger the workflow when a feedback form is submitted"}})]),e._v(" "),n("h3",{attrs:{id:"_2-google-cloud-natural-language-node-analyzesentiment-document"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-google-cloud-natural-language-node-analyzesentiment-document"}},[e._v("#")]),e._v(" 2. Google Cloud Natural Language node (analyzeSentiment: document)")]),e._v(" "),n("p",[e._v("This node will analyze the sentiment of the feedback that we got from the previous node. We will pass the analysis score to the next node in the workflow.")]),e._v(" "),n("ol",[n("li",[e._v("First of all, you'll have to enter credentials for the Google Cloud Natural Language node. You can find out how to enter credentials for this node "),n("RouterLink",{attrs:{to:"/nodes/credentials/Google/"}},[e._v("here")]),e._v(".")],1),e._v(" "),n("li",[e._v("Click on the gears icon next to the "),n("em",[n("strong",[e._v("Content")])]),e._v(" field and click on "),n("em",[n("strong",[e._v("Add Expression")])]),e._v(".")])]),e._v(" "),n("div",{pre:!0},[n("ol",{pre:!0,attrs:{start:"3"}},[n("li",[e._v("Select the following in the "),n("em",[n("strong",[e._v("Variable Selector")])]),e._v(" section: Nodes > Typeform Trigger > Output Data > JSON > What did you think about the event? You can also add the following expression: "),n("code",[e._v('{{$node["Typeform Trigger"].json["What did you think about the event?"]}}')]),e._v(". If you want to analyze the sentiment for a different question, select that question instead.")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])])]),n("p",[e._v("In the screenshot below, you will notice that the node analyzes the sentiment of the feedback and gives a score based on that.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(857),alt:"Using the Google Cloud Natural Language node to analyze the sentiment"}})]),e._v(" "),n("h3",{attrs:{id:"_3-if-node"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-if-node"}},[e._v("#")]),e._v(" 3. IF node")]),e._v(" "),n("p",[e._v("This node will check if the score we got from the previous node is smaller than "),n("code",[e._v("0")]),e._v(". If the score is smaller than "),n("code",[e._v("0")]),e._v(", it will return true otherwise false.")]),e._v(" "),n("div",{pre:!0},[n("ol",[n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Add Condition")])]),e._v(" and select 'Number'.")]),e._v(" "),n("li",[e._v("Click on the gears icon next to the "),n("em",[n("strong",[e._v("Value 1")])]),e._v(" field and click on "),n("em",[n("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),n("li",[e._v("Select the following in the "),n("em",[n("strong",[e._v("Variable Selector")])]),e._v(" section: Nodes > Google Cloud Natural Language > Output Data > JSON > documentSentiment > score. You can also add the following expression: "),n("code",[e._v('{{$node["Google Cloud Natural Language"].json["documentSentiment"]["score"]}}')]),e._v(".")]),e._v(" "),n("li",[e._v("Select 'Smaller' from the "),n("em",[n("strong",[e._v("Operation")])]),e._v(" dropdown list.")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])])]),n("p",[e._v("In the screenshot below, you will notice that the node checks if the score that we received from the previous node is smaller than "),n("code",[e._v("0")]),e._v(".")]),e._v(" "),n("p",[n("img",{attrs:{src:o(858),alt:"Using the IF node to check if the score is smaller than  or not"}})]),e._v(" "),n("h3",{attrs:{id:"_4-mattermost-node-post-message"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-mattermost-node-post-message"}},[e._v("#")]),e._v(" 4. Mattermost node (post: message)")]),e._v(" "),n("p",[e._v("This node will send the feedback and the analysis score to the "),n("code",[e._v("Feedback")]),e._v(" channel in Mattermost. If you have a different channel, use that instead.")]),e._v(" "),n("ol",[n("li",[e._v("Create a Mattermost node connected to the 'true' output of the IF node.")]),e._v(" "),n("li",[e._v("You'll have to enter credentials for the Mattermost node. You can find out how to enter credentials for this node "),n("RouterLink",{attrs:{to:"/nodes/credentials/Mattermost/"}},[e._v("here")]),e._v(".")],1),e._v(" "),n("li",[e._v("Select a channel from the "),n("em",[n("strong",[e._v("Channel ID")])]),e._v(" dropdown list.")]),e._v(" "),n("li",[e._v("Click on the gears icon next to the "),n("em",[n("strong",[e._v("Message")])]),e._v(" field click on "),n("em",[n("strong",[e._v("Add Expression")])]),e._v(".")])]),e._v(" "),n("div",{pre:!0},[n("ol",{pre:!0,attrs:{start:"5"}},[n("li",[e._v("Enter the following message in the "),n("em",[n("strong",[e._v("Expression")])]),e._v(" field: "),n("code",[e._v('You got a new feedback with a score of {{$node["Google Cloud Natural Language"].json["documentSentiment"]["score"]}}. Here is what it says:{{$node["Typeform Trigger"].json["What did you think about the event?"]}}')]),e._v(".")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Execute Node")])]),e._v(" to run the workflow.")])])]),n("p",[e._v("In the screenshot below, you will notice that the node sends the feedback and the analysis score to the "),n("code",[e._v("Feedback")]),e._v(" channel in Mattermost.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(859),alt:"Using the Mattermost node to send the feedback and the analysis score"}})]),e._v(" "),n("h3",{attrs:{id:"_5-noop-node"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-noop-node"}},[e._v("#")]),e._v(" 5. NoOp node")]),e._v(" "),n("p",[e._v("Adding this node here is optional, as the absence of this node won't make a difference to the functioning of the workflow.")]),e._v(" "),n("ol",[n("li",[e._v("Create a "),n("em",[n("strong",[e._v("NoOp")])]),e._v(" node connected to the 'false' output of the IF node.")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),n("p",[n("img",{attrs:{src:o(860),alt:"Using the NoOp node"}})]),e._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[e._v("💡 Activate workflow for production")]),e._v(" "),n("p",[e._v("This example workflow uses the Typeform Trigger node. You'll need to save the workflow and then click on the Activate toggle on the top right of the screen to activate the workflow. Your workflow will then be triggered when a new form is submitted.")])])],1)}),[],!1,null,null,null);t.default=a.exports},855:function(e,t,o){e.exports=o.p+"assets/img/workflow.e51c1363.png"},856:function(e,t,o){e.exports=o.p+"assets/img/TypeformTrigger_node.7f85d301.png"},857:function(e,t,o){e.exports=o.p+"assets/img/GoogleCloudNaturalLanguage_node.659e82e3.png"},858:function(e,t,o){e.exports=o.p+"assets/img/IF_node.adae3d58.png"},859:function(e,t,o){e.exports=o.p+"assets/img/Mattermost_node.9c2930ab.png"},860:function(e,t,o){e.exports=o.p+"assets/img/NoOp_node.90544b30.png"}}]);