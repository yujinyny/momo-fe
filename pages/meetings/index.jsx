import { CenterSection } from '../../styles/style';
import MyCategory from '../../components/mypage/MyCategory';
import MyMeetings from '../../components/mypage/MyMettings';

const Meetings = () => {
   return (
      <>
         <MyCategory />
         <CenterSection>
            <MyMeetings myMeeting />
         </CenterSection>
      </>
   );
};

export default Meetings;
