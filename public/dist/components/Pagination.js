'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 *
 */
var Pagination = exports.Pagination = function (_React$Component) {
  _inherits(Pagination, _React$Component);

  function Pagination(props) {
    _classCallCheck(this, Pagination);

    var _this = _possibleConstructorReturn(this, (Pagination.__proto__ || Object.getPrototypeOf(Pagination)).call(this, props));

    _this.pages = _this.props.pages;
    _this.currentPage = 0;
    return _this;
  }

  _createClass(Pagination, [{
    key: 'setPage',
    value: function setPage(page) {
      this.currentPage = page;
      Statements.toggleStatemenent(page);
      this.forceUpdate();
    }
  }, {
    key: 'setPrevPage',
    value: function setPrevPage() {
      var page = this.currentPage - 1;
      if (page < 0) {
        return;
      }

      this.setPage(page);
      Statements.toggleStatemenent(page);
    }
  }, {
    key: 'setNextPage',
    value: function setNextPage() {
      var page = this.currentPage + 1;
      if (page >= this.pages) {
        return;
      }

      this.setPage(page);
      Statements.toggleStatemenent(page);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var pages = this.pages;
      var current = this.currentPage;

      var htmlPages = [];

      var _loop = function _loop(i) {
        htmlPages.push(React.createElement(
          'li',
          { key: i, className: 'page-item ' + (current == i ? 'active' : '') },
          React.createElement(
            'a',
            { className: 'page-link', href: '#', onClick: function onClick() {
                _this2.setPage(i);
              } },
            i + 1
          )
        ));
      };

      for (var i = 0; i < pages; i++) {
        _loop(i);
      }

      var finalBlock = '';
      if (current == pages - 1) {
        finalBlock = React.createElement(
          'li',
          { className: 'page-item' },
          React.createElement(
            'button',
            { className: 'page-link', type: 'submit' },
            'Send'
          )
        );
      } else {
        finalBlock = React.createElement(
          'li',
          { className: 'page-item' },
          React.createElement(
            'a',
            { className: 'page-link', href: '#', onClick: function onClick() {
                _this2.setNextPage();
              } },
            'Next'
          )
        );
      }

      return React.createElement(
        'footer',
        { className: 'paginationFooter' },
        React.createElement(
          'nav',
          null,
          React.createElement(
            'ul',
            { className: 'pagination pagination-lg justify-content-center' },
            React.createElement(
              'li',
              { className: 'page-item ' + (0 == current ? 'disabled' : '') },
              React.createElement(
                'a',
                { className: 'page-link', href: '#', onClick: function onClick() {
                    _this2.setPrevPage();
                  } },
                'Previous'
              )
            ),
            htmlPages,
            finalBlock
          )
        )
      );
    }
  }]);

  return Pagination;
}(React.Component);