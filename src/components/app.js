import React, { useEffect, useState } from "react"
import "../css/tailwind.css"

function App() {
  async function getSpotify() {
    const data = await fetch(
      "https://api.spotify.com/v1/me/player/currently-playing?market=FR",
      {
        method: "GET",
        headers: new Headers({
          Authorization:
            "Bearer BQC416-NvU2deXhYVHJYMq772qPmlV2kwU8YRuH3WoFsBNT_-l5hKZ-rFUrtSFNpHD24HR4dAzw_01o9vD_wFsvR5h-4l7RB_Bi5d_S1WorErPQOgpbYAAcCijMnXQEx-yhqMWVJvkEhZauAEC_zl0-TVb2Dx8GdkmQ7yYx9",
        }),
      },
    )
    const json = await data.json()
    console.log(json)
    setData(json)
  }

  const [data, setData] = useState("")
  useEffect(() => {
    if (!data) {
      getSpotify()
    }
  }, [data])
  return (
    <div className="bg-teal-600 h-screen text-white lg:flex md:flex-row items-center">
      <h1 className="text-center font-bold text-3xl w-full">
        En ce moment j'écoute...
        <br />
        {!data ? "Rien" : data.item.name + " de " + data.item.artists[0].name}
      </h1>
      <img alt="albumCover" className="p-10" src={!data ? "" : data.item.album.images[0].url}/>
    </div>
  )
}

export default App
