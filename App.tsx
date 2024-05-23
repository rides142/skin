import React from 'react';
import {FlatList, Text, View, StyleSheet, Image} from 'react-native';

export default function App() {
  const data = [
    {
      id: 1,
      name: 'Gambar1',
      image:
        'https://p16-va.lemon8cdn.com/tos-alisg-v-a3e477-sg/378a51587988460f9b45bfa3188e4fe3~tplv-tej9nj120t-origin.webp',
    },
    {
      id: 2,
      name: 'Gambar2',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtB899-03AIMvMERtEZjkMJZ6QCs-eBhcJgulANsBoVQ&s',
    },
    {
      id: 3,
      name: 'Gambar3',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKzelSATQk5dH_JWy_AMOHosPiRYXyZmr6hH05QTtiCg&s  ',
    },
    {
      id: 4,
      name: 'Gambar4',
      image:
        'https://e7.pngegg.com/pngimages/447/92/png-clipart-drawing-skull-art-easy-skull-drawings-pencil-face.png',
    },
    {
      id: 5,
      name: 'Gambar5',
      image:
        'https://png.pngtree.com/png-vector/20230531/ourlarge/pngtree-anime-girl-coloring-pages-vector-png-image_6787130.png',
    },
    {
      id: 6,
      name: 'Gambar6',
      image:
        'https://www.shutterstock.com/image-vector/vector-illustration-coloring-page-decorated-600nw-2302885845.jpg  ',
    },
    {
      id: 7,
      name: 'Gambar7',
      image:
        'https://www.akseleran.co.id/blog/wp-content/uploads/2022/10/download-1.png',
    },
    {
      id: 8,
      name: 'Gambar8',
      image:
        'https://i.pinimg.com/736x/22/4b/73/224b7368ae6a1eab4828aa20ce57600a.jpg',
    },
    {
      id: 9,
      name: 'Gambar9',
      image:
        'https://e7.pngegg.com/pngimages/804/655/png-clipart-blue-lion-illustration-drawing-art-cool-designs-symmetry-illustrator-thumbnail.png',
    },
    {
      id: 10,
      name: 'Gambar10',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-i7rJJ4WKe9RQ_aRbKCD_tkfxyPUynVkA7Cf4Qspckg&s',
    },
    {
      id: 11,
      name: 'Gambar11',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCGzKmqmPmULRsYXAStlNfh4V8pwPZE9TN0yug_RUZ1Q&s',
    },
    {
      id: 12,
      name: 'Gambar12',
      image:
        'https://p16-va.lemon8cdn.com/tos-alisg-v-a3e477-sg/oIEBABbBLOlQfCIAkDDKAIJeQYUtEgFgAHC9op~tplv-tej9nj120t-origin.webp',
    },
    {
      id: 13,
      name: 'Gambar13',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3zynM-RbUP6b3hZY3NH_EDPxc20XDMUgwwyvU3fRoqw&s',
    },
    {
      id: 14,
      name: 'Gambar14',
      image:
        'https://w7.pngwing.com/pngs/435/597/png-transparent-slingshot-keren-logo-monochrome-head.png',
    },
    {
      id: 15,
      name: 'Gambar15',
      image:
        'https://web.rupa.ai/wp-content/uploads/2023/06/1_GVS_a_profile_picture_of_Naruto_Uzumaki_the_determined_ninja_po_e8545972-37d4-4972-8158-dc06dfde330f.png',
    },
  ];

  const renderItem = ({
    item,
  }: {
    item: {id: number; name: string; image: string};
  }) => (
    <View style={styles.card}>
      <Image source={{uri: item.image}} style={styles.image} />
      <Text style={styles.cardText}>{item.name}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  card: {
    backgroundColor: '#fff',
    padding: 10,
    margin: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '45%', // Adjust card width to fit 2 columns
    // Adding shadow for iOS
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    // Adding elevation for Android
    elevation: 5,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  cardText: {
    fontSize: 20,
    marginTop: 10,
  },
});
