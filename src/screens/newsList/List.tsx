import React, {useEffect} from 'react';
import {ActivityIndicator, FlatList, View, Alert} from 'react-native';
import {useSelector} from 'react-redux';
import * as Colors from '../../constants/Colors';
import SpacerWrapper from '../../common/util/SpacerWrapper';
import {CommonStyles} from '../../common/styles/CommonStyles';
import {Button} from '../../components/Button';
import {NewsList} from './NewsCard';
import {Store} from '../../redux/Store';

const {dispatch} = Store;
const handError = () => {
  if ('details') {
    return Alert.alert('runtime error!');
  } else {
    null;
  }
};

export default function NewsListing({navigation}: {navigation: any}) {
  const {title, loading} = useSelector(state => state.fPNews);

  useEffect(() => {
    dispatch.fPNews.loadData();
  }, []);

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

  if (loading) {
    return <LoadingView />;
  }

  return (
    <>
      <SpacerWrapper>
        <View style={CommonStyles.container}>
          <View style={CommonStyles.listheader}>
            <Button
              title="Error"
              onPressButton={handError}
              icon={undefined} //   Style={CommonStyles.errorButton}
            />
            <Button
              title="Show Details"
              onPressButton={() => navigation.navigate('details')}
              icon={undefined} //   Style={CommonStyles.listbutton}
            />
          </View>

          <FlatList
            keyExtractor={(_, index) => index.toString()}
            data={title}
            renderItem={_renderItem}
          />
        </View>
      </SpacerWrapper>
    </>
  );
}

const LoadingView = () => {
  return (
    <View style={CommonStyles.loading}>
      <ActivityIndicator size="large" color={Colors.linear} />
    </View>
  );
};
