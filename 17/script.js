function maxMeetings(start, end) {
    const meetings = [];
    const n = start.length;
  
    for (let i = 0; i < n; i++) {
      meetings.push({ start: start[i], end: end[i], index: i });
    }
  
    meetings.sort((a, b) => a.end - b.end);
  
    const selectedMeetings = [];
  
    selectedMeetings.push(meetings[0].index);
  
    let prevEnd = meetings[0].end;
  
    for (let i = 1; i < n; i++) {
      if (meetings[i].start > prevEnd) {
        selectedMeetings.push(meetings[i].index);
        prevEnd = meetings[i].end;
      }
    }
  
    return selectedMeetings.length;
  }
  
  const start = [1, 3, 0, 5, 8, 5];
  const end = [2, 4, 6, 7, 9, 9];
  const maxMeetingsCount = maxMeetings(start, end);
  console.log("Maximum number of meetings that can be accommodated:", maxMeetingsCount);
  