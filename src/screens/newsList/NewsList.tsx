import React, {useEffect} from 'react';
import {FlatList, View, Alert} from 'react-native';
import SpacerWrapper from '../../common/util/SpacerWrapper';
import {CommonStyles} from '../../common/styles/CommonStyles';
import {Button} from '../../components/Button';
import {NewsList} from './NewsCard';
import {useAppDispatch, useAppSelector} from '../../redux/hooks';
import {FetchNews} from '../../redux/slice/NewsSlice';

export default function NewsListing({navigation}: {navigation: any}) {
  const {newsData} = useAppSelector(state => state.NewsReducer);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(FetchNews());
  }, []);
  console.log({newsData});

  const _renderItem = ({item}: {item: any}) => {
    console.log(item);
    return (
      <NewsList
        title={item.title}
        topic={item.topic}
        published_date={item.published_date}
        media={item.media}
      />
    );
  };

  return (
    <>
      <SpacerWrapper>
        <View style={CommonStyles.container}>
          <View style={CommonStyles.listheader}>
            <Button
              title="Error"
              onPressButton={handError}
              icon={undefined} //   Style={CommonStyles.errorButton}
              style={CommonStyles.listbutton}
              styleText={CommonStyles.textStyle}
            />
            <Button
              title="Show Details"
              onPressButton={() => navigation.navigate('newsDetails')}
              icon={undefined} //   Style={CommonStyles.listbutton}
              style={CommonStyles.listbutton}
              styleText={CommonStyles.textStyle}
            />
          </View>

          <FlatList
            keyExtractor={(_, index) => index.toString()}
            data={newsData}
            renderItem={_renderItem}
          />
        </View>
      </SpacerWrapper>
    </>
  );
}

const handError = () => {
  if ('newsDetails') {
    return Alert.alert('runtime error!');
  } else {
    null;
  }
};
