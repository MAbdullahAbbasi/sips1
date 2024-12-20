import React from 'react'
import Card from './Card'
import ImageAustralia from "./cardImages/study-in-australia.jpg"
import ImageTrnc from "./cardImages/study-in-trnc.jpg"
import ImageQatar from "./cardImages/study-in-qatar.jpg"
const CardList3 = () => {
  return (
    <>
      <div className="row grid-view gx-md-8 gx-xl-10 gy-8 gy-lg-0 text-center my-5">

          <Card title="Study In Australia" url="" img={ImageAustralia} dataCue="slideInUp"/>
          <Card title="Study In TRNC" url="" img={ImageTrnc}  dataCue="slideInUp"/>
          <Card title="Study In Qatar" url="" img={ImageQatar}  dataCue="slideInUp"/>
      </div>
    </>
  )
}

export default CardList3
