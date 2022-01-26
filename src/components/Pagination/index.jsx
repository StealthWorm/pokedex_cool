import { useContext } from 'react';
import { ReactComponent as Arrow } from '../../assets/img/arrow.svg';
import { MainContext } from '../../contexts/MainContext';
import './styles.css';

function Pagination() {
   const { prevUrl, nextUrl, next, prev, pageNumber } = useContext(MainContext);

   return (
      <div className="pagination-container">
         <div className="pagination-box">
            <button className="pagination-button" disabled={!prevUrl} onClick={prev}>
               <Arrow />
            </button>
            <p>{pageNumber}</p>
            <button className="pagination-button" disabled={!nextUrl} onClick={next}>
               <Arrow className="flip-horizontal" />
            </button>
         </div>
      </div>
   );
}

export default Pagination;
