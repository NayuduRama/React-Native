/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react'; 
import {
  Alert,
  Button,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Section: React.FC<{
  title: string;
}> = ({children, title}) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const alertOne = () => Alert.alert(
                    "Alert",
                    "Alert Options",
                    [
                      {
                        text : 'Ok',
                        onPress: () => console.log("Clicked on  Alert Ok")
                      },
                      {
                        text : 'Cancle',
                        onPress: () => console.log("Clicked on  Alert Cancle")

                      }
                    ]
  )
  
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}> 
        <Image style={styles.image} source={{uri:'https://picsum.photos/200/300'}}/>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
           <Button title="Promt" color="orange" onPress={() => Alert.prompt("Hi", "How are you", text => console.log(text))}/> 
           <Button title="Alert" color="green" onPress={alertOne}/>
          <Section title="Intro">
            Hi this is  <Text style={styles.highlight}>Rama</Text>. It is my first React Native app
          </Section>
          <Section title="Purpose">
            To learn the React Native with TypeScript
          </Section>
          <Section title="Tools">
            Visual Studio, XCode, and Android Studios
          </Section>
          <Section title="Thank you">
            Please be connect for more updates. 
          </Section>
          {/* <LearnMoreLinks /> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  image: {
    width: 450,
    height: 300
  }
});

export default App;


