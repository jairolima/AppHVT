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
            customBgColor="#BE1E2D"
            customWavePattern="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,208C1248,224,1344,192,1392,176L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          />

          <TitleRow style={{marginTop: 200}}>
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
                      <Text
                        style={{
                          fontWeight: 'bold',
                          color: '#000',
                          textAlign: 'center',
                        }}>
                        Nome do colaborador
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
                      <Text
                        style={{
                          fontWeight: 'bold',
                          color: '#000',
                          textAlign: 'center',
                        }}>
                        Nome do colaborador
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
