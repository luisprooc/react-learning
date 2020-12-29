import React,{useState} from 'react';
import Styles from "./RpgCard.module.css";

const RpgCard = ({points,savePoints}) => {
    let [healt,saveHealt] = useState(3);
    let [attack,saveAttack] = useState(3);
    let [defense,saveDefense] = useState(2);
    let [magic,saveMagic] = useState(5);

    const mago = [
        ["healt",healt],
        ["attack",attack],
        ["defense",defense],
        ["magic",magic]
    ];
    
    const add = (e) => {

        if(!points) return
        
        switch(e.target.name){
            case "healt":
                saveHealt(++healt);
                break;

            case "attack":
                saveAttack(++attack);
                break;

            case "defense":
                saveDefense(++defense);
                break;

            default:
                saveMagic(++magic);
                break;

        }
        savePoints(--points);
    };

    const minus = (e) => {

        let aux = true;

        mago.forEach(s => {
            
            if(e.target.name === s[0]){
                if(!s[1]) aux = false

                else aux = true
            }
        })

        if(!aux) return
        
        switch(e.target.name){
            case "healt":
                saveHealt(--healt);
                break;

            case "attack":
                saveAttack(--attack);
                break;

            case "defense":
                saveDefense(--defense);
                break;

            default:
                saveMagic(--magic);
                break;

        }
        savePoints(++points);
    };

    const clean = () => {
        saveHealt(0);
        saveAttack(0);
        saveDefense(0);
        saveMagic(0);
        savePoints(33);
    };
    
    const reload = (e) => {
        window.location.href="http://localhost:3000/";
    };
    
    
    return(
        <div className={Styles['rpg-card']}>
            <h1>Clase Mago:</h1>
            <h3>🧙🏼</h3>
            <h5 className={!points?Styles['danger']:points <= 10?Styles["advert"]:null}>Points: {points}</h5>
            <center>
                {mago.map((e,i) => {
                    return(
                        <figcaption key={i}>
                            <p>{e[0]}: {e[1]}</p>
                            <button name={e[0]} onClick={e =>{ add(e)}}>➕</button>
                            <button name={e[0]} onClick={e =>{ minus(e)}}>➖</button>
                        </figcaption>
                    );
                })}
            </center>
            <div className={Styles['div-button']}>
                <button onClick={e => clean()}>Clean</button>
                <button onClick={e => reload(e)}>Default</button>
            </div>
            <center><a href="#">Next ▶</a></center>
        </div>
    );
};

export default RpgCard;


