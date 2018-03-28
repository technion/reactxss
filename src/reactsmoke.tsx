import * as React from "react";
import * as ReactDOM from "react-dom";

class SploitList extends React.Component<any,{}> {
  public render() {
  var testNodes = this.props.data.map(function (comment, index) {
        return (
                <div key={index}>
                "-------------------"<br />
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
};


class TestBox extends React.Component<any, any> {
    constructor(props: {}) {
      super(props);
      this.state = {
        sploits: []
      };
    }
    public componentDidMount() {
          fetch(
      "sploits.json",
    ).then((response) => {
      if (!response.ok) {
        throw new Error("Network response returned "
            + response.status);
      }
      return response.json() as any;
    }).then((sploits) => {
      this.setState({...this.state, sploits});
    }).catch((err) => {
      console.error(err.message);
    });
    }
    public render() {
      return (
        <div className="commentBox">
         <SploitList data={this.state.sploits} />
        </div>
      );
    }
};


ReactDOM.render(
        <TestBox url="sploits.json" />,
        document.getElementById('content')
        );

