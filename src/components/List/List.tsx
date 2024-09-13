import style from "./List.module.css"


interface ListProps<T> {
    items: T[];
    renderItem: (item: T) => React.ReactNode
}

export default function List<T>(props: ListProps<T>) {

    return (
        <ul className={style.list}>
            {props.items.map(props.renderItem)}
        </ul>
    )
}