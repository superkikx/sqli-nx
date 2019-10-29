import React, { useState } from "react";
import PropTypes from './audio-player.props';
import { Cover } from "./cover/cover";
import { List } from "./list/list";
import data from './pl.json';

import "./audio-player.scss";


/* eslint-disable-next-line */
export interface AudioPlayerProps {
    src: string
    coverImage: string
}

export const AudioPlayer = (props: AudioPlayerProps) => {
    const [src, setSrc] = useState('');

    return (
        <div className={ 'audioWrapper' }>
            <Cover coverImage={ "https://i.scdn.co/image/ab67616d0000b273f9d64ac5b0e042252e3a561a" }/>
            <audio src={ src } controls />
            <hr />
            <List items={ data.tracks } playPreview={ (preview: any) => setSrc(preview) }/>
        </div>
    );
};

AudioPlayer.defaultProps = {
    src: ""
};

AudioPlayer.propTypes = PropTypes;

