//name age sex touxiang
var Hander=React.createClass({
    render:function(){
        return <div style={{backgroundColor:'rgba(255,255,255,0.5)'}}>
        <img src={this.props.touxiang} style={{display:'block'}}/>
        {this.getLine('姓名',this.props.name)}
        {this.getLine('年龄',this.props.age)}
        {this.getLine('性别',this.props.sex)}
        
        </div>
    },
    getLine:function(name,value){
        var sty={display:'inline-block',textAlign:'center',width:'3cm'};
        return <div style={{height:'1cm',lineHeight:'1cm'}}><span style={sty}>{name}:</span><span style={sty}>{value}</span></div>;
    }
});

//name imgsrc
var NavButton=React.createClass({
    render:function(){
        var btnsty={position:'abstract',height:'100%',width:'100%'};
        return <div style={{backgroundColor:'rgba(255,255,255,0.3)',position:'relative'}}>
        <div style={btnsty}>{this.props.name}</div>
        <img style={btnsty} src={this.props.imgsrc} />
        </div>;
    }
});
var NavBar=React.createClass({
    render:function(){
        var sty={position:'fixed',height:'100%',widht:'20%',top:'0',right:'0'};
        return <div>
        <Hander touxiang="" name="月落" age="19" sex="男"></Hander>
        <NavButton style={{width:'6cm'}} name="主页" imgsrc=""></NavButton>
        <NavButton name="博客" imgsrc=""></NavButton>
        <NavButton name="关于" imgsrc=""></NavButton>
        </div>;
    }
});
window.onload=function(){
    ReactDOM.render(<NavBar></NavBar>,document.body);
}