const {
  db,
  models: { Song, Artist, PitchData },
} = require("../server/db");

async function seed() {
  await db.sync({ force: true });

  // Creating artists
  const [brunoMars, kellyClarkson, neilDiamond, vanessaCarlton] =
    await Promise.all([
      Artist.create({ name: "Bruno Mars" }),
      Artist.create({ name: "Kelly Clarkson" }),
      Artist.create({ name: "Neil Diamond" }),
      Artist.create({ name: "Vanessa Carlton" }),
    ]);

  console.log(`seeded 4 artists`);

  // Creating songs
  const [justTheWayYouAre, sinceUBeenGone, sweetCaroline, aThousandMiles] =
    await Promise.all([
      Song.create({
        name: "Just The Way You Are",
        videoURL: "https://www.youtube.com/embed/LjhCEhWiKXk",
        originalAudio: "/audio/Just-The-Way-You-Are_original.mp3",
        instrumentalAudio: "./audio/Just-The-Way-You-Are_instrumentals.mp3",
        vocalAudio: "/audio/Just-The-Way-You-Are_vocals.mp3",
        lyrics: "",
        artistId: brunoMars.id,
      }),
      Song.create({
        name: "Since U Been Gone",
        videoURL: "https://www.youtube.com/embed/R7UrFYvl5TE",
        originalAudio: "/audio/Since-U-Been-Gone_original.mp3",
        instrumentalAudio: "/audio/Since-U-Been-Gone_instrumentals.mp3",
        vocalAudio: "/audio/Since-U-Been-Gone_vocals.mp3",
        lyrics: "",
        artistId: kellyClarkson.id,
      }),
      Song.create({
        name: "Sweet Caroline",
        videoURL: "https://www.youtube.com/embed/GmK5_lnQUbE",
        originalAudio: "/audio/Sweet-Caroline_original.mp3",
        instrumentalAudio: "/audio/Sweet-Caroline_instrumentals.mp3",
        vocalAudio: "/audio/Sweet-Caroline_vocals.mp3",
        lyrics: "",
        artistId: neilDiamond.id,
      }),
      Song.create({
        name: "A Thousand Miles",
        videoURL: "https://www.youtube.com/embed/Cwkej79U3ek",
        originalAudio: "/audio/A-Thousand-Miles_original.mp3",
        instrumentalAudio: "/audio/A-Thousand-Miles_instrumentals.mp3",
        vocalAudio: "/audio/A-Thousand-Miles_vocal.mp3",
        lyrics: "",
        artistId: vanessaCarlton.id,
      }),
    ]);

  console.log(`seeded 4 songs`);

  // Creating pitch datas
  const pitchDatas = await Promise.all([
    PitchData.create({
      pitches: [],
      original: true,
      songId: justTheWayYouAre.id,
    }),
    PitchData.create({
      pitches: [],
      original: true,
      songId: sinceUBeenGone.id,
    }),
    PitchData.create({
      pitches: [],
      original: true,
      songId: sweetCaroline.id,
    }),
    PitchData.create({
      pitches: [],
      original: true,
      songId: aThousandMiles.id,
    }),
  ]);

  console.log(`seeded ${pitchDatas.length} pitch datas`);

  console.log("seeded successfully");
}

module.exports = seed;
