import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
// import {format} from 'date-fns';
import * as Colors from '../../constants/Colors';
import {hp, wp} from '../../common/util/LayoutUtils';

type NewsListProps = {
  title: string;
  published_date: string;
  topic: string;
  media: string;
};

export const NewsList = ({
  title,
  published_date,
  topic,
  media,
}: NewsListProps) => {
  // const dateFormatter = format(new Date(published_date), 'pppp');
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Titlte:{title}</Text>
        <Text style={styles.topic}>Topic:{topic}</Text>
        <Text style={styles.date}>Date:{published_date}</Text>
      </View>
      <Image source={{uri: media}} style={styles.image} />
    </View>
  );
};
const styles = StyleSheet.create({
  image: {
    width: wp(30),
    height: hp(30),
    borderRadius: hp(30),
  },
  date: {
    fontSize: hp(12),
    fontWeight: '500',
    color: Colors.manatee,
  },
  title: {
    fontSize: hp(14),
    fontWeight: '500',

    width: hp(200),
    marginBottom: hp(5),
  },
  topic: {
    fontSize: hp(13),
    fontWeight: '500',
    color: Colors.deepblue,
    marginBottom: hp(5),
  },

  container: {
    marginBottom: hp(20),
    borderWidth: 1,
    borderColor: Colors.magenta,
    padding: hp(10),
    width: '95%',
    marginHorizontal: hp(10),
    marginTop: hp(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: hp(10),
    paddingHorizontal: hp(10),
  },
});
