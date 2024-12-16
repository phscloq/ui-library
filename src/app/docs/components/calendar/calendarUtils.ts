import { format, getDaysInMonth } from "date-fns";

export function generateCalendarGrid(year:number, month:number):{ day: number; currentMonth: boolean; date: string; isSunday: boolean; }[] {
    const daysInCurrentMonth = getDaysInMonth(new Date(year, month));
    const firstDayOfMonth = getFirstDayOfMonth(year, month);

    // Days in the previous month
    const previousMonthDate = month === 0 
        ? new Date(year - 1, 11) // December of the previous year
        : new Date(year, month - 1);
    const daysInPreviousMonth = getDaysInMonth(previousMonthDate);
    const leadingDaysNumber = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1;
    const leadingStart = daysInPreviousMonth - leadingDaysNumber + 1;
    const leadingDays = Array.from({ length: leadingDaysNumber }, 
        (_, i) => {
            const day = leadingStart + i;
            const date = format(
                new Date(previousMonthDate.getFullYear(), previousMonthDate.getMonth(), day),
                "yyyy-MM-dd"
            );
            return { day, 
                currentMonth: false, 
                date,
                isSunday: new Date(date).getDay() === 0 };
        });

    // Days in the current month
    const currentMonthDays = Array.from({ length: daysInCurrentMonth }, (_, i) => {
        const day = i + 1
        const date = format(new Date(year, month, day), "yyyy-MM-dd");
        return { day, 
            currentMonth: true, 
            date,
            isSunday: new Date(date).getDay() === 0
         };
    });
    
    // Days in the next month
  
    const totalDays = leadingDaysNumber + daysInCurrentMonth;
    const trailingDaysNumber = totalDays % 7 === 0 ? 0 : 7 - (totalDays % 7);
    const trailingDays = Array.from({ length: trailingDaysNumber }, (_, i) => {
        const day = i + 1;
        const nextMonthDate = month === 11
            ? new Date(year + 1, 0) // January of the next year
            : new Date(year, month + 1);
        const date = format(
            new Date(nextMonthDate.getFullYear(), nextMonthDate.getMonth(), day), 
            "yyyy-MM-dd"
        );
        return { day, 
            currentMonth: false, 
            date,
            isSunday: new Date(date).getDay() === 0 };
    });


    
    // Combine into a single array
    return [
      ...leadingDays,
      ...currentMonthDays,
      ...trailingDays,
    ];
  }
  

  function getFirstDayOfMonth(year:number, month:number) {
    return new Date(year, month, 1).getDay();
  }
  