import { faMusic } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import './MusicBar.scss';

export function MusicBar() {
    const [music, setMusic] = useState('');

    const clickPlay = url => {
        return () => {
            if(!music || music !== url) {
                setMusic(url);
            } else {
                setMusic('');
            }
        }
    }

    return (<div className="MusicBar">
                <audio src={music} autoPlay></audio>
                <button onClick={clickPlay('./audio/pokemon-theme-song.mp3')}><FontAwesomeIcon icon={faMusic}/></button>
                <button onClick={clickPlay('./audio/littleroot-song.mp3')}><FontAwesomeIcon icon={faMusic}/></button>
                <button onClick={clickPlay('./audio/oldale-song.mp3')}><FontAwesomeIcon icon={faMusic}/></button>
                <button onClick={clickPlay('./audio/petalburg-song.mp3')}><FontAwesomeIcon icon={faMusic}/></button>
                <button onClick={clickPlay('./audio/rustboro-song.mp3')}><FontAwesomeIcon icon={faMusic}/></button>  
                <button onClick={clickPlay('./audio/slateport-song.mp3')}><FontAwesomeIcon icon={faMusic}/></button>
            </div>);
}