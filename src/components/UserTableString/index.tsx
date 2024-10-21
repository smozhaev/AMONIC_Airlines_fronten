import { User } from "../../hooks/useGetUsers/types";

interface UserTableStringProps {
    user: User;
    isSelected: boolean;
    onClick: () => void;
}

const UserTableString: React.FC<UserTableStringProps> = ({ user, isSelected, onClick }) => {
    return (
      <tr 
        key={user.id} 
        // className={user.status === `inactive` ? `inactive-row` : `active-row`}
        className={`table-row ${user.status === 'inactive' ? 'inactive-row' : 'active-row'} ${isSelected ? 'selected-row' : ''}`}
        onClick={onClick}
      >
        <td>{user.firstName}</td>
        <td>{user.lastName}</td>
        <td>{user.age}</td>
        <td>{user.role}</td>
        <td>{user.email}</td>
        <td>{user.office}</td>
      </tr>
    );
}

export default UserTableString;