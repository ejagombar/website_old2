import './App.css'
import {
    Image,
    Button,
    Divider,
    Link,
    CardFooter,
    CardHeader,
    Card,
    CardBody,
    Avatar,
} from '@nextui-org/react'
import TopBar from './components/topbar'

function App() {
    return (
        <>
            <TopBar></TopBar>

            <div className="flex flex-col items-center mt-6">
                <Card className="max-w-[400px]">
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
                            I am a 4th Year student at the University of
                            Nottingham studying Electrong Engineering with
                            Computer Science (MEng). Looking a job as a software
                            engineer.
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
                                className="ml-3 mr-3"
                                href="https://github.com/nextui-org/nextui"
                                as={Link}
                                color="primary"
                                showAnchorIcon
                                variant="solid"
                            >
                                Github
                            </Button>
                        </div>
                    </CardBody>
                </Card>
            </div>
        </>
    )
}

export default App
