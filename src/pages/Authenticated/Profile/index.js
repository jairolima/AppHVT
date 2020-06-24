/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import React, {useState} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {signOut} from '~/store/modules/auth/actions';
import {Container, Background, SubmitButton, Form, FormInput} from './styles';

export default function Profile() {
  const navigation = useNavigation();
  const user = useSelector((state) => state.user.profile);
  const dispatch = useDispatch();

  const [cpf, setCpf] = useState('');

  function handleUpdate() {
    console.tron.log('teste');
  }

  function handleLogout() {
    dispatch(signOut());
  }

  return (
    <Background>
      <Container>
        <View style={{width: '100%'}}>
          <View style={{alignItems: 'flex-start'}}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Dashboard', {})}>
              <FontAwesome
                reverseColor
                name="arrow-left"
                color="#fff"
                type="font-awesome"
                size={40}
              />
            </TouchableOpacity>
          </View>
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
              placeholder={user.name}
              returnKeyType="send"
              value={cpf}
              onChangeText={setCpf}
            />
            <FormInput
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                borderWidth: 0.4,
                borderColor: '#FFF',
                color: '#FFF',
                borderLeftWidth: 0,
              }}
              icon="phone"
              autoCorrect={false}
              autoCapitalize="none"
              placeholder={user.phone}
              returnKeyType="send"
              value={cpf}
              onChangeText={setCpf}
            />
            <FormInput
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                borderWidth: 0.4,
                borderColor: '#FFF',
                color: '#FFF',
                borderLeftWidth: 0,
              }}
              icon="envelope-o"
              autoCorrect={false}
              autoCapitalize="none"
              placeholder={user.cpf}
              returnKeyType="send"
              value={cpf}
              onChangeText={setCpf}
            />

            <SubmitButton onPress={handleUpdate}>Editar</SubmitButton>
          </Form>
          <View
            style={{
              flexDirection: 'row',
              alignSelf: 'flex-end',
              marginTop: 10,
            }}>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{color: 'white'}}>Notificações</Text>
            </View>

            <TouchableOpacity
              style={{marginLeft: 10}}
              onPress={() => navigation.navigate('Dashboard', {})}>
              <FontAwesome
                reverseColor
                name="toggle-off"
                color="#fff"
                type="font-awesome"
                size={40}
              />
            </TouchableOpacity>
          </View>
          <SubmitButton onPress={handleLogout} style={{marginTop: 10}}>
            Sair do aplicativo
          </SubmitButton>
        </View>
      </Container>
    </Background>
  );
}
