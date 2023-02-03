import { useSelector } from 'react-redux';
import { getUsers } from 'redux/users/usersSelector';
import { Li ,P,Span, Button} from './HomePage.styled';
import { useDispatch } from 'react-redux';
// import { addDelete } from 'redux/users/usersAction';
import { deleteUsers, toggleStatusUser } from 'redux/users/usersSlice';

export const HomePage = () => {
  const users = useSelector(getUsers);
  const dispatch = useDispatch();

  return (
    <>
      <ul>
        {users.map(user => (
          <Li key={user.id}>
            <P>
              Name: <Span> {user.name}</Span>
            </P>
            <P>
              Age: <Span> {user.age}</Span>
            </P>
            <P>
              Status: <Span> {user.status}</Span>{' '}
            </P>
            <Button onClick={() => dispatch(deleteUsers(user.id))}>
              Delete
            </Button>
            <Button onClick={() => dispatch(toggleStatusUser(user.id))}>
              Change status
            </Button>
          </Li>
        ))}
      </ul>
    </>
  );
};
