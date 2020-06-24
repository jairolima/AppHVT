import React from 'react';
import {View, Text, TouchableOpacity, Dimensions} from 'react-native';
import PropTypes from 'prop-types';
import {useNavigation} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
import Svg, {Path} from 'react-native-svg';
import {useSelector} from 'react-redux';

export default function WavyHeader({
  customTop,
  customBgColor,
  customWavePattern,
}) {
  const navigation = useNavigation();
  const user = useSelector((state) => state.user.profile);
  return (
    <>
      <LinearGradient
        colors={['#f46f7c', '#D74250', '#BE1E2D']}
        style={{flex: 1, height: 260, margin: 0, width: '100%'}}>
        <View
          style={{
            marginTop: 50,
            marginHorizontal: 0,
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
          }}>
          <View>
            <TouchableOpacity
              onPress={() => navigation.navigate('Profile', {})}>
              <MaterialCommunityIcons
                reverseColor
                name="settings-outline"
                color="#fff"
                type="font-awesome"
                size={40}
              />
            </TouchableOpacity>
          </View>
          <View>
            <MaterialCommunityIcons
              reverseColor
              name="settings-outline"
              color="#fff"
              type="font-awesome"
              size={40}
            />
          </View>
        </View>

        <View
          style={{
            marginTop: 10,
            flexDirection: 'column',
            alignSelf: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            borderWidth: 3,
            borderColor: '#fff',
            borderRadius: 160,
            height: 120,
            width: 120,
          }}>
          <Text
            style={{
              fontSize: 30,
              color: '#fff',
              textAlign: 'center',
            }}>
            {user.estimated_points}
          </Text>
          <Text
            style={{
              fontSize: 20,
              color: '#fff',
              textAlign: 'center',
            }}>
            Pontos
          </Text>
        </View>
      </LinearGradient>

      <View style={{width: Dimensions.get('window').width}}>
        <View
          style={{
            margin: 0,
            height: 200,
            width: '100%',
            backgroundColor: 'grey',
          }}>
          <Svg
            height="60%"
            width="100%"
            viewBox="0 0 1440 320"
            style={{top: customTop, backgroundColor: 'blue'}}>
            <Path fill={customBgColor} d={customWavePattern} />
          </Svg>
        </View>
      </View>
    </>
  );
}

WavyHeader.propTypes = {
  customTop: PropTypes.number,
  customBgColor: PropTypes.string,
  customWavePattern: PropTypes.string,
};

WavyHeader.defaultProps = {
  customTop: {},
  customBgColor: '',
  customWavePattern: {},
};
