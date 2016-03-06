import React, {
	Component,
	View,
	Text,
	StyleSheet,
	TextInput,
	TouchableOpacity,
	Dimensions,
	Image,
} from 'react-native'

// export default allows class to be referenced using import <className> from '<path>'
export default class Register extends Component {
	constructor(props) {
		super(props)
		this.state = {
			email: 'eric@example.com',
			password: '123'
		}
	}
	_popPage(){
		this.props.navigator.pop()
	}
	_pushPage(className, title) {
		this.props.navigator.push({className, title})
	}
	_register() {
		const email = this.state.email
		const password = this.state.password
		_this = this
		_this.props.navigator.replace({className: 'AddEarnerProfile', title: 'AddEarnerProfile'})
    	this.props.ddpClient.call('register', [
		  	{ user : { email }, password }
		], (err, result)=> {
			if(err) {
				console.log(err)
			} else {
				console.log(result)
			}
		})
	}
	render() {
		return(
			<Image source={require('./../img/login/login-bg.jpg')} style={styles.backgroundImg}>
				<View style={styles.loginContainer}>
					<View>
						<View style={styles.loginInputContainer}>
							<TextInput style={styles.loginInput} 
								placeholder="eric@example.com"
		  						placeholderTextColor="white"
								onChangeText={(email) => this.setState({email})}
		    					value={this.state.email}/>
		    			</View>
	    			</View>
	    			<View style={styles.loginInputContainer}>
						<TextInput secureTextEntry={true}
							placeholder="Password"
		  					placeholderTextColor="white"
							style={styles.loginInput}
							onChangeText={(password)=>this.setState({password})}
							value={this.state.password}/>
	    			</View>
	    			<View style={styles.loginInputContainer}>
						<TextInput secureTextEntry={true}
							placeholder="Confirm password"
		  					placeholderTextColor="white"
							style={styles.loginInput}
							onChangeText={(password)=>this.setState({password})}
							value={this.state.password}/>
					</View>
					<View style={styles.bottomButtonsRowContainer}>
						<TouchableOpacity
							onPress={()=>this.props.navigator.pop()}>
							<Text style={styles.bottomText}>Cancel</Text>
						</TouchableOpacity>
						<TouchableOpacity>
							<Text style={styles.bottomText}>Register</Text>
						</TouchableOpacity>
					</View>
		    	</View>
			</Image>
		)
	}
}

var width = Dimensions.get('window').width;

var styles = StyleSheet.create({
	backgroundImg: {
		flex: 1,
	    width: null,
	    height: null,
	},
	loginContainer: {
    	flex: 1,
    	justifyContent: 'center',
    	alignItems: 'center',
  	},
	loginInputContainer: {
		backgroundColor: 'rgba(255,255,255,0.4)',
		borderRadius: 20,
		height: 50,
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 16,
		width: width * 0.8,
	},
	loginButtonText: {
		fontSize: 20,
		textAlign: 'center',
		color: 'white',
	},
	bottomText: {
		color: 'rgba(255,255,255,0.8)',
		alignSelf: 'center',
		fontSize: 14,
		marginLeft: 12,
		marginRight: 12,
	},
	bottomButtonsRowContainer: {
		justifyContent: 'space-between',
		flexDirection: 'row',
		alignItems: 'center',
	},
});

// This line allows class to be referenced using const <className> = require('<path>')
module.exports = Register
