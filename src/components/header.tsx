import { Tabs, Tab, Navbar, Switch } from '@nextui-org/react'
import { useState } from 'react'

interface Props {
    currentPage: string
    setCurrentPage: (currentPage: string) => void
}

type Key = string | number // Define the Key type explicitly

const Header = ({ currentPage, setCurrentPage }: Props) => {
    const options: string[] = ['Home', 'Projects', 'Notes', 'Links']

    const [selected, setSelected] = useState<Key>('photos')

    const handleSelectionChange = (key: Key) => {
        setSelected(key)
        console.log(key)
    }

    return (
        <Navbar
            maxWidth="full"
            className="flex justify-between"
            shouldHideOnScroll
        >
            <p className="text-lg font-bold text-gray-400">Edward Agombar</p>

            <Tabs
                size="lg"
                radius="full"
                color="primary"
                aria-label="Options"
                selectedKey={selected}
                onSelectionChange={handleSelectionChange}
            >
                {options.map((option) => (
                    <Tab key={option} title={option}></Tab>
                ))}
            </Tabs>

            <Switch defaultSelected>Dark Mode</Switch>
        </Navbar>
    )
}

export default Header
