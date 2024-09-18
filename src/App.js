import Layout from './Components/layout';
import Profile from './Components/profile';
import Filters from './Components/filters';
import RepoList from './Components/repo-list';
import Search from './Components/search'

const repoList = [
  {
    name: "Mi primer proyecto con react",
    id: 1
  },
  {
    name: "Mi primer proyecto con vue",
    id: 2
  }
]
function App() {
  return (
    <Layout>
      <Profile/>
      <Filters/>
      <RepoList repoList={repoList}/>
      <Search/>
    </Layout>
  );
}

export default App;
