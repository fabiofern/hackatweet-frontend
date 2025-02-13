import styles from '../styles/Home.module.css';

function HomeOfTweets() {
  return (
    <div className={styles.divtotale}>
      <div className={styles.divgauche}>
        <img src="/favicon.ico" alt="icon logo" />
      </div>
      <div className={styles.divcentral}>
        <div>
          <h1>HOME</h1>
          <div className={styles.inputButton}>
            <input placeholder={"FAIT PETER TON TWEET ICI !!!"} className={styles.inputTweet}></input>
            <button className={styles.buttonTweet}>Tweet</button>
          </div>
        </div>
        <div className={styles.tweetContainer}>
        </div>
      </div>
      <div className={styles.trend}>
        <h1> Trends</h1>
        <div className={styles.hashtagContainer}></div>
      </div>


    </div >
  );
}

export default HomeOfTweets;