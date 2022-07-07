import {
  usePagination,
  UsePaginationProps,
} from 'react-instantsearch-hooks-web';

const Pagination = (props: UsePaginationProps) => {

  const {
    pages,
    currentRefinement,
    nbHits,
    nbPages,
    isFirstPage,
    isLastPage,
    refine,
    createURL
  } = usePagination(props);

  // <li className="uk-disabled"><span>...</span></li>

  return (
    <div className="pagination">
      <ul className="uk-pagination" uk-margin="">
        {!isFirstPage && <li>
          <a 
            href="#"
            onClick={(event) => {
              event.preventDefault();
              refine(currentRefinement - 1);
            }}
          >
            <img src="/assets/angle-left.svg" alt="" uk-svg="" />
          </a>
        </li>}
        {pages.map((page) => <li className={page === currentRefinement ? "uk-active" : ""} key={page}>
          {page !== currentRefinement ? <a 
            href={createURL(page)} 
            onClick={(event) => {
              event.preventDefault();
              refine(page);
            }}
          >
            {page + 1}
          </a> : <span>{page + 1}</span>}
        </li>)}
        {!isLastPage && <li>
          <a 
            href="#"
            onClick={(event) => {
              event.preventDefault();
              refine(currentRefinement + 1);
            }}
          >
            <img src="/assets/angle-right.svg" alt="" uk-svg="" />
          </a>
        </li>}
      </ul>
    </div>
  )
}

export default Pagination