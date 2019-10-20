import React from "react";
import Accordion from './accordion/accordion';
import { connect } from 'react-redux';

class Component_2 extends React.Component {

  render() {
    return (<div className="container2">
      <h4>Component-2 , Total Sections are {this.props.sections.length || 0} </h4>
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
    sections: store.reducer_2.sections,
    add: store.reducer_2.add
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addSection: (value) => dispatch({ type: 'addSection2', value }),
    updateAdd: () => dispatch({ type: 'updateAdd2', value: true })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Component_2);