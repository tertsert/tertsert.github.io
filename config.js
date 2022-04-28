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
    footer: "Bartels, C. (2012). Identifying and addressing heirs property: a case study of Wake County, North Carolina. https://doi.org/10.17615/86ms-ry09 ---- Federal of Southern Cooperatives Land Assistance Fund. (n.d.). What is African American Land Ownership? Retrieved September 28, 2011, from  http://www.federationsoutherncoop.com/aalandown04.htm ---- Gaither, C.J., Carpenter, A., Lloyd McCurty, T., & Toering, S. (2019). Heirs’ property and land fractionation ---- fostering stable ownership to prevent land loss and abandonment. https://www.srs.fs.usda.gov/compass/2020/07/30/srs-publication-highlights-heirs-property-ownership-and-land-loss/ ---- United States Census Bureau. (2001). Census 2000. United States Census Bureau. (2011, December). 2010 Census Data.",
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
                    layer: 'black-belt',
                    opacity: 0
                },
                {
                    layer: 'wake-county-boundary',
                    opacity: 0
                },
                {
                    layer: 'wake-county-townships-lines',
                    opacity: 0
                },
                {
                    layer: 'race-and-property-overlay',
                    opacity: 0
                },
                {
                    layer: 'wake-county-townships-fill',
                    opacity: 0
                },
                {
                    layer: 'mapbox-satellite',
                    opacity: 1
                }
            ],
            onChapterExit: []
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
            onChapterEnter: [
                {
                    layer: 'black-belt',
                    opacity: 0
                },
                {
                    layer: 'wake-county-boundary',
                    opacity: 0
                },
                {
                    layer: 'wake-county-townships-lines',
                    opacity: 0
                },
                {
                    layer: 'race-and-property-overlay',
                    opacity: 0
                },
                {
                    layer: 'wake-county-townships-fill',
                    opacity: 0
                },
                {
                    layer: 'mapbox-satellite',
                    opacity: 1
                }
            ],
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
                    layer: 'black-belt',
                    opacity: 0
                },
                {
                    layer: 'wake-county-boundary',
                    opacity: 0
                },
                {
                    layer: 'wake-county-townships-lines',
                    opacity: 0
                },
                {
                    layer: 'race-and-property-overlay',
                    opacity: 0
                },
                {
                    layer: 'wake-county-townships-fill',
                    opacity: 0
                },
                {
                    layer: 'mapbox-satellite',
                    opacity: 1
                }
            ],
            onChapterExit: []
        },
         {
            id: "Why is Heir's property so hard to track?",
            alignment: 'left',
            hidden: false,
            title: "Why is Heir's property so hard to track?",
            description: "Centuries later, the Freeman family is still struggling to establish a stable form of property ownership, a common issue along the demographically defined Black Belt of the South. According to the USDA, it is conservatively estimated that there are more than 1.6 million acres of heirs’ property with a value of $6.6 billion in counties of the Black Belt of the South. Wake County, North Carolina sits on the northeastern part of this curve.",
            location: {
                center: [-87.66662, 33.22445],
                zoom: 5.14,
                pitch: 3.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'black-belt',
                    opacity: 0.6
                },
                {
                    layer: 'wake-county-boundary',
                    opacity: 0
                },
                {
                    layer: 'wake-county-townships-lines',
                    opacity: 0
                },
                {
                    layer: 'race-and-property-overlay',
                    opacity: 0
                },
                {
                    layer: 'wake-county-townships-fill',
                    opacity: 0
                },
                {
                    layer: 'mapbox-satellite',
                    opacity: 1
                }
            ],
            onChapterExit: []
        },
        {
            id: 'Wake county 1',
            alignment: 'left',
            hidden: false,
            title: 'So how about Wake County?',
            description: 'In the county overall, 0.66% of all properties were identified as conclusive or semi-conclusive heirs property. Within townships, the percentage of heirs property ranged from 2.08% of all properties in Little River township, to 0.16% of all properties in Leesville township (Bartles). This data was found using property tax information from Wake County.',
            location: {
                center: [-78.94380, 35.80894],
                zoom: 9.26,
                pitch: 3.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'black-belt',
                    opacity: 0
                },
                {
                    layer: 'wake-county-boundary',
                    opacity: 1
                },
                {
                    layer: 'wake-county-townships-lines',
                    opacity: 1
                },
                {
                    layer: 'race-and-property-overlay',
                    opacity: 0
                },
                {
                    layer: 'wake-county-townships-fill',
                    opacity: 0
                },
                {
                    layer: 'mapbox-satellite',
                    opacity: 1
                }
            ],
            onChapterExit: []
        },
        {
            id: 'Wake county 2',
            alignment: 'left',
            hidden: false,
            title: "",
            description: 'Heirs property can be correlated to areas with a high African-American population. Over the past 70 years, the African-American population has decreased in comparison to the rest of the population in Wake County; in 1940, African Americans made up 33.6% of the population in the county, but in 2010, they made up only 20.7% (1940, 2010 Census Data).',
            location: {
                center: [-78.94380, 35.80894],
                zoom: 9.26,
                pitch: 3.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'black-belt',
                    opacity: 0
                },
                {
                    layer: 'wake-county-boundary',
                    opacity: 1
                },
                {
                    layer: 'wake-county-townships-lines',
                    opacity: 0
                },
                {
                    layer: 'race-and-property-overlay',
                    opacity: 1
                },
                {
                    layer: 'wake-county-townships-fill',
                    opacity: 0
                },
                {
                    layer: 'mapbox-satellite',
                    opacity: 1
                }
            ],
            onChapterExit: []
        },
        {
            id: 'Wake county 3',
            alignment: 'left',
            hidden: false,
            title: '',
            description: 'With a few exceptions, the cost per acre of non-heirs property land in each township was valued significantly higher than the heirs property land in that township. The average cost  differential was $26,895 per acre, and the average percentage differential was 31% (Bartles). It is not clear why this disparity exists, but experts believe it could be because of the land classification as heirs property or that this property exists in less expensive areas and is underdeveloped.',
            location: {
                center: [-78.94380, 35.80894],
                zoom: 9.26,
                pitch: 3.00,
                bearing: 0.00 
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'black-belt',
                    opacity: 0
                },
                {
                    layer: 'wake-county-boundary',
                    opacity: 1
                },
                {
                    layer: 'wake-county-townships-lines',
                    opacity: 1
                },
                {
                    layer: 'race-and-property-overlay',
                    opacity: 0
                },
                {
                    layer: 'wake-county-townships-fill',
                    opacity: 1
                },
                {
                    layer: 'mapbox-satellite',
                    opacity: 1
                }
            ],
            onChapterExit: []
        },
        {
            id: 'Townships',
            alignment: 'left',
            hidden: false,
            title: '',
            description: 'When comparing heirs properties to neighboring properties, heirs properties were valued at an average of $38,142 per acre, while neighboring properties were valued at an average of  $48,834 per acre (an increase of 28%), and all properties in Wake County were valued at  an average $84,740 per acre (an increase of 122%). In Wake County, heirs property has a total Tax Assessed Value of $454,875,908, including a total land assessed value of $332,338,525. As of 2011, Wake  County charged a property tax rate of 5.34% of tax value. If we assume that heirs property land is undervalued by at least 28%, this translates to over 4.9 million dollars of  lost tax revenue (Bartles).',
            location: {
                center: [-78.94380, 35.80894],
                zoom: 9.26,
                pitch: 3.00,
                bearing: 0.00 
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'black-belt',
                    opacity: 0
                },
                {
                    layer: 'wake-county-boundary',
                    opacity: 1
                },
                {
                    layer: 'wake-county-townships-lines',
                    opacity: 1
                },
                {
                    layer: 'race-and-property-overlay',
                    opacity: 0
                },
                {
                    layer: 'wake-county-townships-fill',
                    opacity: 0
                },
                {
                    layer: 'mapbox-satellite',
                    opacity: 1
                }
            ],
            onChapterExit: []
        },
        {
            id: 'pictures',
            alignment: 'center',
            hidden: false,
            title: '',
            image: 'https://i.imgur.com/E4EgAMs.jpg',
            description: '',
            location: {
                center: [-78.94380, 35.80894],
                zoom: 9.26,
                pitch: 3.00,
                bearing: 0.00 
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'black-belt',
                    opacity: 0
                },
                {
                    layer: 'wake-county-boundary',
                    opacity: 0
                },
                {
                    layer: 'wake-county-townships-lines',
                    opacity: 0
                },
                {
                    layer: 'race-and-property-overlay',
                    opacity: 0
                },
                {
                    layer: 'wake-county-townships-fill',
                    opacity: 0
                },
                {
                    layer: 'mapbox-satellite',
                    opacity: 1
                }
            ],
            onChapterExit: []
        }
    ]
};
