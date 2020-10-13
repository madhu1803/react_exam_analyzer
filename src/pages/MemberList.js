import React, { Component } from 'react'
import {Navibar,MemberTable} from '../components/index'

export default class MemberList extends Component {
    render() {
        return (
            <div>
                <Navibar/>
                <div className="container mt-5">
                <MemberTable/>
                </div>
            </div>
        )
    }
}
