import React from 'react'
import {Text,View,TouchableOpacity, StyleSheet, CameraRoll} from 'react-native'
import {BarCodeScanner} from 'expo-barcode-scanner'
import * as Permission from 'expo-permissions'
export default class BookTransaction extends React.Component{
    constructor(){
        super()
        this.state={
            hasCameraPermission:null,
            buttonState:'Normal',
            scanned:'false',
            scandata:''
        }
    }
    getcameraPermissions = async()=>{
        const {status} = await Permission.askAsync(Permission.CAMERA)
        if(status==='granted'){
            this.setState({
                hasCameraPermission:true,
                buttonState:'clicked',
                scanned:'false'
            })
        }
        console.log(this.state.hasCameraPermission)
    }
    handleBarcode=async({type,data})=>{
        this.setState({
            scanned:true,
            scandata:data,
            buttonState:'Normal'
        })
    }
  render(){
      const hasCameraPermission=this.state.hasCameraPermission
      const buttonState=this.state.buttonState
      const scanned=this.state.scanned
      if(hasCameraPermission===true && buttonState!=='Normal'){
          return(
            <BarCodeScanner 
            onBarCodeScanned={scanned?undefined:this.handleBarcode}></BarCodeScanner>
          )
        }
        else if(buttonState==='Normal'){
      return(
          <View  style={styles.container}>
              <Text style={styles.displayText}> 
              {hasCameraPermission?this.state.scandata:'Request Camera Permission'}</Text>
         <TouchableOpacity style={styles.scanButton} onPress={()=>{this.getcameraPermissions()}}>
             <Text style={styles.buttonText}> Scan </Text>
         </TouchableOpacity>
          </View>
      )}
  }
}
const styles = StyleSheet.create({
     container: { flex: 1, justifyContent: 'center', alignItems: 'center' }
     , displayText:{ fontSize: 15, textDecorationLine: 'underline' },
      scanButton:{ backgroundColor: '#2196F3', padding: 10, margin: 10 },
       buttonText:{ fontSize: 20, } });

