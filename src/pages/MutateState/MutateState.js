import { isEqual } from 'lodash';
import React from 'react';
import Button from "@material-ui/core/Button";

class MutateState extends React.Component{
    state = {
        list: [1,2,3]
    };

    shouldComponentUpdate(nextProps, nextState) {
        console.log('this.state.list', this.state.list);
        console.log('nextState.list', nextState.list);
        return (
            !isEqual(this.state.list, nextState.list)
        )
    }

    // Чтобы избежать мутации состоянии используйте
    // Spread оператор либо cloneDeep из lodash.
    // Из-за мутации алгоритмы React(shouldComponentUpdate, useCallback, useMemo, React.memo)
    // при сравнии состояния будут работать не так как вы ожидалию.
    mutateState = (state) => {
        let list = state.list;
        // let {list} = state;
        // let list = [...state.list];
        list.push('new');
        this.setState({list});
    };

    updateState =  () => {
        this.mutateState(this.state);
    };

    render() {
        return (
            <div>
                <div>
                    {this.state.list}
                </div>
                <Button onClick={this.updateState}>
                    Mutate
                </Button>
            </div>
        )
    }
}

export default React.memo(MutateState);

