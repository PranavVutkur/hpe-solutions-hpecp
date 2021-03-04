(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{461:function(e,t,a){e.exports=a.p+"assets/img/SC-SC1.19bc3322.png"},462:function(e,t,a){e.exports=a.p+"assets/img/SC-SC2.63f691b3.png"},463:function(e,t,a){e.exports=a.p+"assets/img/SC-SC3.d5a80379.png"},541:function(e,t,a){"use strict";a.r(t);var r=a(42),o=Object(r.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"solution-storage"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#solution-storage"}},[e._v("#")]),e._v(" Solution Storage")]),e._v(" "),r("p",[e._v("The HPE Ezmeral Data Fabric for Kubernetes provides the ability to run HPE Data Fabric services on top of Kubernetes as a set of pods. It allows you to create Data Platform Clusters for storing data and Tenants for running application such as spark jobs inside pods. Installing both the Tenant components and the Data Platform Cluster components, the HPE Data Fabric Platform runs as a fully native Kubernetes application.Deploying the Data Platform Cluster as part of the HPE Data Fabric for\nKubernetes provides the following benefits:")]),e._v(" "),r("ul",[r("li",[r("p",[e._v("Independent and elastic scaling of storage and compute")])]),e._v(" "),r("li",[r("p",[e._v("Ability to run different versions of Spark applications using the same data platform")])]),e._v(" "),r("li",[r("p",[e._v("Deployment of multiple environments with resource isolation and sharing as required")])])]),e._v(" "),r("p",[e._v("The HPE CSI Driver is a multi-vendor and multi-backend driver where each implementation has a Container Storage Provider (CSP). The HPE CSI Driver allows any vendor or project to develop its own Container Storage Provider by using the CSP specification. This makes it very easy for\nthird parties to integrate their storage solution into Kubernetes as all the intricacies are taken care of by the HPE CSI Driver.")]),e._v(" "),r("p",[e._v("The CSI specification include constructs to manage snapshots as native Kubernetes objects and create new Persistent Volume Claims (PVCs) by referencing those objects. Other capabilities include PVC expansion, inline ephemeral volume, and the ability to present raw block storage to pods.")]),e._v(" "),r("p",[e._v("Solution components HPE Ezmeral Data Fabric for Kubernetes are described at a high-level in Figure 8.")]),e._v(" "),r("p",[r("img",{attrs:{src:a(461),alt:""}})]),e._v(" "),r("p",[e._v("Figure 8. High-level HPE Ezmeral Data Fabric for Kubernetes Overview")]),e._v(" "),r("p",[r("img",{attrs:{src:a(462),alt:""}})]),e._v(" "),r("p",[e._v("Figure 9. High-level HPE Ezmeral Data Fabric for Kubernetes architecture")]),e._v(" "),r("p",[e._v("By default, HPE Data Platform Clusters on Kubernetes require a minimum of 5 nodes with at least 16 Cores, 128GB Memory, and 500GB of ephemeral storage available to the OS. Additional 3X 500 GB disks for configuring storage for HPE Data Fabric for Kubernetes.")]),e._v(" "),r("h3",{attrs:{id:"configuring-solution-storage"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#configuring-solution-storage"}},[e._v("#")]),e._v(" Configuring solution storage")]),e._v(" "),r("p",[e._v("Based on the required performance either solid-state disks or hard disk drives can be used, where it is consumed by HPE Ezmeral Container Platform ephemeral disk for Docker and optionally by compute nodes as boot devices. Kubernetes Storage Cluster running on HPE ProLiant DL380 Gen10 server's local disk provides Persistent Volume (PV) for containers using the HPE CSI Driver.")]),e._v(" "),r("p",[r("img",{attrs:{src:a(463),alt:""}})]),e._v(" "),r("p",[e._v("Figure 10. Logical storage layout within the solution")])])}),[],!1,null,null,null);t.default=o.exports}}]);