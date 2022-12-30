import styled from 'styled-components';
import { CustomDatePicker, RadioButtons, Wave } from '../../../pages/meeting/create';
import { ko } from 'date-fns/esm/locale';
import { SetStateAction } from 'react';

interface PeriodDateProps {
   startDate: Date;
   endDate: Date;
   setStartDate: (value: SetStateAction<Date | [Date | null, Date | null] | null>) => void;
   setEndDate: (value: SetStateAction<Date | [Date | null, Date | null] | null>) => void;
   onCheckDayWeeks: (value: number) => void;
}

const PeriodDate = ({ startDate, endDate, setStartDate, setEndDate, onCheckDayWeeks }: PeriodDateProps) => {
   return (
      <>
         <Flex>
            <CustomDatePicker
               locale={ko}
               dateFormat="yyyy-MM-dd"
               minDate={new Date()}
               withPortal
               selectsStart
               selected={startDate}
               startDate={startDate}
               endDate={endDate}
               onChange={selectedDate => {
                  setStartDate(selectedDate);
                  setEndDate(selectedDate);
               }}
            />
            <Wave>~</Wave>
            <CustomDatePicker
               locale={ko}
               dateFormat="yyyy-MM-dd"
               minDate={startDate}
               withPortal
               selectsEnd
               selected={endDate}
               startDate={startDate}
               endDate={endDate}
               onChange={selectedDate => {
                  setEndDate(selectedDate);
               }}
            />
         </Flex>
         <RadioButtons>
            <label>
               <input type="checkbox" value="1" onChange={e => onCheckDayWeeks(Number(e.target.value))} />
               <label htmlFor="1"></label>월
            </label>
            <label>
               <input type="checkbox" value="2" onChange={e => onCheckDayWeeks(Number(e.target.value))} />
               <label htmlFor="2"></label>화
            </label>
            <label>
               <input type="checkbox" value="3" onChange={e => onCheckDayWeeks(Number(e.target.value))} />
               <label htmlFor="3"></label>수
            </label>
            <label>
               <input type="checkbox" value="4" onChange={e => onCheckDayWeeks(Number(e.target.value))} />
               <label htmlFor="4"></label>목
            </label>
            <label>
               <input type="checkbox" value="5" onChange={e => onCheckDayWeeks(Number(e.target.value))} />
               <label htmlFor="5"></label>금
            </label>
            <label>
               <input type="checkbox" value="6" onChange={e => onCheckDayWeeks(Number(e.target.value))} />
               <label htmlFor="6"></label>토
            </label>
            <label>
               <input type="checkbox" value="7" onChange={e => onCheckDayWeeks(Number(e.target.value))} />
               <label htmlFor="7"></label>일
            </label>
         </RadioButtons>
      </>
   );
};

export default PeriodDate;

const Flex = styled.div`
   margin-bottom: 15px;
   display: flex;
   align-items: center;

   .react-datepicker-wrapper {
      width: 192px;
   }
`;
