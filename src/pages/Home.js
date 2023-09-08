import Carousel from '../components/Carousel';
import Content from '../components/Content';

export default function Home() {
  return (
    <div>
      <div className='container mb-2'>
        <Carousel />
        <div className='container mt-2'>
          <Content/>
        </div>
      </div>
    </div>
  )
}

