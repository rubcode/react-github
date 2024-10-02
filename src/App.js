import React from 'react';
import Layout from './Components/layout';
import Profile from './Components/profile';
import Filters from './Components/filters';
import RepoList from './Components/repo-list';
import Search from './Components/search'
//import RepoData from './Components/repos-data'
import { useEffect,useState } from 'react';
import { getUser,getRepos } from './Components/services/users';
import { useParams } from 'react-router-dom';


function App() {
  const params = useParams();
  let username = params.user
  const [user,setUser] = useState({})
  const [repos,setRepos] = useState([])

  if(!username){
    username = "rubcode"
  }

  useEffect(() => {
    getUser(username).then(({data,isError}) => {
      if(isError){
        console.log('No existe usuario');
        return
      }
      setUser(data);
    });

    getRepos(username).then(({data,isError}) => {
      if(isError){
        console.log('No existe repo de este usuario');
        return
      }
      setRepos(data);
    });
    
  },[username]);

  return (
    <Layout>
      <Profile {...user}/>
      <Filters/>
      <RepoList repoList={repos}/>
      <Search/>
    </Layout>
  );
}

export default App;
