import './styles.css';
import NotFound from '../../assets/13525-empty.gif'
const EmptyList = () => (
  <div className='emptyList-wrap'>
    <img src={NotFound} alt='empty' />
  </div>
);

export default EmptyList;
