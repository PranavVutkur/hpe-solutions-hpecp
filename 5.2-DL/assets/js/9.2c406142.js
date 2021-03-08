(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{411:function(t,s,a){t.exports=a.p+"assets/img/AF-KA1.6c29c126.png"},412:function(t,s,a){t.exports=a.p+"assets/img/AF-KA2.af8b7a6c.png"},413:function(t,s,a){t.exports=a.p+"assets/img/AF-KA3.40c42c1d.png"},414:function(t,s,a){t.exports=a.p+"assets/img/AF-KA4.ed828b73.png"},415:function(t,s,a){t.exports=a.p+"assets/img/AF-KA5.e2a2c24e.png"},416:function(t,s,a){t.exports=a.p+"assets/img/AF-KA6.a18236ea.png"},417:function(t,s,a){t.exports=a.p+"assets/img/AF-KA7.48e190cc.png"},418:function(t,s,a){t.exports=a.p+"assets/img/AF-KA8.21677710.png"},419:function(t,s,a){t.exports=a.p+"assets/img/AF-KA9.33e8b7a3.png"},420:function(t,s,a){t.exports=a.p+"assets/img/AF-KA10.29e82c12.png"},421:function(t,s,a){t.exports=a.p+"assets/img/AF-KA11.9d487da3.png"},422:function(t,s,a){t.exports=a.p+"assets/img/AF-KA12.3bf0d593.png"},536:function(t,s,a){"use strict";a.r(s);var e=a(42),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"kasten-deployment-on-hpecp"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#kasten-deployment-on-hpecp"}},[t._v("#")]),t._v(" Kasten deployment on HPECP")]),t._v(" "),e("h3",{attrs:{id:"introduction"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[t._v("#")]),t._v(" Introduction")]),t._v(" "),e("p",[t._v("The K10 data management platform, purpose-built for Kubernetes, provides enterprise operations teams an easy-to-use, scalable, and secure system for backup/restore, disaster recovery, and mobility of Kubernetes applications. K10's application-centric approach and deep integrations with relational and NoSQL databases, Kubernetes distributions, and all clouds provides teams the freedom of infrastructure choice without sacrificing operational simplicity. Policy-driven and extensible, K10 provides a native Kubernetes API and includes features such full-spectrum consistency, database integrations, automatic application discovery, multi-cloud mobility, and a powerful web-based user\ninterface. For more information refer https://docs.kasten.io/latest/index.html.")]),t._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("Pre-requisites")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("HPECP cluster available")])]),t._v(" "),e("li",[e("p",[t._v("Access to Google Cloud")])])])]),t._v(" "),e("h3",{attrs:{id:"flow-diagram"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#flow-diagram"}},[t._v("#")]),t._v(" Flow Diagram")]),t._v(" "),e("p",[e("img",{attrs:{src:a(411),alt:""}})]),t._v(" "),e("p",[e("strong",[t._v("Figure 72.")]),t._v(" Flow Diagram for Kasten Deployment")]),t._v(" "),e("h3",{attrs:{id:"deployment-process"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#deployment-process"}},[t._v("#")]),t._v(" Deployment Process")]),t._v(" "),e("p",[t._v("First step is to deploy Helm. Follow below steps to deploy Helm.")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("Download latest helm wget "),e("a",{attrs:{href:"https://get.helm.sh/helm-v3.4.2-linux-amd64.tar.gz",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://get.helm.sh/helm-v3.4.2-linux-amd64.tar.gz"),e("OutboundLink")],1)])]),t._v(" "),e("li",[e("p",[t._v("Unpack the helm gz file")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("tar")]),t._v(" -zxvf helm-v3.4.2-linux-amd64.tar.gz\n")])])])]),t._v(" "),e("li",[e("p",[t._v("Move the helm binary file to /usr/local/bin")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("mv")]),t._v(" linux-amd64/helm /usr/local/bin/helm\n")])])])])]),t._v(" "),e("p",[t._v("Deploy Kasten by following below steps.")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("Run the following command to deploy the pre-check tool curl https://docs.kasten.io/tools/k10_primer.sh | bash.")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("NOTE")]),t._v(" "),e("p",[t._v("By default, volumesnapshotclass will not be present in data fabric cluster. It has to be created manually.")])])]),t._v(" "),e("li",[e("p",[t._v("Use below yaml file to create volumesnapshotclass.")]),t._v(" "),e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiVersion")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" snapshot.storage.k8s.io/v1beta1\n\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" VolumeSnapshotClass\n\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" fabric"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("snapshotclass\n\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("namespace")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" hpe"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("csi\n\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("annotations")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("snapshot.storage.kubernetes.io/is-default-class")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"true"')]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("k10.kasten.io/is-snapshot-class")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"true"')]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("driver")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" com.mapr.csi"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("kdf\n\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("deletionPolicy")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Delete\n\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("parameters")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("restServers")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 10.0.72.159"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("31443")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("cluster")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" fabric01\n\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("csi.storage.k8s.io/snapshotter-secret-name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hpe-user-secret-fabric01"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Can be separate secret for snapshot only")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("csi.storage.k8s.io/snapshotter-secret-namespace")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hpe-csi"')]),t._v("\n")])])]),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("NOTE")]),t._v(" "),e("p",[t._v("Information about restservers, csi.storage.k8s.io/snapshotter-secret-name can be obtained from")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" kubectl describesc storageclass name \n")])])])])]),t._v(" "),e("li",[e("p",[t._v("Deploy the volumesnapshotclass by running below command.")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" kubectl create --f snapshotclasses.yaml\n")])])])]),t._v(" "),e("li",[e("p",[t._v("Execute precheck script again to make sure that volumesnapshotclass exists.")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" https://docs.kasten.io/tools/k10_primer.sh "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("bash")]),t._v("\n")])])])]),t._v(" "),e("li",[e("p",[t._v("Next step is to install Kasten.")])])]),t._v(" "),e("p",[t._v("Follow below steps to install Kasten.")]),t._v(" "),e("ol",{attrs:{start:"6"}},[e("li",[e("p",[t._v("Create namespace by running below command.")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" kubectl create ns kasten-io\n")])])])]),t._v(" "),e("li",[e("p",[t._v("Add kasten helm charts")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" helm repo "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" kasten "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("https://charts.kasten.io/"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])])]),t._v(" "),e("li",[e("p",[t._v("Deploy kasten using helm")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" helm "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" k10 kasten/k10 --namespace"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("kasten-io\n")])])])]),t._v(" "),e("li",[e("p",[t._v("Verify that all pods are in running state by running below command.")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" Kubectl get pods --namespace kasten-io\n")])])]),e("p",[e("img",{attrs:{src:a(412),alt:""}})])])]),t._v(" "),e("h4",{attrs:{id:"configure-kasten-service"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#configure-kasten-service"}},[t._v("#")]),t._v(" Configure Kasten service")]),t._v(" "),e("p",[t._v("To access kasten webgui, we need to change gateway service in kasten-io namespace from ClusterIP to NodePort.")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("Modify the service gateway type and add label to automatically assign port")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" kubectl patch svc gateway -n kasten-io -p "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'{"spec":{"type":"NodePort"}}\'')]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" kubectl label svc gateway hpecp.hpe.com/hpecp-internal-gateway"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("true -n kasten-io\n")])])])]),t._v(" "),e("li",[e("p",[t._v("Get the Kasten administrator URL from gateway service as below")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" kubectl describe svc gateway -n kasten-io\n")])])]),e("p",[e("img",{attrs:{src:a(413),alt:""}})])]),t._v(" "),e("li",[e("p",[t._v("Access the Kasten URL")]),t._v(" "),e("p",[e("img",{attrs:{src:a(414),alt:""}})])])]),t._v(" "),e("h4",{attrs:{id:"integrate-gcp-bucket"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#integrate-gcp-bucket"}},[t._v("#")]),t._v(" Integrate GCP bucket")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("Create service account in GCP with storage object admin role")]),t._v(" "),e("p",[e("img",{attrs:{src:a(415),alt:""}})])]),t._v(" "),e("li",[e("p",[t._v("Generate the Service Account")]),t._v(" "),e("p",[e("img",{attrs:{src:a(416),alt:""}})])]),t._v(" "),e("li",[e("p",[t._v("In Kasten Dashboard, create location profile under settings with GCP bucket credentials")]),t._v(" "),e("p",[e("img",{attrs:{src:a(417),alt:""}})])])]),t._v(" "),e("h4",{attrs:{id:"backup-restore"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#backup-restore"}},[t._v("#")]),t._v(" Backup & Restore")]),t._v(" "),e("ol",[e("li",[e("p",[t._v('On Kasten WEBGUI, Click on Applications and select the required application to be backed up. Click on Snapshot button and select "Snapshot Application".')]),t._v(" "),e("p",[e("img",{attrs:{src:a(418),alt:""}})]),t._v(" "),e("p",[e("img",{attrs:{src:a(419),alt:""}})])]),t._v(" "),e("li",[e("p",[t._v("Go to the dashboard and verify backup completed")]),t._v(" "),e("p",[e("img",{attrs:{src:a(420),alt:""}})]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("NOTE")]),t._v(" "),e("p",[t._v("This snapshot will be saved in local disk. We have to use export option to save the snapshot in cloud bucket")])])]),t._v(" "),e("li",[e("p",[t._v("To export, go the Application and click on export button. Select appropriate bucket and click restore.")]),t._v(" "),e("p",[e("img",{attrs:{src:a(421),alt:""}})])]),t._v(" "),e("li",[e("p",[t._v("To restore, go the Application and click on restore button")]),t._v(" "),e("p",[e("img",{attrs:{src:a(422),alt:""}})])])])])}),[],!1,null,null,null);s.default=n.exports}}]);