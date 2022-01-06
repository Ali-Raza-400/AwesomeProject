// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, FlatList,TouchableOpacity, Alert } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Feed" component={Feed} />
      <Drawer.Screen name="Article" component={Article} />
    </Drawer.Navigator>
  );
}
// import Services from './component/Services';
const Users = [
  {
    id: 1,
    name: 'Ali',
    age: 22,
  },
  {
    id: 2,
    name: 'Hassan',
    age: 11,
  },
  {
    id: 3,
    name: 'Zohaib',
    age: 28,
  },
  {
    id: 4,
    name: 'Junaid',
    age: 30,
  },
];


function Item({id, name, age }) {
  const handlePress=()=>{
    const customer=Users.find((cust)=>{
      return cust.id ===id;
    });
    Alert.alert("Employee Detail", `Name: ${customer.name} \n Age: ${customer.age}`)
  }
  return (
    <TouchableOpacity onPress={()=>handlePress(id)} style={Styles.listItems}>
      <Text style={Styles.listName}>{name}</Text>
      {/* <Text style={Styles.listAge}>{age}</Text> */}
    </TouchableOpacity>
  );
}
export default function App() {
  return (
    <SafeAreaView style={Styles.headerText1}>
      <Text style={Styles.headerText}>List of All Users</Text>
      <FlatList  data={Users} renderItem={({item})=>(
        <Item name={item.name} id={item.id} age={item.age} />
      )}/>
    </SafeAreaView>
  );
}

const Styles = StyleSheet.create({
  headerText: {
    marginTop:30,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 35,
   
  },
  headerText1:{
    backgroundColor:"skyblue",
    height:800
    },
  listName: {
    fontSize:30,
    color:'white',
    flex: 0.7,
    alignItems: 'flex-start',
    
  },
  listAge: {
    fontSize:30,
    color:'white',
    flex: 0.5,
    alignItems: 'flex-end',
  },
  listItems: {
  
    backgroundColor: 'black',
    flexDirection: 'row',
    marginVertical:10,
    marginHorizontal:5,
    padding:10,
  },
});
