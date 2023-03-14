import React from 'react';
import { Carousel, CarouselItem } from "react-bootstrap";

const CarouselComponent = ({items}) => {
  return (
      <Carousel style={{ width: '450px', height: '250px' }}>
        {items.map(item => (
          <CarouselItem key={item.id}>
            <a href="/history">
            <img
              src={item.imageSrc}
              alt={item.title}
              style={{ width: '450px', height: '250px'  }}
              class="rounded"
            />
            <Carousel.Caption>
              <h3>{item.title}</h3>
              <p>Click here to see {item.title} related questions.</p>
            </Carousel.Caption>
          </a>
        </CarouselItem>
        /*<Carousel.Item>
          <a href="/science">
            <img
              src="https://static.scientificamerican.com/sciam/cache/file/7B4F3D12-2083-457B-A709F561FC4E696D_source.jpg"
              alt="Science"
              style={{ width: '450px', height: '250px'  }}
              class="rounded"
              //className="d-block w-100"
            />
            <Carousel.Caption>
              <h3>Science</h3>
              <p>Click here to see science related questions.</p>
            </Carousel.Caption>
          </a>
        </Carousel.Item>
        <Carousel.Item>
          <a href="/art">
            <img
              src="https://cdn.britannica.com/78/43678-050-F4DC8D93/Starry-Night-canvas-Vincent-van-Gogh-New-1889.jpg"
              alt="Art"
              style={{ width: '450px', height: '250px'  }}
              class="rounded"
              //className="d-block w-100"
            />
            <Carousel.Caption>
              <h3>Art</h3>
              <p>Click here to see art related questions.</p>
            </Carousel.Caption>
          </a>
        </Carousel.Item>*/
        ))}
      </Carousel>
  );
};

export default CarouselComponent;
