import { ReactNode, useEffect, FC } from 'react';
import './App.css';
import { useAppDispatch, useAppSelector } from './hooks';
import { userActions } from './redux';

interface IProps {
  children?: ReactNode
}


function App () {
  const dispatch = useAppDispatch();
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
