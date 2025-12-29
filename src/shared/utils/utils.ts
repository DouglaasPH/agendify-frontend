import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// examnple: October 16, 2025
export function format_date(date_to_transform: Date | string) {
  const date = new Date(date_to_transform);

  const week_day = date.toLocaleDateString("en-US", { weekday: "long" });

  const date_formatted = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return {
    week_day,
    date_formatted,
  };
}

// Thu, Oct 16
export function format_date_short(date: Date) {
  const new_date = new Date(date);
  const formatted = new_date.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });
  return formatted;
}

export function format_hours(hour_to_transform: Date | string) {
  const date = new Date(hour_to_transform);

  const time = date.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  return time;
}

// Function to measure similarity between two strings (0 to 1)
export function similarity(a: string, b: string): number {
  a = a.toLowerCase();
  b = b.toLowerCase();
  const longer = a.length > b.length ? a : b;
  const shorter = a.length > b.length ? b : a;
  const longerLength = longer.length;
  if (longerLength === 0) return 1.0;
  return (longerLength - edit_distance(longer, shorter)) / longerLength;
}

// Levenshtein distance (number of changes between strings)
export function edit_distance(a: string, b: string): number {
  const matrix = Array.from({ length: b.length + 1 }, (_, i) => [i]);
  for (let j = 0; j <= a.length; j++) matrix[0][j] = j;

  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      matrix[i][j] =
        b[i - 1] === a[j - 1]
          ? matrix[i - 1][j - 1]
          : Math.min(
              matrix[i - 1][j - 1] + 1, // replacement
              matrix[i][j - 1] + 1, // insertion
              matrix[i - 1][j] + 1 // deletion
            );
    }
  }

  return matrix[b.length][a.length];
}

export function handle_validate_email(email: string) {
  const regex = /^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,}$/;
  let state = false;

  if (regex.test(email)) {
    state = true;
  }

  return state;
}

export function go_to_error_page(error: any) {
  if (!error.response) {
    window.location.href = `/error/${503}`;
  } else {
    window.location.href = `/error/${error.response.status}`;
  }
}
