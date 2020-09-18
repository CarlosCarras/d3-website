import React from 'react';
import './StaffEntry.css';


class StaffEntry extends React.Component {
    render() {
        return(
          <div className="entry">
              <div className="row" style={{paddingBottom:"50px"}}>
              		<div className="flex-column-35 col-home-left">
              			<img alt={this.props.entry.name} src={this.props.imgURI}/>
              		</div>
              		<div className="flex-column-65 col-home-right staff-info">
              			<div className="staff-name"> {this.props.entry.name} </div>
              			<div className="staff-position"> {this.props.entry.position} </div>
              			<div className="staff-institution"> {this.props.entry.institution} </div>
              			<div className="staff-education"> {this.props.entry.education} </div>
              			<br/>
              			<p className="staff-description"> {this.props.entry.description} </p>
              		</div>
              </div>
          </div>
        )
    }
}

export default StaffEntry;
