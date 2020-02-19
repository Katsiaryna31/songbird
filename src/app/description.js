import React, {useState, useEffect} from 'react';
import birdsData from './birdsData';

import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const Description = ({ level, clickedBird }) => {
    const [isActive, setIsActive] = useState(false);
    useEffect(() => { setIsActive(true);
        return () => (setIsActive(false))}, []);
    const birdsOfLevel = birdsData[level];
    let description;
    if (clickedBird === null) {
        description = <div className="description_wrapper">
            <p>Послушайте плеер.</p>
            <p>Выберите птицу из списка.</p>
        </div>
    } else {
            birdsOfLevel.forEach(bird => {
                if (bird.name === clickedBird) {
                    description = <div className="description_wrapper">
                        <div className="description_main">
                            <img src={bird.image} alt='Bird' width='200' height='150'></img>
                            <div className="description_bird">
                                <h3>{clickedBird}</h3>
                                <p>{bird.species}</p>
                                {isActive && <AudioPlayer
                                    src={bird.audio} autoPlay={false}
                                />}
                            </div>
                        </div>
                        <div className="description_text">
                            <p>{bird.description}</p>
                        </div>
                    </div>
                }
            })
        }
    return description;
}

export default Description;