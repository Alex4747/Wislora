import React from 'react';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { useWishlist } from '../../hooks/useWishlist';
import { CATEGORIES } from '../../types/wishlist';
import { useAppColors } from '../../hooks/useAppColors';
const icons:Record<string,keyof typeof Ionicons.glyphMap>={Electronics:'headset',Clothes:'shirt',Shoes:'footsteps',Gaming:'game-controller',Travel:'airplane',Home:'home',Fitness:'fitness',Other:'sparkles'};
export default function CategoriesScreen(){const {items,prefs}=useWishlist();const c=useAppColors(prefs.appearance);return <SafeAreaView style={[s.safe,{backgroundColor:c.background}]}><FlatList data={CATEGORIES} numColumns={2} keyExtractor={x=>x} columnWrapperStyle={{gap:12}} contentContainerStyle={s.content} ListHeaderComponent={<><Text style={[s.kicker,{color:c.muted}]}>EXPLORE YOUR WISHES</Text><Text style={[s.title,{color:c.text}]}>Categories</Text><Text style={[s.subtitle,{color:c.muted}]}>A little inspiration, neatly sorted.</Text></>} renderItem={({item,index})=><Animated.View entering={FadeInDown.delay(index*45).duration(300)} style={{flex:1}}><Pressable onPress={()=>router.push({pathname:'/',params:{category:item}})} style={[s.card,{backgroundColor:c.card,borderColor:c.border}]}><View style={[s.icon,{backgroundColor:c.accent}]}><Ionicons name={icons[item]??'gift'} size={22} color={c.primary}/></View><Text style={[s.name,{color:c.text}]}>{item}</Text><Text style={[s.count,{color:c.muted}]}>{items.filter(i=>i.category===item).length} {items.filter(i=>i.category===item).length===1?'item':'items'}</Text></Pressable></Animated.View>} /></SafeAreaView>}
const s=StyleSheet.create({safe:{flex:1},content:{padding:20,paddingBottom:35},kicker:{fontSize:9,fontWeight:'800',letterSpacing:1.6,marginTop:15},title:{fontSize:32,fontWeight:'800',letterSpacing:-1,marginTop:5},subtitle:{fontSize:13,marginTop:5,marginBottom:22},card:{borderWidth:1,borderRadius:21,padding:16,minHeight:140,marginBottom:12},icon:{width:42,height:42,borderRadius:14,alignItems:'center',justifyContent:'center',marginBottom:15},name:{fontWeight:'800',fontSize:15},count:{fontSize:11,marginTop:4}});
