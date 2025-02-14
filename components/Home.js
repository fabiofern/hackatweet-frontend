import styles from '../styles/Home.module.css';
import LastTweetSend from './LastTweets';
import Trend from './Trends';
import Link from 'next/link';
import { useEffect, useState } from 'react';

function HomeOfTweets() {
  const [imputValue, setImputValue] = useState("");
  const [containerTweet, setContainerTweet] = useState([]);
  const [trends, SetTrends] = useState([]);

  // Gérer le message Tweet
  const messageTweet = () => {
    fetch(`http://localhost:3000/tweets/newtweet/jUKmDyGER18dLDUF4r3uANmsvCmcxHBz`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: imputValue }),
    }).then(response => response.json())
      .then(data => {
        setContainerTweet([...containerTweet, data.newTweet])
        // window.location.reload()
      });
    return containerTweet
  };

  // // //affiche tous les tweets sur la liste
  // let tweetList = []
  // fetch(`http://localhost:3000/tweets/showtweets`)
  //   .then(response => response.json())
  //   .then(dataAllTweet => {
  //     console.log("tous mes tweets", dataAllTweet)
  //   let tweetList = []
  //    tweetList = dataAllTweet.map((data,i) => {
  //       return (<LastTweetSend key={i} {...data}  />)
  //     })
  //   })

  // 🔹 Récupérer les tweets au chargement du composant
  useEffect(() => {
    fetch("http://localhost:3000/tweets/showtweets")
      .then((response) => response.json())
      .then((dataAllTweet) => {
        console.log("Tous mes tweets :", dataAllTweet);
        setContainerTweet(dataAllTweet); // Met à jour le state avec les tweets
      })
      .catch((error) => console.error("Erreur lors du fetch :", error));
  }, []); // Exécuté une seule fois au chargement



  return (
    <div className={styles.divtotale}>
      <div className={styles.divgauche}>
        <Link href="/Home"><img src="..\fabio01.png" alt="icon logo" className={styles.logoDivgauche} /></Link>
        <div className={styles.usernameDivgauche} >
        </div>
      </div>
      <div className={styles.divcentral}>
        <div className={styles.divHaute} >
          <h1>HOME</h1>
          <div className={styles.inputButton}>
            <input placeholder={"FAIT PETER TON TWEET ICI !!!"} className={styles.inputTweet} onChange={(e) => setImputValue(e.target.value)}></input>
            <div>
              0/280
              <button className={styles.buttonTweet} onClick={() => messageTweet()} >Tweet</button>
            </div>
          </div>

          {/* 🔹 Affichage des tweets */}
          <div className={styles.tweetContainer}>
            {containerTweet.length > 0 ? (
              containerTweet.map((tweet, i) => <LastTweetSend key={i} {...tweet} />).reverse()
          
            ) : (
              <p>Pas encore de tweets ???</p>
            )}
          </div>
        </div>

          {/* </div>
          <div className={styles.tweetContainer}>
            <LastTweetSend />
            {tweetList}
          </div>
          </div> */}



      </div >
              <div className={styles.trend}>

          <h1>Trends</h1>

          <div className={styles.hashtagContainer}><Trend /></div>
        </div>
      </div >
      );
}

      export default HomeOfTweets;