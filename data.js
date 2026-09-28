const bookData = {
    "Alaska & Polar Adventures": {
        description: "Chronicles of Arctic & Antarctic expeditions, gold rush stampedes, subarctic homesteads, dog sled trails, and the untamed wilderness of the Great North.",
        books: [
            {
                title: "The Call of the Wild",
                author: "Jack London",
                published: "1903",
                wordCount: "32,000",
                blurb: "Stolen from a sunny California estate, the St. Bernard–Scotch Collie mix Buck is thrust into the brutal existence of a Yukon sled dog during the Klondike Gold Rush, returning to the primordial wild.",
                link: "https://www.gutenberg.org/ebooks/215",
                audioLink: "https://librivox.org/the-call-of-the-wild-by-jack-london-2/"
            },
            {
                title: "White Fang",
                author: "Jack London",
                published: "1906",
                wordCount: "73,000",
                blurb: "The inverse companion to <em>The Call of the Wild</em>, charting the survival and gradual domestication of a wild wolfdog in the frozen wilderness of Canada's Northwest Territories.",
                link: "https://www.gutenberg.org/ebooks/910",
                audioLink: "https://librivox.org/white-fang-by-jack-london/"
            },
            {
                title: "Smoke Bellew",
                author: "Jack London",
                published: "1912",
                wordCount: "83,000",
                blurb: "Christopher Bellew, a soft San Francisco journalist, joins the stampede across Chilkoot Pass into the Klondike, transforming into the hardy frontier scout 'Smoke Bellew.'",
                link: "https://www.gutenberg.org/ebooks/1308",
                audioLink: "https://librivox.org/smoke-bellew-by-jack-london/"
            },
            {
                title: "A Daughter of the Snows",
                author: "Jack London",
                published: "1902",
                wordCount: "80,000",
                blurb: "Jack London's first novel, portraying Frona Welse, a strong-willed Stanford-educated woman who returns to the Yukon frontier amidst sourdoughs, prospectors, and Arctic blizzards.",
                link: "https://www.gutenberg.org/ebooks/1155",
                audioLink: "https://librivox.org/a-daughter-of-the-snows-by-jack-london/"
            },
            {
                title: "Burning Daylight",
                author: "Jack London",
                published: "1910",
                wordCount: "110,000",
                blurb: "The epic saga of Elam Harnish, known across the Yukon as 'Burning Daylight,' who stakes a gold fortune in the Klondike before battling the ruthless financial trusts of civilization.",
                link: "https://www.gutenberg.org/ebooks/1162",
                audioLink: "https://librivox.org/burning-daylight-by-jack-london/"
            },
            {
                title: "Love of Life and Other Stories",
                author: "Jack London",
                published: "1906",
                wordCount: "55,000",
                blurb: "A legendary collection of subarctic survival tales, highlighted by the title story of a starving gold prospector crawling across the barren tundra stalked by a dying wolf.",
                link: "https://www.gutenberg.org/ebooks/710",
                audioLink: "https://librivox.org/love-of-life-and-other-stories-by-jack-london/"
            },
            {
                title: "The Spoilers",
                author: "Rex Beach",
                published: "1906",
                wordCount: "85,000",
                blurb: "Based on true events in the 1900 Nome Gold Rush, where corrupt politicians, claim-jumpers, and a federal judge scheme to dispossess honest Alaskan miners.",
                link: "https://www.gutenberg.org/ebooks/1168",
                audioLink: "https://librivox.org/the-spoilers-by-rex-beach/"
            },
            {
                title: "The Silver Horde",
                author: "Rex Beach",
                published: "1909",
                wordCount: "92,000",
                blurb: "A dramatic frontier struggle along Alaska's rugged shoreline, pitting independent pioneers against a monopolistic salmon cannery trust in Bristol Bay.",
                link: "https://www.gutenberg.org/ebooks/4075",
                audioLink: "https://librivox.org/the-silver-horde-by-rex-beach/"
            },
            {
                title: "The Barrier",
                author: "Rex Beach",
                published: "1908",
                wordCount: "85,000",
                blurb: "Intrigue, frontier romance, and gold prospecting at an isolated trading post on the Alaskan Yukon riverbank.",
                link: "https://www.gutenberg.org/ebooks/1167",
                audioLink: "https://librivox.org/the-barrier-by-rex-beach/"
            },
            {
                title: "The Iron Trail",
                author: "Rex Beach",
                published: "1913",
                wordCount: "100,000",
                blurb: "The daring construction of the Copper River and Northwestern Railway through treacherous Alaskan canyons, glaciers, and winter freezes.",
                link: "https://www.gutenberg.org/ebooks/1397",
                audioLink: "https://librivox.org/the-iron-trail-by-rex-beach/"
            },
            {
                title: "The Gold Hunters: A Story of the Klondike",
                author: "James Oliver Curwood",
                published: "1909",
                wordCount: "51,000",
                blurb: "Two intrepid companions trek into the subarctic wilderness in search of a lost gold vein, facing wilderness perils, hostile competitors, and starvation.",
                link: "https://www.gutenberg.org/ebooks/3064",
                audioLink: "https://librivox.org/the-gold-hunters-by-james-oliver-curwood/"
            },
            {
                title: "The Wolf Hunters: A Tale of the Great North",
                author: "James Oliver Curwood",
                published: "1908",
                wordCount: "48,000",
                blurb: "Young adventurers brave winter hardships and snowdrifts while hunting timber wolves across the Canadian and northern frontiers.",
                link: "https://www.gutenberg.org/ebooks/3063",
                audioLink: "https://librivox.org/the-wolf-hunters-by-james-oliver-curwood/"
            },
            {
                title: "The Grizzly King: A Romance of the Wild",
                author: "James Oliver Curwood",
                published: "1916",
                wordCount: "45,000",
                blurb: "The wilderness classic that inspired the film <em>The Bear</em>, depicting the epic duel of wits and mutual respect between a hunter and Thor, a giant subarctic grizzly.",
                link: "https://www.gutenberg.org/ebooks/16075",
                audioLink: "https://librivox.org/the-grizzly-king-by-james-oliver-curwood/"
            },
            {
                title: "Nomads of the North",
                author: "James Oliver Curwood",
                published: "1919",
                wordCount: "50,000",
                blurb: "An extraordinary tale of northern survival and cross-species bonding between Neewa the black bear cub and Miki the pup, cast adrift in the wilderness.",
                link: "https://www.gutenberg.org/ebooks/3062",
                audioLink: "https://librivox.org/nomads-of-the-north-by-james-oliver-curwood/"
            },
            {
                title: "Kazan: The Dog That Was a Wolf",
                author: "James Oliver Curwood",
                published: "1914",
                wordCount: "60,000",
                blurb: "Three-quarters dog and one-quarter wolf, Kazan is torn between his wild wolf pack in the subarctic barrens and his loyalty to a gentle human master.",
                link: "https://www.gutenberg.org/ebooks/2915",
                audioLink: "https://librivox.org/kazan-by-james-oliver-curwood/"
            },
            {
                title: "The River's End",
                author: "James Oliver Curwood",
                published: "1919",
                wordCount: "55,000",
                blurb: "A thrilling pursuit across the frozen subarctic barrens by the Royal Northwest Mounted Police, leading to an extraordinary double-identity drama.",
                link: "https://www.gutenberg.org/ebooks/2202",
                audioLink: "https://librivox.org/the-rivers-end-by-james-oliver-curwood/"
            },
            {
                title: "Travels in Alaska",
                author: "John Muir",
                published: "1915",
                wordCount: "75,000",
                blurb: "John Muir's luminous firsthand record of his canoe expeditions through southeastern Alaska, navigating fjords, icefields, and native coastal settlements.",
                link: "https://www.gutenberg.org/ebooks/34608",
                audioLink: "https://librivox.org/travels-in-alaska-by-john-muir/"
            },
            {
                title: "Stickeen: The Story of a Dog",
                author: "John Muir",
                published: "1909",
                wordCount: "10,000",
                blurb: "Muir's thrilling, true-to-life account of crossing a treacherous, crevasse-riddled Alaskan glacier in an ice storm with a brave little dog named Stickeen.",
                link: "https://www.gutenberg.org/ebooks/11928",
                audioLink: "https://librivox.org/stickeen-by-john-muir/"
            },
            {
                title: "South: The Story of Shackleton's Last Expedition (1914–1917)",
                author: "Ernest Shackleton",
                published: "1919",
                wordCount: "130,000",
                blurb: "The ultimate polar survival saga: after the <em>Endurance</em> is crushed by Antarctic ice, Shackleton leads his crew on an epic journey across ice floes and the stormy Southern Ocean.",
                link: "https://www.gutenberg.org/ebooks/5199",
                audioLink: "https://librivox.org/south-by-sir-ernest-shackleton/"
            },
            {
                title: "The Worst Journey in the World",
                author: "Apsley Cherry-Garrard",
                published: "1922",
                wordCount: "250,000",
                blurb: "A firsthand masterpiece of Antarctic exploration detailing Robert Falcon Scott's <em>Terra Nova</em> expedition and the perilous midwinter search for Emperor penguin eggs in 70-below darkness.",
                link: "https://www.gutenberg.org/ebooks/14363",
                audioLink: "https://librivox.org/the-worst-journey-in-the-world-by-apsley-cherry-garrard/"
            },
            {
                title: "The North-West Passage",
                author: "Roald Amundsen",
                published: "1908",
                wordCount: "210,000",
                blurb: "The historic firsthand account of Amundsen's three-year expedition aboard the 47-ton fishing smack <em>Gjøa</em>, achieving the first maritime transit of the Northwest Passage.",
                link: "https://www.gutenberg.org/ebooks/44645",
                audioLink: null
            },
            {
                title: "Farthest North",
                author: "Fridtjof Nansen",
                published: "1897",
                wordCount: "280,000",
                blurb: "The classic account of the Norwegian Polar Expedition aboard the specially designed <em>Fram</em>, drifting for years in the polar pack ice, followed by a daring dash on skis toward the North Pole.",
                link: "https://www.gutenberg.org/ebooks/35251",
                audioLink: "https://librivox.org/farthest-north-vol-1-by-fridtjof-nansen/"
            }
        ]
    },
    "Sea Stories & Maritime Adventures": {
        description: "Tales of tall ships, whaling voyages, naval battles, pirate swashbucklers, solo circumnavigations, and life before the mast across the world's great oceans.",
        books: [
            {
                title: "The Sea-Wolf",
                author: "Jack London",
                published: "1904",
                wordCount: "95,000",
                blurb: "Rescued from a ferry disaster in San Francisco Bay, literary gentleman Humphrey van Weyden is press-ganged aboard the seal-hunting schooner <em>Ghost</em> under the brutal, philosophical Wolf Larsen bound for the Bering Sea.",
                link: "https://www.gutenberg.org/ebooks/1074",
                audioLink: "https://librivox.org/the-sea-wolf-by-jack-london/"
            },
            {
                title: "The Cruise of the Snark",
                author: "Jack London",
                published: "1911",
                wordCount: "72,000",
                blurb: "Jack London's vivid, real-life memoir sailing his self-built 45-foot ketch <em>Snark</em> across the treacherous waters of the South Pacific and Hawaii.",
                link: "https://www.gutenberg.org/ebooks/2429",
                audioLink: "https://librivox.org/the-cruise-of-the-snark-by-jack-london/"
            },
            {
                title: "Tales of the Fish Patrol",
                author: "Jack London",
                published: "1905",
                wordCount: "36,000",
                blurb: "London's spirited autobiographical stories of high-speed boat chases and nautical clashes while serving with the California Fish Patrol on San Francisco Bay.",
                link: "https://www.gutenberg.org/ebooks/1157",
                audioLink: "https://librivox.org/tales-of-the-fish-patrol-by-jack-london/"
            },
            {
                title: "Moby-Dick; or, The Whale",
                author: "Herman Melville",
                published: "1851",
                wordCount: "206,000",
                blurb: "Ishmael signs aboard the Nantucket whaling ship <em>Pequod</em> under Captain Ahab, embarking on a monomaniacal global pursuit of the legendary white sperm whale.",
                link: "https://www.gutenberg.org/ebooks/2701",
                audioLink: "https://librivox.org/moby-dick-by-herman-melville/"
            },
            {
                title: "Typee: A Peep at Polynesian Life",
                author: "Herman Melville",
                published: "1846",
                wordCount: "95,000",
                blurb: "Melville's sensational semi-autobiographical debut: after deserting a harsh whaling ship in the Marquesas Islands, two sailors find themselves living among the secluded Typee valley dwellers.",
                link: "https://www.gutenberg.org/ebooks/1900",
                audioLink: "https://librivox.org/typee-by-herman-melville/"
            },
            {
                title: "Omoo: A Narrative of Adventures in the South Seas",
                author: "Herman Melville",
                published: "1847",
                wordCount: "100,000",
                blurb: "The sequel to <em>Typee</em>, recounting a shipboard mutiny aboard the whaler <em>Lucy Ann</em> and subsequent maritime wanderings across Tahiti.",
                link: "https://www.gutenberg.org/ebooks/2189",
                audioLink: "https://librivox.org/omoo-by-herman-melville/"
            },
            {
                title: "Two Years Before the Mast",
                author: "Richard Henry Dana Jr.",
                published: "1840",
                wordCount: "140,000",
                blurb: "A Harvard student's unsparing firsthand memoir of service as a common sailor on a merchant brig rounding Cape Horn to California.",
                link: "https://www.gutenberg.org/ebooks/4276",
                audioLink: "https://librivox.org/two-years-before-the-mast-by-richard-henry-dana-jr/"
            },
            {
                title: "Sailing Alone Around the World",
                author: "Joshua Slocum",
                published: "1900",
                wordCount: "68,000",
                blurb: "The extraordinary firsthand narrative of Captain Joshua Slocum, the first person to sail single-handedly around the world in his rebuilt 37-foot oyster sloop, the <em>Spray</em>.",
                link: "https://www.gutenberg.org/ebooks/6317",
                audioLink: "https://librivox.org/sailing-alone-around-the-world-by-joshua-slocum/"
            },
            {
                title: "Captains Courageous",
                author: "Rudyard Kipling",
                published: "1897",
                wordCount: "47,000",
                blurb: "A spoiled teenage millionaire falls overboard from an ocean liner and is rescued by a Gloucester fishing schooner, learning seamanship and character on the Grand Banks.",
                link: "https://www.gutenberg.org/ebooks/2186",
                audioLink: "https://librivox.org/captains-courageous-by-rudyard-kipling/"
            },
            {
                title: "Typhoon",
                author: "Joseph Conrad",
                published: "1902",
                wordCount: "30,000",
                blurb: "The stubborn Captain MacWhirr navigates the steamship <em>Nan-Shan</em> directly into the terrifying heart of a catastrophic South China Sea cyclone.",
                link: "https://www.gutenberg.org/ebooks/1142",
                audioLink: "https://librivox.org/typhoon-by-joseph-conrad/"
            },
            {
                title: "Lord Jim",
                author: "Joseph Conrad",
                published: "1900",
                wordCount: "132,000",
                blurb: "Haunted by a momentary failure of nerve during a crisis aboard the pilgrim ship <em>Patna</em>, young sailor Jim seeks redemption in the remote Malay Archipelago.",
                link: "https://www.gutenberg.org/ebooks/1783",
                audioLink: "https://librivox.org/lord-jim-by-joseph-conrad/"
            },
            {
                title: "The Nigger of the 'Narcissus'",
                author: "Joseph Conrad",
                published: "1897",
                wordCount: "53,000",
                blurb: "Conrad's acclaimed novella capturing the tensions, camaraderie, and near-catastrophe of a merchant sailing crew battling an Atlantic storm around the Cape of Good Hope.",
                link: "https://www.gutenberg.org/ebooks/17731",
                audioLink: "https://librivox.org/the-nigger-of-the-narcissus-by-joseph-conrad/"
            },
            {
                title: "Youth: A Narrative",
                author: "Joseph Conrad",
                published: "1898",
                wordCount: "14,000",
                blurb: "Charles Marlow's poetic recollection of his maiden voyage to the Far East as second mate aboard the doomed, coal-carrying barque <em>Judea</em>.",
                link: "https://www.gutenberg.org/ebooks/525",
                audioLink: "https://librivox.org/youth-a-narrative-by-joseph-conrad/"
            },
            {
                title: "Treasure Island",
                author: "Robert Louis Stevenson",
                published: "1883",
                wordCount: "70,000",
                blurb: "Young Jim Hawkins discovers a dead buccaneer's map, chartering the schooner <em>Hispaniola</em> on an expedition that turns into a lethal battle with the mutinous Long John Silver.",
                link: "https://www.gutenberg.org/ebooks/120",
                audioLink: "https://librivox.org/treasure-island-by-robert-louis-stevenson/"
            },
            {
                title: "Kidnapped",
                author: "Robert Louis Stevenson",
                published: "1886",
                wordCount: "78,000",
                blurb: "Young David Balfour is betrayed and shanghaied aboard the brig <em>Covenant</em> bound for the Carolinas, surviving shipwreck on the wild Scottish coast alongside Jacobite rebel Alan Breck Stewart.",
                link: "https://www.gutenberg.org/ebooks/421",
                audioLink: "https://librivox.org/kidnapped-by-robert-louis-stevenson/"
            },
            {
                title: "Captain Blood: His Odyssey",
                author: "Rafael Sabatini",
                published: "1922",
                wordCount: "117,000",
                blurb: "Wrongfully convicted of treason for attending a wounded rebel, Irish physician Peter Blood is sold into Caribbean slavery before capturing a Spanish warship and becoming a legendary pirate captain.",
                link: "https://www.gutenberg.org/ebooks/1999",
                audioLink: "https://librivox.org/captain-blood-by-rafael-sabatini/"
            },
            {
                title: "The Sea-Hawk",
                author: "Rafael Sabatini",
                published: "1915",
                wordCount: "105,000",
                blurb: "Betrayed and sold into Spanish galley slavery by his half-brother, Cornish gentleman Oliver Tressilian escapes and rises to command Barbary corsairs under the moniker Sakr-el-Bahr.",
                link: "https://www.gutenberg.org/ebooks/1997",
                audioLink: "https://librivox.org/the-sea-hawk-by-rafael-sabatini/"
            },
            {
                title: "Twenty Thousand Leagues Under the Sea",
                author: "Jules Verne",
                published: "1870",
                wordCount: "103,000",
                blurb: "Professor Aronnax, Conseil, and master harpooner Ned Land are captured by Captain Nemo aboard the submersible <em>Nautilus</em>, exploring the ocean's profoundest depths and polar extremes.",
                link: "https://www.gutenberg.org/ebooks/164",
                audioLink: "https://librivox.org/twenty-thousand-leagues-under-the-sea-by-jules-verne/"
            },
            {
                title: "The Narrative of Arthur Gordon Pym of Nantucket",
                author: "Edgar Allan Poe",
                published: "1838",
                wordCount: "73,000",
                blurb: "Poe's only completed novel chronicles mutiny, shipwreck, and an eerie voyage into the uncharted Antarctic waters aboard the whaling brig <em>Grampus</em>.",
                link: "https://www.gutenberg.org/ebooks/2149",
                audioLink: "https://librivox.org/the-narrative-of-arthur-gordon-pym-of-nantucket-by-edgar-allan-poe/"
            },
            {
                title: "Howard Pyle's Book of Pirates",
                author: "Howard Pyle",
                published: "1921",
                wordCount: "71,000",
                blurb: "Classic illustrated chronicles of buccaneers, privateers, marooners, and buried Spanish treasures along the Spanish Main and Atlantic seaboard.",
                link: "https://www.gutenberg.org/ebooks/19513",
                audioLink: "https://librivox.org/howard-pyles-book-of-pirates-by-howard-pyle/"
            },
            {
                title: "The Black Buccaneer",
                author: "Stephen W. Meader",
                published: "1920",
                wordCount: "68,000",
                blurb: "Fourteen-year-old Jeremy Swan is abducted from the Maine coast by ruthless pirates in 1718, embarking on a dangerous struggle for survival and escape.",
                link: "https://www.gutenberg.org/ebooks/65403",
                audioLink: null
            },
            {
                title: "The Wreck of the Grosvenor",
                author: "William Clark Russell",
                published: "1877",
                wordCount: "120,000",
                blurb: "The premier Victorian maritime novel: when the tyrannical captain of the merchant ship <em>Grosvenor</em> pushes his crew to mutiny, second mate Royle must navigate the open sea to save the survivors.",
                link: "https://www.gutenberg.org/ebooks/10595",
                audioLink: "https://librivox.org/the-wreck-of-the-grosvenor-by-william-clark-russell/"
            },
            {
                title: "Toilers of the Sea",
                author: "Victor Hugo",
                published: "1866",
                wordCount: "150,000",
                blurb: "Set on the Channel Island of Guernsey, a solitary fisherman braves terrifying storms, shipwrecks, and sea monsters on a reef to salvage the engine of a stranded steamship.",
                link: "https://www.gutenberg.org/ebooks/5892",
                audioLink: "https://librivox.org/the-toilers-of-the-sea-by-victor-hugo/"
            }
        ]
    }
};