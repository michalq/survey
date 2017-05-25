/**
 *
 */
export class Pagination extends React.Component
{
  constructor(props) {
    super(props);
    this.pages = this.props.pages;
    this.currentPage = 0;
  }

  setPage(page) {
    this.currentPage = page;
    Statements.toggleStatemenent(page);
    this.forceUpdate();
  }

  setPrevPage() {
    const page = this.currentPage - 1;
    if (page < 0) {
      return;
    }

    this.setPage(page);
    Statements.toggleStatemenent(page);
  }

  setNextPage() {
    const page = this.currentPage + 1;
    if (page >= this.pages) {
      return;
    }

    this.setPage(page);
    Statements.toggleStatemenent(page);
  }

  render() {
    const pages = this.pages;
    const current = this.currentPage;

    let htmlPages = [];
    for (let i = 0; i < pages; i++) {
      htmlPages.push(
        <li key={i} className={'page-item ' + ((current == i) ? 'active' : '')}>
          <a className="page-link" href="#" onClick={() => { this.setPage(i)} }>{i + 1}</a>
        </li>
      );
    }

    let finalBlock = '';
    if (current == pages - 1) {
      finalBlock = (
        <li className="page-item">
          <button className="page-link" type="submit">Send</button>
        </li>
      );
    } else {
      finalBlock = (
        <li className="page-item">
          <a className="page-link" href="#" onClick={() => { this.setNextPage()} }>Next</a>
        </li>
      );
    }

    return (
      <footer className="paginationFooter">
          <nav>
            <ul className="pagination pagination-lg justify-content-center">
              <li className={'page-item ' + (0 == current ? 'disabled' :'')}>
                <a className="page-link" href="#" onClick={() => { this.setPrevPage()} }>Previous</a>
              </li>
              {htmlPages}
              {finalBlock}
            </ul>
          </nav>
      </footer>
    )
  }
}