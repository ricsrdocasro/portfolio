import logo from "../assets/logo.png"
import lattes from "../assets/lattes.png"
import {FaLinkedin} from "react-icons/fa"
import {FaGithub} from "react-icons/fa"
import {FaSquareXTwitter} from "react-icons/fa6"
import {FaInstagram} from "react-icons/fa"

const Navbar = () => {
    return (
        <nav className= "mb-20 flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center px-6">
                <img className="mx-5 w-20" src={ logo } alt="logo" />
            </div>
            <div className="m-8 flex items-center justify-center gap-4 text-2xl">
                <FaGithub />
                <FaLinkedin />
                <img className="w-6" src={lattes} alt="Lattes" />
                <FaInstagram />
            </div>
        </nav>
    )
}

export default Navbar
