import axios from "axios";
import { useState, useEffect } from "react";
import { User } from "../../pages/AdminMenu/types";
import "./types";

const useGetUsers = () => {
    const [users, setUsers] = useState<User[]>([]);
    
    const calculateAge = (birthDate: string) => {
        const birth = new Date(birthDate);
        const today = new Date();
        const age = today.getFullYear() - birth.getFullYear();
        const m = today.getMonth() - birth.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
          return age - 1;
        }
        return age;
    };
    
      const getRole = (roleId: number) => {
        return roleId === 1 ? 'administrator' : 'office user';
    };

    useEffect(() => {
        axios.get('/api/users')
          .then((response) => {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const data = response.data.map((user: any) => ({
              id: user.ID,
              firstName: user.FirstName,
              lastName: user.LastName,
              age: calculateAge(user.BirthDate), 
              role: getRole(user.RoleID), 
              email: user.Email,
              office: user.OfficeID, 
              status: user.Active ? 'active' : 'inactive',
            }));
    
            data.sort((a: User, b: User) => a.office - b.office);
            setUsers(data);
          })
          .catch((error) => {
            console.error("Ошибка при загрузке данных пользователей:", error);
          });
    }, []);
    
    return [users]

}

export default useGetUsers;