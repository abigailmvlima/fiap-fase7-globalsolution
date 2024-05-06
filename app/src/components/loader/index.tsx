import svg from "@assets/svg";
import React, { useEffect, useRef } from 'react';
import { Animated, Easing } from 'react-native';
import * as S from "./styles";


const Loader = () => {
  const spinValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const spinAnimation = Animated.loop(
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    );

    spinAnimation.start();

    return () => {
      spinAnimation.stop();
    };
  }, [spinValue]);

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <S.SpinnerContainer
      style={{
        transform: [{ rotate: spin }],
      }}
    >
     <svg.Loading/>

    </S.SpinnerContainer>
  );
};


export { Loader };
