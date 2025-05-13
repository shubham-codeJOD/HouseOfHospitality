import { useEffect, useState } from 'react';
import StoryCard from '../components/StoryCard';
import { customSlugify } from '../utils/slugify';

interface Story {
  title: string;
  content: string;
  image: string;
}

export default function Stories() {
    const [stories, setStories] = useState<Story[]>([]); 
  
    useEffect(() => {
      fetch('https://raw.githubusercontent.com/shubham-codeJOD/hoh-data/main/hoh-stories.json')
        .then((res) => res.json())
        .then((data) => setStories(data))
        .catch((err) => console.error("Failed to load stories", err));
    }, []);
  return (
    <div className="container my-5">
      <h2 className="mb-4">Stories</h2>
      <div className="row">
        {stories.map((story, idx) => (
          <StoryCard
            key={idx}
            title={story.title}
            content={story.content}
            image={story.image}
            readMoreLink={`/stories/${customSlugify(story.title)}`} // Use the customSlugify function
          />
        ))}
      </div>
    </div>
  );
}
