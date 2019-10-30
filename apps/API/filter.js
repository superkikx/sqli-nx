const data = require('./tracks.json');

const output = data.items.map(
    item => item.track
).map(
    (track,id) => ({
        id:id+1,
        album:{
            id:track.album.id,
            image:track.album.images[0].url,
            name:track.album.name,
        },
        title:'',
        artists: track.artists.map( art => art.name),
        duration:track.duration_ms / 1000,
        href:track.href,
        name:track.name,
        preview:track.preview_url

    })
)

require('fs').writeFileSync(__dirname + '/fitlered.json', JSON.stringify(output));