import React from 'react'
import Card from './Card'
import ImageChina from "./cardImages/study-in-china.jpeg"
import ImageUK from "./cardImages/study-in-uk.jpeg"
import ImageCanada from "./cardImages/study-in-canada.jpeg"
const CardList1 = () => {
  return (
    <>
      <div className="row grid-view gx-md-8 gx-xl-10 gy-8 gy-lg-0 text-center my-5" >
          <Card title="Study In China" url="" img={ImageChina} dataCue="slideInDown"/>
          <Card title="Study In UK" url="" img={ImageUK} dataCue="slideInDown"/>
          <Card title="Study In Canada" url="" img={ImageCanada} dataCue="slideInDown"/>
      </div>
    </>
  )
}

export default CardList1
