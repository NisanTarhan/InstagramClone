import React, { Component } from 'react';
import { View, Text, Image, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const {width, height} = Dimensions.get('window');

export default class Home extends Component {

  render() {
    return (
      <View style={{ flex: 1 }}>

        <View style={{ flex: 1.30, flexDirection: 'row', backgroundColor: '', borderBottomColor: 'black', borderBottomWidth: 0.5 }}>

          <View style={{ flex: 8, flexDirection: 'row', alignItems: 'center' }}>
            <Image
              style={{ width: 40, height: 40, borderRadius: 25, marginLeft: 7 }}
              source={{ uri: 'https://dwdispatch.files.wordpress.com/2018/05/dw-avatardeadpool-1a.jpg' }}
            />
            <Text style={{ padding: 10 }}>
              Nisan Ercan Tarhan
            </Text>
          </View>

          <View style={{ flex: 2, justifyContent: 'center', alignItems: 'flex-end', padding: 10 }}>
            <Text>2d</Text>
          </View>
        </View>


        <View style={{ flex: 7.5, flexDirection: 'row', borderBottomColor: 'black', borderBottomWidth: 0.5 }}>
          <Image
            style={{ flex: 1 }}
            source={{ uri: 'https://www.log.com.tr/wp-content/uploads/2018/03/Deadpool-2.jpg' }}
          />
        </View>

        <View style={{ flex: 1.25, flexDirection: 'row'}}>

          <View style={{ flex: 8, flexDirection:'row', marginTop: 8 }}>
            <Icon style={{ marginLeft: 10 }} size={18} name="heart" color='black' />
            <Icon style={{ marginLeft: 10 }} size={18} name="comment" color='black' />
            <Icon style={{ marginLeft: 10 }} size={18} name="share" color='black' />
          </View>

          <View style={{ flex: 2, alignItems: 'flex-end', margin: 8}}>
            <Icon style={{ marginLeft: 7, marginRight: 5 }} size={20} name='ellipsis-h' color='black' />
          </View>

        </View>

      </View>
    );
  }
}
