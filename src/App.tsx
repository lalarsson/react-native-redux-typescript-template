import * as React from "react";
import { SafeAreaView, ScrollView } from "react-native";
import { ProfileCard, Buttons, Link } from "./components";
import styles from "./App.scss";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { enthusiasm } from "./reducers";
import { StoreState } from "./types";
import { EnthusiasmAction } from "./actions";

import "./rxjs-imports";
const store = createStore<StoreState, EnthusiasmAction, any, any>(enthusiasm, {
  enthusiasmLevel: 1,
  languageName: "TypeScript"
});

export class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <SafeAreaView style={{ flex: 1 }}>
          <ScrollView className={ styles.wrapper }>
            <Link
              description="Profile card from"
              url="https://themes.getbootstrap.com/products/application"
            />
            <ProfileCard />
            <Link
              description="Buttons from"
              url="https://codepen.io/coolzilj/pen/ImlEG"
            />
            <Buttons />
          </ScrollView>
        </SafeAreaView>
      </Provider>
    );
  }
}
