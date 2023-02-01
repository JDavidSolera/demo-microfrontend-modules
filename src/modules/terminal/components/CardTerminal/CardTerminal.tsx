import { ComponentType, lazy, ReactNode } from "react";

// const Card = dynamic<{children: ReactNode}>(() => import('design-system/Card'))
const Card = lazy<ComponentType<{children: ReactNode, $color: string }>>(() => import('design-system/Card'))

const CardTerminal = () => {
    return (
        <Card $color={'string'}>card terminal</Card>
     );
}
 
export default CardTerminal;