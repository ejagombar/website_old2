import {
    Card,
    CardHeader,
    Avatar,
    CardBody,
    Button,
    Divider,
    Link,
} from '@nextui-org/react'
import { button as buttonStyles } from '@nextui-org/theme'

const Home = () => {
    return (
        <div className="flex flex-col items-center mt-24 mb-24">
            <Card className="max-w-[400px] mb-6">
                <CardHeader className="flex flex-col items-center">
                    <Avatar
                        isFocusable
                        size="lg"
                        isBordered
                        radius="lg"
                        src="/profilepic.jpg"
                    />
                </CardHeader>
                <CardBody>
                    <p>
                        I am a 4th Year student at the University of Nottingham
                        studying Electrong Engineering with Computer Science
                        (MEng). Looking a job as a software engineer.
                    </p>
                </CardBody>
            </Card>
            <Card>
                <CardHeader>
                    <p>Links</p>
                </CardHeader>
                <CardBody>
                    <div className="flex flex-row pl-10 pr-10">
                        <Button
                            href="https://github.com/nextui-org/nextui"
                            as={Link}
                            color="primary"
                            variant="solid"
                            className={buttonStyles({
                                color: 'primary',
                                radius: 'full',
                                variant: 'bordered',
                            })}
                        >
                            Github
                        </Button>
                    </div>
                </CardBody>
            </Card>
            <Divider></Divider>
            <p>test</p>
        </div>
    )
}
export default Home
