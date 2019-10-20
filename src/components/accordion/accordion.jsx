import React from "react";
import './accordion.css';
export default class Accordion extends React.Component {
    constructor(props) {
        super(props);
        let sections = props.sections;
        this.state = {
            sections
        }
    }

    componentWillReceiveProps(nextState) {
        this.setState({ sections: nextState.sections })
    }

    toggle(e, index) {
        let ref = this.refs[index];
        let refs = this.refs;
        if (ref.className === "hideSection") {
            ref.className = "showSection";
        } else {
            ref.className = "hideSection";
        }
        let len = Object.keys(refs).length || 0;
        for (let i = 0; i < len; i++) {
            if (i !== index) {
                let currRef = refs[i];
                currRef.className = "hideSection";
            }
        }
    }

    render() {
        const { sections } = this.state;
        return (
            <div>
                {
                    sections.map((sec, index) => {
                        return (
                            <div className="sectionDiv" key={index} onClick={() => this.toggle(this, index)}>
                                <b>Section{index + 1}</b>
                                <div ref={index} className="hideSection">{sec['section']}</div>
                            </div>
                        )
                    })
                }
            </div>)
    }
}