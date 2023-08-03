//@ui5-bundle thisproapp/Component-preload.js
jQuery.sap.registerPreloadedModules({
"version":"2.0",
"modules":{
	"thisproapp/Component.js":function(){sap.ui.define(["sap/fe/core/AppComponent"],function(e){"use strict";return e.extend("thisproapp.Component",{metadata:{manifest:"json"}})});
},
	"thisproapp/i18n/i18n.properties":'# This is the resource bundle for thisproapp\n\n#Texts for manifest.json\n\n#XTIT: Application name\nappTitle=App Title\n\n#YDES: Application description\nappDescription=A Fiori application.',
	"thisproapp/manifest.json":'{"_version":"1.49.0","sap.app":{"id":"thisproapp","type":"application","i18n":"i18n/i18n.properties","applicationVersion":{"version":"0.0.1"},"title":"{{appTitle}}","description":"{{appDescription}}","resources":"resources.json","sourceTemplate":{"id":"@sap/generator-fiori:lrop","version":"1.10.3","toolsId":"5cfc587c-2746-4fe1-a1b7-4826fc0b9836"},"dataSources":{"mainService":{"uri":"escalation-management/","type":"OData","settings":{"annotations":[],"localUri":"localService/metadata.xml","odataVersion":"4.0"}}}},"sap.ui":{"technology":"UI5","icons":{"icon":"","favIcon":"","phone":"","phone@2":"","tablet":"","tablet@2":""},"deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"flexEnabled":true,"dependencies":{"minUI5Version":"1.116.0","libs":{"sap.m":{},"sap.ui.core":{},"sap.ushell":{},"sap.fe.templates":{}}},"contentDensities":{"compact":true,"cozy":true},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"thisproapp.i18n.i18n"}},"":{"dataSource":"mainService","preload":true,"settings":{"synchronizationMode":"None","operationMode":"Server","autoExpandSelect":true,"earlyRequests":true}},"@i18n":{"type":"sap.ui.model.resource.ResourceModel","uri":"i18n/i18n.properties"}},"resources":{"css":[]},"routing":{"config":{},"routes":[{"pattern":":?query:","name":"EscalationsList","target":"EscalationsList"},{"pattern":"Escalations({key}):?query:","name":"EscalationsObjectPage","target":"EscalationsObjectPage"}],"targets":{"EscalationsList":{"type":"Component","id":"EscalationsList","name":"sap.fe.templates.ListReport","options":{"settings":{"entitySet":"Escalations","variantManagement":"Page","navigation":{"Escalations":{"detail":{"route":"EscalationsObjectPage"}}}}}},"EscalationsObjectPage":{"type":"Component","id":"EscalationsObjectPage","name":"sap.fe.templates.ObjectPage","options":{"settings":{"editableHeaderContent":false,"entitySet":"Escalations"}}}}}},"sap.fiori":{"registrationIds":[],"archeType":"transactional"}}'
}});