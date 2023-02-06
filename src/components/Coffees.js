import React from 'react'

const Coffees = (props) => {
  return (
    <div className='inline-grid min-[320px]:p-[50px]	lg:p-[100px] '>
        <img src={props.coffee.imgUrl} className="w-[250px] h-[180px] rounded" />
        <div>
            <h3>{props.coffee.title}</h3>
            <h6 className='font-light text-xs'>Price: {props.coffee.price}</h6>
        </div>
    </div>
  )
}

export default Coffees