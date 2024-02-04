import { useEffect } from 'react';
import './App.css';
import { useAppDispatch, useAppSelector } from './hooks';
import { userActions } from './redux';
import { selectUsers } from './redux/slices/userSlice2';


function App () {
  const dispatch = useAppDispatch();
  //toolkit 2.0
  // const {users, status, error} = useAppSelector(selectUsers)
  const {users, status, error} = useAppSelector(state => state.users);

  useEffect(() => {
    dispatch(userActions.getAllUsers())
  }, [])
  
  return (
    <div >
        {status && <div>Loading...</div>} 
        {error && <div>error</div>}
        {users.map(user => <div key={user.id}>{user.name}</div>)}
    </div>
  );
}

export default App;
