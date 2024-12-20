import React from 'react'
import "./component.css"
const Card = (props) => {
  return (
    <>

          <div className="col-md-6 col-lg-4 mx-auto">
            {/* <div className="card shadow-lg" data-cue={props.dataCue}> */}
            <div className="card shadow-lg" >
              <figure className="card-img-top overlay overlay-1">
                <a href="#"><img className="img-fluid card-image" src={props.img} alt="" loading='lazy'/></a>
                <figcaption>
                  <h5 className="from-top mb-0">{props.title}</h5>
                </figcaption>
              </figure>
              <div className="card-body p-5">
                <h4 className="mb-0">{props.title}</h4>
              </div>
            </div>
          </div>
    </>
  )
}

export default Card
