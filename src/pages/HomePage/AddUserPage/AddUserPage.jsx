import { useState } from 'react';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
// import { addAction } from 'redux/users/usersAction';
import { addUsers } from 'redux/users/usersSlice';

export const AddUserPage = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const dispatch = useDispatch()

 
  const handelChange= ({target:{name,value}}) => {
    if (name === 'name') {setName(value)} 
    else {
    setAge(value)}
  };

const handelSubmit =(e)=>{
e.preventDefault()
const user = {
  name,
  age,
  id: nanoid(),
  status:'offline',
};
dispatch(addUsers(user));
}
   
  return (
    <form action="" onSubmit={handelSubmit}>
      <label htmlFor="">
        Name
        <input type="text" onChange={handelChange} name="name" value={name} />
      </label>
      <label htmlFor="">
        Age
        <input type="number" onChange={handelChange} name="age" value={age} />
      </label>
      <button> Save</button>
    </form>
  );
};
