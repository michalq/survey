'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Statements = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _QuestionPercentage = require('QuestionPercentage');

var _QuestionQuick = require('QuestionQuick');

var _Pagination = require('Pagination');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 *
 */
var Statements = exports.Statements = function (_React$Component) {
  _inherits(Statements, _React$Component);

  _createClass(Statements, null, [{
    key: 'showStatement',
    value: function showStatement(statementNo) {
      var questionCard = document.querySelectorAll('.question-card')[statementNo];
      questionCard.classList.remove('hidden');
    }
  }, {
    key: 'hideStatements',
    value: function hideStatements(callback) {
      var questionCards = document.querySelectorAll('.question-card');
      if (questionCards.length) {
        var val = '';
        for (var i = 0; i < questionCards.length; i++) {
          val = questionCards[i];
          val.classList.add('hidden');
        }
      }

      callback();
    }
  }, {
    key: 'toggleStatemenent',
    value: function toggleStatemenent(statementNo) {
      Statements.hideStatements(function () {
        Statements.showStatement(statementNo);
      });
    }

    /**
     * @param  {Array} props
     */

  }]);

  function Statements(props) {
    _classCallCheck(this, Statements);

    var _this = _possibleConstructorReturn(this, (Statements.__proto__ || Object.getPrototypeOf(Statements)).call(this, props));

    _this.sendResponses = _this.sendResponses.bind(_this);

    /**
     * @type {Array}
     */
    _this.statements = [];
    return _this;
  }

  /**
   * @param  {Object} e
   * @return {Void}
   */


  _createClass(Statements, [{
    key: 'sendResponses',
    value: function sendResponses(e) {
      var _this2 = this;

      e.preventDefault();
      var formData = [];
      for (var i = 0; i < this.statements.length; i++) {
        formData[i] = {
          statementId: this.statements[i].id,
          value: this.statements[i].state.value
        };
      }

      SurveyService.sendReplies(formData).then(function (data) {
        console.log(data);
        ReactDOM.render(React.createElement(FinishPage, null), document.getElementById('app'));
      }).catch(function (data) {
        data.response.json().then(function (data) {
          console.log(data);
          var i = 0;
          var errorsRemapped = [];
          for (var _i = 0; _i < data.errors.length; _i++) {
            errorsRemapped[data.errors[_i].statementId] = data.errors[_i];
          }

          for (var _i2 = 0; _i2 < _this2.statements.length; _i2++) {
            var stat = _this2.statements[_i2];
            var err = errorsRemapped[stat.id];
            var errorMsg = '';
            if (typeof err != 'undefined') {
              errorMsg = err.message;
            }

            stat.setState({
              value: stat.state.value,
              error: errorMsg
            });
          }
        });
      });
    }

    /**
     * @return {Object}
     */

  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var statements = this.props.statements;
      var domStatements = [];
      for (var i = 0; i < statements.length; i++) {
        var statement = statements[i];
        if (1 == statement.response.type) {
          domStatements.push(React.createElement(_QuestionQuick.QuestionQuick, {
            id: statement.id,
            key: i,
            ref: function ref(statement) {
              _this3.statements.push(statement);
            },
            title: statement.title,
            responses: statement.response }));
        } else if (2 == statement.response.type) {
          domStatements.push(React.createElement(_QuestionPercentage.QuestionPercentage, {
            id: statement.id,
            key: i,
            ref: function ref(statement) {
              _this3.statements.push(statement);
            },
            title: statement.title,
            responses: statement.response }));
        }
      }

      return React.createElement(
        'form',
        { onSubmit: this.sendResponses, className: 'statements-box hidden', style: { height: "350px" } },
        domStatements,
        React.createElement(_Pagination.Pagination, { pages: statements.length })
      );
    }
  }]);

  return Statements;
}(React.Component);