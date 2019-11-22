import { remove } from 'lodash';
import React, { useState, useCallback } from 'react';
import Button from "@material-ui/core/Button";

const initState = [
    {
        id: 'id1',
        text: 'text1'
    },
    {
        id: 'id2',
        text: 'text2'
    },
    {
        id: 'id3',
        text: 'text3'
    },
    {
        id: 'id4',
        text: 'text4'
    }
];

const ListKey = () => {
    const [state, setState] = useState(initState);

    const onAdd = () => {
        const rand = Math.random();
        setState((current) => ([
            ...current,
            {
                id: `id_${rand}`,
                text: `text_${rand}`
            }
        ]))
    };


    const onRemove = useCallback((id) => () => {
        setState((current) => {
            const newState = [...current];
            remove(newState, (value) => (
                value.id === id
            ));
            return newState;
        })
    }, []);

    return (
        <div>
            <div>
                {state.map(({id, text}) => (
                    <Button
                        // Всегда устанавливайте уникальный key для отображения списков.
                        // Это улучшит работу алгоритмов React по оптимизации.
                        // key должен быть уникальным и не меняться при любых обстоятельствах.
                        // не используйте index для key.
                        // key={id}
                        onClick={onRemove(id)}
                    >
                        {text}
                    </Button>
                ))}
            </div>
            <div>
                <Button
                    onClick={onAdd}
                >
                    Add
                </Button>
            </div>
        </div>
    )
};

export default React.memo(ListKey);
