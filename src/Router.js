import React, { Component } from 'react';
import { Platform, View, Text, Dimensions } from 'react-native';

import { Router, Scene, Tabs } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';

import Home from './components/Home';
import Explore from './components/Explore';
import Likes from './components/Likes';
import Profile from './components/Profile';

const {width, height} = Dimensions.get('window');

const iconn = (name, data) => {
  console.log(data.focused);
  return <Icon color={data.focused ? 'red' : 'black'} name={name} size={25} />
}

export default class componentName extends Component {


  render() {
    return (
      <Router
        navigationBarStyle={styles.navBar}
        titleStyle={styles.titleStyle}
      >
        <Tabs key="main" tabBarStyle={styles.tabBar} showLabel={false}>
          <Scene key="home"
            title="Home"
            icon={(data) => iconn('home', data)}
            component={Home}
            initial
          />
          <Scene key="explore"
            title="Explore"
            icon={(data) => iconn('search', data)}
            component={Explore}
          />
          <Scene key="plus"
            icon={(data) => iconn('plus', data)}
            title={'Likes'}

            component={() => {
              // console.log('Olalala');
              return null
            }
            }
            tabBarOnPress={() => console.log('asasd')}
          />

          <Scene key="likes"
            icon={(data) => iconn('heart', data)}

            title={'Likes'}
            component={Likes} />


          <Scene key="profile"
            icon={(data) => iconn('user', data)}
            title={'Profile'}
            component={Profile} />
        </Tabs>
      </Router>
    );
  }
}

const styles = {
  container: {
    flex: 1,
  },
  tabBar: {
    borderTopColor: 'darkgrey',
    borderTopWidth: 0.3,
    backgroundColor: 'ghostwhite',
  },
  titleStyle: {
    color: 'black',
    fontSize: 17,
    ...Platform.select({
      android: {
        marginLeft: width * 0.45,
      }
    })
  },
  navBar: {
    height: height * 0.08,
    backgroundColor: '#ecf0f1'
  }
};
