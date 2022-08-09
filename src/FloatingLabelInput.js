import React ,{ useRef, useEffect ,useState,createRef}from 'react';
import {View,StyleSheet,TextInput,Text,Animated,TouchableWithoutFeedback} from 'react-native';



export const FloatingLabelInput=({backgroundColor})=>{
    const fadeAnim = useRef(new Animated.Value(0)).current
    const resizeAnim = useRef(new Animated.Value(0)).current
    const fontAnim = useRef(new Animated.Value(23)).current
    const [clicked,setClicled]=useState(false)
    const[labelBack,setLabelBack]=useState(null)
    let focRef=createRef()
   
    useEffect(() => {
     if(clicked){
        setLabelBack(backgroundColor)
        Animated.timing(
            fadeAnim,
            {
              toValue: -10,
              duration: 300,
              useNativeDriver: false,
            }
          ).start();
         
     }
      }, [fadeAnim,clicked])

      useEffect(()=>{
if(clicked){
    Animated.timing(
        resizeAnim,
        {
          toValue: 50,
          duration: 300,
          useNativeDriver: false,
        }
      ).start();
}
      },[clicked,resizeAnim])

      useEffect(()=>{
        if(clicked){
            Animated.timing(
                fontAnim,
                {
                  toValue: 18,
                  duration: 300,
                  useNativeDriver: false,
                }
              ).start();
        }
              },[clicked,fontAnim])


    return(<View style={{height:60,width:250,backgroundColor:backgroundColor}}>
        <TouchableWithoutFeedback onPress={()=>{setClicled(true); focRef.focus()}}><View style={{borderWidth:1,height:'100%',width:'100%',borderRadius:4,justifyContent:'center'}}>
<Animated.View style={{marginTop:fadeAnim,backgroundColor:labelBack,
            alignSelf:'baseline',marginLeft:15,}}><Animated.Text style={{fontSize:fontAnim,
    }}>username</Animated.Text></Animated.View>
<Animated.View style={{height:resizeAnim}}><TextInput style={{fontSize:18}} 
 ref={(ref) => { focRef = ref; }}
 onBlur={() => { setClicled(false)
setLabelBack(null)
Animated.timing(
  fadeAnim,
  {
    toValue: 0,
    duration: 300,
    useNativeDriver: false,
  }  
).start();
Animated.timing(
  resizeAnim,
  {
    toValue: 0,
    duration: 300,
    useNativeDriver: false,
  }
).start();
Animated.timing(
  fontAnim,
  {
    toValue: 23,
    duration: 300,
    useNativeDriver: false,
  }
).start();
} }
 ></TextInput></Animated.View>
</View></TouchableWithoutFeedback>
    </View>)
}