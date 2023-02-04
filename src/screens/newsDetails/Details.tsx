import React, {useEffect} from 'react';
import {ActivityIndicator, FlatList, View} from 'react-native';
import {useSelector} from 'react-redux';
import {Store} from '../../redux/Store';
import {CommonStyles} from '../../common/styles/CommonStyles';
import {Button} from '../../components/Button';
import * as Colors from '../../constants/Colors';
import BackButton from '../../components/BackButton';
import {DetailsList} from './DetailsCard';

const {dispatch} = Store;

export default function NewsDetails({navigation}: {navigation: any}) {
  const {title, loading} = useSelector(state => state.fPNews);

  useEffect(() => {
    dispatch.FpNews.loadData();
  }, []);

  const _renderItem = ({item}: {item: any}) => {
    console.log(item);
    return <DetailsList summary={item.summary} author={item.author} />;
  };

  if (loading) {
    return <LoadingView />;
  }

  return (
    <>
      <View style={CommonStyles.detailcontainer}>
        <View>
          <View style={CommonStyles.deatilheader}>
            <BackButton />

            <Button
              title="SignOut"
              onPressButton={() => navigation.navigate('signup')}
              style={CommonStyles.detailbutton}
              icon={undefined}
            />
          </View>

          <FlatList
            data={title}
            showsVerticalScrollIndicator={false}
            keyExtractor={(_, index) => index.toString()}
            renderItem={_renderItem}
          />
        </View>
      </View>
    </>
  );
}

const LoadingView = () => {
  return (
    <View style={CommonStyles.detailloading}>
      <ActivityIndicator size="large" color={Colors.linear} />
    </View>
  );
};
