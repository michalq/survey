'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.QuestionPercentage = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Question2 = require('Question');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 *
 */
var QuestionPercentage = exports.QuestionPercentage = function (_Question) {
  _inherits(QuestionPercentage, _Question);

  function QuestionPercentage() {
    _classCallCheck(this, QuestionPercentage);

    return _possibleConstructorReturn(this, (QuestionPercentage.__proto__ || Object.getPrototypeOf(QuestionPercentage)).apply(this, arguments));
  }

  _createClass(QuestionPercentage, [{
    key: 'handleChange',
    value: function handleChange(event) {
      this.setState({ value: event.target.value });
      document.getElementById('statement-' + this.id + '-input-0-output').innerHTML = event.target.value + '%';
    }
  }, {
    key: 'render',
    value: function render() {
      var title = this.props.title;
      var statementNo = this.id;

      return React.createElement(
        'div',
        { className: 'card question-card hidden' },
        React.createElement(
          'div',
          { className: 'card-block' },
          React.createElement(
            'h4',
            { className: 'card-title' },
            title
          ),
          this.state.error ? React.createElement(
            'p',
            { className: 'alert alert-danger' },
            React.createElement(
              'strong',
              null,
              'Error'
            ),
            ' ',
            this.state.error
          ) : null
        ),
        React.createElement(
          'div',
          { className: 'card-text' },
          React.createElement('output', { id: 'rangevalue' }),
          React.createElement('div', { className: 'clearfix' }),
          React.createElement('input', {
            className: 'form-control',
            id: 'statement-' + statementNo + '-input-0',
            type: 'range',
            name: 'response[]',
            min: '0',
            max: '100',
            step: '1',
            defaultValue: '0',
            onChange: this.handleChange })
        ),
        React.createElement(
          'div',
          { className: 'card-block' },
          React.createElement(
            'div',
            { className: 'card-tect' },
            React.createElement(
              'p',
              { className: 'h3 text-center', id: 'statement-' + statementNo + '-input-0-output' },
              '0%'
            )
          )
        )
      );
    }
  }]);

  return QuestionPercentage;
}(_Question2.Question);