import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';

export default function PointHistory() {
  const [isModalVisible, setModalVisible] = useState(false);
  return (
    <>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            alignItems: 'flex-end',
            backgroundColor: 'rgba(190, 30, 45, 1)',
            justifyContent: 'center',
            height: 60,
            width: '100%',
            borderRadius: 10,
            position: 'absolute',
            bottom: '0%',
          }}>
          <View style={{alignSelf: 'center'}}>
            <Text style={{color: 'white'}}>Ver histórico de pontos</Text>
          </View>
        </View>
      </TouchableOpacity>

      <Modal
        swipeDirection={['down']}
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
          <View style={{alignItems: 'flex-end'}}>
            <TouchableOpacity onPress={() => setModalVisible(!isModalVisible)}>
              <Text>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  );
}
