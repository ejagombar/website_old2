import { Tabs, Tab, Navbar, Switch } from '@nextui-org/react'
import { useState } from 'react'

import { Key } from 'react'

interface Props {
    currentPage: Key
    pageNames: string[]
    setCurrentPage: (currentPage: Key) => void
}

const Header = ({ currentPage, setCurrentPage, pageNames }: Props) => {
    return (
        <Navbar
            maxWidth="full"
            className="flex justify-between"
            shouldHideOnScroll
        >
            <p className="text-lg font-bold text-gray-400">Ed Agombar</p>

            <Tabs
                size="lg"
                radius="full"
                color="primary"
                aria-label="Options"
                selectedKey={currentPage}
                onSelectionChange={setCurrentPage}
            >
                {pageNames.map((pageName) => (
                    <Tab key={pageName} title={pageName}></Tab>
                ))}
            </Tabs>

            <Switch defaultSelected>Dark </Switch>
        </Navbar>
    )
}

export default Header
