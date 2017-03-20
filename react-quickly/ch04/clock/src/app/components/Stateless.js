import React from "react";

// export class Stateless extends React.Component {
//     render() {
//         return (
//             <h1 {...this.props}>Hello {this.props.frameworkName} world!!!</h1>
//         );
//     }
// }

export const Stateless = (props) => {
    return (
        <h1 {...props}>Hello {props.frameworkName} world!!!</h1>
    );
}

// export const Stateless = function(props) {
//     return (
//         <h1 {...props}>Hello {props.frameworkName} world!!!</h1>
//     );
// }

// export function Stateless(props) {
//     return <h1 {...props}>Hello {props.frameworkName} world!!!</h1>
// }