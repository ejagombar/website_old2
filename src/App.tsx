import './App.css'
import { Card, CardBody } from '@nextui-org/react'
import Header from './components/header'
import { useState } from 'react'
import { Key } from 'react'
import Home from './pages/home/home.tsx'
import Footer from './components/footer.tsx'

function App() {
    const pageNames: string[] = ['Home', 'Projects', 'Posts', 'Contact']
    const [selected, setSelected] = useState<Key>('Home')

    const handleSelectionChange = (key: Key) => {
        setSelected(key)
        console.log(key)
    }

    let content: JSX.Element

    switch (selected) {
        case 'Home':
            content = <Home />
            break
        case 'Projects':
            content = (
                <Card>
                    <CardBody>{<p>Projects</p>}</CardBody>
                </Card>
            )
            break
        case 'Posts':
            content = (
                <Card>
                    <CardBody>{/* Content for the Videos page */}</CardBody>
                </Card>
            )
            break
        default:
            content = (
                <Card>
                    <CardBody>{/* Default content */}</CardBody>
                </Card>
            )
            break
    }

    return (
        <div className="flex flex-col min-h-screen">
            <div className="flex-grow">
                <Header
                    pageNames={pageNames}
                    currentPage={selected}
                    setCurrentPage={handleSelectionChange}
                ></Header>
                {content}
            </div>
            <Footer />
        </div>
    )
}

export default App
