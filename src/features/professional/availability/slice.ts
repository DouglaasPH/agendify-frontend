// redux
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

// types
import type { DataCards, TimeIntervals, TimeIntervalsState } from "./types";

const initialState: TimeIntervalsState = {
  time_intervals: [
    {
      start_time: "13:00",
      end_time: "14:00",
    },
  ],
  data_cards: {
    intervals: 1,
    days: 0,
    total_slots: 0,
    hours_day: 1,
  },
  dates: [],
};

const create_availability = createSlice({
  name: "create_availability",
  initialState,
  reducers: {
    set_time_intervals: (state, action: PayloadAction<TimeIntervals[]>) => {
      state.time_intervals = action.payload;

      let hours_day = 0;

      const timeStringToDecimal = (time: string) => {
        const [hours, minutes] = time.split(":").map(Number);
        const decimal = hours + minutes / 60;
        return Math.floor(decimal * 10) / 10;
      };

      state.time_intervals.forEach((interval) => {
        const start_time_decimal = timeStringToDecimal(interval.start_time);
        const end_time_decimal = timeStringToDecimal(interval.end_time);
        hours_day +=
          end_time_decimal - start_time_decimal > 0 || hours_day > 0
            ? parseFloat((end_time_decimal - start_time_decimal).toFixed(1))
            : 0;
      });

      state.data_cards = {
        ...state.data_cards,
        intervals: state.time_intervals.length,
        total_slots: state.dates.length * state.time_intervals.length,
        hours_day,
      };
    },

    set_data_cards: (state, action: PayloadAction<DataCards>) => {
      state.data_cards = action.payload;
    },

    set_dates: (state, action: PayloadAction<string[]>) => {
      state.dates = action.payload;
      state.data_cards = {
        ...state.data_cards,
        days: state.dates.length,
        total_slots: state.dates.length * state.time_intervals.length,
      };
    },
    reset: () => initialState,
  },
});

export const { set_time_intervals, set_data_cards, set_dates, reset } =
  create_availability.actions;
export default create_availability.reducer;
