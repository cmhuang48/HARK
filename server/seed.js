const {
  db,
  models: { Song, Artist, PitchData },
} = require('../server/db');

async function seed() {
  await db.sync({ force: true });

  // Creating artists
  const [brunoMars, kellyClarkson, neilDiamond, vanessaCarlton] =
    await Promise.all([
      Artist.create({ name: 'Bruno Mars' }),
      Artist.create({ name: 'Kelly Clarkson' }),
      Artist.create({ name: 'Neil Diamond' }),
      Artist.create({ name: 'Vanessa Carlton' }),
    ]);

  console.log(`seeded 4 artists`);

  // Creating songs
  const [justTheWayYouAre, sinceUBeenGone, sweetCaroline, aThousandMiles] =
    await Promise.all([
      Song.create({
        name: 'Just The Way You Are (DEMO)',
        videoURL: 'https://www.youtube.com/embed/LjhCEhWiKXk',
        originalAudio: '/audio/Just-The-Way-You-Are_original.mp3',
        instrumentalAudio: '/audio/Just-The-Way-You-Are_instrumentals.mp3',
        vocalAudio: '/audio/Just-The-Way-You-Are_vocals.mp3',
        lyrics: '',
        artistId: brunoMars.id,
      }),
      Song.create({
        name: 'Just The Way You Are',
        videoURL: 'https://www.youtube.com/embed/LjhCEhWiKXk',
        originalAudio: '/audio/Just-The-Way-You-Are_original.mp3',
        instrumentalAudio: '/audio/Just-The-Way-You-Are_instrumentals.mp3',
        vocalAudio: '/audio/Just-The-Way-You-Are_vocals.mp3',
        lyrics: `
        [ti:Just The Way You Are]
        [ar:Bruno Mars]
        [00:00.00]...
        [00:17.35]Oh, her eyes, her eyes
        [00:19.34]Make the stars look like they’re not shining
        [00:22.10]Her hair, her hair
        [00:23.86]Falls perfectly without her trying
        [00:26.59]She’s so beautiful
        [00:28.84]And I tell her every day
        [00:34.34]Yeah
        [00:35.36]I know, I know
        [00:37.10]When I compliment her
        [00:38.62]She won't believe me
        [00:39.84]And it's so, it's so
        [00:41.59]Sad to think that she don’t see what I see
        [00:44.36]But every time she asks me do I look okay
        [00:47.85]I say
        [00:51.59]When I see your face
        [00:55.86]There’s not a thing that I would change
        [01:00.09]Cause you’re amazing
        [01:03.59]Just the way you are
        [01:08.89]And when you smile,
        [01:13.34]The whole world stops and stares for a while
        [01:17.85]Cause girl you’re amazing
        [01:21.09]Just the way you are
        [01:28.09]Her lips, her lips
        [01:29.87]I could kiss them all day if she’d let me
        [01:32.63]Her laugh, her laugh
        [01:34.38]She hates but I think its so sexy
        [01:37.09]She’s so beautiful
        [01:39.60]And I tell her every day
        [01:44.84]Oh,
        [01:45.60]You know, you know, you know
        [01:47.09]I'd never ask you to change
        [01:49.59]If perfect's what you’re searching for
        [01:52.09]Then just stay the same
        [01:54.34]So don’t even bother asking
        [01:56.60]If you look okay
        [01:58.11]You know I'll say
        [02:01.85]When I see your face
        [02:06.10]There’s not a thing that I would change
        [02:10.59]Cause you’re amazing
        [02:13.85]Just the way you are
        [02:19.34]And when you smile,
        [02:23.84]The whole world stops and stares for a while
        [02:28.34]Cause girl you’re amazing
        [02:31.61]Just the way you are
        [02:37.02]The way you are
        [02:41.03]The way you are
        [02:45.78]Girl you’re amazing
        [02:49.06]Just the way you are
        [02:54.54]When I see your face
        [02:59.03]There’s not a thing that I would change
        [03:03.52]Cause you’re amazing
        [03:06.78]Just the way you are
        [03:12.27]And when you smile,
        [03:16.52]The whole world stops and stares for a while
        [03:21.03]Cause girl you’re amazing
        [03:24.27]Just the way you are
        [03:56.00]...`,
        artistId: brunoMars.id,
      }),
      //lyric timestamps are wrong for since U...
      Song.create({
        name: 'Since U Been Gone',
        videoURL: 'https://www.youtube.com/embed/R7UrFYvl5TE',
        originalAudio: '/audio/Since-U-Been-Gone_original.mp3',
        instrumentalAudio: '/audio/Since-U-Been-Gone_instrumentals.mp3',
        vocalAudio: '/audio/Since-U-Been-Gone_vocals.mp3',
        lyrics: `[ar:Kelly Clarkson]
        [ti:Since U Been Gone]
        
        [00:00.00]...
        [00:03.77]Here's the thing
        [00:05.01]We started out friends
        [00:07.51]It was cool, but it was all pretend
        [00:11.01]Yeah, yeah
        [00:13.52]Since you been gone
        [00:18.26]You're dedicated, you took the time
        [00:21.51]Wasn't long 'til I called you mine
        [00:25.76]Yeah, yeah
        [00:28.26]Since you been gone
        [00:31.77]And all you'd ever hear me say
        [00:35.26]Is how I picture me with you
        [00:39.02]That's all you'd ever hear me say
        [00:42.52]But since you been gone
        [00:46.26]I can breathe for the first time
        [00:49.76]I'm so moving on, yeah, yeah
        [00:53.76]Thanks to you
        [00:55.76]Now I get what I want
        [01:00.76]Since you been gone
        [01:06.02]How can I put it? You put me on
        [01:09.27]I even fell for that stupid love song
        [01:13.01]Yeah, yeah
        [01:15.54]Since you been gone
        [01:19.02]How come I'd never hear you say
        [01:22.38]I just wanna be with you?
        [01:26.62]Guess you never felt that way
        [01:30.12]But since you been gone
        [01:33.62]I can breathe for the first time
        [01:37.12]I'm so moving on, yeah, yeah
        [01:41.37]Thanks to you
        [01:42.87]Now I get what I want
        [01:47.62]Since you been gone
        [01:50.06]You had your chance, you blew it
        [01:53.82]Out of sight, out of mind
        [01:57.07]Shut your mouth, I just can't take it
        [02:00.31]Again, and again, and again, and again
        [02:17.46]Since you been gone (Since you been gone)
        [02:21.44]I can breathe for the first time
        [02:24.71]I'm so moving on, yeah, yeah
        [02:28.72]Thanks to you (Thanks to you)
        [02:31.21]Now I get, I get what I want
        [02:36.46]I can breathe for the first time
        [02:39.71]I'm so moving on, yeah, yeah
        [02:43.71]Thanks to you (Thanks to you)
        [02:45.70]Now I get (I get)
        [02:47.46]You should know (You should know)
        [02:49.21]That I get
        [02:50.96]I get what I want
        [02:56.57]Since you been gone
        [02:59.57]Since you been gone
        [03:03.57]Since you been gone
        [03:17.00]...`,
        artistId: kellyClarkson.id,
      }),
      Song.create({
        name: 'Sweet Caroline',
        videoURL: 'https://www.youtube.com/embed/GmK5_lnQUbE',
        originalAudio: '/audio/Sweet-Caroline_original.mp3',
        instrumentalAudio: '/audio/Sweet-Caroline_instrumentals.mp3',
        vocalAudio: '/audio/Sweet-Caroline_vocals.mp3',
        lyrics: `[ar:Neil Diamond]
[ti:Sweet Caroline]
        [00:00.00]...
        [00:14.02]Where it began, I can't begin to know when
[00:21.72]But then I know it's growing strong
[00:29.17]Was in the spring
[00:33.14]And spring became the summer
[00:36.86]Who'd have believed you'd come along
[00:43.51]Hands, touching hands
[00:51.77]Reaching out, touching me, touching you
[01:02.38]Sweet Caroline
[01:07.16]Good times never seemed so good
[01:13.81]I've been inclined
[01:18.32]To believe they never would
[01:22.57]But now I
[01:26.02]Look at the night and it don't seem so lonely
[01:33.46]We filled it up with only two
[01:41.16]And when I hurt
[01:44.88]Hurting runs off my shoulders
[01:48.86]How can I hurt when holding you
[01:55.24]Warm, touching warm
[02:03.22]Reaching out, touching me, touching you
[02:14.10]Sweet Caroline
[02:18.88]Good times never seemed so good
[02:25.52]I've been inclined
[02:30.04]To believe they never would
[02:34.55]Oh no, no
[02:49.96]Sweet Caroline
[02:54.74]Good times never seemed so good
[03:01.38]Sweet Caroline
[03:06.16]I believe they never could
[03:12.80]Sweet Caroline
[03:17.58]Good times never seemed so good
[03:23.00]...`,
        artistId: neilDiamond.id,
      }),
      Song.create({
        name: 'A Thousand Miles',
        videoURL: 'https://www.youtube.com/embed/Cwkej79U3ek',
        originalAudio: '/audio/A-Thousand-Miles_original.mp3',
        instrumentalAudio: '/audio/A-Thousand-Miles_instrumentals.mp3',
        vocalAudio: '/audio/A-Thousand-Miles_vocal.mp3',
        lyrics: `
        [ti:A Thousand Miles]
        [ar:Vanessa Carlton]
        [la:af]

        [00:00.00]...
        [00:10.51]Making my way downtown
        [00:12.01]Walking fast
        [00:13.25]Faces pass
        [00:14.26]And I'm home-bound
        [00:20.25]Staring blankly ahead
        [00:22.00]Just making my way
        [00:23.25]Making a way
        [00:24.49]Through the crowd
        [00:31.77]And I need you
        [00:34.49]And I miss you
        [00:37.00]And now I wonder
        [00:40.58]If I could fall into the sky
        [00:45.60]Do you think time would pass me by?
        [00:50.36]'Cause you know I'd walk a thousand miles
        [00:55.10]If I could just see you tonight
        [01:05.86]It's always times like these
        [01:07.35]When I think of you
        [01:08.63]And I wonder if you ever think of me
        [01:15.86]'Cause everything's so wrong
        [01:17.35]And I don't belong
        [01:18.86]Living in your precious memory
        [01:27.34]'Cause I need you
        [01:30.10]And I miss you
        [01:32.61]And now I wonder
        [01:36.26]If I could fall into the sky
        [01:41.15]Do you think time would pass me by?
        [01:45.89]'Cause you know I'd walk a thousand miles
        [01:50.40]If I could just see you tonight
        [02:06.45]And I, I don't wanna let you know
        [02:11.57]I, I drown in your memory
        [02:16.58]I, I don't wanna let this go
        [02:21.82]I, I don't
        [02:26.84]Making my way downtown
        [02:28.57]Walking fast
        [02:29.82]Faces pass
        [02:30.82]And I'm home-bound
        [02:36.82]Staring blankly ahead
        [02:38.32]Just making my way
        [02:39.80]Making a way
        [02:41.08]Through the crowd
        [02:48.32]And I still need you
        [02:50.58]And I still miss you
        [02:53.73]And now I wonder
        [02:58.46]If I could fall into the sky
        [03:03.35]Do you think time would pass us by?
        [03:07.98]'Cause you know I'd walk a thousand miles
        [03:12.50]If I could just see you
        [03:18.64]If I could fall into the sky
        [03:23.38]Do you think time would pass me by?
        [03:28.15]'Cause you know I'd walk a thousand miles
        [03:32.64]If I could just see you
        [03:38.25]If I could just hold you tonight
        [03:57.00]...`,
        artistId: vanessaCarlton.id,
      }),
    ]);

  console.log(`seeded demo and 4 songs`);

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

  console.log('seeded successfully');
}

module.exports = seed;
