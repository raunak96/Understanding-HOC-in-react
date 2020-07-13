import React from 'react';

const withData=(WrappedComponent)=>{
    class WithDataHOC extends React.Component {
        state = {
            data: [],
        };
        async componentDidMount() {
            let result = await fetch(this.props.dataSource);
            result = await result.json();
            this.setState({ data: result.slice(0, 3) });
        }
        render() {
            const {dataSource,...otherProps}= this.props;   // our wrapped Component doesn't require dataSource props so we destructure our props
            return this.state.data.length<1 ?<h1>LOADING....</h1> : <WrappedComponent data={this.state.data} {...otherProps}/>
        }
    }
    return WithDataHOC;
}

export default withData;