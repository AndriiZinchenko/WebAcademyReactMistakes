import React from 'react';
import Button from '@material-ui/core/Button';

class AsyncState extends React.Component {
    state = {
        count: 0,
    };

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return (
            this.state.count !== nextState.count
        );
    }

    inc = () => {
        this.setState({ count: this.state.count + 1 });
        // this.setState((current) => ({ count: current.count + 1}));
    };

    inc2 = () => {
        // Когда мы используем несколько setState функций подрят, и они зависят от предыдущего состояния
        // Зачастую вторая функция будет обработана не коректно.
        // Это связано с тем что setState - асинхронная функция. Она не изменяет состояние в один момент.
        // Если ваше состояние зависит от предыдущего значения - используйте callback синтаксис в setState или useState.
        // Так же не стоит забывать что хорошей практикой будет не вызывать несколько setState функций в одном блоке кода подрят.
        this.inc();
        this.inc();
    };

    render() {
        return (
            <div>
                <div>
                    counter: {this.state.count}
                </div>
                <Button onClick={this.inc}>
                    Inc by 1
                </Button>
                <Button onClick={this.inc2}>
                    Inc by 2
                </Button>
            </div>
        )
    }
}

export default React.memo(AsyncState);

