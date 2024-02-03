import { ReactNode, useEffect, FC } from 'react';
import './App.css';
import { useAppDispatch, useAppSelector } from './hooks';
import { selectUsers, userActions } from './redux';


function App () {
  const dispatch = useAppDispatch();
  //toolkit 2.0
  // const {users, status, error} = useAppSelector(selectUsers)
  const {users, status, error} = useAppSelector(state => state.users);
  console.log(users)

  useEffect(() => {
    dispatch(userActions.getAllUsers())
  }, [])
  console.log()
  return (
    <div >
        {status && <div>Loading...</div>} 
        {error && <div>error</div>}
        {users.map(user => <div key={user.id}>{user.name}</div>)}
    </div>
  );
}

export default App;
