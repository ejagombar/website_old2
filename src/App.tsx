import './App.css'
import {
    Image,
    Button,
    Divider,
    Link,
    CardFooter,
    CardHeader,
    Card,
    CardBody,
    Avatar,
} from '@nextui-org/react'
import Header from './components/header'
import { useState } from 'react'

function App() {
    const [currentPage, setCurrentPage] = useState<string>('Home')

    const setPage = (page: string) => {
        setCurrentPage(page)
        console.log(page)
    }

    return (
        <>
            <Header currentPage={currentPage} setCurrentPage={setPage}></Header>
        </>
    )
}

export default App
