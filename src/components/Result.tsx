import { useNavigate } from "react-router-dom";
import { useCount } from "./CountContext";
import vijay from "../assets/actors/vijay.png";
import surya from "../assets/actors/surya.png";
import dhanush from "../assets/actors/dhanush.png";
import ajith from "../assets/actors/ajith.png";
import sk from "../assets/actors/sk.png";
import rajini from "../assets/actors/rajini.png";
import kamal from "../assets/actors/kamal.png";
import vishal from "../assets/actors/vishal.png";
import jayamravi from "../assets/actors/jayam ravi.png";
import kavin from "../assets/actors/kavin.png";

import saipallavi from "../assets/actress/sai pallavi.png";
import keerthy from "../assets/actress/keerthysuresh.png";
import nayanthara from "../assets/actress/nayanthara.png";
import pooja from "../assets/actress/poojahedge.png";
import simran from "../assets/actress/simran.png";
import jyothika from "../assets/actress/jyothika.png";
import trisha from "../assets/actress/trisha.png";
import samantha from "../assets/actress/samantha.png";
import priya from "../assets/actress/pbs.png";
import hansika from "../assets/actress/hansika.png";

import skSong from "../assets/song/Salambala – Sai Abhyankkar _ Tamil Ringtone Download - MobCup.Com.Co.mp3"
import rajiniSong from "../assets/song/Hukum Reloaded Ringtone Download - MobCup.Com.Co.mp3"
import vijaySong from "../assets/song/_Yaar_Petra_Magano_Kathithi_Ringtone_(by Fringster.com).mp3"
import ajithSong from "../assets/song/_Mankatha_Tamil_Bgm_Ringtone_(by Fringster.com).mp3"
import kamalSong from "../assets/song/Kanmani Anbodu – Guna Movie _ Tamil Ringtone - MobCup.Com.Co.mp3"
import kavinSong from "../assets/song/_Asku_Maaro_Tamil_2021_Song_Ringtone_(by Fringster.com).mp3"
import jayamRaviSong from "../assets/song/_Thani_Oruvan_Ninaithu_Vittal_Thani_Oruvan_Ringtone_(by Fringster.com).mp3"
import dhanushSong from "../assets/song/Maari.mp3"
import suryaSong from "../assets/song/_Vizhi_Moodi_Yosithal_Background_Music_Ringtone_(by Fringster.com).mp3"
import vishalSong from "../assets/song/_Tum_Tum_Tum_Tum_Enemy_Movie_Ringtone_(by Fringster.com).mp3"

import sai from "../assets/song/saipallavi.mp3"
import keerthysong from "../assets/song/keerthy.mp3"
import nayantharasong from "../assets/song/nayanthara.mp3"
import poojasong from "../assets/song/Monica Song Ringtone Download - MobCup.Com.Co.mp3"
import simransong from "../assets/song/Thottu Thottu Pesum Sultana-Downringtone.com.mp3"
import jyothikasong from "../assets/song/_Oh_Senyoreeta_Poovellam_Kettuppar_Tamil_Ringtone_(by Fringster.com).mp3"
import trishasong from "../assets/song/Sawadeeka – Anthony Daasan _ Anirudh Ravichander Ringtone Download - MobCup.Com.Co.mp3"
import samanthasong from "../assets/song/_Kaththi_Vijay_Samantha_Bgm_Ringtone_(by Fringster.com).mp3"
import priyasong from "../assets/song/Anirudh_Ravichander_Bodhai_Kaname_Oh_Manapenne_Tamil_Song_Ringtone_(by Fringster.com).mp3"
import hansikasong from "../assets/song/_Kanjadai_Kattinale_Aambala_Ringtone_(by Fringster.com).mp3" 
import "./Result.css";  // new CSS file for styling

function Result() {
  const { count, increment , isMale , setMale} = useCount();
  const navigate = useNavigate();

  const actors = [
    { name: "Vijay", img: vijay , song : vijaySong },
    { name: "Surya", img: surya , song : suryaSong },
    { name: "Dhanush", img: dhanush , song : dhanushSong },
    { name: "Ajith", img: ajith , song : ajithSong },
    { name: "Sivakarthikeyan", img: sk , song : skSong  },
    { name: "Rajinikanth", img: rajini , song : rajiniSong },
    { name: "Kamal Haasan", img: kamal , song : kamalSong },
    { name: "Vishal", img: vishal , song : vishalSong },
    { name: "Jayam Ravi", img: jayamravi , song : jayamRaviSong },
    { name: "Kavin", img: kavin , song : kavinSong },
  ];

const actress = [
    { name: "Sai Pallavi", img: saipallavi , song : sai },
    { name: "Keerthy Suresh", img: keerthy ,song : keerthysong },
    { name: "Nayanthara", img: nayanthara , song : nayantharasong },
    { name: "Pooja Hedge", img: pooja , song : poojasong },
    { name: "Simran", img: simran , song: simransong },
    { name: "Jyothika", img: jyothika , song : jyothikasong },
    { name: "Trisha", img: trisha, song : trishasong },
    { name: "Samantha", img: samantha , song : samanthasong },
    { name: "Priya Bhavani Shankar", img: priya , song : priyasong },
    { name: "Haniska", img: hansika , song : hansikasong },
  ]

  return (
    <div className="result-container">
      <h1 className="result-title">🎉 Final Result 🎉</h1>
      {count === 0 ? (
        <div className="winner-card">
          <h2 className="dummy">Sorry 😔</h2>
          <p className="dummy">We couldn't find your actor</p>
        </div>
      ) : (
        <div className="winner-card">
          <h2 className="actor-name">You Chose {isMale ? actors[count - 1].name : actress[count - 1].name}</h2>
          
          <img
            className="winner-img"
            src={isMale ? actors[count - 1].img : actress[count - 1].img}
            alt={isMale ? actors[count - 1].name : actress[count - 1].name}
          />
          <p>{isMale}</p>
            <audio autoPlay>
            <source src={isMale ? actors[count - 1].song : actress[count - 1].song} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
          <h3 className="winner-name">{isMale ? actors[count - 1].name : actress[count - 1].name}</h3>
        </div>
      )}

      <button
        className="navigate-btn"
        onClick={() => {
          increment(-count);
          setMale(true);
          navigate("/");
        }}
      >
        🔙 Home
      </button>
    </div>
  );
}

export default Result;
