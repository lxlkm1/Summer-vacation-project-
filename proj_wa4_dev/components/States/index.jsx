import React from "react";
import "./styles.css";

/**
 * Define States, a React component of CS142 Project 4, Problem 2. The model
 * data for this view (the state names) is available at
 * window.cs142models.statesModel().
 */

//win
class Card extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      allStates: window.cs142models.statesModel(),
      matchingFeatures: '',
    };
    this.handChange = this.handChange.bind(this);
  }
  handChange(event) {
    this.setState({
      matchingFeatures: event.target.value
    });
  }
  render() {
    const { allStates, matchingFeatures } = this.state;
    return (
      <div className="body">
        <InputBox handChange = {this.handChange}></InputBox>
        <ShowWhat allStates = {allStates} matchingFeatures = {matchingFeatures}></ShowWhat>
      </div>
    );
}
}
//输入框
class InputBox extends React.Component{
  render() {
    return (
      <><label htmlFor="put" className="lb">search</label>
        <input className="ip"
          id="put"
          type="text"
          onChange={this.props.handChange}
        /></>  
    );
  }

}
//显示卡
class ShowWhat extends React.Component{
  render() {
    const { allStates, matchingFeatures } = this.props;
      // console.log(allStates);
      // // 得到数据之后过滤得到一个列表并输出
    let hasFiz = allStates.filter((state) => {
      return state.toLowerCase().startsWith(matchingFeatures.toLowerCase());
    });
      if (hasFiz.length === 0) {
        hasFiz.push(<>There is no state to march it</>);
      }
    hasFiz = hasFiz.map((state) => {
      return <p>{state}</p>;
    })
      return (<div className="display">
        {hasFiz}
      </div>
      );
    }
  }

//抛出
class States extends React.Component {
  constructor(props) {
    super(props);
    console.log(
      "window.cs142models.statesModel()",
      window.cs142models.statesModel()
    );
  }
   render(){
     return (
       <Card></Card>
     );
    }
}


export default States;



