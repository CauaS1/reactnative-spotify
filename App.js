import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Home from './src/pages/Home';
import Search from './src/pages/Search';

import Music from './src/pages/LibraryContent/Music';
import Podcast from './src/pages/LibraryContent/Podcast';

import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Premium from './src/pages/Premium';

const playlistEvening = [
  {
    title: 'Liked Songs',
    photo: require('./src/img/liked.png'),
    id: 1
  },
  {
    title: 'Relaxing & Chill House',
    photo: require('./src/img/relaxing.jpeg'),
    id: 2
  },
  {
    title: 'Daily Mix 2',
    photo: require('./src/img/mix-2.jpeg'),
    id: 3
  },
  {
    title: 'This is Hardwell',
    photo: require('./src/img/hardwell.jpeg'),
    id: 4
  },
  {
    title: 'Trap Ouro',
    photo: require('./src/img/trap-ouro.jpeg'),
    id: 5
  },
  {
    title: 'Daily Mix 1',
    photo: require('./src/img/mix-1.jpeg'),
    id: 6
  },
]

const playlistRecently = [
  {
    photo: require('./src/img/alok.jpeg'),
    name: "This is Alok",
    id: 1,
  },
  {
    photo: require('./src/img/trap-ouro.jpeg'),
    name: "Trap Ouro",
    id: 2,
  },
  {
    photo: require('./src/img/avicii.jpeg'),
    name: "This is Avicii",
    id: 3,
  },
  {
    photo: require('./src/img/dance-party.jpeg'),
    name: "Dance Party",
    id: 4,
  },
  {
    photo: require('./src/img/tiesto.jpeg'),
    name: "This is Tiesto",
    id: 5,
  },
];

const bestOfArtists = [
  {
    artists: "This is Axwell /\ Ingrosso, More Than You Know, Dreamer",
    image: require('./src/img/axwell.jpeg')
  },
  {
    artists: "This is R3HAB. Tiger, Won't Stop Rocking, Karate, Sakura, How We Party",
    image: require('./src/img/r3hab.jpg')
  },
  {
    artists: "This is Avicci, Wake me up, The Nights, Waiting for Love, Heaven, SOS ",
    image: require('./src/img/avicii.jpeg')
  },
  {
    artists: "This is KSHMR, Power, Secrets- Radio Edit, Memories (feat. Sirah)...",
    image: require('./src/img/ksmr.jpg')
  },
  {
    artists: "This is Hungria, Um Pedido, Lembranças, Amor e Fé, Pisando Na Lua",
    image: require('./src/img/hungria.jpeg')
  },
  {
    artists: "This is Alok, Never Let Me Go, Hear Me Now, Ocean, Fuego, Favela ",
    image: require('./src/img/alok.jpeg')
  },
]

const libraryPlaylists = [
  {
    image: require('./src/img/relaxing.jpeg'),
    title: 'Relaxing & Chill House 2020 The Good Life Radio',
    creator: 'Sensual Musique',
    likes: 104.5,
    description: 'The best musics to relax while do some other things like dance, sleep, study or just relax' 
  },
  {
    image: require('./src/img/edm.jpg'),
    title: 'Eletronic Dance Music',
    creator: 'CauaS1',
    likes: 20.2,
    description: 'Playlist to dance a lot, throw a party or enjoy at a pool'
  },
  {
    image: require('./src/img/code.jpg'),
    title: 'Coding & Relaxing',
    creator: 'CauaS1',
    likes: 325.8,
    description: 'Try to relax while you\'re coding, this playlist will help you'
  },
  {
    image: require('./src/img/lofi.jpeg'),
    title: 'Brazil LoFi',
    creator: 'Tomás',
    likes: 80.6,
    description: 'Brazilian LoFi, study, relax, sleep while listen the best brazilians lofi' 
  },
  
]

const advantageCarousel = [
  {
    free: "Advertising between the songs",
    premium: "Songs without advertising"
  },
  {
    free: "Listen in a random sequence",
    premium: "Listen any music",
  },
  {
    free: "Skip until 6 songs per hour",
    premium: "Skip how many songs do you want"
  },
  {
    free: "Music only by streaming",
    premium: "Listen in the offline mode"
  },
  {
    free: "Basic song's quality",
    premium: "The better song's quality"
  }
]

function HomePage() {
  return <Home evening={playlistEvening} recently={playlistRecently} best={bestOfArtists} />
}

function SearchPage() {
  return <Search />
}

function PremiumPage() {
  return <Premium  carousel={advantageCarousel} />
}


const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator tabBarOptions={{
      activeTintColor: "#04e762",
      inactiveTintColor: "#adadad",
      tabStyle: {
        backgroundColor: "#282828",
      }
    }}>
      <Tab.Screen name="Home" component={HomePage} options={{
        tabBarIcon: ({ focused, size }) => (
          <AntDesign name="home" size={size} color={focused ? '#04e762' : '#adadad'} />
        )
      }} />
      <Tab.Screen name="Search" component={SearchPage} options={{
        tabBarIcon: ({ focused, size }) => (
          <Feather name="search" size={size} color={focused ? '#04e762' : '#adadad'} />
        )
      }} />
      <Tab.Screen name="Library" component={MyTopsTabs} options={{
        tabBarIcon: ({ focused, size }) => (
          <Icon name="compact-disc" size={size} color={focused ? '#04e762' : '#adadad'} />
        )
      }} />
       <Tab.Screen name="Premium" component={PremiumPage} options={{
        tabBarIcon: ({ focused, size }) => (
          <Icon name="spotify" size={size} color={focused ? '#04e762' : '#adadad'} />
        )
      }} />
    </Tab.Navigator>
  );
}

const Top = createMaterialTopTabNavigator();

function MusicScreen() {
  return <Music playlist={libraryPlaylists} />
}

function PodcastScreen() {
  return <Podcast />
}

function MyTopsTabs() {
  return (
    <Top.Navigator tabBarOptions={{
      activeTintColor: "#fff",
      inactiveTintColor: "#7e7e7e",
      pressColor: "#121212",
      indicatorStyle: {
        backgroundColor: "transparent"
      },
      style: {
        backgroundColor: "#121212",
        elevation: 0
      },
      tabStyle: {
        width: 150,
        height: 100,
        justifyContent: "flex-end",
      },
      labelStyle: {
        fontSize: 23,
        fontWeight: "bold"
      }
    }} >
      <Top.Screen name="Music" component={MusicScreen} />
      <Top.Screen name="Podcasts" component={PodcastScreen} />
    </Top.Navigator>
  );
}


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }} >
        <Stack.Screen name="Start" component={MyTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

