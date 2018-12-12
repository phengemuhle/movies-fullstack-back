
exports.seed = (knex, Promise) => {
    return knex('movies').del()
        .then(function () {
            return knex('movies').insert([
                {
                    title : "Star Wars: Episode I - The Phantom Menace",
                    description : "Obi-Wan Kenobi (Ewan McGregor) is a young apprentice Jedi knight under the tutelage of Qui-Gon Jinn (Liam Neeson) ; Anakin Skywalker (Jake Lloyd), who will later father Luke Skywalker and become known as Darth Vader, is just a 9-year-old boy. When the Trade Federation cuts off all routes to the planet Naboo, Qui-Gon and Obi-Wan are assigned to settle the matter.",
                    main_characters :"Qui-Gon Jinn, Obi-Wan Kenobi, Anakin Skywalker, Padmé Amidala, Jar Jar Binks, Darth Maul",
                    rating:0,
                    year: 1999,
                    director:"George Lucas",
                    poster : "https://images-na.ssl-images-amazon.com/images/I/51dnPvQrJ6L.jpg"
                },
                {
                    title : "Star Wars: Episode II - Attack of the Clones",
                    description : "Set ten years after the events of The Phantom Menace, the Republic continues to be mired in strife and chaos. A separatist movement encompassing hundreds of planets and powerful corporate alliances poses new threats to the galaxy that even the Jedi cannot stem. These moves, long planned by an as yet unrevealed and powerful force, lead to the beginning of the Clone Wars -- and the beginning of the end of the Republic.",
                    main_characters : "Obi-Wan Kenobi, Anakin Skywalker, Count Dooku, Padmé Amidala, Mace Windu, Yoda, Jango Fett, Supreme Chancellor Palpatine",
                    rating:0,
                    year: 2002,
                    director:"George Lucas",
                    poster : "https://images-na.ssl-images-amazon.com/images/I/61nFfWio-sL._SY679_.jpg"
                },
                {
                    title : "Star Wars: Episode III - Revenge of the Sith",
                    description : "It has been three years since the Clone Wars began. Jedi Master Obi-Wan Kenobi (Ewan McGregor) and Jedi Knight Anakin Skywalker (Hayden Christensen) rescue Chancellor Palpatine (Ian McDiarmid) from General Grievous, the commander of the droid armies, but Grievous escapes. Suspicions are raised within the Jedi Council concerning Chancellor Palpatine, with whom Anakin has formed a bond. Asked to spy on the chancellor, and full of bitterness toward the Jedi Council, Anakin embraces the Dark Side.",
                    main_characters : "Obi-Wan Kenobi, Anakin Skywalker, Count Dooku, Padmé Amidala, Mace Windu, Yoda, C-3PO, Supreme Chancellor Palpatine",
                    rating:0,
                    year: 2005,
                    director:"George Lucas",
                    poster : "https://images-na.ssl-images-amazon.com/images/I/61nAp2cNlbL._SY679_.jpg",
                },
                {
                    title : "Star Wars: Episode IV - A New Hope",
                    description : "The Imperial Forces -- under orders from cruel Darth Vader (David Prowse) -- hold Princess Leia (Carrie Fisher) hostage, in their efforts to quell the rebellion against the Galactic Empire. Luke Skywalker (Mark Hamill) and Han Solo (Harrison Ford), captain of the Millennium Falcon, work together with the companionable droid duo R2-D2 (Kenny Baker) and C-3PO (Anthony Daniels) to rescue the beautiful princess, help the Rebel Alliance, and restore freedom and justice to the Galaxy.",
                    main_characters : "Luke Skywalker, Han Solo, Princess Leia Organa, Ben Kenobi, Darth Vader, C-3P0, R2-D2, Chewbacca",
                    rating:0,
                    year: 1977,
                    director:"George Lucas",
                    poster : "https://images-na.ssl-images-amazon.com/images/I/51feXTBzenL.jpg",
                },
                {
                    title : "Star Wars: Episode V - The Empire Strikes Back",
                    description : "The adventure continues in this Star Wars sequel. Luke Skywalker (Mark Hamill), Han Solo (Harrison Ford), Princess Leia (Carrie Fisher) and Chewbacca (Peter Mayhew) face attack by the Imperial forces and its AT-AT walkers on the ice planet Hoth. While Han and Leia escape in the Millennium Falcon, Luke travels to Dagobah in search of Yoda. Only with the Jedi master's help will Luke survive when the dark side of the Force beckons him into the ultimate duel with Darth Vader (David Prowse).",
                    main_characters : "Luke Skywalker, Han Solo, Princess Leia Organa, Darth Vader, C-3P0, R2-D2, Chewbacca, Lando Calrissian, Boba Fett",
                    rating:0,
                    year: 1980,
                    director:"George Lucas",
                    poster : "http://neoavatara.com/blog/wp-content/uploads/2010/05/empire_strikes_back_style_a.jpg"
                },
                {
                    title : "Star Wars: Episode VI - Return of the Jedi",
                    description : "Luke Skywalker (Mark Hamill) battles horrible Jabba the Hut and cruel Darth Vader to save his comrades in the Rebel Alliance and triumph over the Galactic Empire. Han Solo (Harrison Ford) and Princess Leia (Carrie Fisher) reaffirm their love and team with Chewbacca, Lando Calrissian (Billy Dee Williams), the Ewoks and the androids C-3PO and R2-D2 to aid in the disruption of the Dark Side and the defeat of the evil emperor.",
                    main_characters : "Luke Skywalker, Han Solo, Princess Leia Organa, Darth Vader, C-3P0, Chewbacca, The Emperor, Boba Fett",
                    rating:0,
                    year: 1983,
                    director:"George Lucas",
                    poster : "https://i.ebayimg.com/images/g/2h0AAOSwnHZYZVtf/s-l640.jpg",
                },
                {
                    title : "Star Wars: Episode VII - The Force Awakens",
                    description : "Thirty years after the defeat of the Galactic Empire, the galaxy faces a new threat from the evil Kylo Ren (Adam Driver) and the First Order. When a defector named Finn (John Boyega) crash-lands on a desert planet, he meets Rey (Daisy Ridley), a tough scavenger whose droid contains a top-secret map. Together, the young duo joins forces with Han Solo (Harrison Ford) to make sure the Resistance receives the intelligence concerning the whereabouts of Luke Skywalker (Mark Hamill), the last of the Jedi Knights.",
                    main_characters : "Luke Skywalker, Han Solo, Princess Leia Organa, Kylo Ren, C-3P0, Chewbacca, Rey, Finn, BB-8",
                    rating:0,
                    year: 2015,
                    director:"George Lucas",
                    poster : "https://images-na.ssl-images-amazon.com/images/I/71YwMxOTQXL._SY550_.jpg",
                },
                {
                    title : "Star Wars: Episode VIII - The Last Jedi",
                    description : "Luke Skywalker's peaceful and solitary existence gets upended when he encounters Rey, a young woman who shows strong signs of the Force. Her desire to learn the ways of the Jedi forces Luke to make a decision that changes their lives forever. Meanwhile, Kylo Ren and General Hux lead the First Order in an all-out assault against Leia and the Resistance for supremacy of the galaxy.",
                    main_characters : "Luke Skywalker, Kylo Ren, Princess Leia Organa, Chewbacca, Rey, Finn, BB-8",
                    rating:0,
                    year: 2017,
                    director:"George Lucas",
                    poster : "https://lumiere-a.akamaihd.net/v1/images/sb_payoff_1-sht_v6_lg_tm_lg_e528c9e9.jpeg?region=0%2C0%2C810%2C1200",
                },
                {
                    title: "The Grinch",
                    director: "Yarrow Cheney",
                    description : "The Grinch and his loyal dog, Max, live a solitary existence inside a cave on Mount Crumpet. His main source of aggravation comes during Christmastime when his neighbors in Whoville celebrate the holidays with a bang. When the Whos decide to make Christmas bigger and brighter, the disgruntled Grinch realizes there is one way to gain peace and quiet. With help from Max, the green grump hatches a scheme to pose as Santa Claus, steal Christmas and silence the Whos' holiday cheer once and for all.",
                    year: 2018,
                    main_characters : "Mr. Grinch",
                    rating: 4,
                    poster: "https://uk.imageservice.sky.com/contentid/A5EK6sKrAaycfSWfyRzHJ/BOXART/237/356"
                },
                {
                    title: "Creed II",
                    director: "Steven Caple Jr.",
                    description : "In 1985, Russian boxer Ivan Drago killed former U.S. champion Apollo Creed in a tragic match that stunned the world. Against the wishes of trainer Rocky Balboa, Apollo's son Adonis Johnson accepts a challenge from Drago's son -- another dangerous fighter. Under guidance from Rocky, Adonis trains for the showdown of his life -- a date with destiny that soon becomes his obsession. Now, Johnson and Balboa must confront their shared legacy as the past comes back to haunt each man.",
                    main_characters : "Sir. Ceed",
                    year: 2018,
                    rating: 2,
                    poster: "https://www.out.com/sites/out.com/files/2018/06/19/creed_ii-_poster_0.jpg"
                },
                {
                    title: "Bohemian Rhapsody",
                    director: "Bryan Singer",
                    description : "Bohemian Rhapsody is a foot-stomping celebration of Queen, their music and their extraordinary lead singer Freddie Mercury. Freddie defied stereotypes and shattered convention to become one of the most beloved entertainers on the planet. The film traces the meteoric rise of the band through their iconic songs and revolutionary sound. They reach unparalleled success, but in an unexpected turn Freddie, surrounded by darker influences, shuns Queen in pursuit of his solo career. Having suffered greatly without the collaboration of Queen, Freddie manages to reunite with his bandmates just in time for Live Aid. While bravely facing a recent AIDS diagnosis, Freddie leads the band in one of the greatest performances in the history of rock music. Queen cements a legacy that continues to inspire outsiders, dreamers and music lovers to this day.",
                    main_characters : "Jesus",
                    year: 2018,
                    rating: 3,
                    poster: "https://m.media-amazon.com/images/M/MV5BNDg2NjIxMDUyNF5BMl5BanBnXkFtZTgwMzEzNTE1NTM@._V1_.jpg"
                },
                {
                    title: "Elf",
                    director: "Jon Favreau",
                    description : "Buddy (Will Ferrell) was accidentally transported to the North Pole as a toddler and raised to adulthood among Santa's elves. Unable to shake the feeling that he doesn't fit in, the adult Buddy travels to New York, in full elf uniform, in search of his real father. As it happens, this is Walter Hobbs (James Caan), a cynical businessman. After a DNA test proves this, Walter reluctantly attempts to start a relationship with the childlike Buddy with increasingly chaotic results.",
                    main_characters : "Buddy, Small Lanister",
                    year: 2003,
                    rating: 5,
                    poster: "https://i.pinimg.com/originals/f5/7f/ef/f57fef9e27ec21765c6669ee9dc055b7.jpg"
                },
                {
                    title: "Venom",
                    director: "Ruben Fleischer",
                    description : "Journalist Eddie Brock is trying to take down Carlton Drake, the notorious and brilliant founder of the Life Foundation. While investigating one of Drake's experiments, Eddie's body merges with the alien Venom -- leaving him with superhuman strength and power. Twisted, dark and fueled by rage, Venom tries to control the new and dangerous abilities that Eddie finds so intoxicating.",
                    main_characters : "Venom, Spider Man",
                    year: 2018,
                    rating: 4,
                    poster: "https://www.joblo.com/assets/images/oldsite/posters/images/full/Venom-poster-6.jpg"
                },
                {
                    title: "Without a Paddle",
                    director: "Steven Brill",
                    description : "After their friend Billy (Anthony Starr) dies, Tom (Dax Shepard), Jerry (Matthew Lillard) and Dan (Seth Green) go on a camping trip to honor his memory. The campsite, however, has special significance. Billy believed famous airplane hijacker D.B. Cooper hid money in the area, and his friends aim to find it. Unfortunately, they are not prepared for the adventure. After falling over a waterfall, they are left to the mercy of wild animals and a harsh wilderness terrain.",
                    main_characters : "Some Stoners",
                    year: 2004,
                    rating: 5,
                    poster: "https://m.media-amazon.com/images/M/MV5BMjA0MTE2MDk2MF5BMl5BanBnXkFtZTYwMzg0NTc2._V1_UY1200_CR89,0,630,1200_AL_.jpg"
                },
                {
                    title: "The Waterboy",
                    director: "Frank Coraci",
                    description : "Raised by his overprotective mother, Helen (Kathy Bates), Bobby Boucher Jr. (Adam Sandler) is the water boy for a successful college football team coached by Red Beaulieu (Jerry Reed). When Beaulieu fires Bobby, he takes up the same position for a losing rival team, led by despairing Coach Klein (Henry Winkler). After witnessing Bobby beat up a player who teased him too much, Klein adds him to the roster as a linebacker. Soon, Klein's players are championship contenders.",
                    main_characters : "Vickey Valencort, Mama, Bobby Bushay",
                    year: 1998,
                    rating: 5,
                    poster: "https://images-na.ssl-images-amazon.com/images/I/51a%2BOoShoLL.jpg"
                },
            ]);
        });
};