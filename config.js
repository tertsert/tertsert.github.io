var config = {
    style: 'mapbox://styles/ndelks/cl01cuqyk00l815r4hg9nnggg',
    accessToken: 'pk.eyJ1IjoibmRlbGtzIiwiYSI6ImNremhtazY1ajFhc3IzMW9iam5haDJubWUifQ.4o2Mrbi4Vch1fv77PttorA',
    showMarkers: false,
    markerColor: '#3FB1CE',
    theme: 'dark',
    use3dTerrain: false,
    title: '',
    subtitle: '',
    byline: '',
    footer: 'Source: source citations, etc.',
    chapters: [
        {
            id: 'Intro slide',
            alignment: 'left',
            hidden: false,
            title: 'Understanding Heirs property: A Seabreeze Bop City Project',
            description: "By Naomi Delkamiller and Michael Ryan",
            location: {
                center: [-77.89556, 34.06317],
                zoom: 15.22,
                pitch: 53.50,
                bearing: -10.40
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
	    {
            		layer: 'county-boundary-5isg3x',
                 	opacity: 0
            },
            {
            		layer: 'townships-1-azzt4t',
                 	opacity: 0
            }
	    
	    ],
            onChapterExit: [
	    {
            		layer: 'county-boundary-5isg3x',
                 	opacity: 0
            },
            {
            		layer: 'townships-1-azzt4t',
                 	opacity: 0
            }
	    
	    ]
        },
        {
            id: 'Intro to Heirs property',
            alignment: 'right',
            hidden: false,
            title: 'Seabreeze Myrtle Sound',
            image: 'tertsert.github.io/images/Freeman family article.jpeg',
            description: "After segregation ended, and after a sequence of human- made and natural coastal disasters, Seabreeze faded as a resort community. Today, there are few physical traces left to recall the vibrancy of its heyday. Many extended Freeman family members are still in residence, though much of the property in the neighborhood is undevelopable and under threat as heirs property.",
            location: {
                center: [-77.88558, 34.06285],
                zoom: 14.66,
                pitch: 0.50,
                bearing: 0.00 
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'Explanation of Seabreeze',
            alignment: 'right',
            hidden: false,
            title: 'Wake County',
            image: 'tertsert.github.io/images/Townships.png',
            description: 'Filler text',
            location: {
                center: [-77.88558, 34.06285],
                zoom: 14.66,
                pitch: 0.50,
                bearing: 0.00 
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
            {
            		layer: 'county-boundary-5isg3x',
                 	opacity: 1
            },
            {
            		layer: 'townships-1-azzt4t',
                 	opacity: 1
            }
           
            ],
            onChapterExit: [
            {
            		layer: 'county-boundary-5isg3x',
                 	opacity: 0
            },
            {
            		layer: 'townships-1-azzt4t',
                 	opacity: 0
            }
            
            ]
        },
         {
            id: 'Chapter 2 sub 1: Wake County',
            alignment: 'right',
            hidden: false,
            title: 'Wake County',
            image: 'tertsert.github.io/images/Townships.png',
            description: 'Filler text',
            location: {
               	center: [-78.38189, 35.78975],
				zoom: 9.38,
				pitch: 0.00,
				bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
            		layer: 'ndelks-4xm30cw1',
                 	opacity: 1
                }
            ],
            
            onChapterExit: [
                {
            		layer: 'ndelks-4xm30cw1',
                 	opacity: 0
                }
            ]
        },
        {
            id: 'Chapter 3: American South',
            alignment: 'right',
            hidden: false,
            title: 'American South',
            description: 'Heirs’ property is estimated to make up more than a third of Southern black- owned land  — 3.5 million acres, worth more than $28 billion.',
            location: {
                center: [-77.30462, 32.58378],
				zoom: 4.82,
				pitch: 0.00,
				bearing: 0.00 
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
	    {
            		layer: 'county-boundary-5isg3x',
                 	opacity: 0
            },
            {
            		layer: 'townships-1-azzt4t copy',
                 	opacity: 0
            }
	    
	    ],
            onChapterExit: []
        },
        {
            id: 'Chapter 4: Bruce’s Beach',
            alignment: 'right',
            hidden: false,
            title: "Bruce's Beach",
            image: './path/to/image/source.png',
            description: 'Filler Text',
            location: {
                center: [-118.40798, 33.87665], 
				zoom: 15.65, 
				pitch: 58.50, 
				bearing: 33.60 
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'Chapter 5: Seabreeze future',
            alignment: 'right',
            hidden: false,
            title: 'Seabreeze future',
            image: './path/to/image/source.png',
            description: 'Filler Text',
            location: {
                center: [-77.89122, 34.06319],
				zoom: 16.12,
				pitch: 42.50,
				bearing: -11.20 
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
