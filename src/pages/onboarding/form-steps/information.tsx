import { FOOTER_LOGO, LAPTOP_IMG } from '@/assets/images'
import { SectionHeader } from '@/components'

export default function Information() {
    return (
        <>
            <img src={LAPTOP_IMG} alt="illustration" className="mx-auto" />
            <SectionHeader
                title={<>
                    Welcome Back! Now we need some <br /> information about the child(ren)
                </>}
                subStitle='You will earn more points for answering the question'
            />
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                <img src={FOOTER_LOGO} alt="footer-logo" />
            </div>
        </>
    )
}
