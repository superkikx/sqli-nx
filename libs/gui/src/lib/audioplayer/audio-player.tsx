import React, { useState } from "react";
import PropTypes from './audio-player.props';
import { Cover } from "./cover/cover";
import { List } from "./list/list";
//import data from './pl.json';

import "./audio-player.scss";


/* eslint-disable-next-line */
export interface AudioPlayerProps {
    tracks:[
        {
            "id":number;
            "album": {
              "id": string;
              "image": string;
              "name": string;
            },
            "title": string;
            "artists": string[];
            "duration": number;
            "href": string;
            "name": string;
            "preview":string;
          }
    ]
}

export const AudioPlayer = (props: AudioPlayerProps) => {
    
    const [src, setSrc] = React.useState( 
        (props.tracks && props.tracks.length && [props.tracks[0].preview])|| null
        );

    const [play, setPlay] = useState(false);
    const [currentSong, setCurrentSong] = useState( props.tracks && props.tracks.length && props.tracks[0] || null);

    const audioElement = React.createRef();

    const handlePlayer = () => {
        if(!play) {
            audioElement.current.play();
            setPlay(true)
        } else {
            audioElement.current.pause();
            setPlay(false)
        }
    };

    const handlePreview = preview => {
        setSrc(preview);
    };

    return (
        <div className={ 'audioWrapper' }>

            <Cover playPreview={ handlePlayer } track={currentSong}/>

            <div className='playerWrapper'>
                <audio src={ src } controls ref={ audioElement }/>
                <div>{ currentSong && currentSong }</div>
            </div>

            <hr />

            <List retrieveName={ name => setCurrentSong(name) } tracks={ props.tracks } playPreview={ (preview: any) => handlePreview(preview) }/>
            
        </div>
    );
};

AudioPlayer.defaultProps = {
    src: ""
};

AudioPlayer.propTypes = PropTypes;

