import { Card, CardHeader, CardBody, Divider } from '@nextui-org/react'

const Posts = () => {
    return (
        <div className="flex flex-col items-center justify-items-center mt-10 mb-26">
            <Card className="max-w-[800px] mb-20">
                <CardBody>
                    <p>No Posts Yet</p>
                </CardBody>
            </Card>

            <div className="flex-grow" />
        </div>
    )
}
export default Posts
