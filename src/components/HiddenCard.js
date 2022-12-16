import { useState } from "react"
import "./styles/HiddenCard.css"
import ftl from "../pictures/ftl.jpg"
import avatar from "../pictures/ftl2.jpg"

const HiddenCard = () => {
  const [picLink, setPicLink] = useState(ftl)
  return (
    <>
      <div className="pic">
        <img class="pict" src={picLink} alt="Faster than light par Casey Horner" onClick={(e) => setPicLink(avatar)} />
      </div>
    </>
  )
}

export default HiddenCard