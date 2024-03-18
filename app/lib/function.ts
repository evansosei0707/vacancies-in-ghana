export function timeAgo(postedDate: string):string {
    // Convert the posted date string to a Date object
    const posted: Date = new Date(postedDate);

    // Get the current date
    const now: Date = new Date();
  
    // Calculate the time difference in milliseconds
    const timeDiff: number = Number(now) - Number(posted);
  
    // Calculate the time difference in seconds, minutes, hours, and days
    const seconds = Math.floor(timeDiff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);
    const years = Math.floor(days / 365);
  
    // Format the result based on the time difference
    if (years > 0) {
      return `${years} ${years === 1 ? 'year' : 'years'} ago`;
    } else if (months > 0) {
      return `${months} ${months === 1 ? 'month' : 'months'} ago`;
    } else if (days > 0) {
      return `${days} ${days === 1 ? 'day' : 'days'} ago`;
    } else if (hours > 0) {
      return `${hours} ${hours === 1 ? 'hour' : 'hours'} ago`;
    } else if (minutes > 0) {
      return `${minutes} ${minutes === 1 ? 'minute' : 'minutes'} ago`;
    } else {
      return `${seconds} ${seconds === 1 ? 'second' : 'seconds'} ago`;
    }
  }

  export  function formatDateTime(dateTimeString: string) {
    const options = { year: 'numeric', month: 'short', day: 'numeric' } as const;
    const formattedDate = new Date(dateTimeString).toLocaleDateString('en-US', options);
    return formattedDate;
  }

  // import CountUp, { useCountUp } from 'react-countup'


  // <CountUp
  //   end={1000}
  //   suffix="+"
  //   start={0}
  //   enbaleScrollSpy
  // />