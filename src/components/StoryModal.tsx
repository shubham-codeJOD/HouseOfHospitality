import { Modal } from 'react-bootstrap';

type Props = {
  story: {
    title: string;
    content: string;
    image: string;
  };
  onClose: () => void;
};

const StoryModal: React.FC<Props> = ({ story, onClose }) => {
  return (
    <Modal show={true} onHide={onClose} centered size="lg" animation={true}>
      <Modal.Header closeButton>
        <Modal.Title>{story.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img src={story.image} alt={story.title} className="img-fluid rounded mb-3" />
        <p>{story.content}</p>
      </Modal.Body>
    </Modal>
  );
};

export default StoryModal;