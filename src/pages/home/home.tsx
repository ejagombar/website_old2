import {
    Card,
    CardHeader,
    CardBody,
    Button,
    Divider,
    Link,
    Image,
} from '@nextui-org/react'

import LinksBox from '../../components/linksBox'

const Home = () => {
    return (
        <div className="flex flex-col items-center justify-items-center mt-24 mb-26">
            <div className="flex flex-row mb-20">
                <div className="pr-4">
                    <Image width={150} alt="ProfilePic" src="/profilepic.jpg" />
                </div>
                <div className="flex flex-col justify-center pl-6 items-center">
                    <p className="Title text-5xl">Ed Agombar </p>
                    <p className="Title text-2xl">Software Developer</p>
                </div>
            </div>
            <Card className="max-w-[450px] mb-20">
                <CardHeader className="justify-center">
                    <p className="text-2xl">About</p>
                </CardHeader>
                <Divider />
                <CardBody>
                    <p>
                        I am a 4th Year student at the University of Nottingham
                        studying Electrong Engineering with Computer Science
                        (MEng). Looking a job as a software engineer. Take a
                        look at some of my recent projects in the Project tab or
                        download my CV found below.
                    </p>
                </CardBody>
            </Card>
            <LinksBox />
            <div className="flex-grow" />
        </div>
    )
}
export default Home
