import './styles/ContactInfo.css'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

const ContactInfo = () => {
  return (
    <div className="body">
        <h1>Contact Information</h1>

        <div className="link">
            <a href="mailto:mihir_gupta@rocketmail.com">
                <MdEmail size="30px" />
            </a>

            <div class="text-box">
                Feel free to send me an <mark>email</mark>. I am more responsive here.
            </div>
        </div>

        <div className="link">
            <a  href="https://ca.linkedin.com/in/mihir-gupta-b9174a219">
                <FaLinkedin size="30px" />
            </a>

            <div class="text-box">
                Connect and network with me on <mark>Linkedin</mark>. 
            </div>
        </div>        

        <div className="link">
            <a  href="https://github.com/mgupta27">
                <FaGithub size="30px" />
            </a>

            <div class="text-box">
                Check out my projects on <mark>Github</mark> and view my source code.
            </div>
        </div>    

    </div>
  )
}

export default ContactInfo