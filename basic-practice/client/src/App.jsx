import { useState } from 'react';
import { useQuery, gql } from '@apollo/client';
const query = gql`
  query GetTodosWithUser {
    getTodos {
      title
      id
      user {
        name
        phone
        website
      }
    }
  }
`;

function App() {
  const [count, setCount] = useState(0);
  const { data, loading } = useQuery(query);
  if (loading) return <h1>Loading...</h1>;
  return (
    <>
      <h1>sample data</h1>
      <table>
        <tbody>
          {data.getTodos.map((todo) => (
            <tr key={todo.id}>
              <td>{todo.title}</td>
              <td>{todo.user.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <br />
      <br />
      <label htmlFor="">{count}</label>
      <button onClick={() => setCount(count + 1)} type="submit">
        Counter
      </button>
    </>
  );
}

export default App;
