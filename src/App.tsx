import './App.css'
import { Card, CardBody } from '@nextui-org/react'
import Header from './components/header'
import { useState } from 'react'
import { Key } from 'react'
import Home from './pages/home/home.tsx'
import Footer from './components/footer.tsx'
import Projects from './pages/projects/projects.tsx'
import Posts from './pages/posts/posts.tsx'

function App() {
    const pageNames: string[] = ['Home', 'Projects', 'Posts']
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
            content = <Projects />
            break
        case 'Posts':
            content = <Posts />
            break
        default:
            content = <p>Error. How did we get here?</p>
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
