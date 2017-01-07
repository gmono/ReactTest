var Hander=React.createClass({displayName: "Hander",
    render:function(){
        return React.createElement("div", {style: {backgroundColor:'rgba(255,255,255,0.5)'}}, 
        React.createElement("img", {src: this.props.touxiang, style: {display:'block'}}), 
        React.createElement("div", null, React.createElement("span", null))
        )
    },
    getLine:function(name,value){
        var sty={display:'inline-block',textAlign:'center'};
        return React.createElement("div", null, React.createElement("span", {style: sty}, name), React.createElement("span", {style: sty}, "value"));
    }
})