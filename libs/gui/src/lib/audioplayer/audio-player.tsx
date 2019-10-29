import React, { useState } from "react";
import PropTypes from './audio-player.props';
import { Cover } from "./cover/cover";
import { List } from "./list/list";
import data from './pl.json';

import "./audio-player.scss";


/* eslint-disable-next-line */
export interface AudioPlayerProps {
    src: string
}

export const AudioPlayer = (props: AudioPlayerProps) => {
    const [src, setSrc] = useState();
    const [play, setPlay] = useState(false);
    const [currentSong, setCurrentSong] = useState();

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
            <Cover playPreview={ handlePlayer } data={ data.tracks } coverImage={ "https://i.scdn.co/image/ab67616d0000b273f9d64ac5b0e042252e3a561a" }/>
            <div className='playerWrapper'>
                <audio src={ src } controls ref={ audioElement }/>
                <div>{ currentSong && currentSong }</div>
            </div>
            <hr />
            <List retrieveName={ name => setCurrentSong(name) } items={ data.tracks } playPreview={ (preview: any) => handlePreview(preview) }/>
        </div>
    );
};

AudioPlayer.defaultProps = {
    src: ""
};

AudioPlayer.propTypes = PropTypes;

