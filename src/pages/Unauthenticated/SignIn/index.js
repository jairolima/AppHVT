/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/extensions */
import React, {useState} from 'react';
import {Image, View, ImageBackground} from 'react-native';

// import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {useDispatch, useSelector} from 'react-redux';

import Lottie from 'lottie-react-native';
import {TextInputMask} from 'react-native-masked-text';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';
import {signInRequest} from '~/store/modules/auth/actions';
import dogloading from '~/assets/dogloading';
import logohvt2 from '~/assets/logohvt2.png';
import dog from '~/assets/dog.jpg';

import Background from '~/components/Background';

import {Container, Form, FormInput, SubmitButton} from './styles';

export default function SignIn() {
  const dispatch = useDispatch();

  const [cpf, setCpf] = useState('');

  const load = useSelector((state) => state.auth.load);

  // const signed = useSelector((state) => state.auth.signed);

  function handleSubmit() {
    dispatch(signInRequest(cpf));
  }

  return (
    <>
      {load ? (
        <Background>
          <View
            style={{
              height: '100%',
              width: '100%',
              alignSelf: 'center',
            }}>
            <Lottie source={dogloading} resizeMode="contain" autoPlay loop />
          </View>
        </Background>
      ) : (
        <ImageBackground
          source={dog}
          style={{
            flex: 1,
            width: '100%',
            height: '100%',
            resizeMode: 'cover',
          }}>
          <Container>
            <ShimmerPlaceHolder
              width={120}
              height={120}
              autoRun
              visible={false}>
              <View>
                <Image
                  style={{width: 120, height: 120, marginBottom: 70}}
                  source={logohvt2}
                />
              </View>
            </ShimmerPlaceHolder>

            <View style={{width: '100%'}}>
              <Form>
                <FormInput
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    borderWidth: 0.4,
                    borderColor: '#FFF',
                    color: '#FFF',
                    borderLeftWidth: 0,
                  }}
                  icon="user-o"
                  autoCorrect={false}
                  autoCapitalize="none"
                  placeholder="Seu CPF"
                  returnKeyType="send"
                  value={cpf}
                  onChangeText={setCpf}
                  ref={(props) => <TextInputMask {...props} type="cpf" />}
                />
                <SubmitButton onPress={handleSubmit}>Entrar</SubmitButton>
              </Form>
            </View>
          </Container>
        </ImageBackground>
      )}
    </>
  );
}
