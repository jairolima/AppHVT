import React, {useEffect, useState} from 'react';

import {ScrollView, View, Text, TouchableOpacity, FlatList} from 'react-native';
// import {Circle} from 'react-native-svg';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import {useNavigation} from '@react-navigation/native';
import Modal from 'react-native-modal';
// import {useSelector} from 'react-redux';

import api from '~/services/api';

import {Container, Hr, TitleRow, More, CarouselView, Card} from './styles';
import WavyHeader from '~/components/WavyHeader';
import PointHistory from '~/components/PointHistory';

export default function Dashboard() {
  // const navigation = useNavigation();
  const [isModalVisible, setModalVisible] = useState(false);

  // const user = useSelector((state) => state.user.profile);

  const [products, setProducts] = useState([]);
  const [services, setServices] = useState([]);

  const [modalDescription, setModalDescription] = useState();
  const [modalPrice, setModalPrice] = useState();

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('/products');

      setProducts(response.data.data);
    }

    loadProducts();
  }, []);

  useEffect(() => {
    async function loadServices() {
      const response = await api.get('/products/category/1');

      setServices(response.data.data);
    }

    loadServices();
  }, []);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  // function rescue() {
  //    dispatch(storeAwardsRequest(modalId, access_token));
  //   setModalVisible(!isModalVisible);
  // }

  return (
    <>
      <ScrollView>
        <Container>
          <WavyHeader
            customTop={0}
            customBgColor="#ccc"
            customWavePattern="M0,192L30,176C60,160,120,128,180,133.3C240,139,300,181,360,202.7C420,224,480,224,540,202.7C600,181,660,139,720,117.3C780,96,840,96,900,112C960,128,1020,160,1080,186.7C1140,213,1200,235,1260,240C1320,245,1380,235,1410,229.3L1440,224L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
          />

          <TitleRow style={{marginTop: 40}}>
            <View style={{marginLeft: 20}}>
              <Text>Resgate um produto</Text>
            </View>

            <View>
              <More activeOpacity={0.5}>
                <Text style={{color: '#BE1E2D'}}>ver mais</Text>
              </More>
            </View>
          </TitleRow>

          <Hr />

          <CarouselView>
            <FlatList
              horizontal
              data={products}
              keyExtractor={(product) => String(product.id)}
              renderItem={({item: product}) => (
                <>
                  <TouchableOpacity
                    onPress={() => {
                      setModalDescription(product.description);
                      setModalPrice(product.price);
                      toggleModal();
                    }}>
                    <Card
                      style={{
                        shadowColor: '#000',
                        shadowOffset: {
                          width: 0,
                          height: 2,
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 3.84,
                        elevation: 5,
                      }}>
                      <Text
                        numberOfLines={2}
                        style={{
                          fontSize: 18,
                          color: '#3b3b3b',
                          textAlign: 'center',
                        }}>
                        {product.description}
                      </Text>
                      <FontAwesome
                        reverseColor
                        name="user"
                        color="#BE1E2D"
                        type="font-awesome"
                        size={45}
                      />
                      <Text
                        style={{
                          fontSize: 18,
                          fontWeight: 'bold',
                          color: '#BE1E2D',
                          textAlign: 'center',
                        }}>
                        {product.price} pontos
                      </Text>
                    </Card>
                  </TouchableOpacity>
                </>
              )}
            />
          </CarouselView>

          <TitleRow style={{marginTop: 8}}>
            <View style={{marginLeft: 20}}>
              <Text>Resgate um serviço</Text>
            </View>

            <View>
              <More activeOpacity={0.5}>
                <Text style={{color: '#BE1E2D'}}>ver mais</Text>
              </More>
            </View>
          </TitleRow>

          <Hr />

          <CarouselView style={{marginBottom: 80}}>
            <FlatList
              horizontal
              data={services}
              keyExtractor={(service) => String(service.id)}
              renderItem={({item: service}) => (
                <>
                  <TouchableOpacity
                    onPress={() => {
                      setModalDescription(service.description);
                      setModalPrice(service.price);
                      toggleModal();
                    }}>
                    <Card
                      style={{
                        shadowColor: '#000',
                        shadowOffset: {
                          width: 0,
                          height: 2,
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 3.84,
                        elevation: 5,
                      }}>
                      <Text
                        numberOfLines={2}
                        style={{
                          fontSize: 18,
                          color: '#3b3b3b',
                          textAlign: 'center',
                        }}>
                        {service.description}
                      </Text>
                      <FontAwesome
                        reverseColor
                        name="user"
                        color="#BE1E2D"
                        type="font-awesome"
                        size={45}
                      />
                      <Text
                        style={{
                          fontSize: 18,
                          fontWeight: 'bold',
                          color: '#BE1E2D',
                          textAlign: 'center',
                        }}>
                        {service.price} pontos
                      </Text>
                    </Card>
                  </TouchableOpacity>
                </>
              )}
            />
          </CarouselView>
        </Container>
      </ScrollView>
      <PointHistory />

      <Modal
        swipeDirection={['up', 'left', 'right', 'down']}
        style={{
          justifyContent: 'flex-end',
          margin: 0,
        }}
        isVisible={isModalVisible}>
        <View
          style={{
            flex: 1,
            borderRadius: 10,
            backgroundColor: 'white',
            padding: 20,
            maxHeight: 400,
            width: '100%',
            justifyContent: 'space-between',
          }}>
          <View>
            <View style={{alignItems: 'flex-end'}}>
              <TouchableOpacity
                onPress={() => setModalVisible(!isModalVisible)}>
                <Text>Fechar</Text>
              </TouchableOpacity>
            </View>
            <Text>Deseja resgatar este produto?</Text>
            <Text>{modalDescription}</Text>
            <Text>O produto custará:</Text>
            <Text>{modalPrice}</Text>
            <Hr />

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
              }}>
              <TouchableOpacity
                onPress={() => setModalVisible(!isModalVisible)}>
                <Text>Cancelar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{paddingHorizontal: 20}}
                onPress={() => setModalVisible(!isModalVisible)}>
                <Text>Resgatar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
}
