import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import soccer from '../assets/soccer.jpg'
import lottery from '../assets/lottery.jpg'
import horse from '../assets/horse.jpg'

function Content() {
  return (
    <div>
      <Row>
        <Col sm={12} md={4} className='paddingRightLeft'>
        <div className="headText accessBlock">
          <img className="contentImage" src={soccer}></img>
          <div className='textOnImage'>
            <h3>SPORTS</h3>
          </div>
        </div>
      </Col>
      <Col sm={12} md={4} className='paddingRightLeft'>
        <div className = "headText accessBlock">
          <img className="contentImage" src={lottery}></img>
            <div className='textOnImage'>
              <h3>LOTTERY</h3>
            </div>
        </div>
      </Col>
      <Col sm={12} md={4} className='paddingRightLeft'>
        <div className = "headText accessBlock">
          <img className="contentImage" src={horse}></img>
          <div className='textOnImage'>
            <h3>HORSE RACING</h3>
          </div>
        </div>
      </Col>
      </Row>
  </div>
  );
}

export default Content;