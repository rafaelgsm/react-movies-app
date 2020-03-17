import { APP_KEY, BASE_URL } from "../config/api_config";
import axios from "axios";

export const getMovies = async category => {
  // const callResult = await axios.get(
  //   `${BASE_URL}movie/${category}?api_key=${APP_KEY}&language=en-US&page=1`
  // );

  // return mapToMovieObject(callResult.data.results);

  return mapToMovieObject(test_NowPlaying.results);
};

/////////////////////////////////////////////
//TV SHOWS:
/////////////////////////////////////////////

export const getTvShowsTopRated = async () => {
  // const callResult = await axios.get(
  //   `${BASE_URL}tv/top_rated?api_key=${APP_KEY}&language=en-US&page=1`
  // );

  // return mapTvToMovieObject(callResult.data.results);

  return mapTvToMovieObject(test_tv_top_rated.results);
};

//Maps movie response to default project movie object:
const mapToMovieObject = movieList => {
  return movieList.map(item => {
    const movie = {
      id: item.id,
      poster: item.poster_path,
      name: item.title,
      release_date: item.release_date,
      popularity: item.popularity,
      description: item.overview
    };

    return movie;
  });
};

//Maps TV response to default project movie object:
const mapTvToMovieObject = movieList => {
  return movieList.map(item => {
    const movie = {
      id: item.id,
      poster: item.poster_path,
      name: item.name,
      release_date: item.first_air_date,
      popularity: item.popularity,
      description: item.overview
    };

    return movie;
  });
};

/////////////////////////////////////////////
// test_NowPlaying
/////////////////////////////////////////////

const test_NowPlaying = {
  results: [
    {
      popularity: 237.255,
      vote_count: 1081,
      video: false,
      poster_path: "/aQvJ5WPzZgYVDrxLX4R6cLJCEaQ.jpg",
      id: 454626,
      adult: false,
      backdrop_path: "/stmYfCUGd8Iy6kAMBr6AmWqx8Bq.jpg",
      original_language: "en",
      original_title: "Sonic the Hedgehog",
      genre_ids: [28, 35, 878, 10751],
      title: "Sonic the Hedgehog",
      vote_average: 7.3,
      overview:
        "Based on the global blockbuster videogame franchise from Sega, Sonic the Hedgehog tells the story of the world’s speediest hedgehog as he embraces his new home on Earth. In this live-action adventure comedy, Sonic and his new best friend team up to defend the planet from the evil genius Dr. Robotnik and his plans for world domination.",
      release_date: "2020-02-12"
    },
    {
      popularity: 209.734,
      vote_count: 134,
      video: false,
      poster_path: "/8WUVHemHFH2ZIP6NWkwlHWsyrEL.jpg",
      id: 338762,
      adult: false,
      backdrop_path: "/ocUrMYbdjknu2TwzMHKT9PBBQRw.jpg",
      original_language: "en",
      original_title: "Bloodshot",
      genre_ids: [28, 18, 14, 878],
      title: "Bloodshot",
      vote_average: 5.8,
      overview:
        "After he and his wife are murdered, marine Ray Garrison is resurrected by a team of scientists. Enhanced with nanotechnology, he becomes a superhuman, biotech killing machine - Bloodshot. As Ray first trains with fellow super-soldiers, he cannot recall anything from his former life. But when his memories flood back and he remembers the man that killed both him and his wife, he breaks out of the facility to get revenge, only to discover that there's more to the conspiracy than he thought.",
      release_date: "2020-02-20"
    },
    {
      popularity: 190.677,
      vote_count: 3324,
      video: false,
      poster_path: "/iZf0KyrE25z1sage4SYFLCCrMi9.jpg",
      id: 530915,
      adult: false,
      backdrop_path: "/cqa3sa4c4jevgnEJwq3CMF8UfTG.jpg",
      original_language: "en",
      original_title: "1917",
      genre_ids: [18, 10752],
      title: "1917",
      vote_average: 8,
      overview:
        "At the height of the First World War, two young British soldiers must cross enemy territory and deliver a message that will stop a deadly attack on hundreds of soldiers.",
      release_date: "2019-12-25"
    },
    {
      popularity: 145.807,
      vote_count: 1395,
      video: false,
      poster_path: "/h4VB6m0RwcicVEZvzftYZyKXs6K.jpg",
      id: 495764,
      adult: false,
      backdrop_path: "/2s1ofreBI8EFzIyL3SQrLRqO5Zx.jpg",
      original_language: "en",
      original_title:
        "Birds of Prey (and the Fantabulous Emancipation of One Harley Quinn)",
      genre_ids: [28, 35, 80],
      title:
        "Birds of Prey (and the Fantabulous Emancipation of One Harley Quinn)",
      vote_average: 6.9,
      overview:
        "After her breakup with the Joker, Harley Quinn joins forces with singer Black Canary, assassin Huntress, and police detective Renee Montoya to help a young girl named Cassandra, who had a hit placed on her after she stole a rare diamond from crime lord Roman Sionis.",
      release_date: "2020-02-05"
    },
    {
      popularity: 136.567,
      vote_count: 9936,
      video: false,
      poster_path: "/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
      id: 475557,
      adult: false,
      backdrop_path: "/n6bUvigpRFqSwmPp1m2YADdbRBc.jpg",
      original_language: "en",
      original_title: "Joker",
      genre_ids: [80, 18, 53],
      title: "Joker",
      vote_average: 8.2,
      overview:
        "During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.",
      release_date: "2019-10-02"
    },
    {
      popularity: 114,
      vote_count: 5250,
      video: false,
      poster_path: "/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
      id: 496243,
      adult: false,
      backdrop_path: "/TU9NIjwzjoKPwQHoHshkFcQUCG.jpg",
      original_language: "ko",
      original_title: "기생충",
      genre_ids: [35, 18, 53],
      title: "Parasite",
      vote_average: 8.5,
      overview:
        "All unemployed, Ki-taek's family takes peculiar interest in the wealthy and glamorous Parks for their livelihood until they get entangled in an unexpected incident.",
      release_date: "2019-05-30"
    },
    {
      popularity: 98.802,
      vote_count: 426,
      video: false,
      poster_path: "/4U7hpTK0XTQBKT5X60bKmJd05ha.jpg",
      id: 570670,
      adult: false,
      backdrop_path: "/uZMZyvarQuXLRqf3xdpdMqzdtjb.jpg",
      original_language: "en",
      original_title: "The Invisible Man",
      genre_ids: [27, 878, 53],
      title: "The Invisible Man",
      vote_average: 7.1,
      overview:
        "When Cecilia's abusive ex takes his own life and leaves her his fortune, she suspects his death was a hoax. As a series of coincidences turn lethal, Cecilia works to prove that she is being hunted by someone nobody can see.",
      release_date: "2020-02-26"
    },
    {
      popularity: 81.396,
      id: 465086,
      video: false,
      vote_count: 212,
      vote_average: 5.4,
      title: "The Grudge",
      release_date: "2020-01-02",
      original_language: "en",
      original_title: "The Grudge",
      genre_ids: [27, 9648],
      backdrop_path: "/h4x5aN52nq78PM8zXD77THhZTB.jpg",
      adult: false,
      overview:
        "After a young mother murders her family in her own house, a detective attempts to investigate the mysterious case, only to discover that the house is cursed by a vengeful ghost. Now targeted by the demonic spirits, the detective must do anything to protect herself and her family from harm.",
      poster_path: "/uIMOFUeXkx4tcAydLrzGMLTtzRK.jpg"
    },
    {
      popularity: 79.645,
      vote_count: 368,
      video: false,
      poster_path: "/30YacPAcxpNemhhwX0PVUl9pVA3.jpg",
      id: 431693,
      adult: false,
      backdrop_path: "/qlYxtqVfu2LOdvYMMDPCSGX0Oz0.jpg",
      original_language: "en",
      original_title: "Spies in Disguise",
      genre_ids: [28, 12, 16, 35],
      title: "Spies in Disguise",
      vote_average: 7.3,
      overview:
        "Super spy Lance Sterling and scientist Walter Beckett are almost exact opposites. Lance is smooth, suave and debonair. Walter is… not. But what Walter lacks in social skills he makes up for in smarts and invention, creating the awesome gadgets Lance uses on his epic missions. But when events take an unexpected turn, Walter and Lance suddenly have to rely on each other in a whole new way.",
      release_date: "2019-12-24"
    },
    {
      popularity: 76.787,
      vote_count: 428,
      video: false,
      poster_path: "/qCDPKUMX5xrxxQY8XhGVCKO3fks.jpg",
      id: 599975,
      adult: false,
      backdrop_path: "/zETkzgle7c6wAeW11snnVUBp67S.jpg",
      original_language: "en",
      original_title: "Countdown",
      genre_ids: [27, 53],
      title: "Countdown",
      vote_average: 6.3,
      overview:
        "A young nurse downloads an app that tells her she only has three days to live. With time ticking away and a mysterious figure haunting her, she must find a way to save her life before time runs out.",
      release_date: "2019-10-24"
    },
    {
      popularity: 73.545,
      id: 664413,
      video: false,
      vote_count: 26,
      vote_average: 6.8,
      title: "365 Days",
      release_date: "2020-02-07",
      original_language: "es",
      original_title: "365 Dni",
      genre_ids: [18, 10749],
      backdrop_path: "/nVAJWMwmPTmwhQLcsIFYvU0C9JI.jpg",
      adult: false,
      overview:
        "Laura, in order to save her relationship from falling apart, goes to Sicily, where she meets Massimo. A dangerous man, the head of a mafia family, kidnaps her and gives 365 days to love him.",
      poster_path: "/im0jKiVtVyxynKVnzOyd6efbqYE.jpg"
    },
    {
      popularity: 73.378,
      vote_count: 2784,
      video: false,
      poster_path: "/pThyQovXQrw2m0s9x82twj48Jq4.jpg",
      id: 546554,
      adult: false,
      backdrop_path: "/cjTQSwcsfVdirSFSHNBXRGkxmWa.jpg",
      original_language: "en",
      original_title: "Knives Out",
      genre_ids: [35, 9648],
      title: "Knives Out",
      vote_average: 7.8,
      overview:
        "When renowned crime novelist Harlan Thrombey is found dead at his estate just after his 85th birthday, the inquisitive and debonair Detective Benoit Blanc is mysteriously enlisted to investigate. From Harlan's dysfunctional family to his devoted staff, Blanc sifts through a web of red herrings and self-serving lies to uncover the truth behind Harlan's untimely death.",
      release_date: "2019-11-27"
    },
    {
      popularity: 72.997,
      vote_count: 9,
      video: false,
      poster_path: "/o1D5kEPPOGReel6CipiKOY5tPJt.jpg",
      id: 642657,
      adult: false,
      backdrop_path: "/eUFN7zot3iRSm19xKxxnm6Vxeot.jpg",
      original_language: "id",
      original_title: "Milea: Suara dari Dilan",
      genre_ids: [18, 10749],
      title: "Milea: Suara dari Dilan",
      vote_average: 5.8,
      overview:
        "Before the grand reunion, Dilan decided to write and retell his love story with Milea. This is Dilan's way of remembering Milea.",
      release_date: "2020-02-13"
    },
    {
      popularity: 67.868,
      vote_count: 210,
      video: false,
      poster_path: "/f4aul3FyD3jv3v4bul1IrkWZvzq.jpg",
      id: 508439,
      adult: false,
      backdrop_path: "/xFxk4vnirOtUxpOEWgA1MCRfy6J.jpg",
      original_language: "en",
      original_title: "Onward",
      genre_ids: [12, 16, 35, 14, 10751],
      title: "Onward",
      vote_average: 8,
      overview:
        "In a suburban fantasy world, two teenage elf brothers embark on an extraordinary quest to discover if there is still a little magic left out there.",
      release_date: "2020-02-29"
    },
    {
      popularity: 65.288,
      vote_count: 9,
      video: false,
      poster_path: "/iaTW57RK87v7ZrGkLKVofNH9YOr.jpg",
      id: 505951,
      adult: false,
      backdrop_path: "/cIXnYsJF0pxuRJabHpTTl1jckcw.jpg",
      original_language: "ta",
      original_title: "கண்ணும் கண்ணும் கொள்ளையடித்தால்",
      genre_ids: [35, 18, 10749],
      title: "Kannum Kannum Kollaiyadithaal",
      vote_average: 5.4,
      overview:
        "Siddarth falls head-over-heels in love with Meera but things take a risky turn when they get into a messy situation with a dangerous man.",
      release_date: "2020-02-28"
    },
    {
      popularity: 61.672,
      vote_count: 694,
      video: false,
      poster_path: "/1DPUFG6QnGqzpvEaDEv7TaepycM.jpg",
      id: 458897,
      adult: false,
      backdrop_path: "/a0xTB1vBxMGt6LGG4N7k1wO9lfL.jpg",
      original_language: "en",
      original_title: "Charlie's Angels",
      genre_ids: [28, 12, 35],
      title: "Charlie's Angels",
      vote_average: 6.5,
      overview:
        "When a systems engineer blows the whistle on a dangerous technology, Charlie's Angels from across the globe are called into action, putting their lives on the line to protect society.",
      release_date: "2019-11-14"
    },
    {
      popularity: 61.409,
      vote_count: 15,
      video: false,
      poster_path: "/h7pG5vA2MKBGNV7x6NiCnoLkmh.jpg",
      id: 514847,
      adult: false,
      backdrop_path: "/jTBaXPVFuddxw8w715FZrQpQUxU.jpg",
      original_language: "en",
      original_title: "The Hunt",
      genre_ids: [28, 27, 53],
      title: "The Hunt",
      vote_average: 6.8,
      overview:
        "Twelve strangers wake up in a clearing. They don't know where they are, or how they got there. They don't know they've been chosen - for a very specific purpose - The Hunt.",
      release_date: "2020-03-13"
    },
    {
      popularity: 61.197,
      vote_count: 1,
      video: false,
      poster_path: "/7bjTzPQUV2KVI0HdUjf1l8lUoLF.jpg",
      id: 571265,
      adult: false,
      backdrop_path: "/ApywEWLRVaHUY5QX5tUhErBD5m3.jpg",
      original_language: "ja",
      original_title: "デジモンアドベンチャー LAST EVOLUTION 絆",
      genre_ids: [28, 12, 16, 53],
      title: "Digimon Adventure: Last Evolution Kizuna",
      vote_average: 10,
      overview:
        "Tai is now a university student, living alone, working hard at school, and working every day, but with his future still undecided. Meanwhile, Matt and others continue to work on Digimon incidents and activities that help people with their partner Digimon. When an unprecedented phenomenon occurs, the DigiDestined discover that when they grow up, their relationship with their partner Digimon will come closer to an end.  As a countdown timer activates on the Digivice, they realize that the more they fight with their partner Digimon, the faster their bond breaks. Will they fight for others and lose their partner? The time to choose and decide is approaching fast. There is a short time before “chosen children” will become adults. This is the last adventure of Tai and Agumon.",
      release_date: "2020-02-21"
    },
    {
      popularity: 58.674,
      vote_count: 1388,
      video: false,
      poster_path: "/mSmiB8XjUnR1GSIljuCPGsk0cwX.jpg",
      id: 331482,
      adult: false,
      backdrop_path: "/3uTxPIdVEXxHpsHOHdJC24QebBV.jpg",
      original_language: "en",
      original_title: "Little Women",
      genre_ids: [18, 10749],
      title: "Little Women",
      vote_average: 8,
      overview:
        "Four sisters come of age in America in the aftermath of the Civil War.",
      release_date: "2019-12-25"
    },
    {
      popularity: 54.316,
      vote_count: 354,
      video: false,
      poster_path: "/d9PhCnofBEeQGR3lwywTjWKBiXj.jpg",
      id: 449924,
      adult: false,
      backdrop_path: "/ekP6EVxL81lZ4ivcqPsoZ72rY0h.jpg",
      original_language: "cn",
      original_title: "葉問4",
      genre_ids: [28, 18, 36],
      title: "Ip Man 4: The Finale",
      vote_average: 6,
      overview:
        "Following the death of his wife, Ip Man travels to San Francisco to ease tensions between the local kung fu masters and his star student, Bruce Lee, while searching for a better future for his son.",
      release_date: "2019-12-20"
    }
  ],
  page: 1,
  total_results: 1168,
  dates: {
    maximum: "2020-03-15",
    minimum: "2020-01-27"
  },
  total_pages: 59
};

//...

/////////////////////////////////////////////
//
// TV SHOWS *********************************
// TV SHOWS *********************************
// TV SHOWS *********************************
// TV SHOWS *********************************
//
/////////////////////////////////////////////

/////////////////////////////////////////////
// test_tv_on_air
/////////////////////////////////////////////

const test_tv_top_rated = {
  page: 1,
  total_results: 735,
  total_pages: 37,
  results: [
    {
      original_name: "I Am Not an Animal",
      genre_ids: [16, 35],
      name: "I Am Not an Animal",
      popularity: 8.603,
      origin_country: ["GB"],
      vote_count: 410,
      first_air_date: "2004-05-10",
      backdrop_path: "/ok1YiumqOCYzUmuTktnupOQOvV5.jpg",
      original_language: "en",
      id: 100,
      vote_average: 9.4,
      overview:
        "I Am Not An Animal is an animated comedy series about the only six talking animals in the world, whose cosseted existence in a vivisection unit is turned upside down when they are liberated by animal rights activists.",
      poster_path: "/nMhv6jG5dtLdW7rgguYWvpbk0YN.jpg"
    },
    {
      original_name: "Chernobyl",
      genre_ids: [18],
      name: "Chernobyl",
      popularity: 43.395,
      origin_country: ["US"],
      vote_count: 885,
      first_air_date: "2019-05-06",
      backdrop_path: "/uL6Ad12W09L1sfuOE2pcTeak7bt.jpg",
      original_language: "en",
      id: 87108,
      vote_average: 8.7,
      overview:
        "The true story of one of the worst man-made catastrophes in history: the catastrophic nuclear accident at Chernobyl. A tale of the brave men and women who sacrificed to save Europe from unimaginable disaster.",
      poster_path: "/hlLXt2tOPT6RRnjiUmoxyG1LTFi.jpg"
    },
    {
      original_name: "Élite",
      genre_ids: [80, 18, 9648],
      name: "Elite",
      popularity: 161.978,
      origin_country: [],
      vote_count: 676,
      first_air_date: "2018-10-05",
      backdrop_path: "/1qOA3kMtQO8bjnW8M2smjA8tp10.jpg",
      original_language: "es",
      id: 76669,
      vote_average: 8.7,
      overview:
        "When three working class kids enroll in the most exclusive school in Spain, the clash between the wealthy and the poor students leads to tragedy.",
      poster_path: "/3NTAbAiao4JLzFQw6YxP1YZppM8.jpg"
    },
    {
      original_name: "Rick and Morty",
      genre_ids: [16, 35, 10765],
      name: "Rick and Morty",
      popularity: 125.774,
      origin_country: ["US"],
      vote_count: 1769,
      first_air_date: "2013-12-02",
      backdrop_path: "/mzzHr6g1yvZ05Mc7hNj3tUdy2bM.jpg",
      original_language: "en",
      id: 60625,
      vote_average: 8.6,
      overview:
        "Rick is a mentally-unbalanced but scientifically-gifted old man who has recently reconnected with his family. He spends most of his time involving his young grandson Morty in dangerous, outlandish adventures throughout space and alternate universes. Compounded with Morty's already unstable family life, these events cause Morty much distress at home and school.",
      poster_path: "/qJdfO3ahgAMf2rcmhoqngjBBZW1.jpg"
    },
    {
      original_name: "Rebelde",
      id: 12637,
      name: "Rebelde",
      popularity: 23.228,
      vote_count: 203,
      vote_average: 8.5,
      first_air_date: "2004-10-04",
      poster_path: "/5l6q0eZJWLPBbm53PGvXGGY2jmT.jpg",
      genre_ids: [35, 10766, 18],
      original_language: "es",
      backdrop_path: "/eKvKqSC3Y1tpGVZvVRbII4gZgWK.jpg",
      overview:
        "Rebelde is a Mexican telenovela produced by Televisa and created by Cris Morena. It is a remake of a famous Argentine series Rebelde Way adapted for the Mexican audience therefore leading to differences in characters' backgrounds. The series ran for three seasons, the final episode airing in Mexico on June 2, 2006. Rebelde was replaced in June 2006 with Televisa's new series Código Postal.\n\nThe series is set at the Elite Way School, a prestigious private boarding high school in Mexico City with a major plot line revolving around a group of students forming a pop band. Additional subplots involve the school's faculty and the students' parents. One trademark of the show is the random use of English words and phrases, often used by fresa characters.\n\nA notable aspect of the series is that the actors playing the bandmembers are themselves in an actual band named RBD, and perform most of the music used on the show. They have been extremely successful in their own right, becoming one of the most popular acts in Latin America and touring internationally.\n\nRebelde began airing March 21, 2005 and ended on December 15, 2006. The show was also transmitted in 65 other countries, including Serbia, Peru, Romania on Acasa TV, Brazil, Spain on Antena 3, Slovenia, Bulgaria and from September 2009 in Slovakia on TV Doma, in Croatia on Nova TV and in Albania on Vizion Plus.",
      origin_country: ["MX"]
    },
    {
      original_name: "Breaking Bad",
      genre_ids: [18],
      name: "Breaking Bad",
      popularity: 63.505,
      origin_country: ["US"],
      vote_count: 3934,
      first_air_date: "2008-01-20",
      backdrop_path: "/hbgPoI0GBrXJfGjYNV2fMQU0xou.jpg",
      original_language: "en",
      id: 1396,
      vote_average: 8.5,
      overview:
        "When Walter White, a New Mexico chemistry teacher, is diagnosed with Stage III cancer and given a prognosis of only two years left to live. He becomes filled with a sense of fearlessness and an unrelenting desire to secure his family's financial future at any cost as he enters the dangerous world of drugs and crime.",
      poster_path: "/1yeVJox3rjo2jBKrrihIMj7uoS9.jpg"
    },
    {
      original_name: "I Am Not Okay with This",
      genre_ids: [18],
      name: "I Am Not Okay with This",
      popularity: 27.377,
      origin_country: ["US"],
      vote_count: 212,
      first_air_date: "2020-02-26",
      backdrop_path: "/9HWumm63coTQGsveyZttmoGJ0NZ.jpg",
      original_language: "en",
      id: 90260,
      vote_average: 8.4,
      overview:
        "A teen navigates the complexities of high school, family and her sexuality while dealing with new superpowers. Based on Charles Forsman's graphic novel.",
      poster_path: "/kf3yX0ILNlLJ42X3lX2iYJ3QRp6.jpg"
    },
    {
      original_name: "DEATH NOTE",
      id: 13916,
      name: "Death Note",
      popularity: 33.812,
      vote_count: 721,
      vote_average: 8.4,
      first_air_date: "2006-10-04",
      poster_path: "/g8hHbsRmHYoWYizhWCk87vpkrmy.jpg",
      genre_ids: [16, 9648],
      original_language: "ja",
      backdrop_path: "/A2j5g79EcWn1oTNCW9PSo7NZRfv.jpg",
      overview:
        "Light Yagami is an ace student with great prospects—and he’s bored out of his mind. But all that changes when he finds the Death Note, a notebook dropped by a rogue Shinigami death god. Any human whose name is written in the notebook dies, and Light has vowed to use the power of the Death Note to rid the world of evil. But will Light succeed in his noble goal, or will the Death Note turn him into the very thing he fights against?",
      origin_country: ["JP"]
    },
    {
      original_name: "Sherlock",
      genre_ids: [80, 18, 9648],
      name: "Sherlock",
      popularity: 26.792,
      origin_country: ["GB"],
      vote_count: 2095,
      first_air_date: "2010-07-25",
      backdrop_path: "/bvS50jBZXtglmLu72EAt5KgJBrL.jpg",
      original_language: "en",
      id: 19885,
      vote_average: 8.3,
      overview:
        "A modern update finds the famous sleuth and his doctor partner solving crime in 21st century London.",
      poster_path: "/f9zGxLHGyQB10cMDZNY5ZcGKhZi.jpg"
    },
    {
      original_name: "Peaky Blinders",
      genre_ids: [80, 18],
      name: "Peaky Blinders",
      popularity: 36.161,
      origin_country: ["GB"],
      vote_count: 706,
      first_air_date: "2013-09-12",
      backdrop_path: "/rWUC2x8q7Cu5Wrx2PKH0sYYmVx7.jpg",
      original_language: "en",
      id: 60574,
      vote_average: 8.3,
      overview:
        "A gangster family epic set in 1919 Birmingham, England and centered on a gang who sew razor blades in the peaks of their caps, and their fierce boss Tommy Shelby, who means to move up in the world.",
      poster_path: "/jeWoeUQyHdxGFNZCrzbOUP78FiZ.jpg"
    },
    {
      original_name: "Stranger Things",
      genre_ids: [18, 9648, 10765],
      name: "Stranger Things",
      popularity: 51.618,
      origin_country: ["US"],
      vote_count: 3104,
      first_air_date: "2016-07-15",
      backdrop_path: "/56v2KjBlU4XaOv9rVYEQypROD7P.jpg",
      original_language: "en",
      id: 66732,
      vote_average: 8.3,
      overview:
        "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces, and one strange little girl.",
      poster_path: "/x2LSRK2Cm7MZhjluni1msVJ3wDF.jpg"
    },
    {
      original_name: "Gravity Falls",
      genre_ids: [16, 35, 9648, 10765],
      name: "Gravity Falls",
      popularity: 22.995,
      origin_country: ["US"],
      vote_count: 369,
      first_air_date: "2012-06-15",
      backdrop_path: "/sJjrJWsOCUUeVMexxANNC6s3dWV.jpg",
      original_language: "en",
      id: 40075,
      vote_average: 8.3,
      overview:
        "Twin brother and sister Dipper and Mabel Pines are in for an unexpected adventure when they spend the summer helping their great uncle Stan run a tourist trap in the mysterious town of Gravity Falls, Oregon.",
      poster_path: "/oGsgxjeZ9rd20eCJsGSMGgWvl4P.jpg"
    },
    {
      original_name: "Locke & Key",
      genre_ids: [18, 9648, 10765],
      name: "Locke & Key",
      popularity: 23.29,
      origin_country: ["US"],
      vote_count: 122,
      first_air_date: "2020-02-07",
      backdrop_path: "/1OTITGQ8yqerNEiwnHqpA7pD8Aq.jpg",
      original_language: "en",
      id: 86423,
      vote_average: 8.3,
      overview:
        "Three siblings who move into their ancestral estate after their father's gruesome murder discover their new home's magical keys, which must be used in their stand against an evil creature who wants the keys and their powers.",
      poster_path: "/lKhF0QX724VS2QqBzSZ4KJif3Ny.jpg"
    },
    {
      original_name: "The Twilight Zone",
      genre_ids: [18, 9648, 10765],
      name: "The Twilight Zone",
      popularity: 9.423,
      origin_country: ["US"],
      vote_count: 328,
      first_air_date: "1959-10-02",
      backdrop_path: "/lKdKgLoLPmnHoUXunrcSAuBhAJx.jpg",
      original_language: "en",
      id: 6357,
      vote_average: 8.3,
      overview:
        "A series of unrelated stories containing drama, psychological thriller, fantasy, science fiction, suspense, and/or horror, often concluding with a macabre or unexpected twist.",
      poster_path: "/7uY4pCOxbEdv4M8jTE4uMPVoSIW.jpg"
    },
    {
      original_name: "Young Justice",
      genre_ids: [16, 10759],
      name: "Young Justice",
      popularity: 12.901,
      origin_country: ["US"],
      vote_count: 156,
      first_air_date: "2010-11-26",
      backdrop_path: "/3Yjbb4g4yJoXY12zYfV8bUm8C92.jpg",
      original_language: "en",
      id: 33217,
      vote_average: 8.3,
      overview:
        "Teenage superheroes strive to prove themselves as members of the Justice League.",
      poster_path: "/oL31ADgSgVdgoJPRAdWISQBIO0w.jpg"
    },
    {
      original_name: "Narcos: Mexico",
      genre_ids: [80, 18],
      name: "Narcos: Mexico",
      popularity: 21.631,
      origin_country: ["US"],
      vote_count: 142,
      first_air_date: "2018-11-16",
      backdrop_path: "/AhG90SeoMJ0xCI4ye21ru7Cr9we.jpg",
      original_language: "en",
      id: 80968,
      vote_average: 8.3,
      overview:
        "See the rise of the Guadalajara Cartel as an American DEA agent learns the danger of targeting narcos in 1980s Mexico.",
      poster_path: "/gQQGxVhdBvT2l7G1Zz6JYSCmL6q.jpg"
    },
    {
      original_name: "Station 19",
      genre_ids: [18],
      name: "Station 19",
      popularity: 22.339,
      origin_country: ["US"],
      vote_count: 109,
      first_air_date: "2018-03-22",
      backdrop_path: "/G8I49Va19yKEVB68Bx6D10UwpY.jpg",
      original_language: "en",
      id: 76773,
      vote_average: 8.3,
      overview:
        "A group of heroic firefighters at Seattle Fire Station 19—from captain to newest recruit—risk their lives and hearts both in the line of duty and off the clock. These brave men and women are like family, literally and figuratively, and together they put their own lives in jeopardy as first responders to save the lives of others.",
      poster_path: "/o6IeciOOPViVUPORVGPtDF4DYER.jpg"
    },
    {
      original_name: "Avatar: The Last Airbender",
      genre_ids: [28, 12, 16, 14],
      name: "Avatar: The Last Airbender",
      popularity: 17.743,
      origin_country: ["US"],
      vote_count: 683,
      first_air_date: "2005-02-21",
      backdrop_path: "/732azfQ0xUAJNQ48pPfVtCCLVlZ.jpg",
      original_language: "en",
      id: 246,
      vote_average: 8.3,
      overview:
        "In a war-torn world of elemental magic, a young boy reawakens to undertake a dangerous mystic quest to fulfill his destiny as the Avatar, and bring peace to the world.",
      poster_path: "/sB8V0pQtJZ17v8FLXMOcYz6045c.jpg"
    },
    {
      original_name: "The Wire",
      genre_ids: [80, 18],
      name: "The Wire",
      popularity: 20.095,
      origin_country: ["US"],
      vote_count: 936,
      first_air_date: "2002-06-02",
      backdrop_path: "/wEkT03CB1i1HDxzYU9b1Um2fPIV.jpg",
      original_language: "en",
      id: 1438,
      vote_average: 8.3,
      overview:
        "Told from the points of view of both the Baltimore homicide and narcotics detectives and their targets, the series captures a universe in which the national war on drugs has become a permanent, self-sustaining bureaucracy, and distinctions between good and evil are routinely obliterated.",
      poster_path: "/dg7NuKDjmS6OzuNy33qt8kSkPA1.jpg"
    },
    {
      original_name: "La casa de papel",
      genre_ids: [80, 18],
      name: "Money Heist",
      popularity: 44.512,
      origin_country: ["ES"],
      vote_count: 845,
      first_air_date: "2017-05-02",
      backdrop_path: "/tNlkKrypFs6QSUjFVQntFISoFv5.jpg",
      original_language: "es",
      id: 71446,
      vote_average: 8.3,
      overview:
        "To carry out the biggest heist in history, a mysterious man called The Professor recruits a band of eight robbers who have a single characteristic: none of them has anything to lose. Five months of seclusion - memorizing every step, every detail, every probability - culminate in eleven days locked up in the National Coinage and Stamp Factory of Spain, surrounded by police forces and with dozens of hostages in their power, to find out whether their suicide wager will lead to everything or nothing.",
      poster_path: "/MoEKaPFHABtA1xKoOteirGaHl1.jpg"
    }
  ]
};
