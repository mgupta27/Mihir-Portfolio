import './styles/ProjectTile.css'
import { FaGithub } from "react-icons/fa";

const ProjectTile = ( {imageSource, title, tools, description, link} ) => {
      return (
        <div className="project-tile">
          <img src={imageSource} alt="" />

          <div className="project-title">
            {title}
          </div>

          <div className="project-heading">
            <b>TOOLS</b>
          </div>

          <div className="project-text">
            <p>{tools}</p>
          </div>

          <div className="project-heading">
            <b>DESCRIPTION</b>
          </div>

          <div className="project-text">
            <p>{description}</p>
          </div>

          <div className="project-icons-list">
           <div className="project-icon">
             <a href={link}>
              <FaGithub size="25px" />
             </a>
           </div>

        </div>
      </div>
      );
};

export default ProjectTile;