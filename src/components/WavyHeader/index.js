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
        colors={['#ff6200', '#C53C1F', '#BE1E2D']}
        style={{flex: 1, height: 230, margin: 0, width: '100%'}}>
        <View
          style={{
            marginTop: 50,
            marginHorizontal: 0,
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
          }}>
          <TouchableOpacity onPress={() => navigation.navigate('Profile', {})}>
            <View
              style={{
                height: 80,
                width: 80,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <MaterialCommunityIcons
                reverseColor
                name="settings"
                color="#fff"
                type="font-awesome"
                size={40}
              />
            </View>
          </TouchableOpacity>
          <View
            style={{
              height: 80,
              width: 80,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <MaterialCommunityIcons
              reverseColor
              name="cart-outline"
              color="#fff"
              type="font-awesome"
              size={40}
            />
          </View>
        </View>

        <View
          style={{
            marginTop: -30,
            flexDirection: 'column',
            alignSelf: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            borderWidth: 3,
            borderColor: '#fff',
            borderRadius: 160,
            height: 90,
            width: 90,
          }}>
          <Text
            style={{
              fontSize: 20,
              color: '#fff',
              textAlign: 'center',
            }}>
            Avatar
          </Text>
        </View>
      </LinearGradient>

      <View style={{width: Dimensions.get('window').width}}>
        <Svg
          height="90px"
          width="100%"
          viewBox="0 0 1440 200"
          style={{top: customTop, backgroundColor: '#BE1E2D'}}>
          <Path fill={customBgColor} d={customWavePattern} />
          <View
            style={{
              marginTop: -20,
              marginHorizontal: 20,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View style={{flexDirection: 'row', marginTop: 10}}>
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <MaterialCommunityIcons
                  reverseColor
                  name="circle-slice-8"
                  color="#39ff14"
                  type="font-awesome"
                  size={40}
                />
              </View>
              <View style={{marginLeft: 20}}>
                <Text style={{color: '#FFF', fontWeight: 'bold', fontSize: 18}}>
                  {user.name}
                </Text>
                <Text style={{color: '#FFF'}}>Titular</Text>
              </View>
            </View>
            <View>
              <Text style={{color: '#fff'}}>...</Text>
            </View>
          </View>
        </Svg>
        <View
          style={{
            paddingTop: 10,
            height: 60,
            width: '100%',
            backgroundColor: '#CCC',
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal: 40,
            }}>
            <View>
              <Text
                style={{
                  fontSize: 14,
                  color: '#353839',
                  textAlign: 'center',
                }}>
                Pontos
              </Text>
              <Text
                style={{
                  fontSize: 30,
                  fontWeight: 'bold',
                  color: '#000',
                  textAlign: 'center',
                }}>
                {user.estimated_points}
              </Text>
            </View>
            <View>
              <Text
                style={{
                  fontSize: 14,
                  color: '#353839',
                  textAlign: 'center',
                }}>
                Recente
              </Text>
              <Text
                style={{
                  fontSize: 30,
                  fontWeight: 'bold',
                  color: '#000',
                  textAlign: 'center',
                }}>
                +{user.estimated_points}
              </Text>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#fff',
                  height: 45,
                  width: 45,
                  borderRadius: 45,
                }}>
                <MaterialCommunityIcons
                  reverseColor
                  name="share-variant"
                  color="#BE1E2D"
                  type="font-awesome"
                  size={25}
                />
              </View>
            </View>
          </View>
        </View>
        <Svg
          height="80px"
          width="100%"
          viewBox="0 0 1440 200"
          style={{top: customTop, backgroundColor: '#CCC'}}>
          <Path
            fill="#FFF"
            d="M0,64L26.7,85.3C53.3,107,107,149,160,149.3C213.3,149,267,107,320,117.3C373.3,128,427,192,480,181.3C533.3,171,587,85,640,85.3C693.3,85,747,171,800,186.7C853.3,203,907,149,960,138.7C1013.3,128,1067,160,1120,170.7C1173.3,181,1227,171,1280,160C1333.3,149,1387,139,1413,133.3L1440,128L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"
          />
        </Svg>
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
