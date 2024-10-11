import './index.scss';


const AddUserButton = () => {

    const handleAddUser = () => {
        console.log("Добавление нового пользователя");
    };

    return (
      <button className="btn add-user" onClick={handleAddUser}>
        Add User
      </button>
    );
}

export default AddUserButton;