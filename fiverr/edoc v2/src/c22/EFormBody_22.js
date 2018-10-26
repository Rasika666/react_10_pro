import React, { Component } from 'react'
import EFormUnit_22 from './EFormUnit_22';

export default class EFormBody_22 extends Component {
  render() {
    return (
        <div className="table-responsive">
        <table className="table fz14 table-striped" >
          <thead className="bglgr text-uppercase">
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Source</th>
              <th scope="col">Action</th>
              <th scope="col" className="text-right">Mapping</th>
            </tr>
          </thead>
          <tbody className="mt-2">
            <EFormUnit_22 name="Joe John Jane" source="HomeSmart Master" setup="Setup" cName="btn btn-outline-secondary fz14 px-4 fw7"/>
            <EFormUnit_22 name="Joe John Jane" source="HomeSmart Master" setup="Setup" cName="btn btn-outline-secondary fz14 px-4 fw7"/>
            <EFormUnit_22 name="Joe John Jane" source="HomeSmart Master" setup="Complete" cName="btn text-success fz14 fw7"/>
            <EFormUnit_22 name="Joe John Jane" source="HomeSmart Master" setup="Setup" cName="btn btn-outline-secondary fz14 px-4 fw7"/>
            <EFormUnit_22 name="Joe John Jane" source="HomeSmart Master" setup="Setup" cName="btn btn-outline-secondary fz14 px-4 fw7"/>
            <EFormUnit_22 name="Joe John Jane" source="HomeSmart Master" setup="Setup" cName="btn btn-outline-secondary fz14 px-4 fw7"/>
            <EFormUnit_22 name="Joe John Jane" source="HomeSmart Master" setup="Complete" cName="btn text-success fz14 fw7"/>
            <EFormUnit_22 name="Joe John Jane" source="HomeSmart Master" setup="Setup" cName="btn btn-outline-secondary fz14 px-4 fw7"/>
            <EFormUnit_22 name="Joe John Jane" source="HomeSmart Master" setup="Setup" cName="btn btn-outline-secondary fz14 px-4 fw7"/>
          </tbody>
        </table>
      </div>
    )
  }
}
