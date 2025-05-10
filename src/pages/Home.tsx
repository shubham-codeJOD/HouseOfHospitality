import { useState } from 'react';
import StoryCard from '../components/StoryCard';
import TestimonialCarousel from '../components/TestimonialCarousel';
import StoryModal from '../components/StoryModal';

// Sample stories with images
const stories = [
  {
    title: "Aarav – From Dishwasher to Sous Chef",
    content: "Aarav’s journey is a testament to hard work and dedication.",
    image: "https://via.placeholder.com/350x200?text=Story+1",
  },
  {
    title: "Meena – The Smiling Housekeeper",
    content: "Meena’s smile is a source of comfort to every guest she meets.",
    image: "https://via.placeholder.com/350x200?text=Story+2",
  },
  {
    title: "Ravi – The Night Manager",
    content: "Ravi ensures guests feel safe and welcome, no matter the hour.",
    image: "https://via.placeholder.com/350x200?text=Story+3",
  },
];

// Sample testimonials
const testimonials = [
  { name: "Raj", content: "This platform gave me a sense of pride in my work." },
  { name: "Priya", content: "Finally someone is listening to us." },
  { name: "Aditya", content: "Reading these stories reminds me why I chose this field." },
];

export default function Home() {
  const [selectedStory, setSelectedStory] = useState<typeof stories[0] | null>(null);
  return (
    <div>
      {/* Hero Section */}
      <section className="hero bg-primary text-white text-center py-5">
        <div className="container">
          <h1>Welcome to House of Hospitality</h1>
          <p>Discover the unsung heroes of the hospitality industry.</p>
          <a href="/stories" className="btn btn-light btn-lg">Explore Stories</a>
        </div>
      </section>

      {/* Stories Section */}
      <section className="container my-5">
        <h2>Featured Stories</h2>
        <div className="row">
          {stories.map((story, index) => (
            <StoryCard
              key={index}
              title={story.title}
              content={story.content}
              image={story.image}
              onClick={() => setSelectedStory(story)}
            />
          ))}
        </div>
      </section>

      {/* Modal for selected story */}
      {selectedStory && (
        <StoryModal story={selectedStory} onClose={() => setSelectedStory(null)} />
      )}

      {/* Testimonials Carousel */}
      <section className="bg-dark text-white py-5">
        <div className="container">
          <h2 className="mb-4 text-center">What People Say</h2>
          <TestimonialCarousel testimonials={testimonials} />
        </div>
      </section>



      {/* Call to Action Section */}
      <section className="cta bg-dark text-white text-center py-5">
        <div className="container">
          <h2>Join Us In Celebrating Hospitality Workers</h2>
          <p>Your story matters to us. Share your journey today!</p>
          <a href="/contact" className="btn btn-light btn-lg">Submit Your Story</a>
        </div>
      </section>
    </div>
  );
}
