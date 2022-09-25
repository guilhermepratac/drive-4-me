import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Icon } from 'react-native-elements';
import tailwind from 'twrnc';

function RideType() {
  const navigation = useNavigation();
  const image = require('../../../../assets/check.png')

  return (
    <SafeAreaView style={tailwind`flex-1 bg-white p-5`}>
      <View
        style={tailwind`relative flex flex-row p-5  items-center justify-center z-50`}
      >
        <TouchableOpacity style={tailwind`absolute left-5`}>
          <Icon
            name="arrow-left"
            type="feather"
            color="black"
            size={30}
            tvParallaxProperties={undefined}
            onPress={() => navigation.navigate('ChooseRide')}
          />
        </TouchableOpacity>
        <Text style={tailwind`text-lg font-bold`}> </Text>
      </View>
      <View>
            <View style={tailwind` flex-row items-center justify-center `}>
                <Image
                    source={image}
                    style={{
                    width: 72,
                    height: 72,
                    resizeMode: 'contain',
                    }}
                />
            </View>
            <View>
                <Text style={tailwind`text-xl font-bold text-center mt-9`}>
                    Seu motorista da vez esta a caminho
                </Text>
                <Text style={tailwind`text-lg font-normal text-center`}>
                    Tenha certificado que seus documentos esteja com vez
                </Text>
            </View>
        </View>
    </SafeAreaView>
  );
}

export default RideType;
