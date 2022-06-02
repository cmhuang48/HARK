const {
  db,
  models: { Song, Artist },
} = require('../server/db');
const port = process.env.PORT || 8080;
const app = require('./app');

const init = async () => {
  try {
    console.log('calling init');
    await db.sync({ force: true });

    const [brunoMars, kellyClarkson, neilDiamond, vanessaCarlton] =
      await Promise.all([
        Artist.create({ name: 'Bruno Mars' }),
        Artist.create({ name: 'Kelly Clarkson' }),
        Artist.create({ name: 'Neil Diamond' }),
        Artist.create({ name: 'Vanessa Carlton' }),
      ]);

    const songs = await Promise.all([
      Song.create({
        name: 'Just The Way You Are',
        audioURL: 'test',
        artistId: brunoMars.id,
      }),
      Song.create({
        name: 'Since U Been Gone',
        audioURL: 'test',
        artistId: kellyClarkson.id,
      }),
      Song.create({
        name: 'Sweet Caroline',
        audioURL: 'test',
        artistId: neilDiamond.id,
      }),
      Song.create({
        name: 'A Thousand Miles',
        audioURL: 'test',
        artistId: vanessaCarlton.id,
      }),
    ]);

    app.listen(port, () => console.log(`listening on port ${port}`));
  } catch (ex) {
    console.log(ex);
  }
};

init();

module.exports = { port };
