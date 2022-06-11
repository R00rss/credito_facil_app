import React, { forwardRef} from 'react'
import "./Home.css"
const Home = forwardRef((props,ref) => {
    return (
        <div ref={ref} className='home__container'>
            <div>
                Home
            </div>
        </div>
    )
})

export default Home