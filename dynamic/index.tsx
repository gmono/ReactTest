import React=require("../node_modules/react");
// import server=require("../node_modules/react-dom/server");
var Tli=React.createClass({
    testdata:"hello",
    render:function(){
        return <li style={{'background-color':'#ffccbb',color:'#ccffbb',border:'yellow 2px'}} onclick={this.testfun}></li>;
        
    },
    testfun:function(){
        alert(this.testdata);
    }
});
var Block=React.createClass({
    render:function(){
        return <ul style={{'background-color':'oranged'}}>
        {
            (function(){
                var ret=[];
                for(var t=0;t<10;++t)
                {
                    ret.push(<Tli></Tli>);
                }
                return ret;
            })()
        }
        </ul>;
    }
});
var index=<div>{
   (function(){var ret=[];for(var t=0;t<5;++t) ret.push(<Block></Block>);return ret;})() 
}</div>;

export =index;


