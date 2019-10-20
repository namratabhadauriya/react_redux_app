import React from "react";
import Accordion from './accordion/accordion';
import { connect } from 'react-redux';

class Component_1 extends React.Component {

  render() {
    return (<div className="container1">
      <h4>Component-1 , Total Sections are {this.props.sections.length || 0} </h4>
      <Accordion sections={this.props.sections} />
      {
        this.props.add ?
          <div className="textContainer">
            <textarea placeholder="Enter Section Summary" ref="sectiontext" maxLength={10000} />
          </div> : null
      }
      <div className="buttonContainer">
        {
          this.props.add ?
            <button onClick={() => this.props.addSection(this.refs.sectiontext.value)}>Save Section</button> :
            <button onClick={this.props.updateAdd}>Add Section</button>
        }
      </div>
    </div>)
  }

}

const mapStateToProps = (store) => {
  return {
    sections: store.reducer_1.sections,
    add: store.reducer_1.add
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addSection: (value) => dispatch({ type: 'addSection1', value }),
    updateAdd: () => dispatch({ type: 'updateAdd1', value: true })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Component_1);