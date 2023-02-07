import React, {useEffect} from 'react';
import {FlatList, View} from 'react-native';
import {CommonStyles} from '../../common/styles/CommonStyles';
import {Button} from '../../components/button/Button';
import BackButton from '../../components/button/BackButton';
import {DetailsList} from './DetailsCard';
import {useAppDispatch, useAppSelector} from '../../redux/hooks';
import {FetchNews} from '../../redux/slice/NewsSlice';

export default function NewsDetails({navigation}: {navigation: any}) {
  const {newsData} = useAppSelector(state => state.NewsReducer);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(FetchNews());
  }, []);
  console.log({newsData});

  const _renderItem = ({item}: {item: any}) => {
    console.log(item);
    return <DetailsList author={item.author} summary={item.summary} />;
  };

  return (
    <>
      <View style={CommonStyles.detailcontainer}>
        <View>
          <View style={CommonStyles.deatilheader}>
            <BackButton onPress={() => navigation.goBack()} />

            <Button
              title="SignOut"
              onPressButton={() => navigation.navigate('signup')}
              icon={undefined}
              style={CommonStyles.listbutton}
              styleText={CommonStyles.textStyle}
            />
          </View>

          <FlatList
            data={newsData}
            showsVerticalScrollIndicator={false}
            keyExtractor={(_, index) => index.toString()}
            renderItem={_renderItem}
          />
        </View>
      </View>
    </>
  );
}
