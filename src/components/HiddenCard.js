import { useState } from "react"
import "./styles/HiddenCard.css"
import ftl from"../pictures/ftl.jpg"
import avatar from"../pictures/avatar-bis.png"

const HiddenCard = () => {
  const [picLink, setPicLink] = useState(ftl)
	return (
        <>
            <div className="pic">
                <img class="pict" src= {picLink} alt="Faster than light par Casey Horner" onClick={(e) =>setPicLink(avatar) ? (ftl) : (avatar)} />
            </div>
        </>
	)
}

export default HiddenCard