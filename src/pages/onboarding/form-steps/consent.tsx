import { Input, SectionHeader } from '@/components'
import { cn } from '@/lib/utils'
import { useEffect, useRef, useState } from 'react'
import SignatureCanvas from 'react-signature-canvas'

interface ConsentFormProps {
    formik: any
}

export default function ConsentForm({ formik }: ConsentFormProps) {
    // const [signature, setSignature] = useState("")
    const signRef = useRef<any>("")

    // const blobToBase64 = (blob) =>{
    //     return new Promise((resolve,) => {
    //       const reader = new FileReader();
    //       reader.onloadend = () => resolve(reader.result);
    //       reader.readAsDataURL(blob);
    //     });
    //   }

    // console.log(signature)

    // useEffect(() => {
    //     if (signature) {
    //         // const FILE_TO_BASE64 = blobToBase64(signature).then((res) => res)
    //         console.log(signature)
    //     }
    // },[signature])
    
    return (
        <section className=''>
            <SectionHeader
                title="Child Academic Release Form"
                subStitle='Only the student(s) legal guardian may complete this form'
                className='pt-4'
            />
            <div className='h-[calc(80vh_-_30px)] pr-2 overflow-y-auto scroll-hidden'>
                <div className='relative mb-3'>
                    <Input
                        label='By initialing here, you agree and understand that registration in no way guarantees your child will win the challenge prize of up to $500'
                        id='other_info.challenge_prize_not_guaranteed'
                        name='other_info.challenge_prize_not_guaranteed'
                        value={formik.values.other_info.challenge_prize_not_guaranteed}
                        onChange={formik.handleChange}
                        error={formik?.errors?.other_info?.challenge_prize_not_guaranteed}
                        touched={formik?.touched?.other_info?.challenge_prize_not_guaranteed}
                        isRequired
                        placeholder='ND'
                        className='placeholder:text-isGray400'
                    />
                </div>
                <div className='relative mb-3'>
                    <Input
                        label='By initialing here, you understand that images of you or your child may be captured and you consent to ONGB/partners using this image and likeness at a later date for any purpose.'
                        id='other_info.use_of_child_capture_in_future'
                        name='other_info.use_of_child_capture_in_future'
                        value={formik.values.other_info.use_of_child_capture_in_future}
                        onChange={formik.handleChange}
                        error={formik?.errors?.other_info?.use_of_child_capture_in_future}
                        touched={formik?.touched?.other_info?.use_of_child_capture_in_future}
                        isRequired
                        placeholder='ND'
                        className='placeholder:text-isGray400'
                    />
                </div>
                <div className='relative mb-3'>
                    <Input
                        label='By initialing here, you agree and understand that by registering for this contest, you are entering your child into the Every Day Counts Attendance Challenge (EDCAC). You further understand, only students with a completed EDCAC Application and Student Release form signed by the parent or legal guardian will be entered into the attendance challenge drawing.'
                        id='other_info.every_day_counts_attendance_challenge'
                        name='other_info.every_day_counts_attendance_challenge'
                        value={formik.values.other_info.every_day_counts_attendance_challenge}
                        onChange={formik.handleChange}
                        error={formik?.errors?.other_info?.every_day_counts_attendance_challenge}
                        touched={formik?.touched?.other_info?.every_day_counts_attendance_challenge}
                        isRequired
                        placeholder='ND'
                        className='placeholder:text-isGray400'
                    />
                </div>
                <div className='relative mb-3'>
                    <Input
                        label="By initialing here, you are agreeing to share your child's name publicly if he or she wins."
                        id='other_info.agree_to_share_child_name_when_they_win'
                        name='other_info.agree_to_share_child_name_when_they_win'
                        value={formik.values.other_info.agree_to_share_child_name_when_they_win}
                        onChange={formik.handleChange}
                        error={formik?.errors?.other_info?.agree_to_share_child_name_when_they_win}
                        touched={formik?.touched?.other_info?.agree_to_share_child_name_when_they_win}
                        isRequired
                        placeholder='ND'
                        className='placeholder:text-isGray400'
                    />
                </div>
                <div className='relative mb-3'>
                    <Input
                        label="By initialing here, you are agreeing for ONGB to contact you in the future about ONGB Programs."
                        id='other_info.agree_to_be_contacted_for_ongb_programs'
                        name='other_info.agree_to_be_contacted_for_ongb_programs'
                        value={formik.values.agree_to_be_contacted_for_ongb_programs}
                        onChange={formik.handleChange}
                        error={formik?.errors?.other_info?.agree_to_be_contacted_for_ongb_programs}
                        touched={formik?.touched?.other_info?.agree_to_be_contacted_for_ongb_programs}
                        isRequired
                        placeholder='ND'
                        className='placeholder:text-isGray400'
                    />
                </div>
                <div className='relative mb-3'>
                    <label htmlFor="consent" className= "block font-normal text-[.8rem] pb-1 text-[#616161] md:text-[15px]">By signing below, you understand that you are giving consent for the school district to release student data to the Oakland Natives Give Back Fund. This includes access to your student's local assessment results, attendance rate, number of absences, online communications, gender, race/ethnicity, special education status, home language, school of enrollment, grade level, parent address, parent email, parent phone number, free/reduced-price lunch status, student name, student address, student email, student phone, local student identification number, student course grades, current and cumulative GPA. <span className="inline-block text-red-400 text-lg pl-1 mt-">*</span> </label>
                    <SignatureCanvas penColor='#000000'
                        canvasProps={{ width: 340, height: 100, className: cn(
                            'border rounded-[8px]',
                            formik?.errors?.other_info?.agree_to_district_releasing_student_data_to_oaklands_native_giveback_funds
                            && formik?.touched?.other_info?.agree_to_district_releasing_student_data_to_oaklands_native_giveback_funds && 'border-red-500'
                        ) }}
                        // onEnd={ref => formik.setFieldValue('sign', ref)}
                        ref={ref => signRef.current = ref}
                        onEnd={() => {
                            formik.setFieldValue(`other_info.agree_to_district_releasing_student_data_to_oaklands_native_giveback_funds`, signRef.current.getTrimmedCanvas().toDataURL('image/png'))
                            setSignature(signRef.current.getTrimmedCanvas().toDataURL('image/png'))
                            formik.setFieldError("other_info.agree_to_district_releasing_student_data_to_oaklands_native_giveback_funds", "")
                        }}
                    />
                    {
                        formik?.errors?.other_info?.agree_to_district_releasing_student_data_to_oaklands_native_giveback_funds
                        && formik?.touched?.other_info?.agree_to_district_releasing_student_data_to_oaklands_native_giveback_funds && <span className='text-red-500 text-xs'>Please sign here</span>
                    }
                    <span className='block text-xs p-0.5 mt-1 px-4 bg-isGray300 rounded-sm tracking-wider w-fit text-gray-500 cursor-pointer'
                    onClick={() => {
                        signRef.current.clear()
                        formik.setFieldValue(`other_info.agree_to_district_releasing_student_data_to_oaklands_native_giveback_funds`, "")
                    }}
                    >Clear</span>
                </div>
            </div>
        </section>
    )
}
