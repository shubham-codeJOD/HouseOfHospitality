import { useState } from 'react';
import StoryCard from '../components/StoryCard';
import StoryModal from '../components/StoryModal';

const dummyStories = [
  { title: 'Aarav – From Dishwasher to Sous Chef', content: 'Aarav began as a dishwasher in a bustling Mumbai hotel...', image: 'https://via.placeholder.com/350x200?text=Chef+Story' },
  { title: 'Meena – The Smiling Housekeeper', content: 'Working two jobs, Meena never let go of her cheerful spirit...', image: 'https://via.placeholder.com/350x200?text=Housekeeper+Story' },
  { title: 'Ravi – The Night Manager', content: 'Ravi handles late-night chaos in a city hotel...', image: 'https://via.placeholder.com/350x200?text=Night+Manager+Story' },
];

export default function Stories() {
  const [selectedStory, setSelectedStory] = useState<typeof dummyStories[0] | null>(null);

  return (
    <div className="container my-5">
      <h2 className="mb-4">Stories</h2>
      <div className="row">
        {dummyStories.map((story, idx) => (
          <StoryCard
            key={idx}
            title={story.title}
            content={story.content}
            image={story.image}
            onClick={() => setSelectedStory(story)}
          />
        ))}
      </div>

      {selectedStory && (
        <StoryModal story={selectedStory} onClose={() => setSelectedStory(null)} />
      )}
    </div>
  );
}
