import Header from '../components/Header'
import BackButton from '../components/BackButton'
import './../components/styles/BlogTemplate.css'
import './../App.css'

const Blog1 = ( ) => {
  return (
    <div className="App">
      <Header />
      <div className="blog-post">
        <div className="blog-title">New Year, New Hobby</div>
        <div className="blog-date">January 1st, 2022</div>
        <div className="blog-text">
          Hello there! Welcome to the first edition of my blog.
          <p />
          My name is Mihir and I'm a student studying
          Computer Engineering at the University of Waterloo.
          <p />
          As a part of my New Year's resolution for 2022, I wanted to start this blog 
          to share my experiences as an engineering student, write about my interests and hobbies, 
          and talk about some things I have learned in university. 
          <p />
          If you have any questions about my experience so far as a UWaterloo student or 
          would like to know more about me, feel free to reach out to me by clicking the 
          Contact tab.
          <p />
          P.S. Here’s a funny joke that I would like to share :)
          <p />
          <i>
            A group of engineering professors were invited to fly in a plane. Right after they were
            comfortably seated, they were informed the plane was built by their students. 
            <p />
            All but one got off their seats and headed frantically to the exits in maniacal panic. 
            <p />
            The one lone professor that stayed sitting calmly in his seat was asked: “Why did you stay put?”
            <p />
            He replied “I have plenty of confidence in my students. Knowing them, I can assure you this plane 
            will never even start.”
          </i>
        </div>

        <BackButton />
        
      </div>
    </div>
  );
}

export default Blog1