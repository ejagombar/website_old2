import { Tabs, Tab, Navbar, Switch } from '@nextui-org/react'

import { siteConfig } from '../config/site.ts'

const TopBar = () => {
    return (
        <Navbar
            maxWidth="full"
            className="flex justify-between"
            shouldHideOnScroll
        >
            <p className="text-lg font-bold text-gray-400">Edward Agombar</p>

            <Tabs size="lg" radius="full" color="primary" aria-label="Options">
                {siteConfig.navItems.map((item) => (
                    <Tab key={item.href} href={item.href}></Tab>
                ))}
            </Tabs>

            <Switch defaultSelected>Dark Mode</Switch>
        </Navbar>
    )
}

export default TopBar
