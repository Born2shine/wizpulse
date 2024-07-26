import { Button } from "@/components";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { Form, Formik } from "formik";
import { ArrowRight } from 'iconsax-react';
import qs from "query-string";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { AddStudent, Completed, ConsentForm, ConsentInformation, Information } from "./form-steps";
import { onboardingReset, updateOnboarding } from "@/redux/features/onboarding/onboardingSlice";
import Cookies from "js-cookie";
import { setAuthUser } from "@/redux/features/auth/authSlice";
import { useAddParentConsentMutation, useAddStudentMutation } from "@/redux/services/onboarding/onboardingApi";
import { toast } from "sonner";

interface initialValues {
    student: {
        first_name: string,
        last_name: string,
        gender: string,
        grade: string,
        school_name: string,
        school_city: string,
        date_of_birth: string,
    }[],
    other_info: {
        challenge_prize_not_guaranteed: string,
        use_of_child_capture_in_future: string,
        every_day_counts_attendance_challenge: string,
        agree_to_share_child_name_when_they_win: string,
        agree_to_be_contacted_for_ongb_programs: string,
        agree_to_district_releasing_student_data_to_oaklands_native_giveback_funds: string
    }
}

export default function Onboarding() {
    const [initialStudentData, setInitialStudentData] = useState<initialValues>({
        student: [
            {
                first_name: "",
                last_name: "",
                gender: "",
                grade: "",
                school_name: "",
                school_city: "",
                date_of_birth: "",
            }
        ],
        other_info: {
            challenge_prize_not_guaranteed: "",
            use_of_child_capture_in_future: "",
            every_day_counts_attendance_challenge: "",
            agree_to_share_child_name_when_they_win: "",
            agree_to_be_contacted_for_ongb_programs: "",
            agree_to_district_releasing_student_data_to_oaklands_native_giveback_funds: ""
        }
    })

    const { search, pathname } = useLocation()
    const { ui, type, uidb64 } = qs.parse(search)
    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    const { onboarding } = useAppSelector((state) => state.onboarding)
    const [addStudent, { isLoading }] = useAddStudentMutation()
    const [addParentConsent, {isLoading: isAddingConsent}] = useAddParentConsentMutation()

    const handleFormSubmit = (values) => {
        if (ui === "information") {
            dispatch(onboardingReset())
            navigate(`${pathname}?type=${type}&ui=add-student&uidb64=${uidb64}`)
        }
        if (ui === "add-student") {
            dispatch(updateOnboarding({ slug: 'student_info', data: values.student }))
            const PAYLOAD = {
                students: values.student
            }
            addStudent(PAYLOAD)
                .unwrap()
                .then(() => {
                    toast.success("Student Added Successfully")
                    navigate(`${pathname}?type=${type}&ui=consent-information&uidb64=${uidb64}`)
                })
            }
            if (ui === "consent-information") {
                navigate(`${pathname}?type=${type}&ui=get-consent&uidb64=${uidb64}`)
            }
            if (ui === "get-consent") {
                addParentConsent(values.other_info)
                    .unwrap()
                    .then((payload) => {
                        toast.success("Consent Submitted Successfully")
                        navigate(`${pathname}?type=${type}&ui=completed&uidb64=${uidb64}`)
                    })
        }
    }

    const onbaordingSchema = [
        yup.object().shape({}),
        yup.object().shape({
            student: yup.array().of(
                yup.object().shape({
                    first_name: yup.string().required('first name is required'),
                    last_name: yup.string().required('last name is required'),
                    gender: yup.string().required('gender is required'),
                    grade: yup.string().required('grade is required'),
                    school_name: yup.string().required('school name is required'),
                    school_city: yup.string().required('school city is required'),
                    date_of_birth: yup.string().required('date of birth is required'),
                }),
            )
        }),
        yup.object().shape({
            other_info: yup.object().shape({
                challenge_prize_not_guaranteed: yup.string().required('This field is required'),
                use_of_child_capture_in_future: yup.string().required('This field is required'),
                every_day_counts_attendance_challenge: yup.string().required('This field is required'),
                agree_to_share_child_name_when_they_win: yup.string().required('This field is required'),
                agree_to_be_contacted_for_ongb_programs: yup.string().required('This field is required'),
                agree_to_district_releasing_student_data_to_oaklands_native_giveback_funds: yup.string().required('This field is required')
            })
        }),
    ]

    useEffect(() => {
        if (onboarding?.student_info) {
            setInitialStudentData({ ...initialStudentData, student: onboarding?.student_info })
            // dispatch(onboardingReset())
        }
    }, [onboarding])

    useEffect(() => {
        if (uidb64) {
            Cookies.set("token", uidb64 as string);
            sessionStorage.setItem('token', uidb64 as string)
            dispatch(setAuthUser({ token: uidb64 }));
        }
    }, [])

    return (
        <section className="w-screen h-screen overflow-hidden px-8 md:m-5 md:rounded-3xl md:border md:w-[30rem] md:mx-auto">
            {/* <form onSubmit={formik.handleSubmit}> */}
            <Formik
                initialValues={initialStudentData}
                onSubmit={handleFormSubmit}
                validationSchema={onbaordingSchema[ui === "add-student" ? 1 : ui === "get-consent" ? 2 : 0]}
                enableReinitialize={true}
            >
                {
                    (formik) => {
                        return (
                            <Form>

                                <div className="h-screen flex items-center justify-center scroll-hidden">
                                    <div className="w-screen">
                                        {ui === "information" && <Information />}
                                        {ui === "add-student" && <AddStudent formik={formik} />}
                                        {ui === "consent-information" && <ConsentInformation />}
                                        {ui === "get-consent" && <ConsentForm formik={formik} />}
                                        {ui === "completed" && <Completed />}
                                        {ui !== "completed" && <Button
                                            loading={isLoading || isAddingConsent}
                                            disabled={isLoading || isAddingConsent}
                                            loadingText="Done"
                                            className="w-full shadow-shadowThree p-[1.4rem]"
                                            type="submit"
                                        ><span className="pr-1">
                                                {
                                                    (ui === "information" || ui === "consent-information") ? "Let's Go" : "Done"
                                                }
                                            </span> {(ui === "information" || ui === "consent-information") && <ArrowRight size="17" />} </Button>}
                                    </div>
                                </div>
                            </Form>
                        )
                    }
                }
            </Formik>
            {/* </form> */}
        </section>
    )
}
