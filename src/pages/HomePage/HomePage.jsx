import { useSelector } from 'react-redux';
import { getUsers } from 'redux/users/usersSelector';
import { Li ,P,Span} from './HomePage.styled';
export const HomePage = () => {
  const users = useSelector(getUsers);

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
          </Li>
        ))}
      </ul>
    </>
  );
};
