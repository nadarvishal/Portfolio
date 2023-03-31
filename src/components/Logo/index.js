import LogoV from '../../assets/images/logo-v.png'
import './index.scss'
import Tilt from "react-parallax-tilt";




const Logo = () => {
    return (
        <Tilt className='logo-container'>
            <div>
                <img className="logov" src={LogoV} alt="V" />
            </div> 
        </Tilt>
        
    )

}

export default Logo