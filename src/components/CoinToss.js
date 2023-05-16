import styles from '../styles/CoinToss.module.css'
import { useState } from 'react';

const coinToss = new Audio("https://www.partnersinrhyme.com/files/sounds1/MP3/office/coinflip.mp3")
function CoinToss (){
    let [on, setOn] = useState(false)
    let [isFunctionCalled, setIsFunctionCalled] = useState(false)
    let [winner, setWinner] = useState("")

    function tossCoinHandler (){
        setIsFunctionCalled(isFunctionCalled= true)
        setOn(on=true)
        coinToss.play()
        setTimeout(()=>{
            setWinner(winner = Math.floor(Math.random()*2)==1?"Heads 😁":"Tails 🤗")
            setOn(on=false)
        },1000) 
    }
    
    return(
        <div className={styles.flex}>
            <h1>Coin Toss Web App</h1>
            <button className={styles.btn} onClick={on? null: tossCoinHandler}>Click Here To Toss</button>
            <img className={isFunctionCalled==false? styles.loadingImg: styles.dNone} src='https://media4.giphy.com/media/6jqfXikz9yzhS/giphy.gif?cid=ecf05e47et9gey8njv8oihhzz1arjot21983xf3ku1qupttz&ep=v1_gifs_search&rid=giphy.gif&ct=g'/>
            <img className={on==false?styles.dNone:styles.loadingImg} src='https://media.tenor.com/bd3puNXKLwUAAAAC/coin-toss.gif'/>
            <h1 className={on==true?styles.dNone:styles.result}>{winner}</h1>
        </div>
    )
}

export default CoinToss;