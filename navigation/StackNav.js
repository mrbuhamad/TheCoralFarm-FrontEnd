import { createStackNavigator } from "react-navigation-stack";

// Components
import CoralList from "../components/CoralList";
import Profile from "../components/Profile";
import OrderList from "../components/Profile/OrderList";
import OrderDetail from "../components/Orders/OrderDetail";
import CoralDetail from "../components/CoralDetail/";
import Cart from "../components/Cart";
import LoginModal from "../components/Modal/LoginModal";

// import CoralType from "../components/type";

const StackNav = createStackNavigator(
  {
    ListScreen: CoralList,
    Profile: Profile,
    Example: LoginModal,
    DetailScreen: CoralDetail,
    CartScreen: Cart,
    Orders: OrderList,
    OrderDetailScreen: OrderDetail
  },
  {
    initialRouteName: "ListScreen"
  }
);

export default StackNav;
