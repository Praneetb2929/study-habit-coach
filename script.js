let quotes = [];

fetch('data/quotes.json')
  .then(response => response.json())
  .then(data => {
    quotes = data;
  })
  .catch(error => {
    console.error("Failed to load quotes.json:", error);
  });

const moodSelect = document.getElementById('mood');
const hoursInput = document.getElementById('hours');
const suggestBtn = document.getElementById('suggestBtn');
const suggestionDiv = document.getElementById('suggestion');
const quoteDiv = document.getElementById('quote');
const historyBtn = document.getElementById('historyBtn');
const historyList = document.getElementById('historyList');

function getRandomQuote() {
  if (quotes.length === 0) return "Keep going!";
  const index = Math.floor(Math.random() * quotes.length);
  return quotes[index];
}

function getSuggestion(mood, hours) {
  if (!mood) return "Please select your mood.";
  if (hours === '' || hours < 0) return "Please enter a valid number of hours studied.";

  hours = Number(hours);

  if (hours >= 5) return "Great job! Keep maintaining this consistency.";
  
  switch (mood) {
    case 'tired':
      return "Take short breaks and try light stretching to refresh.";
    case 'motivated':
      return "Use this energy to tackle your toughest subjects!";
    case 'distracted':
      return "Minimize distractions by setting a timer for focused study.";
    case 'stressed':
      return "Try deep breathing or a quick walk to reduce stress.";
    case 'focused':
      return "Keep up the excellent focus! Consider reviewing challenging topics.";
    default:
      return "Keep pushing forward!";
  }
}

function saveStudyLog(mood, hours) {
  const logs = JSON.parse(localStorage.getItem('studyLogs') || "[]");
  logs.push({ mood, hours, date: new Date().toLocaleString() });
  localStorage.setItem('studyLogs', JSON.stringify(logs));
}

function showStudyHistory() {
  const logs = JSON.parse(localStorage.getItem('studyLogs') || "[]");
  if (logs.length === 0) {
    historyList.innerHTML = '<li>No study history found.</li>';
  } else {
    historyList.innerHTML = '';
    logs.forEach(log => {
      const li = document.createElement('li');
      li.textContent = `${log.date} — Mood: ${log.mood}, Hours: ${log.hours}`;
      historyList.appendChild(li);
    });
  }
  historyList.style.display = historyList.style.display === 'none' ? 'block' : 'none';
}

suggestBtn.addEventListener('click', () => {
  const mood = moodSelect.value;
  const hours = hoursInput.value.trim();

  const suggestionText = getSuggestion(mood, hours);
  suggestionDiv.textContent = suggestionText;

  if (!mood || hours === '' || hours < 0) {
    quoteDiv.textContent = '';
    return;
  }

  const quote = getRandomQuote();
  quoteDiv.textContent = `"${quote}"`;

  saveStudyLog(mood, hours);
});

historyBtn.addEventListener('click', () => {
  showStudyHistory();
});
