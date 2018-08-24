// in src/App.js
import React, {Component} from 'react';
import { fetchUtils,Admin, Resource } from 'react-admin/lib';
import jsonServerProvider from 'ra-data-json-server';
import { UserList } from './users';
import AlbumList from './AlbumList';
import AddAlbumList from './AddAlbumList';
import AAAAIcon from '@material-ui/icons/Cake';
import authProvider from './authProvider';
import dataProvider from './dataProvider';
import LoginPage from './LoginPage';
import { Route } from 'react-router-dom';


class App extends Component {
  isTwoSideBar = true;
  _renderResources(){

    if(this.isTwoSideBar){
      return (
        [<Resource name="allAlbums" options={{ label: '寫真書作品集' }} list={AlbumList} icon={AAAAIcon}/>]
      )
    }else{
      return(
        [<Resource name="allAlbums1" options={{ label: '寫真書作品集1' }} list={AlbumList} icon={AAAAIcon}/>,
        <Resource name="allAlbums2" options={{ label: '寫真書作品集2' }} list={AlbumList} icon={AAAAIcon}/>,
        <Resource name="allAlbums3" options={{ label: '寫真書作品集3' }} list={AlbumList} icon={AAAAIcon}/>, 
        <Resource name="allAlbums4" options={{ label: '寫真書作品集4' }} list={AlbumList} icon={AAAAIcon}/>, 
        <Resource name="allAlbums5" options={{ label: '寫真書作品集5' }} list={AlbumList} icon={AAAAIcon}/>]
      )
    }
  }

  render() {
    return(
      <Admin authProvider={authProvider} dataProvider={dataProvider} loginPage={LoginPage}
      customRoutes={[<Route exact path="/addalbumlist" component={AddAlbumList} />]}>
          {this._renderResources()}
      </Admin>
    )
  }
}

export default App;


