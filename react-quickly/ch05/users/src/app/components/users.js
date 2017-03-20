import React from "react";
import Table from "react-bootstrap/lib/Table";

export class Users extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            users: []
        }
    }
    componentDidMount() {
        fetch(this.props['data-url'])
            .then((response) => response.json())
            .then((users) => this.setState({users: users}))       
    }

    render() {
        //console.log(this.state.users)
        return(
            <div className="container">
                <Table striped={true} condensed={true} bordered={true} hover={true}>
                    <thead>
                        <tr>
                            <th>Full Name</th>
                            <th>Email</th>
                            <th>IP Address</th>
                        </tr>
                    </thead>
                    <tbody>{this.state.users.map((user) =>
                        <tr key={user.id}>
                            <td>{user.first_name} {user.last_name}</td>
                            <td>{user.email}</td>
                            <td>{user.ip_address}</td>
                        </tr>)}
                    </tbody>
                </Table>
            </div>
        );
    }
}