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
        var sty={display:'inline-block',textAlign:'center'};
        return React.createElement("div", null, React.createElement("span", {style: sty}, name), React.createElement("span", {style: sty}, "value"));
    }
});

//name imgsrc
var NavButton=React.createClass({displayName: "NavButton",
    render:function(){
        var btnsty={position:'abstract',height:'100%',width:'100%'};
        return React.createElement("div", {style: {backgroundColor:'rgba(255,255,255,0.3)',position:'relative'}}, 
        React.createElement("div", {style: btnsty}, this.porps.name), 
        React.createElement("img", {style: btnsty, src: this.props.imgsrc})
        );
    }
});