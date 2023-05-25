import './App.css';
import { useGetUsersQuery, useUsers } from './features/user/userApi';

function App() {
  const {
    data: dataRTKQuery,
  } = useGetUsersQuery();
  const {
    data: dataSWR,
  } = useUsers();
  return (
    <div className="App">
      {dataRTKQuery?.map((user) => <div key={user.id}>{user.name}</div>)}
      <br/>
      {dataSWR?.map((user) => <div key={user.id}>{user.name}</div>)}
    </div>
  );
}

export default App;
