import * as React from 'react';
import { FlatList, View, ScrollView } from 'react-native';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { WoofCard } from '../components/WoofCard';
import { WoofPost } from '../components/WoofPost';
import { Heading } from '../components/Heading';
import { data } from '../data';

export const HomeScreen = () => {
  const tabBarHeight = useBottomTabBarHeight();
  const renderPost = ({ item }) => <WoofPost title={item.title} uri={item.image} description={item.description} />;
  const renderWoof = ({ item }) => <WoofCard key={item.id} avatar={item.avatar} name={item.name} />;

  return (
    <ScrollView>
      <View style={{ padding: 7, marginLeft: 5, paddingBottom: tabBarHeight }}>
        <View style={{ height: '20%', marginBottom: 8 }}>
          <Heading>Trending Woofs</Heading>
          <FlatList data={data.woofs} renderItem={renderWoof} keyExtractor={woof => woof.id} horizontal />
        </View>
        <Heading>New Woof Posts</Heading>
        <FlatList data={data.posts} renderItem={renderPost} keyExtractor={post => post.id} />
      </View>
    </ScrollView>
  )
};