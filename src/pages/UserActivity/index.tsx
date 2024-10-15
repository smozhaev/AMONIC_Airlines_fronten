import ActivityTable from "../../components/ActivitiTable";

const sessionsData = [
    { date: '02/13/2017', loginTime: '17:15', logoutTime: '18:45', timeSpent: '1:30' },
    { date: '02/13/2017', loginTime: '8:25', logoutTime: '**', timeSpent: '**', crashReason: 'Power outage' },
    { date: '02/12/2017', loginTime: '8:35', logoutTime: '18:45', timeSpent: '10:10' },
    { date: '02/11/2017', loginTime: '8:45', logoutTime: '18:30', timeSpent: '9:45' },
];

const UserActivity = () => {
    return (
        <ActivityTable fullname="Henri" timeSpentTotal="00:19:03" crashesCount={1} sessions={sessionsData}/>
    );   
}

export default UserActivity;