import ProjectBody from '../components/ProjectBody';
import './../App.css';
import Header from './../components/Header';
import ProjectHeading from './../components/ProjectHeading';

const Projects = () => {
    return (
        <div className='App'>
          <Header />,
          <ProjectHeading />,
          <ProjectBody />
        </div>
      );
};

export default Projects;
