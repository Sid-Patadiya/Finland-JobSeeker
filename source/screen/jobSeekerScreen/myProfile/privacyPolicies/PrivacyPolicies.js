import React from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import HeaderNavigation from '../../../../component/HeaderNavigation';


export default function PrivacyPolicies({navigation}) {
  return (
    <View style={{flex: 1, backgroundColor: '#FFFF'}}>
     <HeaderNavigation
        onPress={() => navigation.goBack()}
        heading={'Privacy Policies'}
      />
      <Text style={styles.heading}>PRIVACY POLICY</Text>

      <Text style={styles.heading}>Welcome to JobSeeker</Text>

      <ScrollView
        style={{marginHorizontal: hp(2), marginTop: hp(2)}}
        showsVerticalScrollIndicator={false}>
        <Text
          style={[
            styles.discription,
            {textDecorationLine: 'underline', fontWeight: '600'},
          ]}>
          1. Introduction
        </Text>
        <Text style={styles.discription}>
          JobSeeker (“us”, “we”, or “our”) operates youtube.com (hereinafter
          referred to as “Service”).
        </Text>
        <Text style={styles.discription}>
          Our Privacy Policy governs your visit to youtube.com, and explains how
          we collect, safeguard and disclose information that results from your
          use of our Service.
        </Text>
        <Text style={styles.discription}>
          We use your data to provide and improve Service. By using Service, you
          agree to the collection and use of information in accordance with this
          policy. Unless otherwise defined in this Privacy Policy, the terms
          used in this Privacy Policy have the same meanings as in our Terms and
          Conditions.
        </Text>
        <Text style={styles.discription}>
          Our Terms and Conditions (“Terms”) govern all use of our Service and
          together with the Privacy Policy constitutes your agreement with us
          (“agreement”).
        </Text>

        <Text
          style={[
            styles.discription,
            {textDecorationLine: 'underline', fontWeight: '600'},
          ]}>
          2. Definitions
        </Text>
        <Text style={styles.discription}>
          SERVICE means the youtube.com website operated by JobSeeker.
        </Text>
        <Text style={styles.discription}>
          PERSONAL DATA means data about a living individual who can be
          identified from those data (or from those and other information either
          in our possession or likely to come into our possession).
        </Text>
        <Text style={styles.discription}>
          USAGE DATA is data collected automatically either generated by the use
          of Service or from Service infrastructure itself (for example, the
          duration of a page visit).
        </Text>
        <Text style={styles.discription}>
          COOKIES are small files stored on your device (computer or mobile
          device).
        </Text>
        <Text style={styles.discription}>
          DATA CONTROLLER means a natural or legal person who (either alone or
          jointly or in common with other persons) determines the purposes for
          which and the manner in which any personal data are, or are to be,
          processed. For the purpose of this Privacy Policy, we are a Data
          Controller of your data.
        </Text>
        <Text style={styles.discription}>
          DATA PROCESSORS (OR SERVICE PROVIDERS) means any natural or legal
          person who processes the data on behalf of the Data Controller. We may
          use the services of various Service Providers in order to process your
          data more effectively.
        </Text>

        <Text
          style={[
            styles.discription,
            {textDecorationLine: 'underline', fontWeight: '600'},
          ]}>
          3. Information Collection and Use
        </Text>
        <Text style={styles.discription}>
          We collect several different types of information for various purposes
          to provide and improve our Service to you.
        </Text>

        <Text
          style={[
            styles.discription,
            {textDecorationLine: 'underline', fontWeight: '600'},
          ]}>
          4. Types of Data Collected
        </Text>
        <Text style={styles.discription}>
          While using our Service, we may ask you to provide us with certain
          personally identifiable information that can be used to contact or
          identify you (“Personal Data”). Personally identifiable information
          may include, but is not limited to:
        </Text>
        <Text style={styles.discription}>
          0.1. Email address {'\n'}0.2. First name and last name {'\n'}0.3.
          Phone number {'\n'}0.4. Address, Country, State, Province, ZIP/Postal
          code, City
          {'\n'}0.5. Cookies and Usage Data
        </Text>

        <Text
          style={[
            styles.discription,
            {textDecorationLine: 'underline', fontWeight: '600'},
          ]}>
          5. Types of Data Collected
        </Text>
        <Text style={styles.discription}>
          If you have any questions about this Privacy Policy, please contact us
          by email: rajkumarbhadania737@gmail.com.
        </Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    color: '#000',
    fontSize: hp(3),
    textAlign: 'center',
    marginTop: hp(1),
    textDecorationLine: 'underline',
  },
  discription: {
    color: '#000',
    fontSize: hp(2),
    textAlign: 'left',
    marginTop: hp(1),
  },
});