import './styles/About.css'
import resume from './resume/Mihir_Gupta_v13_Personal_Website.pdf'

const About = () => {
  return (
    <div className="body">
        <h1>About Me</h1>
        
        <p> Hi! I'm Mihir, a <mark>Computer Engineering Student</mark> at the <mark>University of</mark> </p> 
        <p> <mark>Waterloo</mark>. I'm an aspiring Software/Machine-Learning Engineer who is </p>
        <p> passionate about learning, creating projects, and meeting new people. </p>
        <br />
        <p> My goal is to build technologies that benifit humankind. In particular </p>
        <p> I hope to collaborate on projects that focus on educational technology, </p>
        <p> machine learning, artifical intelligence, data science, or computer </p>
        <p> security. </p>
        <br />
        <p> If you would like to know more about me and my experiences, you can find </p>
        <p> my resume <a href={resume} download='resume'>here</a>.</p>
    </div>
  );
}

export default About;
