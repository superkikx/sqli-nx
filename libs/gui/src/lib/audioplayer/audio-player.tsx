import React from "react";
import PropTypes from './audio-player.props';

import "./audio-player.scss";

/* eslint-disable-next-line */
export interface AudioPlayerProps {
    label: string,
    src: string
}

export const AudioPlayer = (props: AudioPlayerProps) => {
    const { label, src } = props;

    return (
        <React.Fragment>
            <div> { label } </div>
            <audio src={ src } controls />
        </React.Fragment>
    );
};

AudioPlayer.defaultProps = {
    src: "",
    label: "Music Player"
};

AudioPlayer.propTypes = PropTypes;

