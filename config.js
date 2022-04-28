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
    footer: 'Bartels, C. (2012). Identifying and addressing heirs property: a case study of Wake County, North Carolina. https://doi.org/10.17615/86ms-ry09',
    chapters: [
        {
            id: 'Intro slide',
            alignment: 'left',
            hidden: false,
            title: "Understanding Heirs' property: A Seabreeze Bop City Project",
            description: "By Naomi Delkamiller and Michael Ryan",
            location: {
                center: [-77.89126, 34.06249],
                zoom: 15.00,
                pitch: 54.50,
                bearing: -32.80
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
            id: "Intro to Heirs' property",
            alignment: 'right',
            hidden: false,
            title: "What is Heirs' property?",
            description: "African American families throughout the United States owned 15 million acres of property in 1910. By 1997, that number had dropped to 2.4 million acres (Federal of Southern Cooperatives Land Assistance Fund). One of the primary factors of this land reduction was heirs property- an unstable form of property ownership that is used in cases without a will or deed. Heirs property is a serious legal issue because the lack of documentation makes it difficult to determine where the property is and how much exists (Bartles).",
            location: {
                center: [-77.88816, 34.06255],
                zoom: 15.58,
                pitch: 0.00,
                bearing: 7.20
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
            title: 'Who is the Freeman family?',
            description: "The land south of Myrtle Sound, North Carolina is known as Seabreeze. It's origins were established on 99 acres of undeveloped land purchased before the end of the Civil War by formerly enslaved Alexander and Charity Freeman. Over the hundred years that followed, the area developed into a thriving beach resort and one of the only places open to African Americans along the east coast during Jim Crow (Seabreeze Bop City). The land has since been divided and passed throughout the family for generations.",
            location: {
                center: [-77.88970, 34.06310],
                zoom: 17.22,
                pitch: 0.00,
                bearing: 7.20   
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
                center: [-77.88983, 34.06317],
                zoom: 17.42,
                pitch: 0.00,
                bearing: 7.20
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
