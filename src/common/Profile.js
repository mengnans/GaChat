import React from 'react';
import { Text, View, Modal, Image, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import CardSection from './CardSection';
import Button from './Button';
import Card from './Card';

const Profile = (props) => {
  this.state = { friendShow: false };
  const {
    containerStyle, textStyle, cardSectionStyle, textStyle3, cardSectionStyle3, textStyle4,
     imageStyle, cardSectionStyle2, textStyle2, imageStyle2, imageStyle3, imageStyle4
   } = styles;


      /* eslint-disable global-require */
  return (
    <Modal
    visible={props.visible}
    transparent
    animationType="slide"
    onRequestClose={() => {}}
    >
      <TouchableWithoutFeedback onPress={props.Accept}>
      <View style={containerStyle}>
      <TouchableWithoutFeedback>
      <View>
        <CardSection style={cardSectionStyle2}>
        <Image source={require('./qiwenfei.jpg')} style={imageStyle} />
        <Text style={textStyle2}>戚文飞</Text>
        <View style={{ flexDirection: 'row' }}>
        <Image source={require('./timg.jpeg')} style={imageStyle2} />
        <Text style={textStyle}>22</Text>
        </View>

        <View style={{ flexDirection: 'row', paddingTop: 7, paddingBottom: 10 }}>
        <Image source={require('./red.png')} style={imageStyle4} />
        <Image source={require('./blue.png')} style={imageStyle3} />
        </View>
        </CardSection>
        <CardSection>
        <Button
        status={this.state.friendShow}
  
        style={{ height: 20 }}
              style2={{ textDecorationLine: 'none', fontSize: 13, paddingTop: 4 }}
        >资料</Button>
        <Button
          style={{
            marginRight: 5
          }}
      style2={{ textDecorationLine: 'none', fontSize: 13, paddingTop: 4 }}
              style={{ height: 20 }}
         status={!this.state.friendShow}

        >
         状态
         </Button>
        </CardSection>

        <CardSection style={cardSectionStyle3}>
          <Text style={textStyle3}>{props.children}</Text>
          <Text style={textStyle4}>你喜欢教父的哪一部?</Text>
        </CardSection>
        </View>
      </TouchableWithoutFeedback>
      </View>
</TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = {
  cardSectionStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  cardSectionStyle2: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    borderWidth: 0,
    backgroundColor: '#ffffff'
  },
  cardSectionStyle3: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexDirection: 'column',
    borderWidth: 0,
    backgroundColor: '#ffffff'
  },
  textStyle: {
    fontSize: 18,
    textAlign: 'center',
  },
  textStyle2: {
    lineHeight: 40,
    fontSize: 18,
    textAlign: 'center',

  },
  textStyle3: {
    lineHeight: 40,
    fontSize: 15,
    marginLeft: 10
  },
  textStyle4: {
    lineHeight: 40,
    fontSize: 13,
    marginLeft: 10
  },
  containerStyle: {
    backgroundColor: 'rgba(0,0,0,0.65)',
    position: 'relative',
    flex: 1,
    justifyContent: 'center'
  },
  imageStyle: {
    height: 80,
    width: 80,
  },
  imageStyle2: {
    height: 20,
    width: 20,
    marginRight: 20
  },
  imageStyle3: {
    height: 15,
    width: 15
  },
  imageStyle4: {
    height: 15,
    width: 15,
    marginRight: 25
  },
};

export default Profile;
