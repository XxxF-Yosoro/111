import React, { Component } from 'react';
import { Alert, AppRegistry, Button, Platform, StyleSheet, Text, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback, View } from 'react-native';
import { createStackNavigator,createAppContainer, StackActions, NavigationActions  } from 'react-navigation';

function renderEldersButton(){
return (
      <ListItem

       <Button onPress={this._onPressButton}
         title="Elder"

        />
                );
}

function renderRequestsButton(){

return (
      <ListItem

       <Button onPress={this._onPressButton}
         title="Elder"

        />
                );
}

function renderEmployeesButton(){
return (
      <ListItem

       <Button onPress={this._onPressButton}
         title="Employees"

        />
                );
               }

function renderCareHomesButton(){
return (
      <ListItem

       <Button onPress={this._onPressButton}
         title="Care Homes"

        />
                );
}
/*
export default class HomeScreen extends Component {


  _onPressButton() {
    Alert.alert('Button work!')
  }



   render() {
      return (

      // <View>
               // <Text>Welcome!</Text>
             // </View>

        <View style={styles.container}>
          <View style={styles.buttonContainer}>
            <Button
              onPress={this._onPressButton}
              title="Elder"
            />
          </View>

          <View style={styles.buttonContainer}>
            <Button
              onPress={this._onPressButton}
              title="Requests"

            />
          </View>

          <View style={styles.buttonContainer}>
            <Button
              onPress={this._onPressButton}
              title="Employees"
            />
            </View>

            <View style={styles.buttonContainer}>
            <Button
              onPress={this._onPressButton}
              title="Care Homes"
              />
          </View>

          <View style={styles.buttonContainer}>
           <Button
             onPress={this._onPressButton}
              title="Account Settings"
               />
            </View>

        </View>
      );
    }
  }


const styles = StyleSheet.create({
  container: {
   flex: 1,
   justifyContent: 'center',
  },
  buttonContainer: {
    margin: 20
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})
*/


class ChooseScreen extends Component {
  render() {
    return (
    <View style={{ flex: 1, justifyContent: 'center', margin: 20}}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Choose Screen</Text>
        </View>

        <View style={{ flex: 1, justifyContent: 'center', margin: 20}}>
        <Button
          title="User1"
          onPress={() => this.props.navigation.navigate('Details')}
        />
</View>

<View style={{ flex: 1, justifyContent: 'center', margin: 20}}>
 <Button
         title="User2"
          onPress={() => this.props.navigation.navigate('Details')}
               />
      </View>

 <View style={{ flex: 1, justifyContent: 'center', margin: 20}}>
        <Button
          title="User3"
          onPress={() => this.props.navigation.navigate('Details')}
        />
</View>

     </View>
    );
  }
}

function PickWhatToRender(ButtonSelected)
{
    UserType = ButtonSelected
}

function RenderHomeScreen()
{
    if (UserType == "User1")
    {
       renderEldersButton()
       renderRequestsButton()
       renderEmployeesButton()
       renderCareHomesButton()
    }
    else if (UserType == "User2")
    {
        renderEldersButton()
        renderRequestsButton()
        renderEmployeesButton()
    }
    else if (UserType == "User3")
    {
        renderEldersButton()
        renderRequestsButton()
    }

    renderAccountSettingsButton()
{
        <Button onPress={this._onPressButton}
        title="Account Settings"
}
}






class HomeScreen extends Component {
  render() {
    return (
     RenderHomeScreen
    );
  }
}


