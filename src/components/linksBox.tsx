import { Popover, PopoverTrigger, PopoverContent } from '@nextui-org/react'
import {
    Card,
    CardHeader,
    CardBody,
    Button,
    Divider,
    Link,
    Image,
} from '@nextui-org/react'
import {
    GitHubIcon,
    DownloadIcon,
    EmailIcon,
    LinkedInIcon,
    DocumentIcon,
} from '../components/icons'

const LinksBox = () => {
    type IconItem = {
        icon: JSX.Element
        link: string
        name: string
    }

    const icons: IconItem[] = [
        {
            icon: <GitHubIcon />,
            link: 'https://github.com',
            name: 'GitHub',
        },
        {
            icon: <DownloadIcon />,
            link: 'https://example.com/download',
            name: 'Download',
        },
        {
            icon: <EmailIcon />,
            link: 'mailto:example@example.com',
            name: 'Email',
        },
        {
            icon: <LinkedInIcon />,
            link: 'https://www.linkedin.com',
            name: 'LinkedIn',
        },
        {
            icon: <DocumentIcon />,
            link: 'https://example.com/document',
            name: 'Document',
        },
    ]
    const dontClose = () => {
        return false // Allow default behavior
    }
    return (
        <>
            <Card className="max-w-[450px] mb-6">
                <CardHeader className="justify-center">
                    <p className="text-2xl">Links</p>
                </CardHeader>
                <Divider />
                <CardBody>
                    <Button
                        className="mb-1 mt-1"
                        href={'https://github.com/ejagombar'}
                        as={Link}
                        color="primary"
                        variant="solid"
                    >
                        <div className="absolute left-5">GitHub</div>
                        <GitHubIcon className="absolute right-5" />
                    </Button>
                    <Button
                        className="mb-1 mt-1 w-40"
                        href={'https://github.com/ejagombar'}
                        as={Link}
                        color="primary"
                        variant="solid"
                    >
                        <div className="absolute left-5">LinkedIn</div>
                        <LinkedInIcon className="absolute right-5" />
                    </Button>
                    <Button
                        className="mb-1 mt-1"
                        color="primary"
                        variant="solid"
                    >
                        <div className="absolute left-5">CV</div>
                        <DownloadIcon className="absolute right-5" />
                    </Button>
                    <Popover
                        isKeyboardDismissDisabled={true}
                        placement="right"
                        showArrow={true}
                    >
                        <PopoverTrigger>
                            <Button
                                className="mb-1 mt-1"
                                href={'mailto:ejagombar@gmail.com'}
                                target="_blank"
                                as={Link}
                                color="primary"
                                variant="solid"
                            >
                                Email
                                <EmailIcon />
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent>
                            <div className="px-1 py-2">
                                <div className="text-small">
                                    ejagombar@gmail.com
                                </div>
                            </div>
                        </PopoverContent>
                    </Popover>
                </CardBody>
            </Card>
        </>
    )
}

export default LinksBox
