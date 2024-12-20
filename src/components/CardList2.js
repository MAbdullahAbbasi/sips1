import React from 'react'
import Card from './Card'
import ImageRussia from "./cardImages/study-in-russia.jpeg"
import ImageTurkey from "./cardImages/study-in-turkey.jpg"
import ImageUSA from "./cardImages/study-in-usa.jpg"
const CardList2 = () => {
  return (
    <>
      <div className="row grid-view gx-md-8 gx-xl-10 gy-8 gy-lg-0 text-center">
          

          <Card title="Study In Russia" url="" img={ImageRussia} dataCue="slideInRight"/>
          <Card title="Study In Türkiye" url="" img={ImageTurkey} dataCue="slideInRight"/>
          <Card title="Study In USA" url="" img={ImageUSA} dataCue="slideInRight"/>
      </div>
    </>
  )
}

export default CardList2
