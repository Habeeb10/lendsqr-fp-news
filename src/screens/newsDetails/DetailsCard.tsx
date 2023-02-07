import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {hp, wp} from '../../common/util/LayoutUtils';
import * as Colors from '../../constants/Colors';

type DetailsProps = {
  summary: string;
  author: string;
};

export const DetailsList = ({summary, author}: DetailsProps) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.author}>Author : {author}</Text>
        <Text style={styles.summary}>Summary : {summary}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  image: {
    width: wp(30),
    height: hp(30),
    borderRadius: hp(30),
  },
  summary: {
    fontSize: hp(13),
    color: Colors.manatee,
    marginTop: hp(10),
    fontWeight: '600',
  },
  author: {
    fontSize: hp(13),
    fontWeight: 'bold',
  },
  container: {
    borderRadius: hp(10),
    marginBottom: hp(20),
    borderWidth: hp(0.5),
    borderColor: Colors.linear,
    padding: hp(10),
    width: '90%',
    marginHorizontal: hp(20),
    marginTop: hp(10),
  },
});
