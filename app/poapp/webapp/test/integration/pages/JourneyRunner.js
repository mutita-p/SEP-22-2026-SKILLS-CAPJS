sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"poapp/test/integration/pages/POSrvList.gen",
	"poapp/test/integration/pages/POSrvObjectPage.gen",
	"poapp/test/integration/pages/POISrvObjectPage.gen"
], function (JourneyRunner, POSrvListGenerated, POSrvObjectPageGenerated, POISrvObjectPageGenerated) {
    'use strict';

    const runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('poapp') + '/test/flp.html#app-preview',
        pages: {
			onThePOSrvListGenerated: POSrvListGenerated,
			onThePOSrvObjectPageGenerated: POSrvObjectPageGenerated,
			onThePOISrvObjectPageGenerated: POISrvObjectPageGenerated
        },
        async: true
    });

    return runner;
});

