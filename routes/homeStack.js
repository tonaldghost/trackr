import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import HomeNav from "../components/HomeNav";
import DashboardScreen from "../screens/DashboardScreen";

const screens = {
  Home: {
    screen: HomeNav
  },
  Dashboard: {
    screen: DashboardScreen
  }
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
