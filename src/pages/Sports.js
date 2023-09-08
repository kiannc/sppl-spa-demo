import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import sweep from '../assets/sweep.jpg'
import accountBanner from '../assets/accountbanner.jpg'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

import montenegro from '../assets/montenegro.png'
import lithuania from '../assets/lithuania.png'
import greece from '../assets/greece.png'
import netherlands from '../assets/netherlands.png'
import czech from '../assets/czech.png'
import albania from '../assets/albania.png'

export default function Sport() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const [show, setShow] = useState(false);
  const handleClose = () => {
    setError("");
    setSuccess("");
    setShow(false);
  }
  const handleShow = () => setShow(true);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  async function handleSubmit () {

    await fetch(process.env.REACT_APP_API_URL, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "apikey": process.env.REACT_APP_API_KEY
        },
      })
      .then(response => response.json())
      .then(data =>  {
        console.log(data)
        setSuccess("You have successfully placed your bet!")
        setError("");
      })
      .catch((err) => {
        console.log(err)
        setSuccess("")
        setError("Something went wrong, Please try again.");
       });
  }

  return (
    <div>
      <div className='container mb-2'>
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <img
              className="jumboImage"
              src={sweep}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>SPPL DEMO</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <img
              className="jumboImage"
              src={accountBanner}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>SPPL DEMO</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className='container mt-3 mb-3'>
        <Row>
          <Col sm={12} md={4} className='mt-2'>
            <div className='matchCard'>
            <div className='matchDate'>Match Date: 20 Sep 2023, 00:00</div>
            <Row>
                <Col>
                  <div className='flagContainer'>
                    <img className='flag' src={lithuania}></img>
                    <div className='score marginLeft'> : 0 </div>
                  </div>
                </Col>
                <Col>
                <div className='versusText'>
                  vs
                </div>
                </Col>
                <Col>
                  <div className='flagContainer'>
                    <div className='score marginRight'> 0 : </div>
                    <Image className='flag' src={montenegro} />
                  </div>
                </Col>
            </Row>
            <Row>
              <Col>
                <div className='countryName'>Lithuania</div>
              </Col>
              <Col>
              <div className='matchTime'>
                00:00
              </div>
              </Col>
              <Col>
                <div className='countryName'>Montenegro</div>
              </Col>
            </Row>
            <div className='mt-2'>
                <button className='placeBetBtn' onClick={handleShow}>PLACE BET</button>
              </div>
            </div>
          </Col>
          <Col sm={12} md={4} className='mt-2'>
            <div className='matchCard'>
            <div className='matchDate'>Match Date: 23 Sep 2023, 17:00</div>
            <Row>
                <Col>
                  <div className='flagContainer'>
                    <img className='flag' src={netherlands}></img>
                    <div className='score marginLeft'> : 0 </div>
                  </div>
                </Col>
                <Col>
                <div className='versusText'>
                  vs
                </div>
                </Col>
                <Col>
                  <div className='flagContainer'>
                    <div className='score marginRight'> 0 : </div>
                    <Image className='flag' src={greece} />
                  </div>
                </Col>
            </Row>
            <Row>
              <Col>
                <div className='countryName'>Netherlands</div>
              </Col>
              <Col>
              <div className='matchTime'>
                00:00
              </div>
              </Col>
              <Col>
                <div className='countryName'>Greece</div>
              </Col>
            </Row>
            <div className='mt-2'>
                <button className='placeBetBtn' onClick={handleShow}>PLACE BET</button>
              </div>
            </div>
          </Col>
          <Col sm={12} md={4} className='mt-2'>
            <div className='matchCard'>
            <div className='matchDate'>Match Date: 30 Sep 2023, 03:00</div>
            <Row>
                <Col>
                  <div className='flagContainer'>
                    <img className='flag' src={czech}></img>
                    <div className='score marginLeft'> : 0 </div>
                  </div>
                </Col>
                <Col>
                <div className='versusText'>
                  vs
                </div>
                </Col>
                <Col>
                  <div className='flagContainer'>
                    <div className='score marginRight'> 0 : </div>
                    <Image className='flag' src={albania} />
                  </div>
                </Col>
            </Row>
            <Row>
              <Col>
                <div className='countryName'>Czechia</div>
              </Col>
              <Col>
              <div className='matchTime'>
                00:00
              </div>
              </Col>
              <Col>
                <div className='countryName'>Albania</div>
              </Col>
            </Row>
            <div className='mt-2'>
                <button className='placeBetBtn' onClick={handleShow}>PLACE BET</button>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Place Bet</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <input type='text' className="placeBetInput" placeholder='Enter your bet amount'></input>
          </Row>
          <Row>
              <div className='errorMessage'>
                {error}
              </div>
              <div className='successMessage'>
                {success}
              </div>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Place Bet
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}