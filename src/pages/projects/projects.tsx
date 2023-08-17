import {
    Link,
    Card,
    Button,
    Chip,
    Accordion,
    AccordionItem,
    CardHeader,
    CardBody,
    Divider,
} from '@nextui-org/react'

const Projects = () => {
    return (
        <div className="flex flex-col items-center justify-items-center mt-24 mb-26">
            <Card className="max-w-[800px] mb-20">
                <CardHeader className="justify-center">
                    <p className="text-3xl">Spot CLI</p>
                </CardHeader>
                <Divider />
                <CardBody>
                    <div className="flex flex-row mb-3 space-x-2">
                        <Chip color="primary" variant="bordered">
                            Go
                        </Chip>
                        <Chip color="primary" variant="bordered">
                            Spotify API
                        </Chip>
                        <Chip color="primary" variant="bordered">
                            CLI Tool
                        </Chip>
                    </div>
                    <p className="text-lg">
                        THis will have a short desciption of the project and
                        maybe talk about how I made it and what I used.
                    </p>
                    <p className="text-lg pt-2 pb-5">
                        Compatible with Linux, Windows, and MacOS Fully self
                        hosted - spot requires that you set up your own api
                        account (takes ~5 mins, see setup section). This means
                        you have complete control over your account. Disable
                        colour output by setting the NO_COLOR environment
                        variable Configurable design - The config file allows
                        customisation of the progress bar, among other features
                        Minimal output where possible - keep your terminal tidy.
                    </p>
                    <Accordion variant="bordered">
                        <AccordionItem
                            key="1"
                            aria-label="Accordion 1"
                            title="Video Demonstration"
                        >
                            <div className="ratio ratio-16x9">
                                <iframe
                                    width="300"
                                    height="400"
                                    src="https://www.youtube-nocookie.com/embed/ZcnBkk3isCk?controls=0"
                                    title="YouTube video player"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                ></iframe>
                            </div>
                        </AccordionItem>
                    </Accordion>
                    <div className="flex justify-end mt-5">
                        <Button
                            className="max-w-xs"
                            href="https://github.com/nextui-org/nextui"
                            as={Link}
                            color="primary"
                            showAnchorIcon
                            variant="solid"
                        >
                            Source Code
                        </Button>
                    </div>
                </CardBody>
            </Card>

            <Card className="max-w-[800px] mb-20">
                <CardHeader className="justify-center">
                    <p className="text-3xl">This Website</p>
                </CardHeader>
                <Divider />
                <CardBody>
                    <div className="flex flex-row mb-3 space-x-2">
                        <Chip color="primary" variant="bordered">
                            Typescript
                        </Chip>
                        <Chip color="primary" variant="bordered">
                            React
                        </Chip>
                        <Chip color="primary" variant="bordered">
                            NextUI
                        </Chip>
                        <Chip color="primary" variant="bordered">
                            CSS
                        </Chip>
                    </div>
                    <p className="text-lg">
                        THis will have a short desciption of the project and
                        maybe talk about how I made it and what I used.
                    </p>
                    <p className="text-lg pt-2 pb-5">
                        Compatible with Linux, Windows, and MacOS Fully self
                        hosted - spot requires that you set up your own api
                        account (takes ~5 mins, see setup section). This means
                        you have complete control over your account. Disable
                        colour output by setting the NO_COLOR environment
                        variable Configurable design - The config file allows
                        customisation of the progress bar, among other features
                        Minimal output where possible - keep your terminal tidy.
                    </p>
                    <div className="flex justify-end mt-5">
                        <Button
                            className="max-w-xs"
                            href="https://github.com/nextui-org/nextui"
                            as={Link}
                            color="primary"
                            showAnchorIcon
                            variant="solid"
                        >
                            Source Code
                        </Button>
                    </div>
                </CardBody>
            </Card>

            <Card className="max-w-[800px] mb-20">
                <CardHeader className="justify-center">
                    <p className="text-3xl">SpotTools</p>
                </CardHeader>
                <Divider />
                <CardBody>
                    <div className="flex flex-row mb-3 space-x-2">
                        <Chip color="primary" variant="bordered">
                            Typescript
                        </Chip>
                        <Chip color="primary" variant="bordered">
                            React
                        </Chip>
                        <Chip color="primary" variant="bordered">
                            MaterialUI
                        </Chip>
                        <Chip color="primary" variant="bordered">
                            Kubernetes
                        </Chip>
                        <Chip color="primary" variant="bordered">
                            Go
                        </Chip>
                        <Chip color="primary" variant="bordered">
                            Spotify API
                        </Chip>
                    </div>
                    <p className="text-lg">
                        THis will have a short desciption of the project and
                        maybe talk about how I made it and what I used.
                    </p>
                    <p className="text-lg pt-2 pb-5">
                        Compatible with Linux, Windows, and MacOS Fully self
                        hosted - spot requires that you set up your own api
                        account (takes ~5 mins, see setup section). This means
                        you have complete control over your account. Disable
                        colour output by setting the NO_COLOR environment
                        variable Configurable design - The config file allows
                        customisation of the progress bar, among other features
                        Minimal output where possible - keep your terminal tidy.
                    </p>
                    <div className="flex justify-end mt-5">
                        <Button
                            className="max-w-xs"
                            href="https://github.com/nextui-org/nextui"
                            as={Link}
                            color="primary"
                            showAnchorIcon
                            variant="solid"
                        >
                            Source Code
                        </Button>
                    </div>
                </CardBody>
            </Card>
            <div className="flex-grow" />
        </div>
    )
}
export default Projects
