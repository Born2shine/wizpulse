import { Button, CustomDateInput, CustomSelect, Input, SectionHeader } from '@/components'
import { formatRMDatePicker } from '@/utils/helpers'
import { FieldArray } from 'formik'
import { User } from 'iconsax-react'
import { MinusCircle, Plus } from 'lucide-react'

interface AddStudentProps {
    formik: any
}

export default function AddStudent({ formik }: AddStudentProps) {
    return (
        <section className=''>
            <SectionHeader
                title="Child Registration Form"
                subStitle='Let us meet your child(ren)'
                className='pt-4'
            />
            <div className='h-[calc(80vh_-_30px)] pr-2 overflow-y-auto scroll-hidden'>
                <FieldArray
                    name='student'
                >
                    {({ push, remove }: { push: any, remove: any }) => (
                        <div>
                            {
                                formik.values.student.length > 0 &&
                                formik.values.student.map((item, index) => (
                                    <div key={index} className='relative'>
                                        <span className='text-isGray900 font-normal'>Child {index + 1}</span>
                                        {formik.values.student.length > 1 && <span className="absolute right-4 top-1 text-red-500 cursor-pointer"
                                            onClick={() => remove(index)}
                                        > <MinusCircle /> </span>}
                                        <div className='relative mb-3'>
                                            <Input
                                                label='Student’s Legal First Name'
                                                id='first_name'
                                                name={`student.${index}.first_name`}
                                                value={formik.values.student[index].first_name}
                                                onChange={formik.handleChange}
                                                error={formik?.errors?.student?.[index]?.first_name}
                                                touched={formik?.touched?.student?.[index]?.first_name}
                                                isRequired
                                                placeholder='first name'
                                                className='pl-8 placeholder:text-isGray400'
                                            />
                                            <User size="16" className='absolute left-3 top-11 text-isGray400' />
                                        </div>
                                        <div className='relative mb-3'>
                                            <Input
                                                label='Student’s Legal Last Name'
                                                id='last_name'
                                                name={`student.${index}.last_name`}
                                                value={formik.values.student[index].last_name}
                                                onChange={formik.handleChange}
                                                error={formik?.errors?.student?.[index]?.last_name}
                                                touched={formik?.touched?.student?.[index]?.last_name}
                                                isRequired
                                                placeholder='first name'
                                                className='pl-8 placeholder:text-isGray400'
                                            />
                                            <User size="16" className='absolute left-3 top-11 text-isGray400' />
                                        </div>
                                        <div className='relative mb-3'>
                                            <CustomDateInput
                                                id={`date_of_birth.${index}`}
                                                label='Date of Birth'
                                                name={`student.${index}.date_of_birth`}
                                                handleChange={(date) => formik.setFieldValue(`student.${index}.date_of_birth`, formatRMDatePicker(date))}
                                                selected={formik?.values?.student?.[index]?.date_of_birth}
                                                error={formik?.errors?.student?.[index]?.date_of_birth}
                                                touched={formik?.touched?.student?.[index]?.date_of_birth}
                                                isRequired
                                                className='rmdp-mobile'
                                            />
                                        </div>
                                        <div className='relative mb-3'>
                                            <CustomSelect
                                                id={`gender.${index}`}
                                                label='Gender'
                                                name={`student.${index}.gender`}
                                                options={[
                                                    {label: 'MALE', value: 'MALE'},
                                                    {label: 'FEMALE', value: 'FEMALE'},
                                                    {label: 'OTHERS', value: 'OTHERS'},
                                                ]}
                                                selected={formik?.values?.student?.[index]?.gender}
                                                setSelected={(selected) => formik.setFieldValue(`student.${index}.gender`, selected)}
                                                error={formik?.errors?.student?.[index]?.gender}
                                                touched={formik?.touched?.student?.[index]?.gender}
                                                isRequired
                                            />
                                        </div>
                                        <div className='relative mb-3'>
                                            <CustomSelect
                                                id={`grade.${index}`}
                                                label='Grade'
                                                name={`student.${index}.grade`}
                                                options={[
                                                    {label: 'Kindergarten', value: 'KINDERGARTEN'},
                                                    {label: 'First', value: 'FIRST'},
                                                    {label: 'Second', value: 'SECOND'},
                                                    {label: 'Third', value: 'THIRD'},
                                                    {label: 'Fourth', value: 'FOURTH'},
                                                    {label: 'Fifth', value: 'FIFTH'},
                                                    {label: 'Sixth', value: 'SIXTH'},
                                                    {label: 'Seventh', value: 'SEVENTH'},
                                                    {label: 'Eighth', value: 'EIGHTH'},
                                                    {label: 'Ninth', value: 'NINTH'},
                                                    {label: 'Tenth', value: 'TENTH'},
                                                    {label: 'Eleventh', value: 'ELEVENTH'},
                                                    {label: 'Twelfth', value: 'TWELFTH'},
                                                ]}
                                                selected={formik?.values?.student?.[index]?.grade}
                                                setSelected={(selected) => formik.setFieldValue(`student.${index}.grade`, selected)}
                                                error={formik?.errors?.student?.[index]?.grade}
                                                touched={formik?.touched?.student?.[index]?.grade}
                                                isRequired
                                            />
                                        </div>
                                        <div className='relative mb-3'>
                                            <Input
                                                label='Name of School'
                                                id='school_name'
                                                name={`student.${index}.school_name`}
                                                value={formik.values.student[index].school_name}
                                                onChange={formik.handleChange}
                                                error={formik?.errors?.student?.[index]?.school_name}
                                                touched={formik?.touched?.student?.[index]?.school_name}
                                                isRequired
                                                placeholder='school name'
                                                className='placeholder:text-isGray400'
                                            />
                                        </div>
                                        <div className='relative mb-3'>
                                            <Input
                                                label='City of School'
                                                id='school_city'
                                                name={`student.${index}.school_city`}
                                                value={formik.values.student[index].school_city}
                                                onChange={formik.handleChange}
                                                error={formik?.errors?.student?.[index]?.school_city}
                                                touched={formik?.touched?.student?.[index]?.school_city}
                                                isRequired
                                                placeholder='e.g New York'
                                                className='placeholder:text-isGray400'
                                            />
                                        </div>
                                        <span></span>
                                        <div className='relative my-6'>
                                            <Button
                                                className='bg-white border border-primary text-primary rounded-full hover:bg-background'
                                                type='button'
                                                onClick={() => push(
                                                    {
                                                        first_name: "",
                                                        last_name: "",
                                                        gender: "",
                                                        grade: "",
                                                        school_name: "",
                                                        school_city: "",
                                                        date_of_birth: "",
                                                    }
                                                )}
                                            > <Plus className='pr-2' /> <span>Add Student </span></Button>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    )}
                </FieldArray>

            </div>
        </section>
    )
}
