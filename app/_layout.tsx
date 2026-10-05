import 'react-native-gesture-handler';
import { Stack } from 'expo-router';
import { WishlistProvider } from '../hooks/useWishlist';
import { StatusBar } from 'expo-status-bar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useWishlist } from '../hooks/useWishlist';
import { useAppColors } from '../hooks/useAppColors';
export default function RootLayout() { return <GestureHandlerRootView style={{ flex: 1 }}><WishlistProvider><RootNavigator /></WishlistProvider></GestureHandlerRootView>; }
function RootNavigator() { const { prefs } = useWishlist(); const colors = useAppColors(prefs.appearance); return <><StatusBar style={colors.background === '#151A18' ? 'light' : 'dark'} /><Stack screenOptions={{ headerShown: false, animation: 'fade_from_bottom' }} /></>; }
