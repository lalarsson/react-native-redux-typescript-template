import { AppRegistry } from "react-native";
import {App} from "./src/App";
import registerServiceWorker from "./registerServiceWorker";
registerServiceWorker();

AppRegistry.registerComponent("CSSModulesExample", () => App);
AppRegistry.runApplication("CSSModulesExample", {
  rootTag: document.getElementById("react-app"),
});

if (module.hot) {
  module.hot.accept("./src/App");
}
