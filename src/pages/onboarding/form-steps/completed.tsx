import { FOOTER_LOGO, PRODUCTIVE_IMG } from '@/assets/images'
import { SectionHeader } from '@/components'

export default function Completed() {
    return (
        <>
            <img src={PRODUCTIVE_IMG} alt="illustration" className="mx-auto" />
            <SectionHeader
                title="Great!"
                subStitle='We need to verify your identity with your child(ren) information and consent given. This usually takes 4-5 business days, we will notify you about the next steps via email or text.'
            />
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                <img src={FOOTER_LOGO} alt="footer-logo" />
            </div>
        </>
    )
}
