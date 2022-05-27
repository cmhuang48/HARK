const {db, models: {Song,Artist} } = require('../server/db')
const port = process.env.PORT || 8080;
const app = require('./app')


app.listen(port, ()=> console.log(`listening on port ${port}`));

const init = async()=> {
    console.log('calling init');
    await db.sync({force: true});
    const [ neilDiamond, artist2, artist3, artist4 ]= await Promise.all([
        Artist.create({ name: 'Neil Diamond'}),
        Artist.create({ name: 'Artist2'}),
        Artist.create({ name: 'Artist3'}),
        Artist.create({ name: 'Artist4'}),

      ]);
    const songs = await Promise.all([
        Song.create({ 
            name: 'Sweet Caroline',
            audioURL: 'test',
        artistId: neilDiamond.id}),
        Song.create({ 
            name: 'Song2',
            audioURL: 'test',
        artistId: artist2.id}),
        Song.create({ 
            name: 'Song3',
            audioURL: 'test',
        artistId: artist3.id}),
        Song.create({ 
            name: 'Song4',
            audioURL: 'test',
        artistId: artist4.id}),
    ]);

};

init();