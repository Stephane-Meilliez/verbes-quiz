import { useState, useEffect } from 'react';

const defaultVerbs = [
  { base: 'be', past: 'was/were', pp: 'been', fr: 'être', difficulty: 1 },
  { base: 'become', past: 'became', pp: 'become', fr: 'devenir', difficulty: 1 },
  { base: 'begin', past: 'began', pp: 'begun', fr: 'commencer', difficulty: 1 },
  { base: 'break', past: 'broke', pp: 'broken', fr: 'casser', difficulty: 1 },
  { base: 'bring', past: 'brought', pp: 'brought', fr: 'apporter', difficulty: 1 },
  { base: 'build', past: 'built', pp: 'built', fr: 'construire', difficulty: 1 },
  { base: 'buy', past: 'bought', pp: 'bought', fr: 'acheter', difficulty: 1 },
  { base: 'catch', past: 'caught', pp: 'caught', fr: 'attraper', difficulty: 1 },
  { base: 'choose', past: 'chose', pp: 'chosen', fr: 'choisir', difficulty: 1 },
  { base: 'come', past: 'came', pp: 'come', fr: 'venir', difficulty: 1 },
  { base: 'cost', past: 'cost', pp: 'cost', fr: 'coûter', difficulty: 1 },
  { base: 'cut', past: 'cut', pp: 'cut', fr: 'couper', difficulty: 1 },
  { base: 'do', past: 'did', pp: 'done', fr: 'faire', difficulty: 1 },
  { base: 'draw', past: 'drew', pp: 'drawn', fr: 'dessiner', difficulty: 1 },
  { base: 'drink', past: 'drank', pp: 'drunk', fr: 'boire', difficulty: 1 },
  { base: 'drive', past: 'drove', pp: 'driven', fr: 'conduire', difficulty: 1 },
  { base: 'eat', past: 'ate', pp: 'eaten', fr: 'manger', difficulty: 1 },
  { base: 'fall', past: 'fell', pp: 'fallen', fr: 'tomber', difficulty: 1 },
  { base: 'feel', past: 'felt', pp: 'felt', fr: 'ressentir', difficulty: 1 },
  { base: 'find', past: 'found', pp: 'found', fr: 'trouver', difficulty: 1 },
  { base: 'fly', past: 'flew', pp: 'flown', fr: 'voler', difficulty: 1 },
  { base: 'forget', past: 'forgot', pp: 'forgotten', fr: 'oublier', difficulty: 1 },
  { base: 'get', past: 'got', pp: 'got/gotten', fr: 'obtenir', difficulty: 1 },
  { base: 'give', past: 'gave', pp: 'given', fr: 'donner', difficulty: 1 },
  { base: 'go', past: 'went', pp: 'gone', fr: 'aller', difficulty: 1 },
  { base: 'grow', past: 'grew', pp: 'grown', fr: 'grandir', difficulty: 1 },
  { base: 'have', past: 'had', pp: 'had', fr: 'avoir', difficulty: 1 },
  { base: 'hear', past: 'heard', pp: 'heard', fr: 'entendre', difficulty: 1 },
  { base: 'hide', past: 'hid', pp: 'hidden', fr: 'cacher', difficulty: 1 },
  { base: 'hit', past: 'hit', pp: 'hit', fr: 'frapper', difficulty: 1 },
  { base: 'hold', past: 'held', pp: 'held', fr: 'tenir', difficulty: 1 },
  { base: 'hurt', past: 'hurt', pp: 'hurt', fr: 'blesser', difficulty: 1 },
  { base: 'keep', past: 'kept', pp: 'kept', fr: 'garder', difficulty: 1 },
  { base: 'know', past: 'knew', pp: 'known', fr: 'savoir', difficulty: 1 },
  { base: 'lead', past: 'led', pp: 'led', fr: 'mener', difficulty: 1 },
  { base: 'learn', past: 'learnt/learned', pp: 'learnt/learned', fr: 'apprendre', difficulty: 1 },
  { base: 'leave', past: 'left', pp: 'left', fr: 'partir', difficulty: 1 },
  { base: 'lend', past: 'lent', pp: 'lent', fr: 'prêter', difficulty: 1 },
  { base: 'let', past: 'let', pp: 'let', fr: 'laisser', difficulty: 1 },
  { base: 'lie', past: 'lay', pp: 'lain', fr: 'être allongé', difficulty: 2 },
  { base: 'lose', past: 'lost', pp: 'lost', fr: 'perdre', difficulty: 1 },
  { base: 'make', past: 'made', pp: 'made', fr: 'fabriquer', difficulty: 1 },
  { base: 'mean', past: 'meant', pp: 'meant', fr: 'signifier', difficulty: 1 },
  { base: 'meet', past: 'met', pp: 'met', fr: 'rencontrer', difficulty: 1 },
  { base: 'pay', past: 'paid', pp: 'paid', fr: 'payer', difficulty: 1 },
  { base: 'put', past: 'put', pp: 'put', fr: 'mettre', difficulty: 1 },
  { base: 'read', past: 'read', pp: 'read', fr: 'lire', difficulty: 1 },
  { base: 'ride', past: 'rode', pp: 'ridden', fr: 'monter (vélo)', difficulty: 1 },
  { base: 'ring', past: 'rang', pp: 'rung', fr: 'sonner', difficulty: 1 },
  { base: 'rise', past: 'rose', pp: 'risen', fr: 'se lever', difficulty: 2 },
  { base: 'run', past: 'ran', pp: 'run', fr: 'courir', difficulty: 1 },
  { base: 'say', past: 'said', pp: 'said', fr: 'dire', difficulty: 1 },
  { base: 'see', past: 'saw', pp: 'seen', fr: 'voir', difficulty: 1 },
  { base: 'sell', past: 'sold', pp: 'sold', fr: 'vendre', difficulty: 1 },
  { base: 'send', past: 'sent', pp: 'sent', fr: 'envoyer', difficulty: 1 },
  { base: 'set', past: 'set', pp: 'set', fr: 'fixer', difficulty: 1 },
  { base: 'shake', past: 'shook', pp: 'shaken', fr: 'secouer', difficulty: 2 },
  { base: 'shine', past: 'shone', pp: 'shone', fr: 'briller', difficulty: 1 },
  { base: 'show', past: 'showed', pp: 'shown', fr: 'montrer', difficulty: 1 },
  { base: 'shut', past: 'shut', pp: 'shut', fr: 'fermer', difficulty: 1 },
  { base: 'sing', past: 'sang', pp: 'sung', fr: 'chanter', difficulty: 1 },
  { base: 'sit', past: 'sat', pp: 'sat', fr: 'être assis', difficulty: 1 },
  { base: 'sleep', past: 'slept', pp: 'slept', fr: 'dormir', difficulty: 1 },
  { base: 'speak', past: 'spoke', pp: 'spoken', fr: 'parler', difficulty: 1 },
  { base: 'spend', past: 'spent', pp: 'spent', fr: 'dépenser', difficulty: 1 },
  { base: 'stand', past: 'stood', pp: 'stood', fr: 'être debout', difficulty: 1 },
  { base: 'steal', past: 'stole', pp: 'stolen', fr: 'voler (dérober)', difficulty: 1 },
  { base: 'swim', past: 'swam', pp: 'swum', fr: 'nager', difficulty: 1 },
  { base: 'take', past: 'took', pp: 'taken', fr: 'prendre', difficulty: 1 },
  { base: 'teach', past: 'taught', pp: 'taught', fr: 'enseigner', difficulty: 1 },
  { base: 'tell', past: 'told', pp: 'told', fr: 'raconter', difficulty: 1 },
  { base: 'think', past: 'thought', pp: 'thought', fr: 'penser', difficulty: 1 },
  { base: 'throw', past: 'threw', pp: 'thrown', fr: 'lancer', difficulty: 1 },
  { base: 'understand', past: 'understood', pp: 'understood', fr: 'comprendre', difficulty: 1 },
  { base: 'wake', past: 'woke', pp: 'woken', fr: 'se réveiller', difficulty: 1 },
  { base: 'wear', past: 'wore', pp: 'worn', fr: 'porter (vêtement)', difficulty: 1 },
  { base: 'win', past: 'won', pp: 'won', fr: 'gagner', difficulty: 1 },
  { base: 'write', past: 'wrote', pp: 'written', fr: 'écrire', difficulty: 1 },
];

const encouragements = [
  "Tu gères ! Continue comme ça ! 🌟",
  "Chaque erreur te rapproche de la réussite ! 💪",
  "Tu progresses à vue d'œil ! 🚀",
  "Les verbes irréguliers n'ont qu'à bien se tenir ! 😎",
  "Tu es sur la bonne voie ! ✨",
  "Bravo pour ta persévérance ! 🎯",
  "Tu deviens une pro des verbes ! 👑",
  "Continue, tu vas tout déchirer ! 🔥",
];

export default function IrregularVerbsQuiz() {
  const [verbs, setVerbs] = useState(defaultVerbs);
  const [users, setUsers] = useState({});
  const [currentUser, setCurrentUser] = useState('');
  const [screen, setScreen] = useState('home');
  const [quizMode, setQuizMode] = useState('fr-to-en');
  const [questionCount, setQuestionCount] = useState(10);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [quizVerbs, setQuizVerbs] = useState([]);
  const [answers, setAnswers] = useState({ base: '', past: '', pp: '', fr: '' });
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState({});
  const [sessionScore, setSessionScore] = useState({ correct: 0, total: 0 });
  const [newUserName, setNewUserName] = useState('');
  const [newVerb, setNewVerb] = useState({ base: '', past: '', pp: '', fr: '', difficulty: 1 });
  const [useBandit, setUseBandit] = useState(true);

  // Charger les données sauvegardées au démarrage
  useEffect(() => {
    try {
      const savedUsers = localStorage.getItem('verbQuizUsers');
      const savedVerbs = localStorage.getItem('verbQuizVerbs');
      const savedCurrentUser = localStorage.getItem('verbQuizCurrentUser');
      
      if (savedUsers) setUsers(JSON.parse(savedUsers));
      if (savedVerbs) setVerbs(JSON.parse(savedVerbs));
      if (savedCurrentUser) setCurrentUser(savedCurrentUser);
    } catch (e) {
      console.log('Erreur chargement données:', e);
    }
  }, []);

  // Sauvegarder automatiquement
  useEffect(() => {
    try {
      localStorage.setItem('verbQuizUsers', JSON.stringify(users));
    } catch (e) {}
  }, [users]);

  useEffect(() => {
    try {
      localStorage.setItem('verbQuizVerbs', JSON.stringify(verbs));
    } catch (e) {}
  }, [verbs]);

  useEffect(() => {
    try {
      localStorage.setItem('verbQuizCurrentUser', currentUser);
    } catch (e) {}
  }, [currentUser]);

  const getUserStats = (username) => {
    return users[username]?.verbStats || {};
  };

  const selectVerbsForQuiz = () => {
    const stats = getUserStats(currentUser);
    const totalPulls = Object.values(stats).reduce((sum, s) => sum + s.asked, 0) || 1;
    
    const verbsWithScore = verbs.map(verb => {
      const stat = stats[verb.base] || { asked: 0, correct: 0 };
      
      let score;
      if (useBandit) {
        // UCB Algorithm: prioritize high error rate + exploration
        // Reward = error rate (we WANT errors for learning)
        // Exploration bonus for less-tested verbs
        if (stat.asked === 0) {
          // Never tested = high exploration priority
          score = 10 + Math.random();
        } else {
          const errorRate = 1 - (stat.correct / stat.asked);
          const explorationBonus = Math.sqrt((2 * Math.log(totalPulls)) / stat.asked);
          score = errorRate + explorationBonus;
        }
      } else {
        // Simple weighted random (original algorithm)
        const errorRate = stat.asked > 0 ? 1 - (stat.correct / stat.asked) : 0.5;
        score = 1 + errorRate * 3 + (stat.asked === 0 ? 2 : 0);
      }
      
      return { ...verb, score, stat };
    });

    // Sort by score (UCB mode) or weighted random selection
    if (useBandit) {
      // UCB: select top scoring verbs with slight randomization
      verbsWithScore.sort((a, b) => b.score - a.score);
      const selected = [];
      const pool = verbsWithScore.slice(0, Math.min(questionCount * 2, verbs.length));
      
      for (let i = 0; i < Math.min(questionCount, pool.length); i++) {
        // Add some randomness: 80% take best, 20% random from pool
        if (Math.random() < 0.8 && pool.length > 0) {
          selected.push(pool.shift());
        } else {
          const idx = Math.floor(Math.random() * pool.length);
          selected.push(pool.splice(idx, 1)[0]);
        }
      }
      return selected;
    } else {
      // Original weighted random selection
      const selected = [];
      const available = [...verbsWithScore];
      
      for (let i = 0; i < Math.min(questionCount, verbs.length); i++) {
        const totalWeight = available.reduce((sum, v) => sum + v.score, 0);
        let random = Math.random() * totalWeight;
        
        for (let j = 0; j < available.length; j++) {
          random -= available[j].score;
          if (random <= 0) {
            selected.push(available[j]);
            available.splice(j, 1);
            break;
          }
        }
      }
      return selected;
    }
  };

  const startQuiz = () => {
    const selected = selectVerbsForQuiz();
    setQuizVerbs(selected);
    setCurrentQuestion(0);
    setSessionScore({ correct: 0, total: 0 });
    setAnswers({ base: '', past: '', pp: '', fr: '' });
    setShowResult(false);
    setScreen('quiz');
  };

  const normalizeAnswer = (str) => {
    return str.toLowerCase().trim().replace(/\s+/g, ' ');
  };

  const checkAnswer = (given, expected) => {
    const givenNorm = normalizeAnswer(given);
    const expectedOptions = expected.split('/').map(normalizeAnswer);
    return expectedOptions.some(opt => opt === givenNorm);
  };

  const submitAnswer = () => {
    const verb = quizVerbs[currentQuestion];
    const results = {};
    
    if (quizMode === 'fr-to-en') {
      results.base = checkAnswer(answers.base, verb.base);
      results.past = checkAnswer(answers.past, verb.past);
      results.pp = checkAnswer(answers.pp, verb.pp);
    } else {
      results.fr = checkAnswer(answers.fr, verb.fr);
      results.past = checkAnswer(answers.past, verb.past);
      results.pp = checkAnswer(answers.pp, verb.pp);
    }
    
    const allCorrect = Object.values(results).every(v => v);
    
    setIsCorrect(results);
    setShowResult(true);
    
    // Update stats
    setUsers(prev => {
      const userStats = prev[currentUser]?.verbStats || {};
      const verbStat = userStats[verb.base] || { asked: 0, correct: 0 };
      
      return {
        ...prev,
        [currentUser]: {
          ...prev[currentUser],
          verbStats: {
            ...userStats,
            [verb.base]: {
              asked: verbStat.asked + 1,
              correct: verbStat.correct + (allCorrect ? 1 : 0)
            }
          },
          gamesPlayed: (prev[currentUser]?.gamesPlayed || 0) + (currentQuestion === quizVerbs.length - 1 ? 1 : 0),
          lastPlayed: new Date().toISOString()
        }
      };
    });
    
    setSessionScore(prev => ({
      correct: prev.correct + (allCorrect ? 1 : 0),
      total: prev.total + 1
    }));
  };

  const nextQuestion = () => {
    if (currentQuestion < quizVerbs.length - 1) {
      setCurrentQuestion(prev => prev + 1);
      setAnswers({ base: '', past: '', pp: '', fr: '' });
      setShowResult(false);
    } else {
      setScreen('results');
    }
  };

  const addUser = () => {
    if (newUserName.trim() && !users[newUserName.trim()]) {
      setUsers(prev => ({
        ...prev,
        [newUserName.trim()]: { verbStats: {}, gamesPlayed: 0, lastPlayed: null }
      }));
      setCurrentUser(newUserName.trim());
      setNewUserName('');
    }
  };

  const resetUserStats = () => {
    if (currentUser && window.confirm(`Réinitialiser les scores de ${currentUser} ?`)) {
      setUsers(prev => ({
        ...prev,
        [currentUser]: { verbStats: {}, gamesPlayed: 0, lastPlayed: null }
      }));
    }
  };

  const addVerb = () => {
    if (newVerb.base && newVerb.past && newVerb.pp && newVerb.fr) {
      if (!verbs.find(v => v.base === newVerb.base)) {
        setVerbs(prev => [...prev, { ...newVerb }]);
        setNewVerb({ base: '', past: '', pp: '', fr: '', difficulty: 1 });
      }
    }
  };

  const getWeeklyGames = () => {
    const weekAgo = new Date();
    weekAgo.setDate(weekAgo.getDate() - 7);
    const lastPlayed = users[currentUser]?.lastPlayed;
    if (!lastPlayed) return 0;
    return new Date(lastPlayed) > weekAgo ? users[currentUser]?.gamesPlayed || 0 : 0;
  };

  const getGlobalSuccessRate = () => {
    const stats = getUserStats(currentUser);
    let totalAsked = 0, totalCorrect = 0;
    Object.values(stats).forEach(s => {
      totalAsked += s.asked;
      totalCorrect += s.correct;
    });
    return totalAsked > 0 ? Math.round((totalCorrect / totalAsked) * 100) : 0;
  };

  const getVerbsToWork = () => {
    const stats = getUserStats(currentUser);
    return verbs
      .map(v => {
        const s = stats[v.base] || { asked: 0, correct: 0 };
        const rate = s.asked > 0 ? s.correct / s.asked : 1;
        return { ...v, rate, asked: s.asked };
      })
      .filter(v => v.asked > 0 && v.rate < 0.7)
      .sort((a, b) => a.rate - b.rate)
      .slice(0, 5);
  };

  // Styles
  const styles = {
    container: {
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
      fontFamily: "'Nunito', sans-serif",
      padding: '20px',
    },
    card: {
      background: 'white',
      borderRadius: '24px',
      padding: '30px',
      maxWidth: '600px',
      margin: '0 auto',
      boxShadow: '0 20px 60px rgba(0,0,0,0.2)',
    },
    title: {
      fontSize: '2rem',
      fontWeight: '800',
      background: 'linear-gradient(135deg, #667eea, #f093fb)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      textAlign: 'center',
      marginBottom: '20px',
    },
    button: {
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      border: 'none',
      borderRadius: '16px',
      padding: '14px 28px',
      fontSize: '1rem',
      fontWeight: '700',
      cursor: 'pointer',
      transition: 'transform 0.2s, box-shadow 0.2s',
      boxShadow: '0 4px 15px rgba(102, 126, 234, 0.4)',
    },
    buttonSecondary: {
      background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      color: 'white',
      border: 'none',
      borderRadius: '16px',
      padding: '12px 24px',
      fontSize: '0.9rem',
      fontWeight: '700',
      cursor: 'pointer',
      boxShadow: '0 4px 15px rgba(240, 147, 251, 0.4)',
    },
    buttonSmall: {
      background: '#e0e0e0',
      color: '#333',
      border: 'none',
      borderRadius: '12px',
      padding: '8px 16px',
      fontSize: '0.85rem',
      fontWeight: '600',
      cursor: 'pointer',
    },
    input: {
      width: '100%',
      padding: '14px 18px',
      borderRadius: '14px',
      border: '2px solid #e0e0e0',
      fontSize: '1rem',
      outline: 'none',
      transition: 'border-color 0.2s',
      boxSizing: 'border-box',
    },
    select: {
      width: '100%',
      padding: '14px 18px',
      borderRadius: '14px',
      border: '2px solid #e0e0e0',
      fontSize: '1rem',
      background: 'white',
      cursor: 'pointer',
    },
    label: {
      display: 'block',
      marginBottom: '8px',
      fontWeight: '700',
      color: '#444',
    },
    verbDisplay: {
      fontSize: '2.5rem',
      fontWeight: '800',
      textAlign: 'center',
      color: '#667eea',
      margin: '20px 0',
      textTransform: 'capitalize',
    },
    progressBar: {
      height: '8px',
      background: '#e0e0e0',
      borderRadius: '4px',
      overflow: 'hidden',
      marginBottom: '20px',
    },
    progressFill: {
      height: '100%',
      background: 'linear-gradient(90deg, #667eea, #f093fb)',
      transition: 'width 0.3s',
    },
    resultBox: {
      padding: '12px 18px',
      borderRadius: '12px',
      marginTop: '8px',
      fontWeight: '600',
    },
    correct: {
      background: '#d4edda',
      color: '#155724',
    },
    incorrect: {
      background: '#f8d7da',
      color: '#721c24',
    },
    statCard: {
      background: 'linear-gradient(135deg, #667eea22, #f093fb22)',
      borderRadius: '16px',
      padding: '20px',
      marginBottom: '15px',
    },
    emoji: {
      fontSize: '3rem',
      textAlign: 'center',
      marginBottom: '10px',
    },
    flexRow: {
      display: 'flex',
      gap: '10px',
      flexWrap: 'wrap',
    },
    tag: {
      background: '#f093fb33',
      color: '#764ba2',
      padding: '6px 14px',
      borderRadius: '20px',
      fontSize: '0.85rem',
      fontWeight: '600',
    },
  };

  // SCREENS

  // Home Screen
  if (screen === 'home') {
    return (
      <div style={styles.container}>
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&display=swap" rel="stylesheet" />
        <div style={styles.card}>
          <div style={styles.emoji}>📚✨</div>
          <h1 style={styles.title}>Verbes Irréguliers</h1>
          
          {!currentUser ? (
            <div>
              <p style={{ textAlign: 'center', color: '#666', marginBottom: '20px' }}>
                Choisis ton profil ou crée-en un nouveau !
              </p>
              
              {Object.keys(users).length > 0 && (
                <div style={{ marginBottom: '20px' }}>
                  <label style={styles.label}>Utilisateurs existants</label>
                  <select 
                    style={styles.select}
                    onChange={(e) => setCurrentUser(e.target.value)}
                    defaultValue=""
                  >
                    <option value="" disabled>Sélectionner...</option>
                    {Object.keys(users).map(name => (
                      <option key={name} value={name}>{name}</option>
                    ))}
                  </select>
                </div>
              )}
              
              <div style={{ marginBottom: '20px' }}>
                <label style={styles.label}>Nouveau profil</label>
                <div style={{ display: 'flex', gap: '10px' }}>
                  <input
                    style={{ ...styles.input, flex: 1 }}
                    placeholder="Ton prénom..."
                    value={newUserName}
                    onChange={(e) => setNewUserName(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && addUser()}
                  />
                  <button style={styles.buttonSecondary} onClick={addUser}>
                    Créer
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div>
              <p style={{ textAlign: 'center', fontSize: '1.2rem', marginBottom: '25px' }}>
                Salut <strong style={{ color: '#667eea' }}>{currentUser}</strong> ! 👋
              </p>
              
              <div style={{ marginBottom: '20px' }}>
                <label style={styles.label}>Mode de quiz</label>
                <select 
                  style={styles.select}
                  value={quizMode}
                  onChange={(e) => setQuizMode(e.target.value)}
                >
                  <option value="fr-to-en">🇫🇷 → 🇬🇧 Français vers Anglais</option>
                  <option value="en-to-fr">🇬🇧 → 🇫🇷 Anglais vers Français</option>
                </select>
              </div>
              
              <div style={{ marginBottom: '25px' }}>
                <label style={styles.label}>Nombre de questions : {questionCount}</label>
                <input
                  type="range"
                  min="5"
                  max="30"
                  value={questionCount}
                  onChange={(e) => setQuestionCount(parseInt(e.target.value))}
                  style={{ width: '100%', accentColor: '#667eea' }}
                />
              </div>
              
              <div 
                style={{ 
                  marginBottom: '25px', 
                  padding: '15px', 
                  borderRadius: '16px',
                  background: useBandit ? 'linear-gradient(135deg, #667eea22, #764ba222)' : '#f5f5f5',
                  cursor: 'pointer',
                  transition: 'all 0.3s'
                }}
                onClick={() => setUseBandit(!useBandit)}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ fontWeight: '700', color: '#444', marginBottom: '4px' }}>
                      🎰 Mode Smart (UCB)
                    </div>
                    <div style={{ fontSize: '0.8rem', color: '#888' }}>
                      Cible les verbes où tu fais le plus d'erreurs
                    </div>
                  </div>
                  <div style={{
                    width: '50px',
                    height: '28px',
                    borderRadius: '14px',
                    background: useBandit ? 'linear-gradient(135deg, #667eea, #764ba2)' : '#ccc',
                    position: 'relative',
                    transition: 'all 0.3s'
                  }}>
                    <div style={{
                      width: '22px',
                      height: '22px',
                      borderRadius: '50%',
                      background: 'white',
                      position: 'absolute',
                      top: '3px',
                      left: useBandit ? '25px' : '3px',
                      transition: 'all 0.3s',
                      boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
                    }} />
                  </div>
                </div>
              </div>
              
              <button 
                style={{ ...styles.button, width: '100%', marginBottom: '15px' }}
                onClick={startQuiz}
              >
                🎮 Commencer le Quiz !
              </button>
              
              <div style={styles.flexRow}>
                <button style={styles.buttonSmall} onClick={() => setScreen('stats')}>
                  📊 Mes stats
                </button>
                <button style={styles.buttonSmall} onClick={() => setScreen('verbList')}>
                  📖 Liste verbes
                </button>
                <button style={styles.buttonSmall} onClick={() => setScreen('addVerb')}>
                  ➕ Ajouter
                </button>
                <button style={styles.buttonSmall} onClick={() => setCurrentUser('')}>
                  👤 Changer
                </button>
                <button style={styles.buttonSmall} onClick={resetUserStats}>
                  🔄 Reset
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  // Quiz Screen
  if (screen === 'quiz' && quizVerbs.length > 0) {
    const verb = quizVerbs[currentQuestion];
    
    return (
      <div style={styles.container}>
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&display=swap" rel="stylesheet" />
        <div style={styles.card}>
          <div style={styles.progressBar}>
            <div style={{ ...styles.progressFill, width: `${((currentQuestion + 1) / quizVerbs.length) * 100}%` }} />
          </div>
          
          <p style={{ textAlign: 'center', color: '#888', marginBottom: '10px' }}>
            Question {currentQuestion + 1} / {quizVerbs.length}
          </p>
          
          <div style={styles.verbDisplay}>
            {quizMode === 'fr-to-en' ? verb.fr : verb.base}
          </div>
          
          <div style={{ marginBottom: '20px' }}>
            {quizMode === 'fr-to-en' ? (
              <>
                <div style={{ marginBottom: '15px' }}>
                  <label style={styles.label}>Base verbale (infinitif)</label>
                  <input
                    style={{ ...styles.input, borderColor: showResult ? (isCorrect.base ? '#28a745' : '#dc3545') : '#e0e0e0' }}
                    value={answers.base}
                    onChange={(e) => setAnswers(prev => ({ ...prev, base: e.target.value }))}
                    disabled={showResult}
                    placeholder="ex: go"
                  />
                  {showResult && !isCorrect.base && (
                    <div style={{ ...styles.resultBox, ...styles.incorrect }}>
                      ✗ Réponse : {verb.base}
                    </div>
                  )}
                </div>
              </>
            ) : (
              <div style={{ marginBottom: '15px' }}>
                <label style={styles.label}>Traduction française</label>
                <input
                  style={{ ...styles.input, borderColor: showResult ? (isCorrect.fr ? '#28a745' : '#dc3545') : '#e0e0e0' }}
                  value={answers.fr}
                  onChange={(e) => setAnswers(prev => ({ ...prev, fr: e.target.value }))}
                  disabled={showResult}
                  placeholder="ex: aller"
                />
                {showResult && !isCorrect.fr && (
                  <div style={{ ...styles.resultBox, ...styles.incorrect }}>
                    ✗ Réponse : {verb.fr}
                  </div>
                )}
              </div>
            )}
            
            <div style={{ marginBottom: '15px' }}>
              <label style={styles.label}>Prétérit (past simple)</label>
              <input
                style={{ ...styles.input, borderColor: showResult ? (isCorrect.past ? '#28a745' : '#dc3545') : '#e0e0e0' }}
                value={answers.past}
                onChange={(e) => setAnswers(prev => ({ ...prev, past: e.target.value }))}
                disabled={showResult}
                placeholder="ex: went"
              />
              {showResult && !isCorrect.past && (
                <div style={{ ...styles.resultBox, ...styles.incorrect }}>
                  ✗ Réponse : {verb.past}
                </div>
              )}
            </div>
            
            <div style={{ marginBottom: '15px' }}>
              <label style={styles.label}>Participe passé</label>
              <input
                style={{ ...styles.input, borderColor: showResult ? (isCorrect.pp ? '#28a745' : '#dc3545') : '#e0e0e0' }}
                value={answers.pp}
                onChange={(e) => setAnswers(prev => ({ ...prev, pp: e.target.value }))}
                disabled={showResult}
                placeholder="ex: gone"
              />
              {showResult && !isCorrect.pp && (
                <div style={{ ...styles.resultBox, ...styles.incorrect }}>
                  ✗ Réponse : {verb.pp}
                </div>
              )}
            </div>
          </div>
          
          {showResult && Object.values(isCorrect).every(v => v) && (
            <div style={{ ...styles.resultBox, ...styles.correct, textAlign: 'center', fontSize: '1.2rem' }}>
              ✓ Parfait ! 🎉
            </div>
          )}
          
          <div style={{ marginTop: '20px' }}>
            {!showResult ? (
              <button style={{ ...styles.button, width: '100%' }} onClick={submitAnswer}>
                Valider ✓
              </button>
            ) : (
              <button style={{ ...styles.button, width: '100%' }} onClick={nextQuestion}>
                {currentQuestion < quizVerbs.length - 1 ? 'Suivant →' : 'Voir résultats 🏆'}
              </button>
            )}
          </div>
          
          <button 
            style={{ ...styles.buttonSmall, marginTop: '15px' }}
            onClick={() => setScreen('home')}
          >
            ← Quitter
          </button>
        </div>
      </div>
    );
  }

  // Results Screen
  if (screen === 'results') {
    const percentage = Math.round((sessionScore.correct / sessionScore.total) * 100);
    const emoji = percentage >= 80 ? '🏆' : percentage >= 60 ? '👍' : percentage >= 40 ? '💪' : '📚';
    
    return (
      <div style={styles.container}>
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&display=swap" rel="stylesheet" />
        <div style={styles.card}>
          <div style={styles.emoji}>{emoji}</div>
          <h1 style={styles.title}>Résultats</h1>
          
          <div style={{ textAlign: 'center', marginBottom: '30px' }}>
            <div style={{ fontSize: '3rem', fontWeight: '800', color: percentage >= 60 ? '#28a745' : '#f5576c' }}>
              {percentage}%
            </div>
            <p style={{ color: '#666' }}>
              {sessionScore.correct} / {sessionScore.total} bonnes réponses
            </p>
          </div>
          
          <div style={{ ...styles.statCard, textAlign: 'center' }}>
            <p style={{ fontSize: '1.1rem', color: '#444' }}>
              {encouragements[Math.floor(Math.random() * encouragements.length)]}
            </p>
          </div>
          
          <button 
            style={{ ...styles.button, width: '100%', marginBottom: '10px' }}
            onClick={startQuiz}
          >
            🔄 Rejouer
          </button>
          
          <button 
            style={{ ...styles.buttonSmall, width: '100%' }}
            onClick={() => setScreen('home')}
          >
            ← Retour
          </button>
        </div>
      </div>
    );
  }

  // Stats Screen
  if (screen === 'stats') {
    const verbsToWork = getVerbsToWork();
    
    return (
      <div style={styles.container}>
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&display=swap" rel="stylesheet" />
        <div style={styles.card}>
          <h1 style={styles.title}>📊 Statistiques</h1>
          <p style={{ textAlign: 'center', marginBottom: '20px', color: '#666' }}>
            Profil : <strong>{currentUser}</strong>
          </p>
          
          <div style={styles.statCard}>
            <div style={{ display: 'flex', justifyContent: 'space-around', textAlign: 'center' }}>
              <div>
                <div style={{ fontSize: '2rem', fontWeight: '800', color: '#667eea' }}>
                  {getGlobalSuccessRate()}%
                </div>
                <div style={{ fontSize: '0.85rem', color: '#888' }}>Taux de réussite</div>
              </div>
              <div>
                <div style={{ fontSize: '2rem', fontWeight: '800', color: '#764ba2' }}>
                  {users[currentUser]?.gamesPlayed || 0}
                </div>
                <div style={{ fontSize: '0.85rem', color: '#888' }}>Parties jouées</div>
              </div>
              <div>
                <div style={{ fontSize: '2rem', fontWeight: '800', color: '#f093fb' }}>
                  {getWeeklyGames()}
                </div>
                <div style={{ fontSize: '0.85rem', color: '#888' }}>Cette semaine</div>
              </div>
            </div>
          </div>
          
          {verbsToWork.length > 0 && (
            <div style={styles.statCard}>
              <h3 style={{ marginBottom: '15px', color: '#444' }}>🎯 Verbes à travailler</h3>
              <div style={styles.flexRow}>
                {verbsToWork.map(v => (
                  <span key={v.base} style={styles.tag}>
                    {v.base} ({Math.round(v.rate * 100)}%)
                  </span>
                ))}
              </div>
            </div>
          )}
          
          <div style={{ ...styles.statCard, textAlign: 'center' }}>
            <p style={{ fontSize: '1.1rem', color: '#444' }}>
              {encouragements[Math.floor(Math.random() * encouragements.length)]}
            </p>
          </div>
          
          <button 
            style={{ ...styles.buttonSmall, width: '100%' }}
            onClick={() => setScreen('home')}
          >
            ← Retour
          </button>
        </div>
      </div>
    );
  }

  // Add Verb Screen
  if (screen === 'addVerb') {
    return (
      <div style={styles.container}>
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&display=swap" rel="stylesheet" />
        <div style={styles.card}>
          <h1 style={styles.title}>➕ Ajouter un verbe</h1>
          
          <div style={{ marginBottom: '15px' }}>
            <label style={styles.label}>Base verbale (infinitif)</label>
            <input
              style={styles.input}
              value={newVerb.base}
              onChange={(e) => setNewVerb(prev => ({ ...prev, base: e.target.value }))}
              placeholder="ex: swim"
            />
          </div>
          
          <div style={{ marginBottom: '15px' }}>
            <label style={styles.label}>Prétérit</label>
            <input
              style={styles.input}
              value={newVerb.past}
              onChange={(e) => setNewVerb(prev => ({ ...prev, past: e.target.value }))}
              placeholder="ex: swam"
            />
          </div>
          
          <div style={{ marginBottom: '15px' }}>
            <label style={styles.label}>Participe passé</label>
            <input
              style={styles.input}
              value={newVerb.pp}
              onChange={(e) => setNewVerb(prev => ({ ...prev, pp: e.target.value }))}
              placeholder="ex: swum"
            />
          </div>
          
          <div style={{ marginBottom: '15px' }}>
            <label style={styles.label}>Traduction française</label>
            <input
              style={styles.input}
              value={newVerb.fr}
              onChange={(e) => setNewVerb(prev => ({ ...prev, fr: e.target.value }))}
              placeholder="ex: nager"
            />
          </div>
          
          <div style={{ marginBottom: '20px' }}>
            <label style={styles.label}>Difficulté : {newVerb.difficulty}</label>
            <input
              type="range"
              min="1"
              max="3"
              value={newVerb.difficulty}
              onChange={(e) => setNewVerb(prev => ({ ...prev, difficulty: parseInt(e.target.value) }))}
              style={{ width: '100%', accentColor: '#667eea' }}
            />
          </div>
          
          <button 
            style={{ ...styles.button, width: '100%', marginBottom: '10px' }}
            onClick={addVerb}
          >
            Ajouter ✓
          </button>
          
          <button 
            style={{ ...styles.buttonSmall, width: '100%' }}
            onClick={() => setScreen('home')}
          >
            ← Retour
          </button>
          
          <div style={{ marginTop: '20px', fontSize: '0.85rem', color: '#888' }}>
            <strong>{verbs.length}</strong> verbes dans la base
          </div>
        </div>
      </div>
    );
  }

  // Verb List Screen
  if (screen === 'verbList') {
    const stats = getUserStats(currentUser);
    
    return (
      <div style={styles.container}>
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&display=swap" rel="stylesheet" />
        <div style={styles.card}>
          <h1 style={styles.title}>📖 Liste des verbes</h1>
          <p style={{ textAlign: 'center', marginBottom: '20px', color: '#666' }}>
            {verbs.length} verbes au total
          </p>
          
          <div style={{ maxHeight: '400px', overflowY: 'auto', marginBottom: '20px' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
              <thead>
                <tr style={{ background: 'linear-gradient(135deg, #667eea22, #f093fb22)', position: 'sticky', top: 0 }}>
                  <th style={{ padding: '10px', textAlign: 'left', fontWeight: '700' }}>Base</th>
                  <th style={{ padding: '10px', textAlign: 'left', fontWeight: '700' }}>Prétérit</th>
                  <th style={{ padding: '10px', textAlign: 'left', fontWeight: '700' }}>P. Passé</th>
                  <th style={{ padding: '10px', textAlign: 'left', fontWeight: '700' }}>Français</th>
                  <th style={{ padding: '10px', textAlign: 'center', fontWeight: '700' }}>Score</th>
                </tr>
              </thead>
              <tbody>
                {verbs.map((verb, idx) => {
                  const stat = stats[verb.base] || { asked: 0, correct: 0 };
                  const rate = stat.asked > 0 ? Math.round((stat.correct / stat.asked) * 100) : null;
                  const rowBg = idx % 2 === 0 ? '#fafafa' : 'white';
                  
                  return (
                    <tr key={verb.base} style={{ background: rowBg }}>
                      <td style={{ padding: '8px 10px', fontWeight: '600', color: '#667eea' }}>{verb.base}</td>
                      <td style={{ padding: '8px 10px' }}>{verb.past}</td>
                      <td style={{ padding: '8px 10px' }}>{verb.pp}</td>
                      <td style={{ padding: '8px 10px', color: '#666' }}>{verb.fr}</td>
                      <td style={{ padding: '8px 10px', textAlign: 'center' }}>
                        {rate !== null ? (
                          <span style={{
                            background: rate >= 70 ? '#d4edda' : rate >= 40 ? '#fff3cd' : '#f8d7da',
                            color: rate >= 70 ? '#155724' : rate >= 40 ? '#856404' : '#721c24',
                            padding: '2px 8px',
                            borderRadius: '10px',
                            fontSize: '0.8rem',
                            fontWeight: '600'
                          }}>
                            {rate}%
                          </span>
                        ) : (
                          <span style={{ color: '#ccc', fontSize: '0.8rem' }}>—</span>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          
          <button 
            style={{ ...styles.buttonSmall, width: '100%' }}
            onClick={() => setScreen('home')}
          >
            ← Retour
          </button>
        </div>
      </div>
    );
  }

  return null;
}
