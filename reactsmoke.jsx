var SploitList = React.createClass({
render: function() {
var testNodes = this.props.data.map(function (comment, index) {
        return (
                <div key={index}>
                {comment.exploit}
                </div>
               );
        });
return (
        <div className="commentList">
        {testNodes}
        </div>
       );
}
});


var TestBox = React.createClass({
    getInitialState: function() {
    return {sploits: []};
    },
    componentDidMount: function() {
        $.ajax({
        url: this.props.url,
        dataType: 'json',
        cache: false,
        success: function(sploits) {
            this.setState({sploits: sploits});
        }.bind(this),
            error: function(xhr, status, err) {
            console.error(this.props.url, status, err.toString());
        }.bind(this)
    });
    },
    render: function() {
    return (
        <div className="commentBox">
        <SploitList data={this.state.sploits} />
        </div>
    );
    }
});
React.render(
        <TestBox url="sploits.json" />,
        document.getElementById('content')
        );
