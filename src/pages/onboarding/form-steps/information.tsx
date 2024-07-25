import { LAPTOP_IMG } from '@/assets/images'
import { SectionHeader } from '@/components'

export default function Information() {
    return (
        <>
            <img src={LAPTOP_IMG} alt="illustration" className="mx-auto" />
            <SectionHeader
                title={<>
                    Great! Now we need some <br /> information about the child(ren)
                </>}
                subStitle='You will earn more points for answering the question'
            />
        </>
    )
}
