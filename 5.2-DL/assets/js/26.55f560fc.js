(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{465:function(a,s,e){a.exports=e.p+"assets/img/SD-AH-1.bc97060e.png"},543:function(a,s,e){"use strict";e.r(s);var t=e(42),l=Object(t.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"automated-hpe-ezmeral-container-platform-deployment"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#automated-hpe-ezmeral-container-platform-deployment"}},[a._v("#")]),a._v(" Automated HPE Ezmeral Container Platform deployment")]),a._v(" "),t("p",[a._v("Usage of Ansible playbooks to deploy the HPE Ezmeral Container Platform\nis automated and eliminates manual intervention. Ansible playbooks\nprovides the following functionalities for the installation user to\ndeploy HPE Ezmeral Container Platform.")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("Install the controller nodes")])]),a._v(" "),t("li",[t("p",[a._v("Add gateway nodes or gateway HA")])]),a._v(" "),t("li",[t("p",[a._v("Install EPIC worker nodes")])]),a._v(" "),t("li",[t("p",[a._v("Enable controller HA")])]),a._v(" "),t("li",[t("p",[a._v("Add or remove hosts on the Kubernetes cluster")])]),a._v(" "),t("li",[t("p",[a._v("Create, update and delete Kubernetes cluster")])]),a._v(" "),t("li",[t("p",[a._v("Create and manage tenants")])])]),a._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[a._v("PREREQUISITES")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("Any Ansible Linux machine with Ansible 2.9.x and python 3.x.")])]),a._v(" "),t("li",[t("p",[a._v("Minimum five (5) nodes with SLES 15 SP2 or CentOS 7.6 or higher\nversion or RHEL (nodes can be VMs or BareMetal).")])]),a._v(" "),t("li",[t("p",[a._v("Playbooks are used to download the tools (epicctl, kubectl,\nkubectl-hpecp-plugin and jq). They should be placed in /usr/local/bin -\nepicctl - kubectl - kubectl-hpecp plugin -- jq.")])]),a._v(" "),t("li",[t("p",[a._v("Obtain the URL of the HPE Ezmeral Container Platform bundle (using s3\nbucket).")])])])]),a._v(" "),t("p",[t("img",{attrs:{src:e(465),alt:""}}),a._v(" "),t("strong",[a._v("Figure 14:")]),a._v(" High Level Automated Deployment Flow Diagram")]),a._v(" "),t("h2",{attrs:{id:"automated-deployment"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#automated-deployment"}},[a._v("#")]),a._v(" Automated Deployment")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("Update the values in "),t("em",[a._v("vars.yml")]),a._v(" and "),t("em",[a._v("hosts inventory file")]),a._v(" according\nto your environment.")])]),a._v(" "),t("li",[t("p",[a._v("Use following command to edit "),t("em",[a._v("vars.yml")]),a._v(" file")])])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" ansible-vault edit group_vars/all/vars.yml\n")])])]),t("p",[a._v("HPECP can be deployed by running "),t("strong",[a._v("site.yml")]),a._v(" or by running\nindividual playbooks. Each playbook description can be found further in\nthis document.")]),a._v(" "),t("ul",[t("li",[a._v("To build complete setup:")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" ansible-playbook -i hosts site.yml --ask-vault-pass\n")])])]),t("ul",[t("li",[a._v("In case if user want to deploy through individual playbooks. Sequence of\nplaybooks to be followed are:")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" ansible-playbook -i hosts playbooks/controller.yml --ask-vault-pass\n\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" ansible-playbook -i hosts playbooks/gateway.yml --ask-vault-pass\n\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" ansible-playbook -i hosts playbooks/epic-workers.yml --ask-vault-pass\n\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" ansible-playbook -i hosts playbooks/download-tools.yml --ask-vault-pass\n\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" ansible-playbook -i hosts playbooks/controller-ha.yml --ask-vault-pass\n\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" ansible-playbook -i hosts playbooks/k8s-hosts.yml --ask-vault-pass\n\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" ansible-playbook -i hosts playbooks/k8s-cluster.yml --ask-vault-pass\n\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" ansible-playbook -i hosts playbooks/k8s-tenant.yml --ask-vault-pass\n")])])]),t("h3",{attrs:{id:"playbooks-details"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#playbooks-details"}},[a._v("#")]),a._v(" Playbooks Details:")]),a._v(" "),t("ul",[t("li",[t("strong",[a._v("site.yml")])])]),a._v(" "),t("p",[a._v("This playbook contains the script to build complete setup.")]),a._v(" "),t("ul",[t("li",[t("strong",[a._v("download-tools.yml")])])]),a._v(" "),t("p",[a._v("This playbook contains the script to download required tools epictl,\nkubectl, kubectl-hpecp plugin and jq")]),a._v(" "),t("ul",[t("li",[t("strong",[a._v("controller.yml")])])]),a._v(" "),t("p",[a._v("This playbook contains the script to deploy controller and configuring\nthe controller based on the configuration details provided in the\nvars.yml file.")]),a._v(" "),t("ul",[t("li",[t("strong",[a._v("gateway.yml")])])]),a._v(" "),t("p",[a._v("This playbook contains the script to add gateways. User can add multiple\ngateways by providing ip and host information in vars.yml file and\nprovide ip details in hosts inventory file.")]),a._v(" "),t("ul",[t("li",[t("strong",[a._v("epic-workers.yml")])])]),a._v(" "),t("p",[a._v("This playbook contains the script to add epic worker nodes. Provide epic\nworker details in vars.yml and in hosts inventory file.")]),a._v(" "),t("ul",[t("li",[t("strong",[a._v("controller-ha.yml")])])]),a._v(" "),t("p",[a._v("This playbook contains the script to enable controller ha. Users need to\nprovide virtual ip with FQDN in vars.yml file to configure controller ha\nand provide ip details in hosts file. Please make sure virtual ip\ndetails present in DNS entries.")]),a._v(" "),t("p",[a._v("Users need to run "),t("strong",[a._v("playbooks/epic-workers.yml")]),a._v(" playbook\nfirst to add required epic worker nodes. And then run\nplaybooks/controller-ha.yml playbook.")]),a._v(" "),t("ul",[t("li",[t("strong",[a._v("k8s-hosts.yml")])])]),a._v(" "),t("p",[a._v("This playbook contains the script to add k8 nodes and Data Fabric nodes.\nProvide k8 nodes information in vars.yml and hosts file.")]),a._v(" "),t("ul",[t("li",[t("strong",[a._v("k8s-cluster.yml")])])]),a._v(" "),t("p",[a._v("This playbook contains the script to create kubernetes compute cluster\nand Data Fabric cluster. Provide cluster details in vars.yml")]),a._v(" "),t("ul",[t("li",[t("strong",[a._v("k8s-tenant.yml")])])]),a._v(" "),t("p",[a._v("This playbook contains the script to create tenant. Provide tenant\ndetails in vars.yml.")]),a._v(" "),t("h3",{attrs:{id:"uninstall-information"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#uninstall-information"}},[a._v("#")]),a._v(" Uninstall Information:")]),a._v(" "),t("p",[a._v("If user want to uninstall HPE Ezmeral Container Platform and start a\nfresh installation, use the following playbook.")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("ansible-playbook -i hosts playbooks/uninstall-bds.yml --ask-vault-pass\n")])])]),t("h3",{attrs:{id:"other-playbooks"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#other-playbooks"}},[a._v("#")]),a._v(" Other Playbooks:")]),a._v(" "),t("ul",[t("li",[a._v("Run the following command to disable controller ha.")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("ansible-playbook -i hosts playbooks/disable-controller-ha.yml --ask-vault-pass\n")])])]),t("ul",[t("li",[a._v("Run the following command to delete epic workers.")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("ansible-playbook -i hosts playbooks/epic-workers-delete.yml --ask-vault-pass\n")])])]),t("ul",[t("li",[a._v("Run the following command to delete k8 nodes.")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("ansible-playbook -i hosts playbooks/k8s-delete-hosts.yml --ask-vault-pass\n")])])]),t("ul",[t("li",[a._v("Run the following command to update tenant.")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("ansible-playbook -i hosts playbooks/k8s-update-tenant.yml --ask-vault-pass\n")])])]),t("ul",[t("li",[a._v("Run the following command to delete the tenant.")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("ansible-playbook -i hosts playbooks/k8s-delete-tenant.yml --ask-vault-pass\n")])])]),t("ul",[t("li",[a._v("Run the following command to delete the cluster")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("ansible-playbook -i hosts playbooks/k8s-cluster-delete.yml --ask-vault-pass\n")])])]),t("ul",[t("li",[a._v("For detailed steps, see the HPE Ezmeral Container Platform on HPE DL Servers Deployment guide available at,\n"),t("a",{attrs:{href:"https://github.com/hewlettpackard/hpe-solutions-hpecp/5.2-DL",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://github.com/hewlettpackard/hpe-solutions-hpecp/5.2-DL"),t("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=l.exports}}]);