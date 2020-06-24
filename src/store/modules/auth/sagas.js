import {takeLatest, call, put, all, delay} from 'redux-saga/effects';
import {Alert} from 'react-native';
import api from '~/services/api';
import {signInSuccess, signFailure} from './actions';
import {navigate} from '~/services/navigationService';

export function* signIn({payload}) {
  try {
    const {cpf} = payload;
    const response = yield call(api.post, '/sign-in', {
      cpf,
    });

    const {token, user} = {
      user: {
        id: 1,
        name: 'Associado Teste',
        email: 'associado@email.com',
        cpf: '09623421494',
        is_active: 0,
        phone: '83987205852',
        level_id: 0,
        association_date: '2020-03-19',
        created_at: '2020-03-27 17:12:58',
        updated_at: '2020-04-20 20:32:11',
        deleted_at: null,
        estimated_points: 0,
      },
      token: {
        access_token:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvY2xpZW50ZWRhaG9yYS5jb20uYnJcL2FwaVwvdjFcL2F1dGgiLCJpYXQiOjE1OTI0MDc2NDIsImV4cCI6MTU5MjQxMTI0MiwibmJmIjoxNTkyNDA3NjQyLCJqdGkiOiJsdzlsakwxb0dXRUpSVDVPIiwic3ViIjoxMCwicHJ2IjoiZDU1NzgzYTI1NzEyNWFlNTVlMTM4ZjY5NjRkODI3YmY0MzhhY2M4MSJ9.qM4Z9tKbCNFN0VnWLSxyb60nPDFKWVnr2a6xz3Ynujg',
        token_type: 'bearer',
        expires_in: 3600,
      },
    };

    const {avoiderror} = response.data;
    console.tron.log(avoiderror);
    // const {token, user} = response.data;

    api.defaults.headers.Authorization = `Baerer ${token}`;

    yield delay(5000);

    yield put(signInSuccess(token, user));

    navigate('Dashboard');
  } catch (err) {
    Alert.alert(
      'Falha na autenticação',
      'Houve um erro no login, verifique seu email/senha',
    );
    yield put(signFailure());
  }
}

export function* signUp({payload}) {
  try {
    const {username, email, password, phone, cpf} = payload;

    yield call(api.post, 'users', {
      username,
      email,
      password,
      phone,
      cpf,
    });
    Alert.alert('Cadastro de Usuário', 'Cadastradado com sucesso!');
    navigate('SignIn');
    // history.push('/');
  } catch (err) {
    console.tron.log('erro no cadastro', err);
    Alert.alert('Falha no cadastro', 'verifique seus dados');
    yield put(signFailure());
  }
}

export function setToken({payload}) {
  if (!payload) return;
  const {token} = payload.auth;
  if (token) {
    api.defaults.headers.Authorization = `Baerer ${token}`;
  }
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
]);
