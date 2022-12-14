import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { ReactNode } from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-elements';
import tailwind from 'twrnc';

const data = [
  {
    id: '1',
    title: 'Ache um motorista para mim',
    icon: require('../../../assets/images/UberX-icon.webp'),
    screen: 'Map',
  }
];

function NavOptions() {
  const navigation = useNavigation();

  return (
    <FlatList
      horizontal
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          //@ts-ignore
          showsHorizontalScrollIndicator={false}
          onPress={() => navigation.navigate('Map')}
          style={tailwind`bg-gray-300 p-5 pl-6 pb-8 pt-4 m-2  rounded-lg`}
        >
          <View style={tailwind`flex`}>
            <Image
              style={{ width: 120, height: 120, resizeMode: 'contain' }}
              source={item.icon}
            />
            <View style={tailwind`flex flex-row items-center  flex-shrink`}>
              <Text style={tailwind`mt-2 font-bold text-lg flex-shrink`}>
                {item.title}
              </Text>
              <Icon
                name="arrow-right"
                type="material-community"
                size={20}
                color="white"
                tvParallaxProperties={undefined}
                style={tailwind`p-2 rounded-full bg-black ml-2`}
              />
            </View>
          </View>
        </TouchableOpacity>
      )}
    />
  );
}

export default NavOptions;
