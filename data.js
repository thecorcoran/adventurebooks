const bookData = {
    "The Hardy Boys": {
        description: "The first three books in the iconic series by Franklin W. Dixon, introducing the teenage detective brothers Frank and Joe Hardy.",
        books: [
            { title: "The Tower Treasure (1927)", published: "1927", blurb: "The Hardy Boys' first case involves a hunt for stolen jewels and securities from the Tower Mansion, owned by the family of their friend, Chet Morton.", link: "https://www.gutenberg.org/ebooks/5598", wordCount: "38,000", audioLink: "https://librivox.org/the-tower-treasure-by-franklin-w-dixon/" },
            { title: "The House on the Cliff (1927)", published: "1927", blurb: "A mysterious old house on a cliff is the center of a smuggling ring. Frank and Joe investigate the strange lights and activities emanating from the supposedly abandoned house.", link: "https://www.gutenberg.org/ebooks/5658", wordCount: "37,000", audioLink: "https://librivox.org/the-house-on-the-cliff-by-franklin-w-dixon/" },
            { title: "The Secret of the Old Mill (1927)", published: "1927", blurb: "The boys investigate a counterfeiting operation at a derelict old mill, facing danger as they uncover the criminals' secrets.", link: "https://www.gutenberg.org/ebooks/5717", wordCount: "37,000", audioLink: "https://librivox.org/the-secret-of-the-old-mill-by-franklin-w-dixon/" },
            { title: "The Missing Chums (1928)", published: "1928", blurb: "When two of the Hardy Boys' friends go missing, the brothers launch a search that leads them into a dangerous kidnapping plot.", link: "https://www.gutenberg.org/ebooks/5827", wordCount: "38,000", audioLink: "https://librivox.org/the-missing-chums-by-franklin-w-dixon/" }
        ]
    },
    "Alaska Adventures": {
        description: "Tales of survival, gold rushes, and the untamed wilderness of the Great North.",
        books: [
            { title: "The Call of the Wild by Jack London", published: "1903", blurb: "The story of Buck, a domesticated dog who is stolen from his California home and sold into service as a sled dog in Alaska during the Klondike Gold Rush.", link: "https://www.gutenberg.org/ebooks/215", wordCount: "32,000", audioLink: "https://librivox.org/the-call-of-the-wild-by-jack-london-2/" },
            { title: "White Fang by Jack London", published: "1906", blurb: "A companion novel to <em>The Call of the Wild</em>, this story follows the journey of a wild wolfdog from the wilderness to domestication.", link: "https://www.gutenberg.org/ebooks/910", wordCount: "73,000", audioLink: "https://librivox.org/white-fang-by-jack-london/" },
            { title: "The Gold Hunters: A Story of the Klondike by James Oliver Curwood", published: "1909", blurb: "Two young adventurers, Rod and Wabi, brave the dangers of the Canadian wilderness in search of a lost gold mine.", link: "https://www.gutenberg.org/ebooks/3064", wordCount: "51,000", audioLink: "https://librivox.org/the-gold-hunters-by-james-oliver-curwood/" },
            { title: "The Wolf Hunters: A Tale of the Great North", published: "1908", blurb: "A prequel to 'The Gold Hunters,' this story follows Rod and Wabi as they face starvation and peril while hunting wolves for bounty.", link: "https://www.gutenberg.org/ebooks/3063", wordCount: "48,000", audioLink: "https://librivox.org/the-wolf-hunters-by-james-oliver-curwood/" }
        ]
    },
    "Pirate Adventures": {
        description: "Swashbuckling tales of buccaneers, buried treasure, and life on the high seas.",
        books: [
            { title: "Treasure Island by Robert Louis Stevenson", published: "1883", blurb: "A timeless tale of pirates, buried gold, and mutiny on the high seas, as young Jim Hawkins sets off on an expedition to a mysterious island.", link: "https://www.gutenberg.org/ebooks/120", wordCount: "70,000", audioLink: "https://librivox.org/treasure-island-by-robert-louis-stevenson/" },
            { title: "Captain Blood: His Odyssey by Rafael Sabatini", published: "1922", blurb: "An Irish physician is wrongly convicted of treason and sold into slavery, only to escape and become the most feared pirate captain on the Spanish Main.", link: "https://www.gutenberg.org/ebooks/1999", wordCount: "117,000", audioLink: "https://librivox.org/captain-blood-by-rafael-sabatini/" },
            { title: "Howard Pyle's Book of Pirates by Howard Pyle", published: "1921", blurb: "A collection of thrilling tales and beautiful illustrations about the buccaneers and marooners of the Spanish Main, compiled by the famous author and artist.", link: "https://www.gutenberg.org/ebooks/19513", wordCount: "71,000", audioLink: "https://librivox.org/howard-pyles-book-of-pirates-by-howard-pyle/" },
            { title: "The Black Buccaneer by Stephen W. Meader", published: "1920", blurb: "A thrilling story of a boy caught up in the world of pirates and adventure off the American coast in the early 18th century.", link: "https://www.gutenberg.org/ebooks/65403", wordCount: "68,000" } // No LibriVox link found
        ]
    },
    "Exploring the Unknown": {
        description: "Classic adventures of exploration, lost worlds, and journeys to fantastic places.",
        books: [
            { title: "The Lost World by Arthur Conan Doyle", published: "1912", blurb: "The creator of Sherlock Holmes sends the irascible Professor Challenger on an expedition to a remote plateau in South America where dinosaurs and other prehistoric creatures still roam.", link: "https://www.gutenberg.org/ebooks/139", wordCount: "78,000", audioLink: "https://librivox.org/the-lost-world-by-sir-arthur-conan-doyle/" },
            { title: "20,000 Leagues Under the Seas by Jules Verne", published: "1870", blurb: "Professor Aronnax and his companions are captured by the enigmatic Captain Nemo and taken on an extraordinary voyage aboard the futuristic submarine, the Nautilus.", link: "https://www.gutenberg.org/ebooks/164", wordCount: "103,000", audioLink: "https://librivox.org/twenty-thousand-leagues-under-the-sea-by-jules-verne/" },
            { title: "Journey to the Center of the Earth by Jules Verne", published: "1864", blurb: "A German professor, his nephew, and their guide descend into an Icelandic volcano to discover a fantastic subterranean world.", link: "https://www.gutenberg.org/ebooks/18857", wordCount: "85,000", audioLink: "https://librivox.org/a-journey-to-the-interior-of-the-earth-by-jules-verne/" }
        ]
    },
    "Sci-Fi by H.G. Wells": {
        description: "Pioneering works of science fiction from one of the genre's most important authors.",
        books: [
            { title: "The War of the Worlds", published: "1898", blurb: "A classic tale of Martian invasion, chronicling the chaos and destruction as humanity fights for survival against technologically superior extraterrestrials.", link: "https://www.gutenberg.org/ebooks/36", wordCount: "60,000", audioLink: "https://librivox.org/the-war-of-the-worlds-by-h-g-wells/" },
            { title: "The Time Machine", published: "1895", blurb: "An English scientist invents a device that allows him to travel through time, journeying to the distant future to witness the fate of humanity, divided into two species: the gentle Eloi and the subterranean Morlocks.", link: "https://www.gutenberg.org/ebooks/35", wordCount: "33,000", audioLink: "https://librivox.org/the-time-machine-by-h-g-wells/" },
            { title: "The Invisible Man", published: "1897", blurb: "A brilliant but reckless scientist discovers the secret to invisibility, but his inability to reverse the process drives him to madness and a reign of terror.", link: "https://www.gutenberg.org/ebooks/5230", wordCount: "57,000", audioLink: "https://librivox.org/the-invisible-man-by-h-g-wells/" },
            { title: "The First Men in the Moon", published: "1901", blurb: "Two men travel to the moon in a homemade spacecraft and discover a complex, insect-like alien civilization living beneath the surface.", link: "https://www.gutenberg.org/ebooks/1013", wordCount: "70,000", audioLink: "https://librivox.org/the-first-men-in-the-moon-by-h-g-wells/" }
        ]
    }
};