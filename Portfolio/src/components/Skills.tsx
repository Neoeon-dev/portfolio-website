import { useState } from 'react';
import Loading from './Loading';
import PlanetarySystem from './PlanetarySystem';
import "./Skills.css"

function Skills() {

  let [loading, setLoading] = useState(true);

  return (
    <section className='Skills-container' id='skills'>
      {loading && <Loading></Loading>}
      <div className='Skills' style={{ display: loading ? 'none' : 'block' }}>
        <PlanetarySystem setLoading={setLoading}></PlanetarySystem>
      </div>
    </section>
  )
}

export default Skills;