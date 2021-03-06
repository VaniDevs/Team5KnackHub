import React, {
	Component,
	View,
	Text,
	StyleSheet,
	TextInput,
	Dimensions,
	TouchableOpacity,
	PickerIOS,
	Image,
	ScrollView,
} from 'react-native'
import Meteor, {connectMeteor} from 'react-native-meteor'

let {height, width} = Dimensions.get('window')

@connectMeteor
export default class CreateBadge extends Component {
	constructor(props) {
		super(props)
		this.state={title:'Time Management', pic:'http://s17.postimg.org/i1yc15z27/time_management.png', description:'Learn how to manage your time and stop procrastinating', category:'Soft Skill'}
	}
	startMeteorSubscriptions(){
	}
	getMeteorData(){
	}
	_create() {
		Meteor.call('createBadge', {title:this.state.title, pic:this.state.pic, description:this.state.description, category:this.state.category})
	}
	render() {
		return(
			<View style={styles.container}>
				<View style={{height: 30, backgroundColor: 'transparent'}}></View>
				<View style={styles.imageContainer}>
					<View style={{height: 23, backgroundColor: 'transparent'}}></View>
					<Text style={styles.uploadText}>Tap to upload</Text>
					<Text style={styles.uploadText}>Badge image</Text>
				</View>
				<ScrollView style={styles.scroll}>
					<View>
						<View style={{height:64, width:width*.7, borderWidth:2, borderColor:'gray', marginTop:30, alignSelf:'center'}}>
							<Text style={{color:'gray', marginTop:-8, width:100, alignSelf:'center', textAlign:'center'}}>Badge Name</Text>
							<TextInput style={styles.classinput}
								placeholder="Badge Name"
		  						placeholderTextColor="white"
								onChangeText={(name) => this.setState({name})}
		    				value={this.state.name}>
							</TextInput>
						</View>
						<View style={{height:140, width:width*.7, borderWidth:2, borderColor:'gray', marginTop:30, alignSelf:'center'}}>
							<Text style={{color:'gray', marginTop:-8, width:130, alignSelf:'center', textAlign:'center'}}>Badge Description</Text>
							<TextInput style={[styles.classinput, {height: 125}]}
								onChangeText={(description) => this.setState({description})}
								multiline={true}
								placeholder="	    Badge Description"
		  						placeholderTextColor="white"
		    				value={this.state.description}>
							</TextInput>
						</View>
					</View>
				</ScrollView>
				<View style={{width: width*width, backgroundColor:'#41645c',}}>
					<View style={{marginTop:30, justifyContent:'center', alignItems:'center', height:30}}>
						<TouchableOpacity onPress={this._create.bind(this)}>
							<Text style={{color:'white', fontSize: 25,}}>Create Badge</Text>
							<View style={{height: 25, backgroundColor: 'transparent'}}></View>
						</TouchableOpacity>
					</View>
				</View>
				<View style={{height: 20, backgroundColor: 'transparent'}}></View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:60,
    backgroundColor:'#373536',
    alignItems: 'center',
  },
  classinput: {
    fontSize: 20,
    textAlign: 'center',
    width: width * 0.7,
    height: 50,
    color:'white'
  },
  buttonContainer: {
  	flexDirection: 'row'
  },
  button: {
  	paddingRight: 40
  },
  uploadText:{
  	fontSize:15,
  	textAlign:'center',
  	color: '#333',
  	justifyContent: 'center',
  	backgroundColor: 'transparent',
  },
  imageContainer:{
  	height: 110,
  	width: 110,
  	backgroundColor:'white',
  	justifyContent:'center',
  	borderBottomWidth: 24,
  	borderRadius: 100,
  	borderColor:'#41645c'
  },
  scroll:{
  	height:height-225,
  },
  name:{
  	color:'gray',
  	fontSize:20,
  }
})

// This line allows class to be referenced using const <className> = require('<path>')
module.exports = CreateBadge
