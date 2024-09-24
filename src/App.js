import Layout from './Components/layout';
import Profile from './Components/profile';
import Filters from './Components/filters';
import RepoList from './Components/repo-list';
import Search from './Components/search'
import RepoData from './Components/repos-data'


function App() {
  return (
    <Layout>
      <Profile/>
      <Filters/>
      <RepoList repoList={RepoData}/>
      <Search/>
    </Layout>
  );
}

export default App;
