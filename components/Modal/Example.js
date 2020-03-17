import React, { Component } from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import { Icon, Button } from "native-base";

import Modal, { ModalTitle, ModalContent } from "react-native-modals";
import { observer } from "mobx-react";

import Login from "../Authentication/Login";
import authStore from "../../stores/authStore";

class Example extends Component {
  state = {
    bottomModalAndTitle: false
  };

  handlePress = () =>
    authStore.user
      ? this.props.navigation.navigate("Profile")
      : this.setState({
          bottomModalAndTitle: true
        });

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.container}>
          <Button onPress={this.handlePress} transparent>
            <Icon name="profile" type="AntDesign" style={{ color: "black" }} />
          </Button>
        </View>

        <Modal.BottomModal
          visible={this.state.bottomModalAndTitle}
          onTouchOutside={() => this.setState({ bottomModalAndTitle: false })}
          height={0.75}
          width={1}
          modalTitle={<ModalTitle title="Log in" hasTitleBar />}
        >
          <ModalContent
            style={{
              flex: 1,
              backgroundColor: "fff"
            }}
          >
            <Login />
          </ModalContent>
        </Modal.BottomModal>
      </View>
    );
  }
}

export default observer(Example);