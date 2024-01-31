import {React, useState} from 'react';
import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
// import { ArrowLeftIcon } from 'react-native-heroicons/solid';
import { themeColors } from '../../theme';
import { useNavigation } from '@react-navigation/native';

export default function SigninScreen() {

  const navigation = useNavigation();
  const [email, setEmail] = useState('john@gmail.com');
  const [password, setPassword] = useState('test12345');

  const handleSignIn = async () => {
    try {
      // Replace the following URL with your actual backend authentication endpoint
      const apiUrl = 'https://your-backend-api-url.com/login';

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      const responseData = await response.json();

      // Check the response status
      if (response.ok) {
        // Handle successful login, e.g., store user token in AsyncStorage
        console.log('Login successful:', responseData);

        // Redirect to the Home screen or perform other navigation actions
        navigation.navigate('Home');
      } else {
        // Handle login failure, e.g., display an error message
        console.error('Login failed:', responseData.error);
      }
    } catch (error) {
      // Handle network errors or other exceptions
      console.error('Error during login:', error.message);
    }
  };


  return (
    <View style={{ flex: 1 , marginTop : 70 , marginBottom : 50}}>
      <View
         style={{ flex: 1, backgroundColor: 'white', paddingHorizontal: 8, padding: 10, borderRadius: 50}}>
        <View style = {{padding : 15 , display : "flex" , justifyContent : "center" , marginTop : 140}}>
          <Text style={{ color: '#4B5563', marginLeft: 16, marginBottom: 12, fontSize: 15 }}>Email Address</Text>
          <TextInput
            style={{
              padding: 13,
              backgroundColor: '#D1D5DB',
              color: '#4B5563',
              borderRadius: 20,
              marginBottom: 17,
              marginTop : 10,
            }}
            placeholder="email"
            value="john@gmail.com"
          />
          <Text style={{ color: '#4B5563', marginLeft: 16, marginBottom: 12, fontSize: 15 }}>Password</Text>
          <TextInput
            style={{
              padding: 13,
              backgroundColor: '#D1D5DB',
              color: '#4B5563',
              borderRadius: 20,
              marginBottom: 18,
              marginTop : 10,
            }}
            secureTextEntry
            placeholder="password"
            value="test12345"
          />
          <TouchableOpacity style={{ alignItems: 'flex-end' }} onPress={() => navigation.navigate('passreset')}>
            <Text style={{ color: '#4B5563', marginBottom: 16 }}>Forgot Password?</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleSignIn} style={{ backgroundColor: '#FFD700', borderRadius: 20, paddingVertical: 12 }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center', color: '#4B5563' }}>Login</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 32 }}>
          <Text style={{ color: '#6B7280', fontWeight: '600' }}>Don't have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={{ fontWeight: '600', color: '#FFD700' }}> Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
