import * as React from "react";
import { View, Text, Button } from "react-native";

export interface Props {
  name: string;
  enthusiasmLevel?: number;
}

class NavBar extends React.Component<Props, object> {
  constructor(props: any){
    super(props)
    this.doSomething = this.doSomething.bind(this)
  }
  doSomething(ev: any) {console.log(ev);}
  render(): JSX.Element {
    const { name, enthusiasmLevel = 1 } = this.props;

    return (
      <View>
        <Button title={"home"} onPress={this.doSomething} />
      </View>
    );
  }
}

export {NavBar};
