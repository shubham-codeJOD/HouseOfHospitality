import { Link } from "react-router-dom";

type StoryCardProps = {
  title: string;
  content: string;
  image: string;
  readMoreLink: string; // Link to the detailed story page
};

const StoryCard = ({ title, content, image, readMoreLink }: StoryCardProps) => {
  return (
    <div className="col-12 col-md-4 mb-4">
      <div className="story-card card-wrapper">
        <div className="story-image-container">
          <img src={image} alt={title} className="story-image" />
        </div>
        <h3 className="story-title">{title}</h3>
        <p className="story-content">{content}</p>
        <Link to={readMoreLink} className="btn btn-primary align-self-start">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default StoryCard;
