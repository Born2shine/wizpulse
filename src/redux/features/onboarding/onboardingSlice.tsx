import { Dictionary } from "@/types/dictionary";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";


const initialState: Dictionary = {
    onboarding: {
        student_info: [
            {
                first_name: "",
                last_name: "",
                gender: "",
                grade: "",
                school_name: "",
                school_city: "",
                date_of_birth: "",
                who_takes_the_child_to_school: "",
                means_of_commute: "",
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
    }
}

const onboardingSlice = createSlice({
    name: "onboarding",
    initialState,
    reducers: {
        updateOnboarding: (state, action: PayloadAction<{ slug: string, data: any }>) => {
            const { slug, data } = action.payload
            state.onboarding[slug] = data
        },
        reset: state => {
            Object.assign(state, initialState);
        },
    }
})

export const { updateOnboarding } = onboardingSlice.actions
export const onboardingReset = onboardingSlice.actions.reset
export const onboardingSliceReducer = onboardingSlice.reducer