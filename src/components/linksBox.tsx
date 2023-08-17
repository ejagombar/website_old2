import { Popover, PopoverTrigger, PopoverContent } from '@nextui-org/react'
import {
    Card,
    CardHeader,
    CardBody,
    Button,
    Divider,
    Link,
    Chip,
} from '@nextui-org/react'
import {
    GitHubIcon,
    DownloadIcon,
    EmailIcon,
    LinkedInIcon,
} from '../components/icons'

const LinksBox = () => {
    return (
        <>
            <Card className="max-w-[450px] w-[450px] mb-6">
                <CardHeader className="justify-center">
                    <p className="text-2xl">Links</p>
                </CardHeader>
                <Divider />
                <CardBody>
                    <div className="flex flex-col justify-center items-center">
                        <Button
                            className="mb-2 mt-2 w-40"
                            href={'https://github.com/ejagombar'}
                            as={Link}
                            target="_blank"
                            color="primary"
                            variant="solid"
                        >
                            <div className="absolute left-5">GitHub</div>
                            <GitHubIcon className="absolute right-5" />
                        </Button>
                        <Button
                            className="mb-2 mt-2 w-40"
                            href={'https://github.com/ejagombar'}
                            as={Link}
                            target="_blank"
                            color="primary"
                            variant="solid"
                        >
                            <div className="absolute left-5">LinkedIn</div>
                            <LinkedInIcon className="absolute right-5" />
                        </Button>
                        <Button
                            className="mb-2 mt-2 w-40"
                            href={'mailto:ejagombar@gmail.com'}
                            as={Link}
                            target="_blank"
                            color="primary"
                            variant="solid"
                        >
                            <div className="absolute left-5">Email</div>
                            <EmailIcon className="absolute right-5" />
                        </Button>
                        <Button
                            className="mb-2 mt-2 w-40"
                            color="secondary"
                            variant="solid"
                        >
                            <div className="absolute left-5">CV</div>
                            <DownloadIcon className="absolute right-5" />
                        </Button>
                    </div>
                </CardBody>
            </Card>
        </>
    )
}

export default LinksBox
