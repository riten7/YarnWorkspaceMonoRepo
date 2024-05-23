import React from 'react';

type IProps = {
    text: string;
}

export const Button: React.FC<IProps> = (props: IProps) => {
    return <button>{props.text}</button>;
}