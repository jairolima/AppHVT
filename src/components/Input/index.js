/* eslint-disable react/jsx-props-no-spreading */
import React, {forwardRef} from 'react';
import {View} from 'react-native';
import PropTypes from 'prop-types';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Container, TInput} from './styles';

FontAwesome.loadFont();

function Input({style, icon, ...rest}, ref) {
  return (
    <Container style={style}>
      <View
        style={{
          height: 64,
          width: 64,
          borderRadius: 50,
          backgroundColor: '#fff',
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
          position: 'absolute',
        }}>
        {icon && (
          <FontAwesome
            name={icon}
            size={20}
            backgroundColor="#FFF"
            color="rgba(190, 30, 45, 1)"
          />
        )}
      </View>
      <TInput {...rest} ref={ref} />
    </Container>
  );
}

Input.propTypes = {
  icon: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

Input.defaultProps = {
  icon: null,
  style: {},
};

export default forwardRef(Input);
