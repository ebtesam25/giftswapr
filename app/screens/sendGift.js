import React from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';

import Profile from './profile';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
    },
});


const FriendList = ({ itemList}) => (
    <View style={styles.container}>
        
        <FlatList
                data={itemList}
                renderItem={({ item }) => <FriendItem
                    name={item.name}
                    
                    
                />}
            />

    </View>
);

export default FriendList;