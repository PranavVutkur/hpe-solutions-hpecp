(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{326:function(e,t,s){e.exports=s.p+"assets/img/input1.c40f68e0.png"},327:function(e,t,s){e.exports=s.p+"assets/img/cluster2.e048370c.png"},379:function(e,t,s){e.exports=s.p+"assets/img/AF-ES1.5325d56b.png"},380:function(e,t,s){e.exports=s.p+"assets/img/input2.c0b21b33.png"},381:function(e,t,s){e.exports=s.p+"assets/img/cluster1.466ffa23.png"},382:function(e,t,s){e.exports=s.p+"assets/img/input3.bff82ea8.png"},383:function(e,t,s){e.exports=s.p+"assets/img/cluster3.43cce6ae.png"},529:function(e,t,s){"use strict";s.r(t);var r=s(42),n=Object(r.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"expanding-and-shrinking-of-a-compute-cluster"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#expanding-and-shrinking-of-a-compute-cluster"}},[e._v("#")]),e._v(" Expanding and Shrinking of a Compute Cluster")]),e._v(" "),r("p",[e._v("This section describes the process required to expand or shrink an existing compute cluster (not imported) with the help of automation scripts.")]),e._v(" "),r("p",[r("img",{attrs:{src:s(379),alt:""}})]),e._v(" "),r("p",[r("strong",[e._v("Figure 67:")]),e._v(" Cluster Expand/Shrink Flow Diagram")]),e._v(" "),r("div",{staticClass:"custom-block warning"},[r("p",{staticClass:"custom-block-title"},[e._v("Pre-requisites")]),e._v(" "),r("ol",[r("li",[r("p",[e._v("Refer to "),r("RouterLink",{attrs:{to:"/solution-deployment/host-configuration.html#installer-machine"}},[e._v("Installer Machine")]),e._v(" section to set up the required python and ansible environment.")],1)]),e._v(" "),r("li",[r("p",[e._v("Python module 'requests'.")])]),e._v(" "),r("li",[r("p",[e._v("The hosts to be added or removed from the cluster must be in the available list of HOSTS.")])]),e._v(" "),r("li",[r("p",[e._v("An existing compute cluster.")])])])]),e._v(" "),r("h3",{attrs:{id:"process"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#process"}},[e._v("#")]),e._v(" Process")]),e._v(" "),r("ul",[r("li",[r("p",[e._v("Enter the console username and password in the "),r("em",[e._v("config_secrets.json")]),e._v(" file. (vault-key is "),r("em",[e._v("changeme")]),e._v(")")]),e._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[r("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" ansible-vault edit config_secrets.json\n")])])])]),e._v(" "),r("li",[r("p",[e._v("Here we have 2 input parameters.")]),e._v(" "),r("ul",[r("li",[e._v("CONSOLE_USERNAME* - ECP console username")]),e._v(" "),r("li",[e._v("CONSOLE_PASSWORD* - ECP console password")])])]),e._v(" "),r("li",[r("p",[e._v("Enter the config details in the "),r("em",[e._v("user_input.json")]),e._v(" file")]),e._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[r("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[e._v("vi")]),e._v(" user_input.json\n")])])])]),e._v(" "),r("li",[r("p",[e._v("Here we have 5 input parameters")]),e._v(" "),r("ul",[r("li",[r("em",[e._v("CONTROLLER_IP")]),e._v(" - IP address of the primary controller")]),e._v(" "),r("li",[r("em",[e._v("CLUSTER_NAME")]),e._v(" - Name of the existing compute cluster")]),e._v(" "),r("li",[r("em",[e._v("EXPAND_OR_SHRINK")]),e._v(" - Cluster Operation ('expand' or 'shrink')")]),e._v(" "),r("li",[r("em",[e._v("HOST_IP's")]),e._v(" - Host IP's for expansion or shrinking( Host must be present in the list of available hosts)")]),e._v(" "),r("li",[r("em",[e._v("HOST_ROLE")]),e._v(" - Roles of the Hosts ('master' or 'worker')")])])]),e._v(" "),r("li",[r("p",[e._v("Run the python script "),r("em",[e._v("expand_shrink.py")])]),e._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[r("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" python expand_shrink.py\n")])])])])]),e._v(" "),r("h3",{attrs:{id:"expanding-the-cluster"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#expanding-the-cluster"}},[e._v("#")]),e._v(" Expanding The Cluster")]),e._v(" "),r("ul",[r("li",[e._v("Fill the "),r("em",[e._v("config_secrets.json")]),e._v(" file. Sample config_secrets.json file shown below.")])]),e._v(" "),r("p",[r("img",{attrs:{src:s(326),alt:""}})]),e._v(" "),r("ul",[r("li",[e._v("Fill the "),r("em",[e._v("user_input.json")]),e._v(" file. Sample user_input.json file shown below.")])]),e._v(" "),r("p",[r("img",{attrs:{src:s(380),alt:""}})]),e._v(" "),r("ul",[r("li",[e._v("Initial Cluster Configuration (1 master and 3 worker nodes):")])]),e._v(" "),r("p",[r("img",{attrs:{src:s(381),alt:""}})]),e._v(" "),r("p",[r("strong",[e._v("Figure 68:")]),e._v(" Initial Cluster Configuration")]),e._v(" "),r("ul",[r("li",[r("p",[e._v("Execute the "),r("em",[e._v("expand_shrink.py")]),e._v(" script")])]),e._v(" "),r("li",[r("p",[e._v("Expanded Cluster (3 master and 5 worker nodes)")])])]),e._v(" "),r("p",[r("img",{attrs:{src:s(327),alt:""}})]),e._v(" "),r("p",[r("strong",[e._v("Figure 69:")]),e._v(" Expanded Cluster Configuration")]),e._v(" "),r("h3",{attrs:{id:"shrinking-the-cluster"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#shrinking-the-cluster"}},[e._v("#")]),e._v(" Shrinking The Cluster")]),e._v(" "),r("ul",[r("li",[e._v("Fill the "),r("em",[e._v("config_secrets.json")]),e._v(" file. Sample config.secrets.json shown below.")])]),e._v(" "),r("p",[r("img",{attrs:{src:s(326),alt:""}})]),e._v(" "),r("ul",[r("li",[e._v("Fill the "),r("em",[e._v("user_input.json")]),e._v(" file. Sample user_input.json file shown below.")])]),e._v(" "),r("p",[r("img",{attrs:{src:s(382),alt:""}})]),e._v(" "),r("ul",[r("li",[e._v("Initial Cluster Configuration (3 master and 5 worker nodes):")])]),e._v(" "),r("p",[r("img",{attrs:{src:s(327),alt:""}})]),e._v(" "),r("p",[r("strong",[e._v("Figure 70:")]),e._v(" Initial Cluster Configuration")]),e._v(" "),r("ul",[r("li",[r("p",[e._v("Execute the "),r("em",[e._v("expand_shrink.py")]),e._v(" script")])]),e._v(" "),r("li",[r("p",[e._v("Shrinked Cluster (3 master and 3 worker nodes)")])])]),e._v(" "),r("p",[r("img",{attrs:{src:s(383),alt:""}})]),e._v(" "),r("p",[r("strong",[e._v("Figure 71:")]),e._v(" Shrinked Cluster Configuration")])])}),[],!1,null,null,null);t.default=n.exports}}]);