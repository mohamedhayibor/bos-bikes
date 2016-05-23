# bos-bikes

This module is a command line interface that gets you the real-time info on Hubway stations. Bikes available - docks available of a particular station.

## Installation
```
  > npm install -g bos-bikes
```

> Don't forget the "-g" to install it globally. (then you can run the bikes command anywhere)

## Usage

On your terminal:
```
  > bikes `station-id`
```
Basically the bikes command and whatever station you want to check.

At first, you will obviously not know the id of a particular station.
You can get that with the command `bikes`. It is a deliberate api design decision. The reality is that you most frequently use only 3 to 4 stations anyways. By your fourth use, you will know the id by heart (one or two digits). Then you can pretty much make the query in less a second.

## Station's names and ids

| id | name |
| ---| :----------------- |
| id: 3 | station: Colleges of the Fenway |
| id: 4 | station: Tremont St. at Berkeley St. |
| id: 5 | station: Northeastern U / North Parking Lot |
| id: 6 | station: Cambridge St. at Joy St. |
| id: 7 | station: Fan Pier |
| id: 8 | station: Union Square - Brighton Ave. at Cambridge St. |
| id: 9 | station: Agganis Arena - 925 Comm Ave. |
| id: 10 | station: B.U. Central - 725 Comm. Ave. |
| id: 11 | station: Longwood Ave / Binney St |
| id: 12 | station: Ruggles Station / Columbus Ave. |
| id: 13 | station: Boston Medical Center -  East Concord at Harrison Ave |
| id: 14 | station: HMS / HSPH - Ave. Louis Pasteur at Longwood Ave. |
| id: 15 | station: Harvard Real Estate - Brighton Mills - 370 Western Ave |
| id: 16 | station: Back Bay / South End Station |
| id: 17 | station: Harvard University Housing - 111 Western Ave. at Soldiers Field Park  |
| id: 19 | station: Buswell St. at Park Dr. |
| id: 20 | station: Aquarium Station - 200 Atlantic Ave. |
| id: 21 | station: Prudential Center / Belvidere |
| id: 22 | station: South Station - 700 Atlantic Ave. |
| id: 23 | station: Mayor Martin J Walsh - 28 State St |
| id: 24 | station: Seaport Square - Seaport Blvd. at Boston Wharf |
| id: 25 | station: Tremont St / W Newton St |
| id: 26 | station: Washington St. at Waltham St. |
| id: 27 | station: Roxbury Crossing Station |
| id: 29 | station: Innovation Lab - 125 Western Ave. at Batten Way |
| id: 30 | station: Brigham Cir / Huntington Ave |
| id: 31 | station: Seaport Hotel |
| id: 32 | station: Landmark Centre |
| id: 33 | station: Kenmore Sq / Comm Ave |
| id: 35 | station: Franklin St. / Arch St. |
| id: 36 | station: Boston Public Library - 700 Boylston St. |
| id: 37 | station: New Balance - 20 Guest St. |
| id: 38 | station: TD Garden - Causeway at Portal Park #2 |
| id: 39 | station: Washington St. at Rutland St. |
| id: 40 | station: Lewis Wharf - Atlantic Ave. |
| id: 41 | station: Packard's Corner - Comm. Ave. at Brighton Ave. |
| id: 42 | station: Boylston St. at Arlington St. |
| id: 43 | station: Rowes Wharf - Atlantic Ave |
| id: 44 | station: Faneuil Hall - Union St. at North St. |
| id: 45 | station: Yawkey Way at Boylston St. |
| id: 46 | station: Christian Science Plaza |
| id: 47 | station: Cross St. at Hanover St. |
| id: 48 | station: Post Office Square |
| id: 49 | station: Stuart St. at Charles St. |
| id: 50 | station: Boylston St / Berkeley St |
| id: 51 | station: Washington St. at Lenox St. |
| id: 52 | station: Newbury St / Hereford St |
| id: 53 | station: Beacon St / Mass Ave |
| id: 54 | station: Tremont St / West St |
| id: 55 | station: Boylston / Mass Ave |
| id: 56 | station: Dudley Square |
| id: 57 | station: Columbus Ave. at Mass. Ave. |
| id: 58 | station: The Esplanade - Beacon St. at Arlington St. |
| id: 59 | station: Chinatown Gate Plaza - Surface Rd. at Beach St. |
| id: 60 | station: Charles Circle - Charles St. at Cambridge St. |
| id: 61 | station: Boylston at Fairfield |
| id: 63 | station: Dorchester Ave. at Gillette Park |
| id: 64 | station: Congress / Sleeper |
| id: 65 | station: Boston Convention & Exhibition Center |
| id: 66 | station: Allston Green District - Commonwealth Ave & Griggs St |
| id: 67 | station: MIT at Mass Ave / Amherst St |
| id: 68 | station: Central Square at Mass Ave / Essex St |
| id: 69 | station: Coolidge Corner - Beacon St @ Centre St |
| id: 70 | station: Harvard Kennedy School at Bennett St / Eliot St |
| id: 71 | station: Conway Park - Somerville Avenue |
| id: 72 | station: One Broadway / Kendall Sq at Main St / 3rd St |
| id: 73 | station: Harvard Square at Brattle St / Eliot St |
| id: 74 | station: Harvard Square at Mass Ave/ Dunster |
| id: 75 | station: Lafayette Square at Mass Ave / Main St / Columbia St |
| id: 76 | station: Central Sq Post Office / Cambridge City Hall at Mass Ave / Pleasant St |
| id: 77 | station: Somerville City Hall |
| id: 78 | station: Union Square - Somerville |
| id: 79 | station: Beacon St at Washington / Kirkland |
| id: 80 | station: MIT Stata Center at Vassar St / Main St |
| id: 81 | station: Boylston St / Washington St |
| id: 82 | station: Washington Square at Washington St. / Beacon St. |
| id: 84 | station: CambridgeSide Galleria - CambridgeSide PL at Land Blvd |
| id: 85 | station: Spaulding Rehabilitation Hospital - Charlestown Navy Yard |
| id: 87 | station: Harvard University Housing - 115 Putnam Ave at Peabody Terrace |
| id: 88 | station: Inman Square at Vellucci Plaza / Hampshire St |
| id: 89 | station: Harvard Law School at Mass Ave / Jarvis St |
| id: 90 | station: Lechmere Station at Cambridge St / First St |
| id: 91 | station: One Kendall Square at Hampshire St / Portland St |
| id: 92 | station: UMass Boston Integrated Sciences Complex |
| id: 93 | station: JFK / UMASS at MBTA Station |
| id: 94 | station: Charlestown - Main St at Austin St |
| id: 95 | station: Cambridge St - at Columbia St / Webster Ave |
| id: 96 | station: Cambridge Main Library at Broadway / Trowbridge St |
| id: 97 | station: Harvard University River Houses at DeWolfe St / Cowperthwaite St |
| id: 98 | station: Charlestown - Warren St at Chelsea St |
| id: 99 | station: Wilson Square |
| id: 100 | station: Davis Square |
| id: 102 | station: Powder House Circle - Nathan Tufts Park |
| id: 103 | station: JFK Crossing at Harvard St. / Thorndike St. |
| id: 104 | station: Harvard University Radcliffe Quadrangle at Shepard St / Garden St |
| id: 105 | station: Lower Cambridgeport at Magazine St/Riverside Rd |
| id: 106 | station: Mt Pleasant Ave / Dudley Town Common |
| id: 107 | station: Ames St at Main St |
| id: 108 | station: Harvard University / SEAS Cruft-Pierce Halls at 29 Oxford St |
| id: 109 | station: TD Garden - Causeway at Portal Park #1 |
| id: 110 | station: Harvard University Gund Hall at Quincy St / Kirkland S |
| id: 111 | station: Packard Ave / Powderhouse Blvd |
| id: 113 | station: Andrew Station - Dorchester Ave at Humboldt Pl |
| id: 114 | station: Teele Square at 239 Holland St |
| id: 115 | station: Porter Square Station |
| id: 116 | station: 359 Broadway - Broadway at Fayette Street |
| id: 117 | station: Binney St / Sixth St |
| id: 118 | station: Linear Park - Mass. Ave. at Cameron Ave.  |
| id: 119 | station: South Boston Library - 646 East Broadway |
| id: 120 | station: Charles St at Beacon St |
| id: 121 | station: West Broadway at Dorchester St |
| id: 122 | station: BIDMC - Brookline at Burlington St |
| id: 123 | station: JP Center - Centre Street at Myrtle Street |
| id: 124 | station: Curtis Hall at South Street |
| id: 125 | station: Hyde Square at Barbara St |
| id: 126 | station: Egleston Square at Columbus Ave |
| id: 128 | station: E. Cottage St at Columbia Rd |
| id: 129 | station: Hayes Square at Vine St. |
| id: 130 | station: Upham's Corner - Ramsey St at Dudley St |
| id: 131 | station: Jackson Square T at Centre St |
| id: 133 | station: Green St T |
| id: 134 | station: New Balance Store - Boylston at Dartmouth |
| id: 135 | station: ID Building East |
| id: 136 | station: ID Building West |
| id: 137 | station: Magoun Square at Trum Field |
| id: 138 | station: Mass Ave at Newmarket Square |
| id: 139 | station: Dana Park |
| id: 140 | station: Danehy Park |
| id: 141 | station: Kendall Street |
| id: 142 | station: Alewife Station at Russell Field |
| id: 143 | station: EF - North Point Park |
| id: 145 | station: Rindge Avenue - O'Neill Library |
| id: 146 | station: Day Boulevard |
| id: 149 | station: Harvard University Transportation Services - 175 North Harvard St |
| id: 150 | station: State Street at Channel Center |
| id: 151 | station: John F Fitzgerald - Surface Road at India Street |
| id: 152 | station: Ink Block |
| id: 159 | station: Heath St at South Huntington |
| id: 160 | station: Wentworth Institute of Technology |
| id: 161 | station: West Broadway at D Street |
| id: 162 | station: Franklin Park - Seaver Street at Humbolt Ave |
| id: 163 | station: Lawn on D |
| id: 167 | station: Ryan Playground - Dorchester Avenue Station |
| id: 169 | station: Edwards Playground - Main Street & Eden Street |
| id: 170 | station: Franklin Park Zoo |
| id: 171 | station: Bunker Hill Community College |
| id: 173 | station: Savin Hill MBTA Station |
| id: 174 | station: Washington St at Brock St |
| id: 175 | station: Brighton Center |
| id: 176 | station: Lesley University |
| id: 177 | station: University Park |
| id: 178 | station: MIT Pacific St at Purrington St |
| id: 179 | station: MIT Vassar St |
| id: 180 | station: Mt Auburn |
| id: 186 | station: Congress St and Northern Ave |
| id: 189 | station: Kendall T |
| id: 190 | station: Nashua Street at Red Auerbach Way |
| id: 192 | station: Purchase St at Pearl St |
| id: 193 | station: Brookline Village - Station Street @ MBTA |
| id: 194 | station: Broadway St at Mt Pleasant St |



## Raison d'être

Going to the [map](http://www.hubwaytracker.com/)  (resizing, load time) multiple times a day will waste some of your precious time. If you are using Boston's bike sharing system on a regular basis, download this global package and get the number of available bikes and docks on a particular station instantly, right in your command line.


##### Building on top
Please send a PR, if could use these following to (additional features - nice design):

>update notifier : to alert user from cli that a bike is available - or - empty dock available (Hard but possible)

>configstore: to persist data through manipulation (might anable the above feature)

>chalk styling: making the updates and results colorful (nicer display)

#### Api decisions

No api to mess with. Enter the command `bikes` and the station id and get an instant update (number of bikes and docks available). Enter bikes only to get the updated list of stations ids and name. (response from api call)

> few lines of code.

## License
MIT © [Mohamed Hayibor](https://github.com/mohamedhayibor)
