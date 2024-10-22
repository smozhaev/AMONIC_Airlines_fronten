import { useState } from "react";
import AddUserButton from "../Buttons/AddUserButton";
import LogoutButton from "../Buttons/LogutButton";
import Modal from "../Modal";
import AddUserForm from "../AddUserForm";

const AdminHeader = () => {
    const [addUserModalOpen, setAddUserModalOpen] = useState<boolean>(false);
    
    const openAddUserModal = () => {
      setAddUserModalOpen(true)
    }

    const closeAddUserModal = () => {
        setAddUserModalOpen(false)
    } 

    return (
        <>
            <AddUserButton onClick={openAddUserModal} />
            <Modal isOpen={addUserModalOpen} onClose={closeAddUserModal} >
                <AddUserForm cancelAddUser={closeAddUserModal}/>
            </Modal>
            <LogoutButton />
        </>
    );
}

export default AdminHeader;