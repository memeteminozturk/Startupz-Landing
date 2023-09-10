import React from 'react'
import './style.scss'
import sloganImg from '../../assets/images/slogan-image.png'

const Slogan = () => {
  return (
    <section className="slogan">

        <div className="container">
            <div className="slogan__img">
                <img src={sloganImg} alt="Slogan" />
            </div>
            <h2 className="slogan__title">We love solving problems!</h2>
        </div>
    </section>
  )
}

export default Slogan