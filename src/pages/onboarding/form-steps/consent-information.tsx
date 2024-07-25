import { APPROVAL_IMG } from '@/assets/images'
import { SectionHeader } from '@/components'

export default function ConsentInformation() {
    return (
        <>
            <img src={APPROVAL_IMG} alt="illustration" className="mx-auto" />
            <SectionHeader
                title={<>
                    Finally, we need your consent to <br /> release Child(ren)’s information
                </>}
                subStitle='Only the child(ren)’s legal guardian may complete this form'
            />
        </>
    )
}
