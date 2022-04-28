import { useNavigate } from "react-router-dom";
import './styles/BackButton.css'

function BackButton() {
    const navigate = useNavigate();
    
    const navigateToBlogPage = () => { navigate("/Blog") }

    return(
        <center>
            <button onClick={ navigateToBlogPage } className="btn">
                Back
            </button>
        </center>
    )
}

export default BackButton