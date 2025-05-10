type StoryCardProps = {
  title: string;
  content: string;
  image: string;
  onClick: () => void;
};

const StoryCard: React.FC<StoryCardProps> = ({ title, content, image, onClick }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100 shadow-sm border-0" onClick={onClick} style={{ cursor: 'pointer' }}>
        <img src={image} className="card-img-top" alt={title} />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{title}</h5>
          <p className="card-text text-truncate">{content}</p>
        </div>
      </div>
    </div>
  );
};

export default StoryCard;
