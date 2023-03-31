import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import LogoS from '../../assets/images/logo-v.png'

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className="logo" to="/">
            <img src={LogoS} alt="Logo" />
        </Link>
        <nav>
            <NavLink exact="true" activateclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#C0C0C0" />
            </NavLink>
            <NavLink exact="true" activateclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#C0C0C0" />
            </NavLink>
            <NavLink exact="true" activateclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#C0C0C0" />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/vishalnadar/">
                    <FontAwesomeIcon icon={faLinkedin} color="#C0C0C0" className="anchor-icon"/>
                </a>
            </li>
            <li>
                <a target="_blank" rel="noreferrer" href="https://github.com/nadarvishal">
                    <FontAwesomeIcon icon={faGithub} color="#C0C0C0" className="anchor-icon"/>
                </a>
            </li>
        </ul>
    </div>
)

export default Sidebar
