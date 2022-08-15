import React ,{ useRef, useEffect ,useState,createRef}from 'react';
import {View,StyleSheet,TextInput,Text,Animated,TouchableWithoutFeedback} from 'react-native';


export const FloatingLabelInput=({backgroundColor,duration=300,width=250,title='title',ContainerStyle
,onBlur,onChange,Value,fontSize=18,BorderStyles,direction='ltr',textStyle})=>{
    const fadeAnim = useRef(new Animated.Value(0)).current
    const resizeAnim = useRef(new Animated.Value(0)).current
    const fontAnim = useRef(new Animated.Value(20)).current
    const [clicked,setClicled]=useState(false)
    const[labelBack,setLabelBack]=useState(null)
    const[align,setalign]=useState(null)
    const[leftMargin,setLeftMargin]=useState(15)
    const[rightMargin,setrightMargin]=useState(0)
    let focRef=createRef()
   useEffect(()=>{
    if(direction === 'rtl'){
      setalign('flex-end')
      setLeftMargin(0)
      setrightMargin(15)
    }else if(direction==='ltr'){
      setalign('flex-start')
      setLeftMargin(15)
      setrightMargin(0)
    }
   },[])
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
        <TouchableWithoutFeedback onPress={()=>{setClicled(true); focRef.focus()}}><View style={[styles.borderStyle,BorderStyles,{alignItems:align}]}>
          <View style={{alignItems:'flex-end',width:'100%'}}><Animated.View style={[{marginTop:fadeAnim,backgroundColor:labelBack,alignSelf:align,marginLeft:leftMargin,marginRight:rightMargin}]}><Animated.Text style={[{fontSize:fontAnim,
    },textStyle]}>{title}</Animated.Text></Animated.View></View>
<Animated.View style={{height:resizeAnim}}><TextInput style={[{fontSize:fontSize},textStyle]} 
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
 },
  MainContainer:{height:50}
  ,borderStyle:{borderWidth:1,height:'100%',width:'100%',borderRadius:4,justifyContent:'center',}
})