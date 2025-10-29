    const url = 'https://api.themoviedb.org/3';
    const key = 'dc8156ce55167d01eef861adf0e52076'
    
    let genreMap = null;
    
    export const getGenres = async () => {
      if (genreMap) return genreMap;
      const response = await fetch(`${url}/genre/movie/list?api_key=${key}&language=en-US`);
      const data = await response.json();
      genreMap = data.genres.reduce((acc, genre) => {
        acc[genre.id] = genre.name;
        return acc;
      }, {});
      return genreMap;
    };

    const result = {
    "adult": false,
    "backdrop_path": "/bP6BqIljp4a3BqhxN7YPckcpKI.jpg",
    "belongs_to_collection": null,
    "budget": 0,
    "genres": [
        {
            "id": 28,
            "name": "Action"
        },
        {
            "id": 12,
            "name": "Adventure"
        },
        {
            "id": 18,
            "name": "Drama"
        },
        {
            "id": 36,
            "name": "History"
        }
    ],
    "homepage": "",
    "id": 1195631,
    "imdb_id": "tt22478818",
    "origin_country": [
        "GB"
    ],
    "original_language": "en",
    "original_title": "William Tell",
    "overview": "The narrative unfolds in the 14th Century, when the European nations vie for supremacy within the Holy Roman Empire. The ambitious Austrian Empire, desiring more land, invades neighbouring Switzerland, a serene and pastoral nation. Protagonist William Tell, a formerly peaceful hunter, finds himself forced to take action as his family and homeland come under threat from the oppressive Austrian King and his ruthless warlords.",
    "popularity": 16.7103,
    "poster_path": "/8SdaetXSTPyQVDb5pTEPRLBSx15.jpg",
    "production_companies": [
        {
            "id": 3130,
            "logo_path": "/b2blyz6adfykkLdLQId8SNHGfZk.png",
            "name": "Tempo Productions",
            "origin_country": "GB"
        },
        {
            "id": 86177,
            "logo_path": "/3AKkfIbKVXiMUBx5RRaU4T7Y9d8.png",
            "name": "Groenlandia",
            "origin_country": "IT"
        },
        {
            "id": 207726,
            "logo_path": "/iHkBQ0jepmaFnF13YslVoxwKs0l.png",
            "name": "Free Turn",
            "origin_country": "GB"
        }
    ],
    "production_countries": [
        {
            "iso_3166_1": "GB",
            "name": "United Kingdom"
        },
        {
            "iso_3166_1": "IT",
            "name": "Italy"
        }
    ],
    "release_date": "2025-01-17",
    "revenue": 264637,
    "runtime": 133,
    "spoken_languages": [
        {
            "english_name": "English",
            "iso_639_1": "en",
            "name": "English"
        }
    ],
    "status": "Released",
    "tagline": "The narrative unfolds in the 14th Century",
    "title": "William Tell",
    "video": false,
    "vote_average": 6.248,
    "vote_count": 165
}

    const results = [
        {
            "adult": false,
            "backdrop_path": "/7QirCB1o80NEFpQGlQRZerZbQEp.jpg",
            "genre_ids": [
                10749,
                18
            ],
            "id": 1156594,
            "original_language": "es",
            "original_title": "Culpa  nuestra",
            "overview": "Jenna and Lion's wedding brings about the long-awaited reunion between Noah and Nick after their breakup. Nick's inability to forgive Noah stands as an insurmountable barrier. He, heir to his grandfather's businesses, and she, starting her professional life, resist fueling a flame that's still alive. But now that their paths have crossed again, will love be stronger than resentment?",
            "popularity": 532.1524,
            "poster_path": "/yzqHt4m1SeY9FbPrfZ0C2Hi9x1s.jpg",
            "release_date": "2025-10-15",
            "title": "Our wedding brings about the long-awaited reunion between Noah Fault",
            "video": false,
            "vote_average": 7.679,
            "vote_count": 379
        },
        {
            "adult": false,
            "backdrop_path": "/ygOR390GzOX5Quv0kAAcUNDG7fp.jpg",
            "genre_ids": [
                12,
                28,
                27
            ],
            "id": 1511789,
            "original_language": "en",
            "original_title": "Captain Hook - The Cursed Tides",
            "overview": "In the aftermath of a devastating defeat by his archnemesis Admiral Smee, the notorious Captain James Hook finds refuge in the coastal town of Eldritch Landing, where he forms an unlikely alliance with Silas Blackweather, a local blacksmith seeking retribution for his sister's murder. As they evade Smee's Redcoat Soldiers in the island's dense woodland, ruthless sword fights, ancient curses and conflicting motives will challenge their shared quest for revenge. Together, Hook and Silas navigate uncharted waters to confront the treacherous Admiral Smee, embarking on a journey that will redefine Captain Hook's enduring legacy.",
            "popularity": 340.5134,
            "poster_path": "/bcP7FtskwsNp1ikpMQJzDPjofP5.jpg",
            "release_date": "2025-07-11",
            "title": "Captain Hook -wedding brings about the long-awaited reunion between Noah Fault The Cursed Tides",
            "video": false,
            "vote_average": 4.8,
            "vote_count": 25
        },
        {
            "adult": false,
            "backdrop_path": "/iZLqwEwUViJdSkGVjePGhxYzbDb.jpg",
            "genre_ids": [
                878,
                53
            ],
            "id": 755898,
            "original_language": "en",
            "original_title": "War of the Worlds",
            "overview": "Will Radford is a top analyst for Homeland Security who tracks potential threats through a mass surveillance program, until one day an attack by an unknown entity leads him to question whether the government is hiding something from him... and from the rest of the world.",
            "popularity": 317.3022,
            "poster_path": "/yvirUYrva23IudARHn3mMGVxWqM.jpg",
            "release_date": "2025-07-29",
            "title": "War of the Worlds",
            "video": false,
            "vote_average": 4.375,
            "vote_count": 651
        },
        {
            "adult": false,
            "backdrop_path": "/qcDDn7WeKBenM4nLlOPXAeJ4hpg.jpg",
            "genre_ids": [
                53,
                28,
                12
            ],
            "id": 1280450,
            "original_language": "en",
            "original_title": "Stolen Girl",
            "overview": "In 1993, Maureen’s six-year-old daughter Amina is snuck out of the country by her ex-husband, Karim. After years of unsuccessful attempts to find her, Maureen intersects with a professional retriever of internationally abducted children who promises to help her find Amina in exchange for her collaboration.",
            "popularity": 304.1407,
            "poster_path": "/fZlNXEHZsBp7unqw009MeBbMv87.jpg",
            "release_date": "2025-09-04",
            "title": "Stolen Girl",
            "video": false,
            "vote_average": 6.3,
            "vote_count": 45
        },
        {
            "adult": false,
            "backdrop_path": "/1leYKN0DPNffpldGnCWnbXaiWoD.jpg",
            "genre_ids": [
                28,
                53
            ],
            "id": 1305717,
            "original_language": "en",
            "original_title": "Hunting Grounds",
            "overview": "Desperate to find refuge for her children, Chloe Marvino runs away from her Mafia tied husband, and finds shelter in a cabin with a recluse drifter named Jake. But as her husband's henchmen draw closer to her, it turns out that Jake is the biggest enemy of them all.",
            "popularity": 300.4624,
            "poster_path": "/cgZjpqRQt9sk6XMCwZ3B1NPAaoy.jpg",
            "release_date": "2025-05-16",
            "title": "Hunting Grounds",
            "video": false,
            "vote_average": 5.76,
            "vote_count": 25
        },
        {
            "adult": false,
            "backdrop_path": "/42xAe6kVeTjml9Tww6vRoWa5tay.jpg",
            "genre_ids": [
                28,
                18,
                53
            ],
            "id": 861451,
            "original_language": "kn",
            "original_title": "Martin",
            "overview": "Martin revolves around Lt. Brigadier Arjun Saxena, whose journey takes him from Pakistan to India to discover his real identity and fight against black market dealers, who are involved with terrorists to orchestrate massive attacks in the country.",
            "popularity": 265.9811,
            "poster_path": "/bYe2ZjUhb4Kje0BpWE6kN34u2hv.jpg",
            "release_date": "2024-10-11",
            "title": "Martin",
            "video": false,
            "vote_average": 2.1,
            "vote_count": 8
        },]

       export const getPopularMovies = async () => {
            if (!genreMap) await getGenres();
            return results.map(movie => ({
                     ...movie,
                    genres: (movie.genre_ids || []).map(id => genreMap[id]).filter(Boolean)
                }));
        };

        export const getTrendingMovies = async () => {
            if (!genreMap) await getGenres();
            return results.map(movie => ({
                     ...movie,
                    genres: (movie.genre_ids || []).map(id => genreMap[id]).filter(Boolean)
                }));
        };

        export const getPopularMovie = (id) => {
          return result;
        };