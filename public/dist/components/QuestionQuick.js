"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.QuestionQuick = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Question2 = require("Question");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 *
 */
var QuestionQuick = exports.QuestionQuick = function (_Question) {
  _inherits(QuestionQuick, _Question);

  function QuestionQuick() {
    _classCallCheck(this, QuestionQuick);

    return _possibleConstructorReturn(this, (QuestionQuick.__proto__ || Object.getPrototypeOf(QuestionQuick)).apply(this, arguments));
  }

  _createClass(QuestionQuick, [{
    key: "render",
    value: function render() {
      var title = this.props.title;
      var statementNo = this.props.no;

      return React.createElement(
        "div",
        { className: "card question-card hidden" },
        React.createElement(
          "div",
          { className: "card-block" },
          React.createElement(
            "h4",
            { className: "card-title" },
            title
          ),
          this.state.error ? React.createElement(
            "p",
            { className: "alert alert-danger" },
            React.createElement(
              "strong",
              null,
              "Error"
            ),
            " ",
            this.state.error
          ) : null
        ),
        React.createElement(
          "div",
          { className: "list-group list-group-flush" },
          React.createElement(
            "label",
            { className: "list-group-item" },
            React.createElement("input", {
              id: 'statement-' + statementNo + '-input-0',
              type: "radio",
              name: 'response[' + statementNo + ']',
              value: "1",
              onChange: this.handleChange }),
            React.createElement(
              "span",
              { style: { marginLeft: "20px" } },
              "Yes"
            )
          ),
          React.createElement(
            "label",
            { className: "list-group-item" },
            React.createElement("input", {
              id: 'statement-' + statementNo + '-input-1',
              type: "radio",
              name: 'response[' + statementNo + ']',
              value: "0",
              onChange: this.handleChange }),
            React.createElement(
              "span",
              { style: { marginLeft: "20px" } },
              "No"
            )
          ),
          React.createElement(
            "label",
            { className: "list-group-item" },
            React.createElement("input", {
              id: 'statement-' + statementNo + '-input-2',
              type: "radio",
              name: 'response[' + statementNo + ']',
              value: "2",
              onChange: this.handleChange }),
            React.createElement(
              "span",
              { style: { marginLeft: "20px" } },
              "I don't know"
            )
          )
        )
      );
    }
  }]);

  return QuestionQuick;
}(_Question2.Question);