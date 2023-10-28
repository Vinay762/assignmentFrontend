import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faClock, faGear, faCircleQuestion, faEye} from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <div className="App">
      <div className='left'>
        <div className='upleft'>
          <div className='icon'><FontAwesomeIcon icon={faChevronLeft} /></div>
          <div className='text'>Back To DashBoard</div>
        </div>
        <div className='bottomleft'>
          <div className='each'>
            <div className='icon'><FontAwesomeIcon icon={faGear} /></div>
            <div className='text'>1. Campaign Setup</div>
          </div>

          <div className='each second'>
            <div className='icon'><FontAwesomeIcon icon={faCircleQuestion} /></div>
            <div className='text'>2. Question List</div>
          </div>

          <div className='each'>
            <div className='icon'><FontAwesomeIcon icon={faClock} /></div>
            <div className='text'>3. Timeline</div>
          </div>

        </div>
      </div>
      <div className='mid'>
        <div className='question-list'>
          <div className='bold'>Question List</div>
          <div className='box'>12</div>
        </div>
        <div className='text'>
          Thease are the questions corresponding to the template you have selected, you can modify, add or delete them.
        </div>
        <div className='each'>
            <div className='icon'><FontAwesomeIcon icon={faEye} /></div>
            <div className='text'>Previous Questions</div>
          </div>

        <div className='post'>
          <div className='card'>
            <div className='above'>
              <div className='left-end'>Asked To : Reviewee</div>
              <div className='right-end'>Text Answer : Tr</div>
            </div>

            <div className='bottom'>
              <div className='number'>1</div>
              <div className='textmsg'>Do you find yourself struggling more than ususal with the current COVID-19 situation</div>
            </div>
          </div>
        </div>

        <div className='post'>
          <div className='card'>
            <div className='above'>
              <div className='left-end'>Asked To : Reviewee</div>
              <div className='right-end'>Text Answer : Tr</div>
            </div>

            <div className='bottom'>
              <div className='number'>2</div>
              <div className='textmsg'>Do you find yourself struggling more than ususal with the current COVID-19 situation</div>
            </div>
          </div>
        </div>

        <div className='post'>
          <div className='card'>
            <div className='above'>
              <div className='left-end'>Asked To : Reviewee</div>
              <div className='right-end'>Text Answer : Tr</div>
            </div>

            <div className='bottom'>
              <div className='number'>3</div>
              <div className='textmsg'>Do you find yourself struggling more than ususal with the current COVID-19 situation</div>
            </div>
          </div>
        </div>

      </div>
      <div className='right'>
        <div className='part1'>
        <div className='each'>
            <div className='text'>See Questions list of : </div>
            <div className='icon'><FontAwesomeIcon icon={faCircleQuestion} /></div>
          </div>
          <ul className='option-list'>
            <li> Everyone</li>
            <li>Reviewee(3)</li>
            <li>Manager(0)</li>
          </ul>
        </div>

        <div class="rcard">
        <h2>Card Heading</h2>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in massa
            eget odio vehicula vehicula. Sed vel lorem vitae est tincidunt eleifend.
            Vivamus a odio vel risus fringilla ultricies. Nullam tincidunt odio vel
            erat blandit, a ullamcorper urna dictum. Vestibulum ac malesuada purus,
            
        </p>
    </div>

      </div>
    </div>
  );
}

export default App;
