var SploitList = React.createClass({
render: function() {
var commentNodes = this.props.data.map(function (comment) {
        return (
                <div>
                {comment.exploit}
                </div>
               );
        });
return (
        <div className="commentList">
        {commentNodes}
        </div>
       );
}
});


var CommentBox = React.createClass({
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
        Hello, world! I am a CommentBox.
        </div>
    );
    }
});
React.render(
        <CommentBox url="sploits.json" />,
        document.getElementById('content')
        );
