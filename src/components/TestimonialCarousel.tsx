import { Carousel } from 'react-bootstrap';

type Testimonial = {
  name: string;
  content: string;
};

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}

const TestimonialCarousel: React.FC<TestimonialCarouselProps> = ({ testimonials }) => (
  <Carousel>
    {testimonials.map((testimonial, index) => (
      <Carousel.Item key={index}>
        <blockquote className="blockquote text-center text-white">
          <p className="mb-4 fs-4 fst-italic">"{testimonial.content}"</p>
          <footer className="blockquote-footer text-light">{testimonial.name}</footer>
        </blockquote>
      </Carousel.Item>
    ))}
  </Carousel>
);

export default TestimonialCarousel;
