import type { NextPage } from 'next';
import { CenterSection, RightSection } from '../styles/style';
import Category from '../components/common/Category';
import { Title } from '../components/common/Title';
import { RightBox } from '../components/rightLayout/RightBox';
import IconHot from './../assets/images/icon_hot.svg';
import IconNotice from './../assets/images/icon_notice.svg';
import MainList from '../components/main/MainList';
import MainTags from '../components/main/MainTags';
import RankList from '../components/main/RankList';
import Notice from '../components/rightLayout/Notice';

const Home: NextPage = () => {
   return (
      <>
         <Category />
         <CenterSection>
            <Title label="전체" />
            <MainTags />
            <MainList />
         </CenterSection>
         <RightSection>
            <RightBox label="실시간 핫한 모임" imgLink={IconHot} childrens={<RankList />} />
            <RightBox label="알려드립니다!" imgLink={IconNotice} childrens={<Notice />} />
            {/* <Link href="/Test">
               폴더 안 페이지 클릭
            </Link>
            <Link href="/test2">
               같은 경로 페이지 클릭
            </Link> */}
         </RightSection>
      </>
   );
};

export default Home;
