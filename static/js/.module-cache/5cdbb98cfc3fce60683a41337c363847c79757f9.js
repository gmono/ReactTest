//name age sex touxiang
var Hander=React.createClass({displayName: "Hander",
    render:function(){
        return React.createElement("div", {style: {backgroundColor:'rgba(255,255,255,0.5)'}}, 
        React.createElement("img", {src: this.props.touxiang, style: {display:'block'}}), 
        this.getLine('姓名',this.props.name), 
        this.getLine('年龄',this.props.age), 
        this.getLine('性别',this.props.sex)
        
        )
    },
    getLine:function(name,value){
        var sty={display:'inline-block',textAlign:'center',width:'3cm'};
        return React.createElement("div", {style: {height:'1cm',lineHeight:'1cm'}}, React.createElement("span", {style: sty}, name, ":"), React.createElement("span", {style: sty}, value));
    }
});

//name imgsrc
var NavButton=React.createClass({displayName: "NavButton",
    render:function(){
        var btnsty={position:'abstract',height:'100%',width:'100%'};
        return React.createElement("div", {style: {backgroundColor:'rgba(255,255,255,0.3)',position:'relative'}}, 
        React.createElement("div", {style: btnsty}, this.props.name), 
        React.createElement("img", {style: btnsty, src: this.props.imgsrc})
        );
    }
});
var NavBar=React.createClass({displayName: "NavBar",
    render:function(){
        var sty={position:'fixed',height:'100%',widht:'20%',top:'0',right:'0'};
        return React.createElement("div", null, 
        React.createElement(Hander, {touxiang: "", name: "月落", age: "19", sex: "男"}), 
        React.createElement(NavButton, {style: {width:'6cm'}, name: "主页", imgsrc: ""}), 
        React.createElement(NavButton, {name: "博客", imgsrc: ""}), 
        React.createElement(NavButton, {name: "关于", imgsrc: ""})
        );
    }
});
window.onload=function(){
    ReactDOM.render(React.createElement(NavBar, null),document.body);
}