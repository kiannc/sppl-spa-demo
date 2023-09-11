import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import sweep from '../assets/sweep.jpg'
import accountBanner from '../assets/accountbanner.jpg'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import matches from '../data/matches.json';

export default function Sport() {

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const [show, setShow] = useState(false);
  const handleClose = () => {
    setError("");
    setSuccess("");
    setBetAmmount("");
    setShow(false);
  }
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  let [radioValue, setRadiovalue] = useState("");
  let [homeTeam, setHomeTeam] = useState("");
  let [awayTeam, setAwayTeam] = useState("");
  let [matchId, setMatchId] = useState("");
  let [betTeam, setBetTeam] = useState("");
  let [betAmount, setBetAmmount] = useState("");

  function handleShow (homeTeam, awayTeam, matchId) {
    setBetAmmount("")
    setSuccess("")
    setError("")
    setHomeTeam(homeTeam)
    setAwayTeam(awayTeam)
    setMatchId(matchId)
    setShow(true);
  }

  function handleRadioChange(e) {
    setRadiovalue(e.target.value)
    setBetTeam(e.target.value.trim());
  }

  function handleInputChange(e) {
    let betAmount = e.target.value.trim()
    setBetAmmount(betAmount);
  }

  async function handleSubmit (e, matchId, betTeam, betAmount) {

    await fetch(process.env.REACT_APP_API_URL + '?'+ new URLSearchParams({
      matchId: matchId,
      betTeam: betTeam,
      betAmount: betAmount
    }), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "apikey": process.env.REACT_APP_API_KEY
      },
      mode: 'cors'
    })
    .then(response => response.json())
    .then(data =>  {
      console.log(data)
      setSuccess("You have successfully placed your bet!")
      setError("");
      // setShow(false);
    })
    .catch((err) => {
      console.log(err)
      setSuccess("")
      // setError("Something went wrong, Please try again.");
      setError(err.toString());
      // setShow(false);
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
          {matches.map((match,index) => (
            <Col key={index} sm={12} md={4} className='mt-2'>
              <div className='matchCard'>
              <div className='matchDate'>Match Date: {match.matchDate}</div>
              <Row>
                  <Col>
                    <div className='flagContainer'>
                      <Image className='flag' src={process.env.PUBLIC_URL + match.homeTeamImage} />
                      <div className='score marginLeft'> : {match.homeTeamScore}</div>
                    </div>
                  </Col>
                  <Col>
                  <div className='versusText'>
                    vs
                  </div>
                  </Col>
                  <Col>
                    <div className='flagContainer'>
                      <div className='score marginRight'> {match.awayTeamScore} : </div>
                      <Image className='flag' src={process.env.PUBLIC_URL + match.awayTeamImage} />
                    </div>
                  </Col>
              </Row>
              <Row>
                <Col>
                  <div className='countryName'>{match.homeTeam}</div>
                </Col>
                <Col>
                <div className='matchTime'>
                  00:00
                </div>
                </Col>
                <Col>
                  <div className='countryName'>{match.awayTeam}</div>
                </Col>
              </Row>
              <div className='mt-2'>
                  <button className='placeBetBtn' onClick={ () => handleShow(match.homeTeam, match.awayTeam, match.matchId)}>PLACE BET</button>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>
      <Modal show={show} onHide={handleClose}>
        {/* <form onSubmit={(e) => handleSubmit(e, matchId, betTeam.replace(/ /g, '').toLowerCase(), betAmount.trim())}>8 */}
          <Modal.Header closeButton>
            <Modal.Title>Place Bet for {homeTeam} vs {awayTeam}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <div>
                <input type="radio" id={homeTeam} value={homeTeam} checked={radioValue === homeTeam} onChange={handleRadioChange}/>
                <label htmlFor={homeTeam}>Home: {homeTeam}</label>
              </div>
              <div>
                <input type="radio" id={awayTeam} value={awayTeam} checked={radioValue === awayTeam} onChange={handleRadioChange}/>
                <label htmlFor={awayTeam}>Away: {awayTeam}</label>
              </div>
              <div>
                <input type="radio" id="draw" value="draw" checked={radioValue === "draw"} onChange={handleRadioChange}/>
                <label htmlFor="draw">Draw</label>
              </div>
            </Row>
            <Row>
              <input type='number' className="placeBetInput" value={betAmount} onChange={handleInputChange} placeholder='Enter your bet amount'></input>
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
            <Button type="submit" variant="primary" disabled={!betAmount || !radioValue } onClick={ (event) => handleSubmit(event, matchId, betTeam.replace(/ /g, '').toLowerCase(), betAmount.trim())}>
            {/* <Button type="submit" variant="primary" disabled={!betAmount || !radioValue }> */}
              Place Bet
            </Button>
          </Modal.Footer>
        {/* </form> */}
      </Modal>
    </div>
  )
}