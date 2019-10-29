import React, {useState} from 'react'
import './list.scss';

export const List = props => {
    const { items } = props;
    const [isCurrent, setIsCurrent] = useState('');
    const tracks = [];

    items.map(x => tracks.push(x));

    const handlePreview = (x) => {
        props.playPreview(x.preview_url);
        setIsCurrent(x);
    };

    return (
        <ul className="playlist">
            { tracks.map((x, i) => <li className={ isCurrent === x ? 'current' : '' } onClick={ () => handlePreview(x) } key={ i }> { x.name } </li>)}
        </ul>
    )
};