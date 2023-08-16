import { Tabs, Tab, Navbar, Switch } from '@nextui-org/react'

const TopBar = () => {
    const options: string[] = ['Home', 'Projects', 'Notes', 'Links']

    return (
        <Navbar
            maxWidth="full"
            className="flex justify-between"
            shouldHideOnScroll
        >
            <p className="text-lg font-bold text-gray-400">Edward Agombar</p>

            <Tabs size="lg" radius="full" color="primary" aria-label="Options">
                {options.map((option) => (
                    <Tab key={option} title={option}></Tab>
                ))}
            </Tabs>

            <Switch defaultSelected>Dark Mode</Switch>
        </Navbar>
    )
}

export default TopBar
