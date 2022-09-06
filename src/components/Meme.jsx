import React, { useState } from "react";
import memesData from "../memesData"
import "../styles/meme.css"
export default function Meme() {

    let url;

    // const [memeUrl, setMeme] = useState("");
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/1bij.jpg",
    }
    )

    const [allMemeImages, setAllMemeImages] = useState(memesData);
    

    function randomElement(item) {
        const memesArr = allMemeImages.data.memes
        const randomEl = Math.floor(Math.random() * memesArr.length)
        url = memesArr[randomEl].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }
    function handleChange(event){
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }
    return(
        <div className="meme">
                <div action="" className="form">
                    <input type="text" className="form--input" placeholder="Top text" name="topText" value={meme.topText} onChange={handleChange}/>
                    <input type="text" className="form--input" placeholder="Bottom text" name="bottomText" value={meme.bottomText} onChange={handleChange}/>
                    <button onClick={randomElement} className="form--button">Get new meme image</button>
                </div>
                <div className="memeBlock">
                    <h2 className="meme-text top">{meme.topText}</h2>
                    <h2 className="meme-text bottom">{meme.bottomText}</h2>
                    <img src={meme.randomImage} alt="" className="meme--img" />
                </div>
                <div className="space-div"></div>
        </div>
    )
}