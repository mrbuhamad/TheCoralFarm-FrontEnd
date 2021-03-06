import React, { Component } from "react";
import { observer } from "mobx-react";

import NumericInput from "react-native-numeric-input";

// NativeBase Components

import {
  Body,
  Button,
  Card,
  CardItem,
  Container,
  Content,
  Thumbnail,
  Left,
  Right,
  Text
} from "native-base";

// Style
import styles from "./styles";

// Components
import CartButton from "../Buttons/CartButton";

// // Stores
import coralStore from "../../stores/coralStore";
import cartStore from "../../stores/cartStore";

class CoralDetail extends Component {
  state = {
    id: this.props.navigation.getParam("coralID"),
    coral: this.props.navigation.getParam("coralName"),
    price: this.props.navigation.getParam("coralPrice"),
    total: this.props.navigation.getParam("coralPrice"),
    quantity: 1
  };

  changeQuantity = value => {
    this.setState({ quantity: value });
    let price = this.props.navigation.getParam("coralPrice");
    let totalPrice = price * this.state.quantity;
    this.setState({ total: totalPrice });
  };

  handleAdd = () => {
    cartStore.addItemToCart(this.state);
    cartStore.saveCart();
    this.setState({ quantity: 1, total: this.state.price });
  };

  render() {
    const coralID = this.props.navigation.getParam("coralID");
    const coral = coralStore.corals.find(coral => coralID === coral.id);

    return (
      <Container>
        <Content>
          <Card transparent style={styles.card}>
            <CardItem>
              <Left>
                <Text>{coral.name}</Text>
                <Text note> {coral.price} KD</Text>
              </Left>
              <Body />
              <Right>
                <Thumbnail bordered source={{ uri: coral.image }} />
              </Right>
            </CardItem>

            <CardItem>
              <Body>
                <Text>total price : {this.state.total} KD </Text>
              </Body>
            </CardItem>

            <CardItem>
              <Body style={styles.numericInput}>
                <NumericInput
                  value={this.state.value}
                  onChange={this.changeQuantity}
                  initValue={1}
                  minValue={1}
                />
              </Body>

              <Right>
                <Button full style={styles.addButton} onPress={this.handleAdd}>
                  <Text>Add</Text>
                </Button>
              </Right>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

CoralDetail.navigationOptions = ({ navigation }) => ({
  title: navigation.getParam("coralName"),
  headerRight: <CartButton />
});

export default observer(CoralDetail);
