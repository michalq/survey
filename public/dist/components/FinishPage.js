"use strict";

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
var FinishPage = exports.FinishPage = function (_React$Component) {
  _inherits(FinishPage, _React$Component);

  function FinishPage() {
    _classCallCheck(this, FinishPage);

    return _possibleConstructorReturn(this, (FinishPage.__proto__ || Object.getPrototypeOf(FinishPage)).apply(this, arguments));
  }

  _createClass(FinishPage, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "div",
          { className: "finish-page container mx-auto", style: { width: "600px" } },
          React.createElement(
            "div",
            { className: "card text-center" },
            React.createElement(
              "div",
              { className: "card-block" },
              React.createElement(
                "h4",
                { className: "card-title" },
                "Responses were sent."
              ),
              React.createElement(
                "p",
                { className: "card-text h1" },
                React.createElement("i", { className: "text-success ion-checkmark-circled" })
              ),
              React.createElement(
                "p",
                { className: "card-text" },
                "Thanks for your time!"
              )
            ),
            React.createElement(
              "div",
              { className: "card-footer text-muted" },
              React.createElement(
                "p",
                null,
                React.createElement(
                  "small",
                  { className: "text-muted mr-2" },
                  "\xA9 2017"
                ),
                React.createElement(
                  "small",
                  { className: "text-muted mr-2" },
                  React.createElement(
                    "a",
                    { href: "mailto:kutrzeba.michal@gmail.com" },
                    React.createElement("i", { className: "ion-paper-airplane" }),
                    " Micha\u0142 Kutrzeba"
                  )
                )
              ),
              React.createElement(
                "p",
                { className: "text-muted h4" },
                React.createElement(
                  "a",
                  { href: "https://www.linkedin.com/in/micha%C5%82-kutrzeba-69134167/" },
                  React.createElement("i", { className: "ion-social-linkedin" })
                )
              )
            )
          )
        )
      );
    }
  }]);

  return FinishPage;
}(React.Component);