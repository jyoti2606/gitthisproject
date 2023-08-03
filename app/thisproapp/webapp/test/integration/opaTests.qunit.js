sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'thisproapp/test/integration/FirstJourney',
		'thisproapp/test/integration/pages/EscalationsList',
		'thisproapp/test/integration/pages/EscalationsObjectPage'
    ],
    function(JourneyRunner, opaJourney, EscalationsList, EscalationsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('thisproapp') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheEscalationsList: EscalationsList,
					onTheEscalationsObjectPage: EscalationsObjectPage
                }
            },
            opaJourney.run
        );
    }
);