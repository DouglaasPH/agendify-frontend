import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// examnple: October 16, 2025
export function formatDate(dateToTransform: Date | string) {
  const date = new Date(dateToTransform);

  const weekday = date.toLocaleDateString("en-US", { weekday: "long" });

  const dateFormatted = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return {
    weekday,
    dateFormatted,
  };
}

// Thu, Oct 16
export function formatDateShort(date: Date) {
  const newDate = new Date(date);
  const formatted = newDate.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });
  return formatted;
}

export function formatHours(hourToTransform: Date | string) {
  const date = new Date(hourToTransform);

  const time = date.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  return time;
}

// Função para medir semelhança entre duas strings (0 a 1)
export function similarity(a: string, b: string): number {
  a = a.toLowerCase();
  b = b.toLowerCase();
  const longer = a.length > b.length ? a : b;
  const shorter = a.length > b.length ? b : a;
  const longerLength = longer.length;
  if (longerLength === 0) return 1.0;
  return (longerLength - editDistance(longer, shorter)) / longerLength;
}

// Distância de Levenshtein (número de mudanças entre as strings)
export function editDistance(a: string, b: string): number {
  const matrix = Array.from({ length: b.length + 1 }, (_, i) => [i]);
  for (let j = 0; j <= a.length; j++) matrix[0][j] = j;

  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      matrix[i][j] =
        b[i - 1] === a[j - 1]
          ? matrix[i - 1][j - 1]
          : Math.min(
              matrix[i - 1][j - 1] + 1, // substituição
              matrix[i][j - 1] + 1, // inserção
              matrix[i - 1][j] + 1 // deleção
            );
    }
  }

  return matrix[b.length][a.length];
}

export function handleValidateEmail(email: string) {
  const regex = /^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,}$/;
  let state = false;

  if (regex.test(email)) {
    state = true;
  }

  return state;
}

export function goToErrorPage(error: any) {
  if (!error.response) {
    window.location.href = `/error/${503}`;
  } else {
    window.location.href = `/error/${error.response.status}`;
  }
}
