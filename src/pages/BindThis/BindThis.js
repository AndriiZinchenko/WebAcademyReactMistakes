import React from 'react';
import Button from "@material-ui/core/Button";

class BindThis extends React.Component {
    // constructor(props){
    //     super(props);
    //     this.click = this.click.bind(this);
    // }
    state = {
        text: 'text'
    };

     click = function() {
        console.log(this);
    };

    render() {
        return (
            <div>
                {/*<Button onClick={this.click}>*/}
                <Button
                    // Не стоит использовать данных синтаксис.
                    // Вызов bind(this) возврощает новую функцию
                    // Это привод к тому что данная функция постоянно пересоздается и вызывает не нужные обновления компонентов.
                    // к этому же примеру можно добавить что использование след. выражений вызывает такие же последствия:
                    // onChange={(e) => {this.click(e.target.value)}} - постоянно создается новая функция.(для тега input)
                    // style={{ width: '100%' }} - постоянно создает новый объект.
                    onClick={this.click.bind(this)}
                >
                    Click
                </Button>
            </div>
        )
    }
}

export default BindThis;
