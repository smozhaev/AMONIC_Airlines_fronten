import { useState } from "react";
import AddUserButton from "../Buttons/AddUserButton";
import LogoutButton from "../Buttons/LogutButton";

const AdminHeader = () => {
    // const [addUserModalOpen, setAddUserModalOpen] = useState<boolean>(false);
    const openAddUserModal = () => {
    //   setAddUserModalOpen(true)
    }

    return (
        <>
            <AddUserButton onClick={openAddUserModal} />
            <LogoutButton />
        </>
    );
}

export default AdminHeader;