
exports.seed = (knex, Promise) => {
    return knex('movies').del()
        .then(function () {
            return knex('movies').insert([
                {
                    title : "Star Wars: Episode I - The Phantom Menace",
                    episode_number : "1",
                    main_characters : ["Qui-Gon Jinn", "Obi-Wan Kenobi", "Anakin Skywalker", "Padmé Amidala", "Jar Jar Binks", "Darth Maul"],
                    rating:0,
                    director:"George Luke",
                    poster : "https://images-na.ssl-images-amazon.com/images/I/51dnPvQrJ6L.jpg"
                },
                {
                    title : "Star Wars: Episode II - Attack of the Clones",
                    episode_number : "2",
                    main_characters : ["Obi-Wan Kenobi", "Anakin Skywalker", "Count Dooku", "Padmé Amidala", "Mace Windu", "Yoda", "Jango Fett", "Supreme Chancellor Palpatine"],
                    rating:0,
                    director:"George Luke",
                    poster : "https://images-na.ssl-images-amazon.com/images/I/61nFfWio-sL._SY679_.jpg"
                },
                {
                    title : "Star Wars: Episode III - Revenge of the Sith",
                    episode_number : "3",
                    main_characters : ["Obi-Wan Kenobi", "Anakin Skywalker", "Count Dooku", "Padmé Amidala", "Mace Windu", "Yoda", "C-3PO", "Supreme Chancellor Palpatine"],
                    rating:0,
                    director:"George Luke",
                    poster : "https://images-na.ssl-images-amazon.com/images/I/61nAp2cNlbL._SY679_.jpg",
                },
                {
                    title : "Star Wars: Episode IV - A New Hope",
                    episode_number : "4",
                    main_characters : ["Luke Skywalker", "Han Solo", "Princess Leia Organa", "Ben Kenobi", "Darth Vader", "C-3P0", "R2-D2", "Chewbacca"],
                    rating:0,
                    director:"George Luke",
                    poster : "https://images-na.ssl-images-amazon.com/images/I/51feXTBzenL.jpg",
                },
                {
                    title : "Star Wars: Episode V - The Empire Strikes Back",
                    episode_number : "5",
                    main_characters : ["Luke Skywalker", "Han Solo", "Princess Leia Organa", "Darth Vader", "C-3P0", "R2-D2", "Chewbacca", "Lando Calrissian", "Boba Fett"],
                    rating:0,
                    director:"George Luke",
                    poster : "http://neoavatara.com/blog/wp-content/uploads/2010/05/empire_strikes_back_style_a.jpg"
                },
                {
                    title : "Star Wars: Episode VI - Return of the Jedi",
                    episode_number : "6",
                    main_characters : ["Luke Skywalker", "Han Solo", "Princess Leia Organa", "Darth Vader", "C-3P0", "Chewbacca", "The Emperor", "Boba Fett"],
                    rating:0,
                    director:"George Luke",
                    poster : "https://i.ebayimg.com/images/g/2h0AAOSwnHZYZVtf/s-l640.jpg",
                }
            ]);
        });
};