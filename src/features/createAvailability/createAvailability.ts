// Slice do Redux (user, token, login, logout, etc.)
// redux
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

// types
import type { TimeIntervals } from "@/types/availability";

export interface DataCards {
  intervals: number;
  days: number;
  totalSlots: number;
  hoursDay: number;
}

interface TimeIntervalsState {
  timeIntervals: TimeIntervals[];
  dataCards: DataCards;
  dates: string[];
}

const initialState: TimeIntervalsState = {
  timeIntervals: [
    {
      start_time: "13:00",
      end_time: "14:00",
    },
  ],
  dataCards: {
    intervals: 1,
    days: 0,
    totalSlots: 0,
    hoursDay: 1,
  },
  dates: [],
};

const createAvailability = createSlice({
  name: "createAvailability",
  initialState,
  reducers: {
    setTimeIntervals: (state, action: PayloadAction<TimeIntervals[]>) => {
      state.timeIntervals = action.payload;

      let hoursDay = 0;

      const timeStringToDecimal = (time: string) => {
        const [hours, minutes] = time.split(":").map(Number);
        const decimal = hours + minutes / 60;
        return Math.floor(decimal * 10) / 10;
      };

      state.timeIntervals.forEach((interval) => {
        const start_time_decimal = timeStringToDecimal(interval.start_time);
        const end_time_decimal = timeStringToDecimal(interval.end_time);
        hoursDay +=
          end_time_decimal - start_time_decimal > 0 || hoursDay > 0
            ? parseFloat((end_time_decimal - start_time_decimal).toFixed(1))
            : 0;
      });

      state.dataCards = {
        ...state.dataCards,
        intervals: state.timeIntervals.length,
        totalSlots: state.dates.length * state.timeIntervals.length,
        hoursDay,
      };
    },

    setDataCards: (state, action: PayloadAction<DataCards>) => {
      state.dataCards = action.payload;
    },

    setDates: (state, action: PayloadAction<string[]>) => {
      state.dates = action.payload;
      state.dataCards = {
        ...state.dataCards,
        days: state.dates.length,
        totalSlots: state.dates.length * state.timeIntervals.length,
      };
    },

    reset: () => initialState,
  },
});

export const { setTimeIntervals, setDataCards, setDates, reset } =
  createAvailability.actions;
export default createAvailability.reducer;
