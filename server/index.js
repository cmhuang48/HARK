const {
  db,
  models: { Song, Artist },
} = require("../server/db");
const port = process.env.PORT || 8080;
const app = require("./app");

const init = async () => {
  try {
    console.log("calling init");

    await db.sync({ force: true });

    const [brunoMars, kellyClarkson, neilDiamond, vanessaCarlton] =
      await Promise.all([
        Artist.create({ name: "Bruno Mars" }),
        Artist.create({ name: "Kelly Clarkson" }),
        Artist.create({ name: "Neil Diamond" }),
        Artist.create({ name: "Vanessa Carlton" }),
      ]);

    console.log(`seeded 4 artists`);

    const songs = await Promise.all([
      Song.create({
        name: "Just The Way You Are",
        videoURL: "https://www.youtube.com/embed/LjhCEhWiKXk",
        originalAudio: "/client/public/audio/Just-The-Way-You-Are_original",
        instrumentalAudio:
          "/client/public/audio/Just-The-Way-You-Are_instrumentals",
        vocalAudio: "/client/public/audio/Just-The-Way-You-Are_vocals",
        lyrics: "",
        artistId: brunoMars.id,
      }),
      Song.create({
        name: "Since U Been Gone",
        videoURL: "https://www.youtube.com/embed/R7UrFYvl5TE",
        originalAudio: "/client/public/audio/Since-U-Been-Gone_original",
        instrumentalAudio:
          "/client/public/audio/Since-U-Been-Gone_instrumentals",
        vocalAudio: "/client/public/audio/Since-U-Been-Gone_vocals",
        lyrics: "",
        artistId: kellyClarkson.id,
      }),
      Song.create({
        name: "Sweet Caroline",
        videoURL: "https://www.youtube.com/embed/GmK5_lnQUbE",
        originalAudio: "/client/public/audio/Sweet-Caroline_original",
        instrumentalAudio: "/client/public/audio/Sweet-Caroline_instrumentals",
        vocalAudio: "/client/public/audio/Sweet-Caroline_vocals",
        lyrics: "",
        artistId: neilDiamond.id,
      }),
      Song.create({
        name: "A Thousand Miles",
        videoURL: "https://www.youtube.com/embed/Cwkej79U3ek",
        originalAudio: "/client/public/audio/A-Thousand-Miles_original",
        instrumentalAudio:
          "/client/public/audio/A-Thousand-Miles_instrumentals",
        vocalAudio: "/client/public/audio/A-Thousand-Miles_vocal",
        lyrics: "",
        artistId: vanessaCarlton.id,
      }),
    ]);

    console.log(`seeded ${songs.length} songs`);

    app.listen(port, () => console.log(`listening on port ${port}`));
  } catch (ex) {
    console.log(ex);
  }
};

init();
