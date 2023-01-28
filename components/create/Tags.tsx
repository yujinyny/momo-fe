import styled from 'styled-components';

interface TagsProps {
   tags: string[];
   onClickTag: (value: string) => void;
}

const Tags = ({ tags, onClickTag }: TagsProps) => {
   return (
      <TagsStyle>
         <li>
            <button onClick={() => onClickTag('멘토링')} className={tags.includes('멘토링') ? 'selected' : ''}>
               멘토링
            </button>
         </li>
         <li>
            <button onClick={() => onClickTag('온라인')} className={tags.includes('온라인') ? 'selected' : ''}>
               온라인
            </button>
         </li>
         <li>
            <button
               onClick={() => onClickTag('오프라인모임')}
               className={tags.includes('오프라인모임') ? 'selected' : ''}>
               오프라인모임
            </button>
         </li>
         <li>
            <button onClick={() => onClickTag('스터디')} className={tags.includes('스터디') ? 'selected' : ''}>
               스터디
            </button>
         </li>
         <li>
            <button onClick={() => onClickTag('모임')} className={tags.includes('모임') ? 'selected' : ''}>
               모임
            </button>
         </li>
         <li>
            <button onClick={() => onClickTag('5인이상')} className={tags.includes('5인이상') ? 'selected' : ''}>
               5인이상
            </button>
         </li>
      </TagsStyle>
   );
};

export default Tags;

const TagsStyle = styled.ul`
   background-color: #f0f0f0;
   border-radius: 15px;
   padding: 20px 30px;
   display: flex;

   > li button {
      padding: 7px 12px;
      border-radius: 15px;
      transition: background-color 0.2s ease-in-out;
   }
   > li button.selected {
      background-color: #d4e6ff;
      color: #6a6ff2;
   }
   > li:not(:last-child) {
      margin-right: 15px;
   }
`;
