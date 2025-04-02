import { Skeleton } from '../primitive/skeleton/skeleton.tsx'
import './loading-page.scss'

export const LoadingPage = () => {
    return (
        <div className="loading-page-wrapper">
            <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex gap-4 align-items-center">
                    <Skeleton borderRadius="16px" width="10rem" height="4rem"></Skeleton>
                    <Skeleton shape="circle" size="2.75rem"></Skeleton>
                </div>

                <div className="d-flex justify-content-end align-items-center gap-4">
                    <Skeleton borderRadius="16px" width="10rem" height="2rem"></Skeleton>
                    <Skeleton borderRadius="16px" size="3rem"></Skeleton>
                </div>
            </div>

            <div className="d-flex mt-4 gap-4">
                <Skeleton borderRadius="16px" width="28rem" height="10rem"></Skeleton>
                <Skeleton borderRadius="16px" width="28rem" height="10rem"></Skeleton>
                <Skeleton borderRadius="16px" width="28rem" height="10rem"></Skeleton>
                <Skeleton borderRadius="16px" width="28rem" height="10rem"></Skeleton>
            </div>

            <div className="d-flex mt-4 gap-4">
                <div className="d-flex flex-column gap-4">
                    <Skeleton borderRadius="16px" width="87rem" height="30rem"></Skeleton>
                    {/*<Skeleton borderRadius="16px" width="87rem" height="18rem"></Skeleton>*/}
                </div>
                <div className="d-flex flex-column gap-4">
                    <Skeleton borderRadius="16px" width="28rem" height="10rem"></Skeleton>
                    <Skeleton borderRadius="16px" width="28rem" height="10rem"></Skeleton>
                    <Skeleton borderRadius="16px" width="28rem" height="16rem"></Skeleton>
                </div>
            </div>
        </div>
    )
}
