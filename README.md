# About

this is a floating Label input for react native that support ltr and rtl direction.you can check the demo below:

![Demo](https://i.postimg.cc/y6wRn530/ezgif-com-gif-maker.gif)

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install FloatingLabelInputBlufy.

```bash
npm i floating-label-input-blufy
```

## Usage

```javascript
import { FloatingLabelInput } from 'floating-label-input-blufy'

const app=()=>{

return(
<View>
 <FloatingLabelInput 
 fontSize={20} backgroundColor={Colors.Primary} 
 direction={'ltr'} title={'Username'}
 ContainerStyle={{marginTop:50}}>
 </FloatingLabelInput>
</View>);
}
export default app;
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## Props
| **Prop**        | **Type**      | **Default** | **Description**                             |
|-----------------|---------------|-------------|---------------------------------------------|
| backgroundColor | String        | undefined   | Color of Component Background               |
| duration        | Number        | 300         | duration of animation                       |
| width           | number        | 250         | component's width                           |
| title           | String        | title       | hint text                                   |
| ContainerStyle  | Object        | undefined   | Set styles to the input container component |
| fontSize        | Number        | 18          | hint and textinput font size                |
| direction       | 'ltr' | 'rtl' | 'ltr'       | direction of component                      |
| font            | Font          | undefined   | fontFamily of Component                     |
| isPassword      | bool          | false       | change input type to password               |



## License
[MIT](https://choosealicense.com/licenses/mit/)
