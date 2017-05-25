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
var Landing = exports.Landing = function (_React$Component) {
  _inherits(Landing, _React$Component);

  function Landing() {
    _classCallCheck(this, Landing);

    return _possibleConstructorReturn(this, (Landing.__proto__ || Object.getPrototypeOf(Landing)).apply(this, arguments));
  }

  _createClass(Landing, [{
    key: 'beginSurvey',
    value: function beginSurvey() {
      var startPage = document.querySelector('.start-page');
      var statementsBox = document.querySelector('.statements-box');
      startPage.classList.add('animated');
      startPage.classList.add('fadeOut');
      startPage.addEventListener('animationend', function (e) {
        startPage.classList.add('hidden');
        statementsBox.classList.remove('hidden');
        Statements.toggleStatemenent(0);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var title = this.props.title;
      var description = this.props.description;

      return React.createElement(
        'div',
        { className: 'jumbotron start-page text-center' },
        React.createElement(
          'h1',
          { className: 'display-3' },
          title
        ),
        React.createElement(
          'p',
          { className: 'lead' },
          description
        ),
        React.createElement('hr', { className: 'my-4' }),
        React.createElement(
          'button',
          { type: '', className: 'btn btn-primary btn-lg', onClick: this.beginSurvey },
          'Begin \xBB'
        )
      );
    }
  }]);

  return Landing;
}(React.Component);