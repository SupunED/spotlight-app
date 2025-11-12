import { COLORS } from '@/constants/theme';
import { styles } from '@/styles/auth.styles';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

export default function login() {
  return (
    <View>
      {/*BRAND SECTION*/}
      <View style={styles.brandSection}>
        <View style={styles.logoContainer}>
            <Ionicons name='leaf' size={32} color={COLORS.primary} />
        </View>
        <Text style={styles.appName}>spotlight</Text>
        <Text style={styles.tagline}>don't miss anything</Text>
      </View>

        {/* ILLUSTRATION */}
        <Image source={require("../../assets/images/auth-bg-2.png")} style={styles.illustration}  resizeMode="contain" />


        {/* LOGIN SECTION  */}
        <View style={styles.loginSection}>
            <TouchableOpacity 
                style={styles.googleButton}
                onPress={() => {console.log("Continue with Google")}}
                activeOpacity={0.9}
            >
                <View style={styles.googleIconContainer}>
                    <Ionicons name='logo-google' size={20} color={COLORS.surface} />
                </View>
                <Text style={styles.googleButtonText}>Continue With Google</Text>
            </TouchableOpacity>

            <Text style={styles.termsText}>By continuing, you agree to our Terms and Privacy Policy</Text>

        </View>

    </View>
  );
}