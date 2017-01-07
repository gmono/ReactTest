"use strict";
var React = require("../node_modules/react");
// import server=require("../node_modules/react-dom/server");
var Tli = React.createClass({
    testdata: "hello",
    render: function () {
        return React.createElement("li", { style: { 'background-color': '#ffccbb', color: '#ccffbb', border: 'yellow 2px' }, onclick: this.testfun });
    },
    testfun: function () {
        alert(this.testdata);
    }
});
var Block = React.createClass({
    render: function () {
        return React.createElement("ul", { style: { 'background-color': 'oranged' } }, (function () {
            var ret = [];
            for (var t = 0; t < 10; ++t) {
                ret.push(React.createElement(Tli, null));
            }
            return ret;
        })());
    }
});
var index = React.createElement("div", null, (function () { var ret = []; for (var t = 0; t < 5; ++t)
    ret.push(React.createElement(Block, null)); return ret; })());
module.exports = index;
