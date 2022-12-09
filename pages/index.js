import UserList from '../components/user/UserList';

function HomePage(props) {
  return <UserList users={props.people} />;
}

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();
  return {
    props: { people: data },
  };
}

export default HomePage;
