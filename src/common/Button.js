import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = (props) => {
  const { buttonStyle, textStyle, buttonStyle2, textStyle2, status } = styles;
  if (props.status) {
  return (
  <TouchableOpacity onPress={props.whenPressed} style={[buttonStyle, props.style]}>
  <Text style={[textStyle, props.style2]} >{props.children}</Text>
  </TouchableOpacity>
);
}


  return (
  <TouchableOpacity onPress={props.whenPressed} style={[buttonStyle2, props.style]}>
  <Text style={[textStyle2, props.style2]}>{props.children}</Text>
  </TouchableOpacity>
);
};

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10,
    textDecorationLine: 'underline'
  },
  textStyle2: {
    alignSelf: 'center',
    color: '#000000',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10

  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#FFFFFF',
    marginRight: 5,
    marginLeft: 5
  },
  buttonStyle2: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#FFFFFF',
    borderColor: '#FFFFFF',
    borderRadius: 5,
    borderWidth: 1,
    marginRight: 5,
    marginLeft: 5
  }
};

export default Button;
