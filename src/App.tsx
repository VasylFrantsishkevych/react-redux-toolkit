import { useEffect } from 'react';
import './App.css';
import { useAppDispatch, useAppSelector } from './hooks';
import { userActions } from './redux';


function App() {
  const dispatch = useAppDispatch();
  const {users} = useAppSelector(state => state.users);
  console.log(users)
  useEffect(() => {
    dispatch(userActions.getAllUsers)
    
  }, [])
  
  return (
    <div >

    </div>
  );
}

export default App;
