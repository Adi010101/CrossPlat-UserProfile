import React from "react";
import { View, Text, Image, StyleSheet,} from "react-native";


const App = () => {

  return (
    <View>
       <View style={styles.header}>
            <View style={styles.headerContent}>
       <Image source={require('./picture.jpg')} style = {styles.border} />
      <Text style={styles.name}>Althea Dianne L. Baculi</Text>
      <View style={styles.container}>
      <Image source={require('./location.png')} style = {styles.icon} />
      <Text style={styles.location}>Tayabas City</Text>
      </View>
    </View>
    </View>
    <View>
    <View style={styles.container}>
      <Text style={styles.body}>Age</Text>
      <Text style={styles. info}>22</Text>
      </View>
      <View style={styles.divider}>
      <View style={styles.container}>
        <Text style={styles.body}>Sex</Text>
        <Text style={styles.info}>Female</Text>
      </View>
      </View>
      <View style={styles.divider}>
      <View style={styles.container}>
        <Text style={styles.body}>Course</Text>
        <Text style={styles.info}>BS in Information Technology</Text>
      </View>
      </View>
    </View>
    </View>
  )
}
const styles = StyleSheet.create({
  header:{
    backgroundColor: "#fbcfe8",
  },
  headerContent:{
    padding:50,
    alignItems: 'center',
  },
  container:{
    flexDirection: 'row',
  },
  icon:{
    width: 30,
    height: 30,
  },
  border:{
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "purple",
    marginBottom:10,
  },
  name:{
    fontSize:22,
    fontWeight:'800',
  },
  body:{
    fontSize:15,
    color:"#778899",
    fontWeight:'600',
    marginLeft: 20,
    padding:10,
  },
  iconContent:{
    flex:1,
    alignItems:'flex-end',
    paddingRight:5,
  },
  info:{
    fontSize:15,
    color:"#000000",
    fontWeight:'600',
    marginLeft: 15,
    padding:10,
  },
  location:{
    fontSize:16,
    color:"#778899",
    fontWeight:'600',
  },
  divider: {
    borderTopWidth: 1,
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 10,
  },
})

export default App;

