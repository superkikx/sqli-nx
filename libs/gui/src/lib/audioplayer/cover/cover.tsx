import React from 'react'
import './cover.scss';

export const Cover = ({track}) => {
    

    const style = { backgroundImage: `url(${track.album.image})`};

    return (
        <div className="mainWrapper">
            <div className="cover-art-image"
                 style={ style }>
                <button onClick={ () => props.playPreview() } className="cover-art-playback" dir="ltr">
                    <svg className="icon-play" viewBox="0 0 85 100">
                        <path fill="currentColor"
                              d="M81 44.6c5 3 5 7.8 0 10.8L9 98.7c-5 3-9 .7-9-5V6.3c0-5.7 4-8 9-5l72 43.3z">
                            <title>PLAY</title></path>
                    </svg>
                </button>
            </div>
            <div className='rightContainer'>
                <h3>Album: { track.album.name }</h3>
                <div>by { track.artists.reduce( (start, art )=> start+'-'+ art.name,'') }</div>
            </div>
        </div>
    )
};