import * as React from "react";
import * as ReactDOM from "react-dom";

interface ISploits {
  sploits: IExploit[];
}

interface IExploit {
  exploit: string;
}

class SploitList extends React.Component<ISploits, {}> {
  public render() {
    const testNodes = this.props.sploits.map( (comment, index) => {
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
}

interface ITestBoxProp {
  url: string;
}

class TestBox extends React.Component<ITestBoxProp, ISploits> {
  constructor(props: ITestBoxProp) {
    super(props);
    this.state = {
      sploits: [],
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
        <SploitList sploits={this.state.sploits} />
      </div>
    );
  }
}

ReactDOM.render(
  <TestBox url="sploits.json" />,
  document.getElementById("content"),
);
