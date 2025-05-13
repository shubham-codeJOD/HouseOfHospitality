import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { customSlugify } from '../utils/slugify';
import { decodeUrlComponent } from '../utils/decodeUrlComponent';

interface Story {
  title: string;
  content: string;
  image: string;
  htmlObj: string;
}

export default function StoriesDetail() {
  const { slug } = useParams(); // Access slug from URL
  const [story, setStory] = useState<Story | null>(null);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/shubham-codeJOD/hoh-data/main/hoh-stories.json')
      .then((res) => res.json())
      .then((data) => {
        // Find the story matching the slug
        const foundStory = data.find((story: Story) => customSlugify(story.title) === slug);
        setStory(foundStory || null); // Set the story or null if not found
      })
      .catch((err) => console.error("Failed to load stories", err));
  }, [slug]);

  if (!story) {
    return <div>Story not found</div>; // In case no story matches
  }

  return (
    <div className="container my-5">
      <img src={story.image} alt={story.title} className="img-fluid mb-4" />
      <h2 className="font-weight-bold">{story.title}</h2> {/* Original title in bold */}
      <div
        dangerouslySetInnerHTML={{
          __html: decodeUrlComponent(story.htmlObj), // Decode URI-encoded content
        }}
      />
    </div>
  );
}
