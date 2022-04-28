import "./styles/ProjectBody.css"
import ProjectTile from '../components/ProjectTile';
import SortingAlgorithmImage from './../components/images/SortingAlgorithmImage7.PNG'
import HardwareProjectImage from './../components/images/HardwareProject2.JPG'
import ImageClassifierImage from './../components/images/ImageClassifier.PNG'
import BattleSnake from './../components/images/Battlesnake5.gif'

const ProjectBody = () => {
  return (
    <center>
        <div className="project-body">
        <table>
          <tr>
          <th>
              <ProjectTile 
              imageSource={BattleSnake} 
              title="Battlesnake Tournament" 
              tools="Python | Flask | Battlesnake API"
              description=" Worked with a team of four RBC interns to compete
                          in the RBC Winter Battle Snake Competition. In three 
                          weeks, our team used Python and Flask to deploy a 
                          web server to run our Battle Snake - Slyth (the dark 
                          green snake). Our snake took 1st place in the 
                          rookie division of the competition!"
              link="https://github.com/Destructa321/W22_RBC_Battlesnake"
              />             
            </th>
            <th>
              <ProjectTile 
              imageSource={ImageClassifierImage} 
              title="CIFAR-10 Image Classifier" 
              tools="Python | Tensorflow | Keras API | Matplotlib | CIFAR-10 Dataset"
              description=" Built and trained a convulutional neural network
                          to categorize images in the CIFAR-10 Dataset. Used
                          Machine Learning concepts and the Tensorflow platform
                          to develop the model. The model's progress was graphed
                          using Matplotlib (displayed above)."
              link="https://github.com/mgupta27/computer-vision-bootcamp"
              />             
            </th>
            <th>
              <ProjectTile 
              imageSource={HardwareProjectImage} 
              title="Beethoven's Riddle" 
              tools="C | PlatformIO | STM32-Nucleo Board | VSCode"
              description=" Created a musical escape room puzzle
                          for my hardware project course. The user
                          must listen to a randomized melody and
                          play the notes back correctly to win. 
                          Used a passive buzzer, RGB LED, tactile 
                          push buttons, STM32-Nucleo microcontroller, 
                          and low-level programming to develop this 
                          puzzle."
                link="https://github.com/mgupta27/Beethoven-Riddle"
              />             
            </th>
          </tr>
          <tr>
            <th>
              <ProjectTile 
              imageSource={SortingAlgorithmImage} 
              title="Sorting Algorithm Duration" 
              tools="Java | Java Swing | Java AWT Event Listeners | Eclipse IDE"
              description=" Programmed a Java Swing application to test
                          which sorting algorithm (Bubble Sort, Insertion
                          Sort, Partition Sort, and Selection
                          sort) is the most efficient. Utilized multithreading 
                          and Object-Oriented Programming
                          to run the sorting algorithms concurrentley."
              link="https://github.com/mgupta27/Sorting-Algorithm-Duration"
              />             
            </th>
          </tr>
          <tr>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </table>
    </div>
    </center>
  )
}

export default ProjectBody