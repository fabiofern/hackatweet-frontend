import styles from '../styles/LastTweets.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

function LastTweetSend(props) {   
    const [likeCount, setLikeCount] = useState(0); // Compteur des likes
    const [liked, setLiked] = useState(false); // Vérifie si le tweet a été liké

    const handleLike = () => {
        !liked ? setLikeCount(likeCount + 1) : setLikeCount(likeCount - 1); // Incrémente le compteur à chaque clic
        setLiked(!liked); // Quand on clique, le tweet est liké
    };

    return (
        <div className={styles.divtotale}>
            <div className={styles.userPost}>
                <img src="/favicon.ico" alt="icon logo" className={styles.logoDivgauche} />
                Username @user #hashtag
            </div>
            <div className={styles.message}>{props.message}</div>
            <div>
                {/* Le cœur devient rouge quand on clique, sinon il est noir */}
                <FontAwesomeIcon 
                    icon={faHeart} 
                    onClick={() => handleLike()}  
                    className={styles.like} 
                    style={{ color: liked ? '#e74c3c' : 'black', cursor: 'pointer' }} // Noir au début, rouge après le clic
                /> 
                <span className={styles.likeCount}>{likeCount}</span> {/* Affiche le compteur de likes */}
                🗑️
            </div>
        </div>
    );
}

export default LastTweetSend;



