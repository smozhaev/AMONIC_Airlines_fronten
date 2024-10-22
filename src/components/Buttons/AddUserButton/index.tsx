import './index.scss';

interface IAddUserButton {
  onClick: () => void;
}

const AddUserButton: React.FC<IAddUserButton> = ({onClick}) => {


    return (
      <button className="btn add-user" onClick={onClick}>
        Add User
      </button>
    );
}

export default AddUserButton;