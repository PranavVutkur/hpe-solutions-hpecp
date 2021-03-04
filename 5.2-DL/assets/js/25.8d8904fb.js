(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{460:function(t,e,a){t.exports=a.p+"assets/img/SC-HW1.e611aca6.png"},540:function(t,e,a){"use strict";a.r(e);var r=a(42),s=Object(r.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"solution-physical-components"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#solution-physical-components"}},[t._v("#")]),t._v(" Solution Physical Components")]),t._v(" "),r("h2",{attrs:{id:"hardware"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#hardware"}},[t._v("#")]),t._v(" Hardware")]),t._v(" "),r("p",[t._v("The HPE Ezmeral Container Platform environment is built around HPE ProLiant Gen10 Servers using a deployment setup consisting of HPE ProLiant DL360 Gen10 nodes, three (3) of which are deployed as HPE Ezmeral Container Platform Controllers in a highly available configuration, two (2) are deployed as gateway Load Balancer server, three (3) Kubernetes storage cluster master along with five (5) HPE DL 380 Gen10 nodes for the Kubernetes storage cluster worker nodes that are used to create the HPE Ezmeral Data Fabric for Kubernetes and finally six (6) HPE ProLiant DL360 Gen 10 nodes are deployed as Kubernetes compute cluster.")]),t._v(" "),r("p",[t._v("Figure 6 shows the physical layout of the server, storage, and network used for the solution.")]),t._v(" "),r("p",[r("img",{attrs:{src:a(460),alt:""}})]),t._v(" "),r("p",[t._v("Figure 6. Front view of 14x HPE ProLiant DL360 & DL380 Gen10 Servers in the solution")]),t._v(" "),r("p",[t._v("The installation user has the flexibility to customize the HPE components throughout this stack in accordance with the unique IT and workload requirements or to build the solution with individual\ncomponents.")]),t._v(" "),r("p",[t._v("Table 1 highlights the individual components and their quantities as deployed within the solution.")]),t._v(" "),r("p",[r("strong",[t._v("Table 1.")]),t._v(" Components utilized in the creation of this solution.")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Component")]),t._v(" "),r("th",[t._v("Qty")]),t._v(" "),r("th",[t._v("Description")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("HPE ProLiant DL360 Gen10 Servers")]),t._v(" "),r("td",[t._v("14")]),t._v(" "),r("td",[t._v("Three for HPE Ezmeral Container Platform Controller + Two for HPE Ezmeral Container Platform Gateway + Three for HPE Ezmeral Data Fabric K8 Master Nodes + Six for HPE Ezmeral Container Platform K8s Compute Cluster")])]),t._v(" "),r("tr",[r("td",[t._v("HPE ProLiant DL380 Gen10 Servers")]),t._v(" "),r("td",[t._v("5")]),t._v(" "),r("td",[t._v("Five Data Fabric worker nodes.")])]),t._v(" "),r("tr",[r("td",[t._v("HPE Aruba 8325-32C BF")]),t._v(" "),r("td",[t._v("2")]),t._v(" "),r("td",[t._v("Each switch contains either 40/100GbE (QSFP+/QSFP28) or 1/10/25GbE (SFP/SFP+/SFP28)")])])])]),t._v(" "),r("h3",{attrs:{id:"disk-requirement"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#disk-requirement"}},[t._v("#")]),t._v(" Disk requirement")]),t._v(" "),r("p",[t._v("A minimum of two (2) raw disks of 500 GB or higher in addition to the 500 GB OS disk per node is required.")]),t._v(" "),r("h2",{attrs:{id:"software"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#software"}},[t._v("#")]),t._v(" Software")]),t._v(" "),r("p",[t._v("HPE Ezmeral Container Platform 5.2.")]),t._v(" "),r("h3",{attrs:{id:"operating-system-installation"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#operating-system-installation"}},[t._v("#")]),t._v(" Operating System installation")]),t._v(" "),r("p",[t._v("Installs the SUSE Linux Enterprise Server 15 SP2 and ensures that the system has appropriate licensing in place using SUSE subscription. Installs the latest patches using zypper and ensures that the prerequisites have been met for each server.")]),t._v(" "),r("p",[t._v("The operating system installation and prerequisites for the deployment are automated as part of this solution. More details can be found further in the document in OS deployment section.")]),t._v(" "),r("p",[t._v("Table 2 describes the software versions utilized in the creation of this solution. The installation user should ensure that they download or have access to this software. Ensure that the appropriate subscription and licensing are in place to use within the planned time frame.")]),t._v(" "),r("p",[r("strong",[t._v("Table 2.")]),t._v(" Major software versions used in the creation of this solution")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Component")]),t._v(" "),r("th",[t._v("Version")]),t._v(" "),r("th",[t._v("Description")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("HPE Ezmeral Container Platform")]),t._v(" "),r("td",[t._v("5.2")]),t._v(" "),r("td",[t._v("Control Plane deployed on three server nodes")])]),t._v(" "),r("tr",[r("td",[t._v("SUSE Linux Enterprise Server")]),t._v(" "),r("td",[t._v("15 SP2")]),t._v(" "),r("td",[t._v("OS for all compute modules with SP1 update minimum")])]),t._v(" "),r("tr",[r("td",[t._v("HPE Gateway Load Balancer")]),t._v(" "),r("td",[t._v("5.2")]),t._v(" "),r("td",[t._v("Configured automatically by HPE Ezmeral Container Platform")])]),t._v(" "),r("tr",[r("td",[t._v("Kubernetes")]),t._v(" "),r("td",[t._v("1.18")]),t._v(" "),r("td",[t._v("Kubernetes version installed as a part of the solution")])]),t._v(" "),r("tr",[r("td",[t._v("Docker")]),t._v(" "),r("td",[t._v("19.03.5")]),t._v(" "),r("td",[t._v("Docker server & client version")])]),t._v(" "),r("tr",[r("td",[t._v("HPE Ezmeral Data Fabric")]),t._v(" "),r("td",[t._v("6.2")]),t._v(" "),r("td",[t._v("HPE Ezmeral Data Fabric for tenant persistent volume.")])])])]),t._v(" "),r("p",[r("strong",[t._v("Table 3.")]),t._v(" Software installed on the installer machine")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Component")]),t._v(" "),r("th",[t._v("Version")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("Ansible")]),t._v(" "),r("td",[t._v("2.9")])]),t._v(" "),r("tr",[r("td",[t._v("Python")]),t._v(" "),r("td",[t._v("3.6")])]),t._v(" "),r("tr",[r("td",[t._v("Java")]),t._v(" "),r("td",[t._v("1.8")])])])]),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("NOTE")]),t._v(" "),r("p",[t._v("The latest sub-version of each component listed in Table 2 and 3 should be installed.")])]),t._v(" "),r("h3",{attrs:{id:"services"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#services"}},[t._v("#")]),t._v(" Services")]),t._v(" "),r("p",[t._v("This document is built with assumptions about services and network ports available within the implementation environment. This section discusses those assumptions.")]),t._v(" "),r("p",[t._v("Table 4 disseminates the services required in this solution and provides a high-level explanation of their function.")]),t._v(" "),r("p",[r("strong",[t._v("Table 4.")]),t._v(" Services used in the creation of this solution.")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Service")]),t._v(" "),r("th",[t._v("Description")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("DNS")]),t._v(" "),r("td",[t._v("Provides name resolution on management and data center networks")])]),t._v(" "),r("tr",[r("td",[t._v("NTP")]),t._v(" "),r("td",[t._v("Ensures consistent time across the solution stack.")])])])])])}),[],!1,null,null,null);e.default=s.exports}}]);