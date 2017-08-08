import React, { Component } from 'react';
import { TextInput, View, Text, FlatList, Button, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import * as actions from '../action/index'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import axios from 'axios'
import LoginStatusMessage from '../components/LoginStatusMessage';
import AuthButton from '../components/AuthButton';



import Img from '../components/Image'
 class Main extends Component {
  constructor(props) {
    super(props);
   
    this.login = this.login.bind(this)
  }
login(){

}
 
componentDidMount(){

this.props.fetch();
   
  }

 static navigationOptions = {
    title: 'Home',
  };

  render() {
const { api } = this.props;

 if(api.isFetch){
return (<Text>Loading</Text>)
}else if(api.error) {
return (<Text>Error </Text>)
}

    return (
      <ScrollView>
<LoginStatusMessage />
<FlatList data={api.datas} renderItem={({item})=> <Img img={item} />} />		
      
      </ScrollView>
    );
  }
}
const mapStateToProps = state => ({
  api: state.api,
});

const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Main);
