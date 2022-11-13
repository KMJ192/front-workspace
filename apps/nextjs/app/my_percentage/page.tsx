import classNames from 'classnames/bind';
import style from './style.module.scss';
const cx = classNames.bind(style);

const pageKey = 'my_percentage';

function page() {
  if (typeof window !== 'object') return <></>;

  return (
    <div className={cx('container')}>
      <h1>나의 키 백분위</h1>
      <div className={cx('gender')}>
        <h3>성별</h3>
        <div className={cx('selector')}>
          <div>
            <input
              id={`${pageKey}-selector-man`}
              name='selector'
              type='radio'
            ></input>
            <label htmlFor={`${pageKey}-selector-man`}>남자</label>
          </div>
          <div>
            <input
              id={`${pageKey}-selector-woman`}
              name='selector'
              type='radio'
            ></input>
            <label htmlFor={`${pageKey}-selector-woman`}>여자</label>
          </div>
        </div>
      </div>
      <div className={cx('age')}>
        <h3>나이</h3>
        <select>
          <option value={0}>19 ~ 24세</option>
          <option value={1}>25 ~ 29세</option>
          <option value={2}>30 ~ 34세</option>
          <option value={3}>35 ~ 39세</option>
          <option value={4}>40 ~ 44세</option>
          <option value={5}>44 ~ 49세</option>
          <option value={6}>50 ~ 54세</option>
          <option value={7}>54 ~ 59세</option>
          <option value={8}>60 ~ 64세</option>
          <option value={9}>64 ~ 69세</option>
          <option value={10}>70 ~ 74세</option>
          <option value={11}>74 ~ 79세</option>
          <option value={12}>80세 이상</option>
        </select>
      </div>
      <div className={cx('height')}>
        <h3>키</h3>
        <input placeholder='키를 입력하세요' />
      </div>
    </div>
  );
}

export default page;
