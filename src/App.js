import './App.css';
import Layout from './Components/layout';
import Profile from './Components/profile';
import Filters from './Components/filters';
import RepoList from './Components/repo-list';
import Search from './Components/search'

function App() {
  return (
    <Layout>
      <Profile/>
      <Filters/>
      <RepoList/>
      <Search/>
    </Layout>
  );
}

export default App;
