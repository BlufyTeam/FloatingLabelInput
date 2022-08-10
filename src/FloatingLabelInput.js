import React ,{ useRef, useEffect ,useState,createRef}from 'react';
import {View,StyleSheet,TextInput,Text,Animated,TouchableWithoutFeedback} from 'react-native';



export const FloatingLabelInput=({backgroundColor,duration=300,width=250,title='title',ContainerStyle
,onBlur,onChange,Value,fontSize=18,BorderStyles})=>{
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
              duration: duration,
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
          duration: duration,
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
                  duration: duration,
                  useNativeDriver: false,
                }
              ).start();
        }
              },[clicked,fontAnim])


    return(<View style={[styles.MainContainer,ContainerStyle,{width:width,backgroundColor:backgroundColor}]}>
        <TouchableWithoutFeedback onPress={()=>{setClicled(true); focRef.focus()}}><View style={[styles.borderStyle,BorderStyles]}>
<Animated.View style={[styles.LabelContainer,{marginTop:fadeAnim,backgroundColor:labelBack,}]}><Animated.Text style={{fontSize:fontAnim,
    }}>{title}</Animated.Text></Animated.View>
<Animated.View style={{height:resizeAnim}}><TextInput style={{fontSize:fontSize}} 
 ref={(ref) => { focRef = ref; }}
 value={Value}
 onChangeText={()=>onChange}
 onBlur={() => { setClicled(false)
setLabelBack(null)
onBlur
Animated.timing(
  fadeAnim,
  {
    toValue: 0,
    duration: duration,
    useNativeDriver: false,
  }  
).start();
Animated.timing(
  resizeAnim,
  {
    toValue: 0,
    duration: duration,
    useNativeDriver: false,
  }
).start();
Animated.timing(
  fontAnim,
  {
    toValue: 23,
    duration: duration,
    useNativeDriver: false,
  }
).start();
} }
 ></TextInput></Animated.View>
</View></TouchableWithoutFeedback>
    </View>)
}

const styles=StyleSheet.create({
LabelContainer:{
  alignSelf:'baseline',marginLeft:15,},
  MainContainer:{height:60}
  ,borderStyle:{borderWidth:1,height:'100%',width:'100%',borderRadius:4,justifyContent:'center'}
})