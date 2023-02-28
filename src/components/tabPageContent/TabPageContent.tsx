import { ReactElement, FC } from 'react'
import './TabPageContent.css'

export interface TabContentProps {
    id: number
    title: string
    children: ReactElement
    icon?: ReactElement
}

export const TabPageContent: FC<TabContentProps> = ({ children }) => {
    return (
        <div className='content'>{children}</div>
    );
};