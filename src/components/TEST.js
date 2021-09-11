import React, { Component } from "react";
import {
  AppRegistry,
  View,
  Text,
  TouchableOpacity,
  ListView,
  StyleSheet,
} from "react-native";
import { StackNavigator } from "react-navigation";
const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
class RenderList extends Component {
  static navigationOptions = { title: "List Items" };
  constructor() {
    super();
    this.state = {
      dataSource: ds.cloneWithRows([
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thrusday",
        "Friday",
        "Saturday",
        "Sunday",
      ]),
    };
  }
  clickedItemText(clickedItemValue) {
    this.props.navigation.navigate("Item", { item: clickedItemValue });
  }
  render() {
    return (
      <View style={styles.container1}>
        {" "}
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => (
            <TouchableOpacity
              style={styles.item}
              activeOpacity={0.4}
              onPress={this.clickedItemText.bind(this, rowData)}
            >
              {" "}
              <Text style={styles.text}>{rowData}</Text>{" "}
            </TouchableOpacity>
          )}
          renderSeparator={() => <View style={styles.separator} />}
        />{" "}
      </View>
    );
  }
}
class ClickedItem extends Component {
  static navigationOptions = { title: "Selected Item" };
  render() {
    return (
      <View style={styles.container2}>
        {" "}
        <Text style={styles.text}>
          You Selected: {this.props.navigation.state.params.item}
        </Text>{" "}
      </View>
    );
  }
}
const App = StackNavigator({
  List: { screen: RenderList },
  Item: { screen: ClickedItem },
});
const styles = StyleSheet.create({
  container1: { flex: 1 },
  container2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 15,
  },
  item: { padding: 15 },
  text: { fontSize: 18 },
  separator: { height: 2, backgroundColor: "rgba(0,0,0,0.5)" },
});
