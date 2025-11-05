import type { ReactNode } from "react";

interface MisProps {
    children: ReactNode
}

const Card = (props: MisProps) => {
    return <div className="Card">{props.children}</div>
}

export default Card;