import React from 'react'
const Flags = ({flags,population,capital,region}) => {
//flagItems.flags fotoa
        //flagItems.population
        //flagItems.capital
        console.log(region)
        function numberWithCommas(x) {
          return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      }
  return (
    <>   
        <div className="card" style={{width: "14rem"} }>
        <img src={flags.png} class="card-img-top" alt="..."/>
        <div className="card-body pb-3">
          <div className='image-line'></div>
            <p className="card-text card-text2 fw-bold text-start"> {capital}</p>
            <p className="card-text  text-start"><b>population: </b>{numberWithCommas(population)}</p>
            <p className="card-text  text-start"><b>region: </b>{region}</p>
            <p className="card-text  text-start "><b>capital: </b>{capital}</p>
        </div>
</div>
      </>
  )
}

export default Flags