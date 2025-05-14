import { useEffect, useState } from 'react';
import StoryCard from '../components/StoryCard';
import ContactForm from '../components/ContactForm';
import Hero from '../components/Hero/Hero';
import { customSlugify } from '../utils/slugify';

interface Story {
  title: string;
  content: string;
  image: string;
}

interface Testimonial {
  name: string;
  content: string;
}

export default function Home() {
  const [stories, setStories] = useState<Story[]>([]);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);


  useEffect(() => {
    fetch('https://raw.githubusercontent.com/shubham-codeJOD/hoh-data/main/hoh-feat-stories.json')
      .then((res) => res.json())
      .then((data) => setStories(data))
      .catch((err) => console.error("Failed to load stories", err));
  }, []);

    useEffect(() => {
    fetch('https://raw.githubusercontent.com/shubham-codeJOD/hoh-data/main/hoh-testimonials.json')
      .then((res) => res.json())
      .then((data) => setTestimonials(data))
      .catch((err) => console.error("Failed to load testimonials", err));
  }, []);
  
  return (
    <div>
      {/* Hero Section */}
      <Hero
        imageUrl="https://content.app-sources.com/s/810084476556330001/uploads/Images/2_3-7351171.jpg" // Replace with actual image URL
        title="The Journey of John Doe"
        content="Discover how John Doe made a difference in the hospitality industry with his dedication and passion."
        link="/stories/john-doe" // Link to the full story
      />

      {/* Stories Section */}
      <section className="container my-5">
        <h2 className="text-center mb-5">Featured Stories</h2>
        <div className="row">
          {stories.map((story, index) => (
            <StoryCard
              key={index}
              title={story.title}
              content={story.content}
              image={story.image}
              readMoreLink={`/stories/${customSlugify(story.title)}`} // Use the customSlugify function
            />
          ))}
        </div>
      </section>

      {/* Mission and Vision Section */}
<section className="container my-5">
  <div className="row">
    <div className="col-md-6 mb-4">
      <h2 className="fw-bold">Our Mission</h2>
      <p>
        To humanise, educate, and elevate hospitality by amplifying real voices — not curated narratives. 
        We’re here to shift perceptions, break stereotypes, and honour every role — from dishwashers to directors — 
        with the depth, empathy, and truth they deserve.
      </p>
    </div>
    <div className="col-md-6 mb-4">
      <h2 className="fw-bold">Our Vision</h2>
      <p>
        A world where the people behind the service — waiters, chefs, cleaners, delivery riders — are seen for who 
        they are, not just what they do. We aim to transform public perception and build a global culture of hospitality 
        storytelling and empathy.
      </p>
    </div>
  </div>
</section>

      {/* Testimonials Section */}
      <section className="bg-light py-5">
        <div className="container">
          <h2 className="text-center mb-5">What people are saying</h2>
          <div className="row">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="col-12 col-sm-6 col-lg-4 mb-4">
                <div className="testimonial-card p-4 shadow-lg rounded">
                  <p className="text-muted mb-2">"{testimonial.content}"</p>
                  <p className="font-weight-bold text-right">– {testimonial.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

     {/* Our Oath Section */}
<section className="container my-5">
  <div className="row justify-content-center">
    <div className="col-lg-9 text-center">
      <h2 className="fw-bold mb-4">OUR OATH</h2>
      <p className="mb-4">
        We promise: no hollow storytelling. No stereotypes. No content for content’s sake. 
        No filters that blur the truth.
      </p>
      <p className="mb-4">
        Every story we tell must leave the person with more dignity than they came in with. 
        If we can’t offer that — we don’t deserve to tell their story.
      </p>
      <p className="mb-4">
        Before we publish anything at Humans of Hospitality, we ask ourselves:
      </p>
      <ul className="list-unstyled" style={{ color: '#1f3f6e',  fontWeight: 900, // Force boldness beyond fw-bold
    fontFamily: "'Libre Baskerville', serif" }}>
        <li>• Is it true to our mission?</li>
        <li>• Does it serve the person, not exploit them?</li>
        <li>• Does it deepen the movement, not just chase reach?</li>
        <li>• Would they feel proud of how they’re represented?</li>
      </ul>
      <p className="fw-bold text-uppercase mt-4" style={{ letterSpacing: '0.5px' }}>
        IF THE ANSWER IS NO — WE DON’T BUILD IT. SIMPLE.
      </p>
    </div>
  </div>
</section>



      {/* Contact Section */}
      <section className="bg-light text-center py-5">
        <div className="container">
          <h2 className="display-4 mb-4">Join Us In Celebrating Hospitality Workers</h2>
          <p className="lead mb-4">Your story matters to us. Share your journey today!</p>
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
